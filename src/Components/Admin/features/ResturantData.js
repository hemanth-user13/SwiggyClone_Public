import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminDashboard from '../Admin_Navbar';
import Swal from 'sweetalert2';

function ResturantData() {
    const [data, setData] = useState([]);

    const GetData = async () => {
        const RESTURANT_DATA = "https://usermanagement-kbe1.onrender.com/restaurants";
        const response = await axios.get(RESTURANT_DATA);
        setData(response.data);
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://usermanagement-kbe1.onrender.com/restaurants/${id}`);
                    setData(data.filter(item => item.id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "The restaurant has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Error deleting the restaurant:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "An error occurred while deleting the restaurant.",
                        icon: "error"
                    });
                }
            }
        });
    };

    const handleEdit = (id) => {
        // Add edit functionality if needed
    };

    useEffect(() => {
        GetData();
    }, []);

    return (
        <>
            <AdminDashboard />
            <div className="p-4">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Resturant ID</th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Resturant Name</th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Resturant Address</th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Image</th>
                                            <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {data.length > 0 ? (
                                            data.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{item.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{item.Resturantname}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{item.Resturantaddress}</td>
                                                    <td className="px-6 py-4">
                                                        <img className="rounded-full w-20 h-20 object-cover" src={item.ResturantUrl} alt="Restaurant" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-end space-x-2">
                                                        <button
                                                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                                            onClick={() => handleEdit(item.id)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="px-6 py-4 text-center text-sm text-blue-500">
                                                    Loading.......
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResturantData;
