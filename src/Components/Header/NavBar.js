import React, { useState } from "react";
import Image from "../../assests/logo.png";
import Signup from '../Accounts/Login'
import { Link } from 'react-router-dom';
import Other from '../Locations/Other'


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
                <Other/>
              </div>

              <div className="hidden sm:ml-auto sm:block">
                <div className="flex space-x-4 justify-center">
                  <Link to='/'>
                  <a
                    href="/"
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                    aria-current="page"
                  >
                    Swiggy Corporate
                  </a>
                  </Link>
                  <Link to="/search">
                    <a
                      href="#"
                      className="rounded-md  px-3 py-2 text-sm font-medium text-black hover:bg-gray-200" style={{marginBottom:"400px"}}
                    >

                      Search
                    </a>
                  </Link>
                  <Link to="/offers">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                    >
                      Offers
                    </a>
                  </Link>
                 <Link to='/sign'>
                 <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                  >
                    Mobile
                  </a>
                 </Link>
                 <Link to='/'>
                 {/* <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                  > */}
                   {/* <Signup/> */}
                  {/* </a> */}
                 </Link>
                 <Link to='/'>
                 <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                  >
                    Cart
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-md bg-white px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
              >
                Team
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
              >
                Projects
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;