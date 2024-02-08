// @ts-nocheck

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchIndianNews = createAsyncThunk(
  "indianNews/fetchIndianNews",
  async (apiKey: String, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=100`
      );
      const data = await response.json();
      return data; // Assuming the API returns articles in the data.articles property
    } catch (error: any) {
      console.error("Error fetching news:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const indianNewsSlice = createSlice({
  name: "indianNews",
  initialState: {
    news: {},
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIndianNews.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchIndianNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchIndianNews.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default indianNewsSlice.reducer;
