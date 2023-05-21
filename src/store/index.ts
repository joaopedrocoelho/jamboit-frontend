import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/userApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userQuiz } from "./api/userQuiz";
import { activeGameReducer } from "./slices/game";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [userQuiz.reducerPath]: userQuiz.reducer,
    activeGame: activeGameReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      userQuiz.middleware
    );
  },
});

setupListeners(store.dispatch);
export { useAuthenticateQuery, useLoginQuery } from "./api/userApi";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { userApi };
