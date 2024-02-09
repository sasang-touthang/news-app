// @ts-nocheck

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchSearchNews = createAsyncThunk(
  "search/fetchSearch",
  async (search: String, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const apikey = "3ea75eec3ccba98cebfd542f4a88b5db";
    const url =
      "https://gnews.io/api/v4/search?q=" +
      search +
      "&lang=en&country=us&max=10&apikey=" +
      apikey;

    try {
      const response = await fetch(url);
      const result = await response.json();
      return result; // Assuming the API returns articles in the data.articles property
    } catch (error) {
      console.error("Error fetching news:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const searchNewsSlice = createSlice({
  name: "searchNews",
  initialState: {
    news: {},
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchNews.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchSearchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default searchNewsSlice.reducer;
