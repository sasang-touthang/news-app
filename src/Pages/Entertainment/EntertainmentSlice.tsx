import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchEntertainmentNews = createAsyncThunk(
  "entertainment/fetchEntertainment",
  async (apiKey, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`
      );
      const data = await response.json();
      return data; // Assuming the API returns articles in the data.articles property
    } catch (error) {
      console.error("Error fetching news:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const entertainmentNewsSlice = createSlice({
  name: "entertainmentNews",
  initialState: {
    news: {},
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEntertainmentNews.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchEntertainmentNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchEntertainmentNews.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default entertainmentNewsSlice.reducer;
