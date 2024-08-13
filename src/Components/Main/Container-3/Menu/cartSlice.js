import { createSlice } from '@reduxjs/toolkit';
// import { useParams } from 'react-router-dom';


const initialState = {
    cartItems: [],
    totalAmount: 0,
    
};

 

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { item_id, resturant_id, user_id, item_img, item_price, quantity } = action.payload;
            console.log("the item id is",item_id);
            console.log("the resturant id is ",resturant_id);
            console.log("the user id is",user_id);
            console.log("the item price is  ",item_price);
            console.log("the quantiti is",quantity)
            const existingItem = state.cartItems.find(item => item.item_id === item_id);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice += item_price * quantity;
            } else {
                state.cartItems.push({
                    item_id,
                    resturant_id,
                    user_id,
                    item_img,
                    item_price,
                    quantity,
                    totalPrice: item_price * quantity
                });
            }

            state.totalAmount += item_price * quantity;
        },
        removeItemFromCart: (state, action) => {
            const { item_id } = action.payload;
            const existingItem = state.cartItems.find(item => item.item_id === item_id);

            if (existingItem) {
                state.totalAmount -= existingItem.totalPrice;
                state.cartItems = state.cartItems.filter(item => item.item_id !== item_id);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
