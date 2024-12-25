import React from 'react';
import Author from '../components/Author';
import JoinOurTeam from '../components/JoinOurTeam';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

function Contact() {
    return (
        <div>
            <Header />
            <section className="max-w-screen-lg mx-auto p-8 my-16">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h4 className="text-lg font-extrabold mb-4 text-gray-600 uppercase">Contact Us</h4>
                    <h2 className="text-4xl font-bold text-gray-800">Let&apos;s Start a Conversation</h2>
                    <p className="text-violet-700 mt-4">
                        Have questions? Feel free to reach out. We’re here to help!
                    </p>
                </div>

                {/* Info Section */}
                <div className='flex justify-end w-full max-w-screen-xl mx-auto'>
                <div className='bg-[#00e785] rounded-l-full w-[200px] md:w-[500px] h-[15px] md:h-[23px]'></div>
                <div className='bg-gray-400 w-[100px] md:w-[150px]  md:mr-0 h-[15px] md:h-[23px]'></div>
            </div>
                <div className="relative flex flex-col md:flex-row bg-gray-300  p-8 py-10 gap-8">

                    {/* Working Hours */}
                    <div className="flex-1">
                        <h4 className="text-lg font-extrabold text-gray-700">Working Hours</h4>
                        <hr className="my-2 border-2" />
                        <h3 className="text-xl text-gray-800">
                            Monday To Friday <br /> 9:00 AM to 8:00 PM
                        </h3>
                        <p className="text-gray-600 mt-2">Our Support Team is available 24/7</p>
                    </div>

                    {/* Contact Details */}
                    <div className="flex-1">
                        <h4 className="text-lg font-extrabold text-gray-700">Contact Us</h4>
                        <hr className="my-2 border-2" />
                        <h3 className="text-xl text-gray-800">020 - 1234 - 1331</h3>
                        <p className="text-gray-600 mt-2">hgblog@gmail.com</p>
                    </div>
                </div>
                <div className="absolute -mt-60  -ml-6 flex ">
                    <Image
                        src="/circle.png" // Replace with your actual image path
                        alt="Decorative Shape"
                        objectFit="cover"
                        height={50}
                        width={50}
                        className="rounded-md opacity-70"
                    />
                </div>

                {/* Contact Form */}
                <div className="mt-16">
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                className="w-full p-2 py-4 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-2 py-4 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        {/* Query Related */}
                        <div>
                            <label htmlFor="query" className="block text-gray-700">Query Related</label>
                            <select
                                id="query"
                                className="w-full p-2 py-4 border border-gray-300 rounded"
                                required
                            >
                                <option value="" disabled selected>Select a topic</option>
                                <option value="support">Support</option>
                                <option value="sales">Sales</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea
                                id="message"
                                placeholder="Type your message here..."
                                className="w-full p-2 border border-gray-300 rounded"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#00e785] hover:bg-[#00c96f] text-black w-full py-4 rounded"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </section>
            <div>
                <Author />
            </div>
            <div>
                <JoinOurTeam />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
