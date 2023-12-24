// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Cart } from '../../types/cart.type';
// import { Product } from '../../types/product.type';

// export const initialState: Cart = {
//     cart: [] as Product[]
// };

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action: PayloadAction<Product>) => {
//             state.cart.push(action.payload);

//             console.log('cart state', state.cart);

//             action.payload.stock - 1;
//         },
//         getItemQty: (state) => {},
//         removeFromCart: () => {}
//     }
// });

// export const { addToCart, getItemQty, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;
