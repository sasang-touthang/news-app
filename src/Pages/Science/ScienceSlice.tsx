import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchScienceNews = createAsyncThunk(
  "science/fetchScience",
  async (apiKey, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=Science&apiKey=${apiKey}`
      );
      const data = await response.json();
      return data; // Assuming the API returns articles in the data.articles property
    } catch (error) {
      console.error("Error fetching news:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const scienceNewsSlice = createSlice({
  name: "scienceNews",
  initialState: {
    news: {},
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScienceNews.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchScienceNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchScienceNews.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function

export default scienceNewsSlice.reducer;
