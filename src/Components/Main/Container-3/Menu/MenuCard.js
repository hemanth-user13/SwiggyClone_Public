import React from 'react';

function MenuCard({item}) {
    return (
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="flex-1">
                <p className="text-xl font-bold text-black mb-2">{item.item_Name || "hemanth check the code"}</p>
                <p className="text-lg text-gray-700 mb-2">₹ {item.item_price || "Free"}</p>
                <p className="text-gray-500 ">{item.item_discription}</p>
            </div>
            <div className="relative">
                <img className="h-auto max-w-xs rounded-lg shadow-md" src={item.item_img} alt={item.item_discription} />
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border-l-cyan-400 text-green-500 px-14 py-2  shadow-xl">Add</button>
            </div>
        </div>
    );
}

export default MenuCard;
