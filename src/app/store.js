import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import counterReducer from "./../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export default store;
