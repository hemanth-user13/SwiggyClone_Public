import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Cards({ resdata, error, onClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-20">
            {resdata.map((item) => (
                <div key={item.id} className="transform transition-transform duration-300 hover:scale-105" onClick={() => onClick(item.id)}>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
                        <a href="#">
                            <div className="relative">
                                <img className="w-full h-48 object-cover rounded-t-lg" src={item.img_url} alt={item.img_title} />
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-sm font-bold py-1 px-2 rounded-bl-lg">
                                    {item.discount}
                                </div>
                            </div>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.img_title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
