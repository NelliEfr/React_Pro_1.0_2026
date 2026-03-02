import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from 'entities/user/api/usersApi';
import { deleteUserReducer } from 'features/deleteUser';

export const store = configureStore({
 reducer: {
   [usersApi.reducerPath]: usersApi.reducer,
   deleteUser: deleteUserReducer
 },
 middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;