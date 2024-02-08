import { configureStore } from "@reduxjs/toolkit";
import indianNewsReducer from "../Pages/India/IndiaSlice";
import scienceNewsReducer from "../Pages/Science/ScienceSlice";
import sportsNewsReducer from "../Pages/Sports/SportsSlice";
import techNewsReducer from "../Pages/Technology/TechnologySlice";
import businessNewsReducer from "../Pages/Business/BusinessSlice";
import entertainmentNewsReducer from "../Pages/Entertainment/EntertainmentSlice";
import healthNewsReducer from "../Pages/Health/HealthSlice";
import usaNewsReducer from "../Pages/USA/USASlice";
import searchNewsReducer from "../Pages/Search/SearchSlice";

export const store = configureStore({
  reducer: {
    indianNews: indianNewsReducer,
    scienceNews: scienceNewsReducer,
    sportsNews: sportsNewsReducer,
    technologyNews: techNewsReducer,
    businessNews: businessNewsReducer,
    entertainmentNews: entertainmentNewsReducer,
    healthNews: healthNewsReducer,
    usaNews: usaNewsReducer,
    searchNews: searchNewsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
