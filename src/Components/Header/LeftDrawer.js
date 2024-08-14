import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

function LeftDrawer() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartItems, totalAmount } = useSelector((state) => state.cart);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    const handledata = async () => {
        const data = [...cartItems]
        console.log("the data in the left drawer is", data)


        const ItemSelected="https://usermanagement-kbe1.onrender.com/Itemselected";
        const PostData=await axios.post(ItemSelected,data)
        console.log(PostData)
    }



    return (
        <div className="text-center">
            <button
                type="button"
                className="rounded-md mx-10 px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                aria-controls="drawer-example"
                onClick={toggleMobileMenu}
            >
                Mobile
            </button>
            <div
                id="drawer-example"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} bg-white w-80 dark:bg-gray-800`}
                tabIndex="-1"
                aria-labelledby="drawer-label"
            >
                <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    Your Selected Items
                </h5>
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is Empty</p>

                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.item_id}
                                    className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4"
                                >
                                    <img src={item.item_img}
                                        alt={item.item_discription}
                                        className="h-16 w-16 rounded-lg"
                                    />
                                    <div className="flex-1 ml-4">
                                        <p className="text-lg font-bold">{item.item_name}</p>
                                        <p className="text-gray-600" >{item.item_price}</p>
                                        <p className="text-gray-500">Quantity:  {item.quantity}</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xl font-bold text-green-500">
                                            ₹ {item.totalPrice}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <p className="text-2xl font-bold">Total Amount: ₹ {totalAmount}</p>
                            <button
                                onClick={handledata}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 ml-4 hover:bg-green-700"
                            >
                                Buy Now
                            </button>
                        </div>

                    )}
                </p>
                <div className="grid grid-cols-2 gap-4">
                </div>
            </div>
        </div>
    )
}



export default LeftDrawer
