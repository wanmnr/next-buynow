// app/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import { api } from './services/api';
import { errorHandler } from './middleware/errorHandler';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(errorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
