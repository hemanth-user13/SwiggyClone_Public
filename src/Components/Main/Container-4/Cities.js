import React from 'react'

function Cities({ resdata, error }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {resdata.map((item, index) => (
        <div key={index} className="transform transition-transform duration-300 hover:scale-105">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">
            {item.title}
          </button>
          {error && <p className="text-red-500 mt-2">There is some error in the data. Please wait for some time.</p>}
        </div>
      ))}
    </div>
  )
}

export default Cities
