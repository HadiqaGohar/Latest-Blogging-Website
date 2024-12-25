'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBlog, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-[#eef7f4] bg-[#050c11] font-sans">
      <div className="max-w-screen-2xl flex mx-auto justify-between items-center p-4">
        {/* Logo and Icon */}
        <div className="flex items-center text-[#00e785]">
          <FaBlog className="text-3xl mr-2" aria-hidden="true" />
          <h1 className="text-2xl font-bold">Hg Blog.</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-[#00e785] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:gap-6 lg:text-lg ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-[#050c11] lg:bg-transparent p-4 lg:p-0 z-50`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
              <Link href="/" aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" aria-label="About">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" aria-label="Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" aria-label="Contact Us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Login and Signup Buttons */}
        <div
          className={`lg:flex gap-4 ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:relative top-[calc(100%+1rem)] left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-[#050c11] lg:bg-transparent p-4 lg:p-0 z-50`}
        >
          <button
            className="bg-[#00e785] text-black px-4 py-2 rounded-full hover:bg-[#00c66d] focus:outline-none"
            aria-label="Login"
          >
            Login
          </button>
          <button
            className="bg-[#00e785] text-black px-4 py-2 rounded-full hover:bg-[#00c66d] focus:outline-none"
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
