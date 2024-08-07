import React, { useState } from 'react';
import { useGeolocation } from './GeoLocations';
import { useUrlPosition } from './useUrlPosition';

function Other() {
  const [openOther, setOtherOpen] = useState(false);
  const { isLoading, getPosition, city, error } = useGeolocation();
  const [maplat, maplng] = useUrlPosition();

  const toggleDrawer = () => {
    setOtherOpen(prev => !prev);
  };

//   console.log("The selected city is", city);
  console.log("The latitude and longitude are", [maplat, maplng]);

  return (
    <div>
      <div className="text-center">
        <button
          onClick={toggleDrawer}
          id="hs-dropdown-default"
          type="button"
          className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          {openOther ? 'test' : 'Others'}
          <svg
            className="hs-dropdown-open:rotate-180 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      {openOther && (
        <div
          id="drawer-left-example"
          className="fixed top-0 left-0 z-40 h-screen p-16 overflow-y-auto transition-transform translate-x-0 bg-white w-1/3 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-3xl text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            Enter Your Location
          </h5>

          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Your Location Here..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <div className="grid grid-cols-2 gap-4 mt-16 ml-24">
            <button
              className="flex justify-center select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={getPosition}
              type="button"
            >
              {isLoading ? 'Loading.........' : 'Use your Position'}
            </button>
          </div>
          {error && <div className="mt-4 text-red-600">{error}</div>}
          {/* {city && <div className="mt-4 text-gray-700">City: {city}</div>} */}
          <div className="mt-4 text-gray-700">
            Latitude: {maplat || 'Loading........'}
          </div>
          <div className="mt-4 text-gray-700">
            Longitude: {maplng || 'Loading.........'}
          </div>
        </div>
      )}
    </div>
  );
}

export default Other;
