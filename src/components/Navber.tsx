import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          <Link href="/">SHOP.CO</Link>
        </h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static w-full lg:w-auto top-16 left-0 bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-b lg:border-none">
            <Link
              href="/shop"
              className="block lg:inline-block py-2 px-4 text-black hover:text-blue-600 font-medium"
            >
              Shop
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              href="/on-sale"
              className="block lg:inline-block py-2 px-4 text-black hover:text-blue-600 font-medium"
            >
              On Sale
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              href="/new-arrivals"
              className="block lg:inline-block py-2 px-4 text-black hover:text-blue-600 font-medium"
            >
              New Arrivals
            </Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              className="w-64 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-medium border"
              placeholder="Search for products..."
            />
            <button className="absolute right-2 top-2">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Cart Icon */}
          <button className="text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
          </button>

          {/* Account Icon */}
          <button className="text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMenuOpen && (
        <div className="block lg:hidden px-4 py-3">
          <div className="relative">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-medium border"
              placeholder="Search for products..."
            />
            <button className="absolute right-3 top-2">
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
