import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/products.slice';

const reducer = {
    productsReducer,
};

export const store = configureStore({
    reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Store = typeof store;
