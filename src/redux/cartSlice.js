import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [

    ],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // If action.payload is an object, add it to the cart
            if (typeof action.payload === "object") {
                state.cart.push(action.payload);
            } else {
                // Handle other cases as needed
            }
        },

        resetCart: (state) => {
            state.cart = [];
        },
        addToCartById: (state, action) => {
            const { productId } = action.payload;
            // Check if the product with productId is already in the cart
            const existingProductIndex = state.cart.findIndex(item => item.productId === productId);

            if (existingProductIndex !== -1) {
                // If the product already exists in the cart, increment its quantity
                state.cart[existingProductIndex].quantity++;
            } else {
                // If the product is not in the cart, add it with quantity 1
                state.cart.push({ productId, quantity: 1 });
            }
        },
    }
})


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer