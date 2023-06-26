import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products.slice';
import cartReducer from '../features/cart/cart.slice';

const reducer = {
    productsReducer,
    cartReducer
};

export const store = configureStore({
    reducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Store = typeof store;
