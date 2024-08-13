import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResturantData() {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);

    const GetData = async () => {
        const RESTURANT_DATA = "https://usermanagement-kbe1.onrender.com/restaurants";
        const response = await axios.get(RESTURANT_DATA);
        setData(response.data);

        // Extract headers dynamically
        if (response.data.length > 0) {
            setHeaders(Object.keys(response.data[0]));
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    return (
        <div className="flex flex-col p-6 bg-gray-100 dark:bg-gray-900">
            <div className="-mx-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400"
                                    >
                                        {header}
                                    </th>
                                ))}
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400"
                                >
                                    Image
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-neutral-700">
                            {data.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {headers.map((header, headerIndex) => (
                                        <td
                                            key={headerIndex}
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-neutral-200"
                                        >
                                            {item[header]}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                        {item.ResturantUrl && (
                                            <img
                                                src={item.ResturantUrl}
                                                alt="Restaurant"
                                                className="h-16 w-16 rounded object-cover"
                                            />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ResturantData;
