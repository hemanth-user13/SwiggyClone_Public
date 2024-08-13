import React, { useState } from "react";
import Image from "../../assests/logo.png";
import Signup from '../Accounts/Login';
import { Link } from 'react-router-dom';
import Other from '../Locations/Other';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-12 w-20" src={Image} alt="Your Company" />
                <Other />
              </div>

              <div className="hidden sm:ml-auto sm:block">
                <div className="flex space-x-4 justify-center">
                  <Link to="/">
                    <span
                      className="rounded-md bg-white mx-10 px-6 py-2 text-sm font-medium text-black hover:bg-gray-200"
                      aria-current="page"
                    >
                      Swiggy Corporate
                    </span>
                  </Link>
                  <Link to="/search">
                    <span
                      className="rounded-md mx-10 px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                      style={{ marginBottom: "400px" }}
                    >
                      Search
                    </span>
                  </Link>
                  <Link to="/offers">
                    <span
                      className="rounded-md mx-10 px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                    >
                      Offers
                    </span>
                  </Link>
                  <Link to="/cart">
                 <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                  >
                    Cart
                  </a>
                 </Link>
                  <Link to="">
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
                        className={` fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} bg-white w-80 dark:bg-gray-800`}
                        tabIndex="-1"
                        aria-labelledby="drawer-label"
                      >
                        <h5
                          id="drawer-label"
                          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                        >
                          <svg
                            className="w-4 h-4 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          test
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
                          Supercharge your hiring by taking advantage of our{' '}
                          <a
                            href="#"
                            className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
                          >
                            limited-time sale
                          </a>{' '}
                          for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Learn more
                          </a>
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Get access{' '}
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L8 1m5 4L8 9"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
