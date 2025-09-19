import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import repoSlice from "./repoSLice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    repo: repoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
