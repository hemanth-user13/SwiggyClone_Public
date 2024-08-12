import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from './cartSlice';
import axios from 'axios';
import BackButton from '../../../Accounts/BackButton'

function Cart() {
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveClick = (item_id) => {
        dispatch(removeItemFromCart({ item_id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    const CartData=async()=>{
        const data=[...cartItems]
        console.log("the cart items are",data)
        
        const ITEMSELECTED="http://localhost:8000/Itemselected"
        const Postdata=await axios.post(ITEMSELECTED,data)
        console.log(Postdata)
    }
   

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
            <BackButton/>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.item_id} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
                            <img src={item.item_img} alt={item.item_discription} className="h-16 w-16 rounded-lg" />
                            <div className="flex-1 ml-4">
                                <p className="text-lg font-bold">{item.item_Name}</p>
                                <p className="text-gray-600">₹ {item.item_price}</p>
                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-bold text-green-500">₹ {item.totalPrice}</p>
                                <button 
                                    onClick={() => handleRemoveClick(item.item_id)} 
                                    className="text-red-500 mt-2">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right mt-6">
                        <p className="text-2xl font-bold">Total Amount: ₹ {totalAmount}</p>
                        <button 
                            onClick={handleClearCart} 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700">
                            Clear Cart
                        </button>
                        <button onClick={CartData}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 ml-4 hover:bg-green-700">
                            Buy Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
