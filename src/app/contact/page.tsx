'use client';

import React from 'react';
import Author from '../components/Author';
import JoinOurTeam from '../components/JoinOurTeam';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { client } from '../../sanity/lib/client'; // Corrected import statement

interface ContactProps {
  data: {
    sectionTitle: string;
    sectionSubTitle: string;
    sectionDescription: string;
    workingHours: {
      days: string;
      hours: string;
      supportInfo: string;
    };
    contactDetails: {
      phoneNumber: string;
      email: string;
    };
    contactForm: {
      fullNamePlaceholder: string;
      emailPlaceholder: string;
      queryRelatedOptions: string[];
      messagePlaceholder: string;
    };
    decorativeImage: {
      asset: {
        url: string;
      };
    };
  };
}

async function fetchContactData() {
  const query = `*[_type == "contact"][0] {
    sectionTitle,
    sectionSubTitle,
    sectionDescription,
    workingHours {
      days,
      hours,
      supportInfo
    },
    contactDetails {
      phoneNumber,
      email
    },
    contactForm {
      fullNamePlaceholder,
      emailPlaceholder,
      queryRelatedOptions,
      messagePlaceholder
    },
    decorativeImage {
      asset {
        url
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

function Contact() {
  const [data, setData] = React.useState<ContactProps['data'] | null>(null);

  React.useEffect(() => {
    async function loadData() {
      const fetchedData = await fetchContactData();
      setData(fetchedData);
    }
    loadData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <section className="max-w-screen-lg mx-auto p-8 my-16 relative"> {/* Added relative positioning here */}
        {/* Header Section */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-extrabold mb-4 text-gray-600 uppercase">{data.sectionTitle}</h4>
          <h2 className="text-4xl font-bold text-gray-800">{data.sectionSubTitle}</h2>
          <p className="text-violet-700 mt-4">{data.sectionDescription}</p>
        </div>

        <div className="flex justify-end w-full max-w-screen-2xl mx-auto">
        <div className="bg-[#00e785] rounded-l-full w-[200px] md:w-[500px]  h-[15px] md:h-[23px]" />
        <div className="bg-gray-400 w-[100px] md:w-[100px] md:mr-0 h-[15px] md:h-[23px]" />
      </div>

        {/* Info Section */}
        <div className="relative flex flex-col md:flex-row bg-gray-300 p-8 py-10 gap-8">
          {/* Working Hours */}
          <div className="flex-1">
            <h4 className="text-lg font-extrabold text-gray-700">Working Hours</h4>
            <hr className="my-2 border-2" />
            <h3 className="text-xl text-gray-800">{data.workingHours.days}</h3>
            <p className="text-gray-600 mt-2">{data.workingHours.hours}</p>
            <p className="text-gray-600 mt-2">{data.workingHours.supportInfo}</p>
          </div>

          {/* Contact Details */}
          <div className="flex-1">
            <h4 className="text-lg font-extrabold text-gray-700">Contact Us</h4>
            <hr className="my-2 border-2" />
            <h3 className="text-xl text-gray-800">{data.contactDetails.phoneNumber}</h3>
            <p className="text-gray-600 mt-2">{data.contactDetails.email}</p>
          </div>
        </div>

        {/* Decorative Image */}
        {data.decorativeImage && (
          <div className="absolute -mt-60 -ml-6 flex z-10"> {/* Added z-10 to ensure the image is above other content */}
            <Image
              src={data.decorativeImage.asset.url}
              alt="Decorative Shape"
              objectFit="cover"
              height={50}
              width={50}
              className="rounded-md opacity-70"
            />
          </div>
        )}

        {/* Contact Form */}
        <div className="mt-16">
          <form className="space-y-4">
            
            <div>
              <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder={data.contactForm.fullNamePlaceholder}
                className="w-full p-2 py-4 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder={data.contactForm.emailPlaceholder}
                className="w-full p-2 py-4 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="query" className="block text-gray-700">Query Related</label>
              <select
                id="query"
                className="w-full p-2 py-4 border border-gray-300 rounded"
                required
              >
                <option value="" disabled selected>Select a topic</option>
                {data.contactForm.queryRelatedOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                placeholder={data.contactForm.messagePlaceholder}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#00e785] hover:bg-[#00c96f] text-black w-full py-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Author />
      <JoinOurTeam />
      <Footer />
    </div>
  );
}

export default Contact;
