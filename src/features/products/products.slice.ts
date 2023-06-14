import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchData, Product, ProductsState } from '../../types/product.type';

const url = 'https://dummyjson.com/products';

const initialState: ProductsState = {
    products: [] as Product[],
    error: null,
    isLoading: false
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_arg, thunkAPI) => {
        try {
            const response = await fetch(url, {
                method: 'GET'
            });

            const data = response.json();

            return data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {
    //     increment: (state) => {
    //         state.products += 1;
    //     },
    //     decrement: (state) => {
    //         state.products -= 1;
    //     },
    //     incrementByAmount: (state, action: PayloadAction<number>) => {
    //         state.products += action.payload;
    //     },
    // },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });

        builder.addCase(
            fetchProducts.fulfilled,
            (state, { payload: data }: PayloadAction<FetchData>) => {
                state.isLoading = false;
                state.products = data.products;
            }
        );

        builder.addCase(fetchProducts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
    }
});

export const getAllProducts = (state: any) => state.productsReducer.products;

export const isLoadingProducts = (state: any) =>
    state.productsReducer.isLoading;

export const getProductsError = (state: any) => state.productsReducer.error;

// export const { increment, decrement, incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;
