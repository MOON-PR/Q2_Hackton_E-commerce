"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    isVisible && (
      <div className="bg-black h-12 flex items-center justify-center relative font-medium">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-white text-sm text-center">
            Sign up to get 20% off on your first order.
          </p>
          <Link href="/" className="underline text-white text-sm">
            Sign Up Now
          </Link>
        </div>
        <button
          onClick={handleClose}
          className="absolute right-4 text-white text-xl font-bold hover:text-gray-300"
          aria-label="Close notification banner"
        >
          &times;
        </button>
      </div>
    )
  );
};

export default TopHeader;