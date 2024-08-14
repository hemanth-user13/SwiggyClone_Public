import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice'; 
import { useParams } from 'react-router-dom';
import BackButton from '../../../Accounts/BackButton';
import LeftDrawer from '../../../Header/LeftDrawer';

function MenuCard({ item }) {
    const [count, setCount] = useState(0);
    const [isToogleOpen, setIsTooggleOpen] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch(); 

    const res_id = id.charAt(id.length - 1);

    const handleAddClick = () => {
        setCount(1);
        setIsTooggleOpen(true);
        dispatch(addItemToCart({
            item_id: item.id,
            resturant_id: res_id,
            user_id: localStorage.getItem('user_id'), 
            item_img: item.item_img,
            item_price: item.item_price,
            quantity: 1
        }));
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        setIsTooggleOpen(true);
        dispatch(addItemToCart({
            item_id: item.id,
            resturant_id: item.resturant_id,
            user_id: localStorage.getItem('user_id'),
            item_img: item.item_img,
            item_price: item.item_price,
            quantity: 1
        }));
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        } else {
            setCount(0);
        }
        setIsTooggleOpen(true);
    };

    return (
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="flex-1">
                <p className="text-xl font-bold text-black mb-2">{item.item_Name || "No name available"}</p>
                <p className="text-lg text-gray-700 mb-2">₹ {item.item_price || "Free"}</p>
                <p className="text-gray-500 ">{item.item_discription}</p>
            </div>
            <div className="relative">
                <img 
                    className="h-auto max-w-xs rounded-lg shadow-md transform transition duration-300 hover:scale-105" 
                    src={item.item_img} 
                    alt={item.item_discription} 
                />
                {count === 0 ? (
                    <button 
                        onClick={handleAddClick} 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border text-green-500 px-14 py-2 shadow-xl transition duration-300 hover:bg-green-500 hover:text-white">
                        Add
                    </button>
                ) : (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border text-green-500 px-4 py-2 shadow-xl flex items-center space-x-4">
                        <button 
                            onClick={handleDecrement} 
                            className="text-red-500 font-bold text-xl">
                            -
                        </button>
                        <span className="text-black font-bold">{count}</span>
                        <button 
                            onClick={handleIncrement} 
                            className="text-green-500 font-bold text-xl">
                            +
                        </button> 
                    </div> 
                )}
            </div>
            {/* {isToogleOpen && <LeftDrawer />} */}
        </div>
    );
}

export default MenuCard;
