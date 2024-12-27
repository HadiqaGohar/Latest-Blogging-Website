import React from 'react';
import {
  FaBlog,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black font-sans text-white py-10">
      {/* Logo and Navigation */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <div className="flex items-center text-[#00e785]">
            <FaBlog className="text-3xl mr-2" aria-hidden="true" />
            <h1 className="text-2xl font-bold">Hg Blog.</h1>
          </div>

          {/* Navigation Links */}
          <nav>
             {/* comment */}
            <ul className="flex flex-col md:flex-row gap-6 text-lg text-center">
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
          </nav>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-screen-xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <h2 className="text-xl font-bold">
            Subscribe to our newsletter to get <br /> the latest updates and news
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-auto px-4 py-3 text-white bg-gray-900 rounded-md focus:outline-none"
              aria-label="Enter your email address"
            />
            <button
              className="bg-[#00e785] text-black px-6 py-3 rounded-lg hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto px-6 mt-12 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Copyright */}
          <div>
            <p className="text-sm text-gray-400">© 2024 Hadiqa Gohar. All rights reserved.</p>
            <p className="text-sm text-gray-400">Powered By Place Logo</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#00e785]">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#00e785]">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#00e785]">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-[#00e785]">
              <FaGithub size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#00e785]">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
