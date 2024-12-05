'use client';
import React from 'react'
import { useState } from "react";
import Image from 'next/image';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menuName:any) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with Icon */}
        <div className="flex items-center space-x-2">
          <Image src="/images/Logo Icon.png" alt="Logo Icon" className="w-6 h-6" />
          <span className="text-2xl font-bold">Whitespace</span>
        </div>

        {/* Desktop and Tablet Nav Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {["Products", "Solutions", "Resources", "Pricing"].map((menu) => (
            <div className="relative group" key={menu}>
              <button
                onClick={() => toggleDropdown(menu.toLowerCase())}
                className="flex items-center space-x-1 hover:underline focus:outline-none"
              >
                <span>{menu}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === menu.toLowerCase() && (
                <div className="absolute bg-white text-black rounded shadow-lg mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-blue-900 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-300">
            Login
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 space-x-2">
            <span>Try Whitespace free</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Hamburger Icon for Mobile (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 space-y-4">
          {["Products", "Solutions", "Resources", "Pricing"].map((menu) => (
            <div key={menu}>
              <button
                onClick={() => toggleDropdown(menu.toLowerCase())}
                className="flex justify-between items-center w-full focus:outline-none"
              >
                <span>{menu}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === menu.toLowerCase() && (
                <div className="mt-2 space-y-2">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-700 rounded">
                    Option 3
                  </a>
                </div>
              )}
            </div>
          ))}

          <button className="block text-blue-900 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-300 w-full">
            Login
          </button>
          <button className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
            Try Whitespace free →
          </button>
        </div>
      )}
    </header>
  );
}
