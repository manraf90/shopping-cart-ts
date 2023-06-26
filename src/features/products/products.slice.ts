import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchData, Product, ProductsState } from '../../types/product.type';
import { faker } from '@faker-js/faker';

const url = 'https://dummyjson.com/products';

const initialState: ProductsState = {
    products: [] as Product[],
    error: null,
    isLoading: false
};

faker.seed(99);

const initialProducts = [...Array(20)].map(() => ({
    id: faker.number.int({ min: 100000 }),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: faker.number.int({ min: 10, max: 100 }),
    image: faker.image.url(),
    product: faker.commerce.product()
}));

console.log('initialProducts', initialProducts);

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
