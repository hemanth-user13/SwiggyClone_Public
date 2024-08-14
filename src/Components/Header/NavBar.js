import React, { useState } from "react";
import Image from "../../assests/logo.png";
import Signup from '../Accounts/Login';
import { Link } from 'react-router-dom';
import Other from '../Locations/Other';
import { useSelector } from "react-redux";
import LeftCart from './LeftDrawer'
import LeftDrawer from "./LeftDrawer";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, totalAmount } = useSelector((state) => state.cart);


  const data = [...cartItems]
  console.log("the data in the left drawer is", data)

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
                      className="rounded-md bg-white mx-10 px-6 py-2  text-sm font-medium text-black hover:bg-gray-200"
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
                 
                  <div className="">
                  <LeftDrawer/>
                  </div>
                  <Link to="/">
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-200"
                    >
                      Log Out
                    </a>
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
