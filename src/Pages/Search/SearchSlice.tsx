// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchSearchNews = createAsyncThunk(
  "search/fetchSearch",
  async (search: String, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=7363efcded9848a9868c1228f623bbca`
      );
      const data = await response.json();
      return data; // Assuming the API returns articles in the data.articles property
    } catch (error: any) {
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
