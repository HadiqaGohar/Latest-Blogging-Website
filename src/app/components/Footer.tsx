// components/Footer.js
'use client';
import React, { useState } from 'react';
import { FaBlog, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { client } from '../../sanity/lib/client';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribersCount, setSubscribersCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      console.log('Adding email:', email);

      // Add email to Sanity
      const response = await client.create({
        _type: 'subscriber',
        email,
      });
      console.log('Email added:', response);

      // Fetch updated subscriber count
      const count = await client.fetch(
        `count(*[_type == "subscriber" && !(_id in path("drafts.**"))])`
      );
      console.log('Fetched subscriber count:', count);

      setSubscribersCount(count);
      setMessage('Subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

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

      <div className="max-w-screen-xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <h2 className="text-xl font-bold">
            Subscribe to our newsletter to get <br /> the latest updates and news
          </h2>
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-auto px-4 py-3 text-white bg-gray-900 rounded-md focus:outline-none"
                aria-label="Enter your email address"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#00e785] text-black px-6 py-3 rounded-lg hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
            {message && <p className="mt-1 text-center text-sm">{message}</p>}

            <div className="mt-0 text-center text-gray-500">
              Total Subscribers: <span className="font-bold">{subscribersCount}</span>
            </div>
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
