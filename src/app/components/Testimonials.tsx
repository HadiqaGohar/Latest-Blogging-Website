'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client"; // Adjust path based on your structure

// Define the types for testimonial data
interface Testimonial {
  quote: string;
  authorName: string;
  authorLocation: string;
  authorImage: {
    asset: {
      url: string;
    };
  };
}

interface TestimonialsData {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  testimonials: Testimonial[];
}

// Fetch Testimonials Data
const fetchTestimonials = async (): Promise<TestimonialsData> => {
  const query = `*[_type == "testimonials"]{
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    testimonials[] {
      quote,
      authorName,
      authorLocation,
      authorImage {
        asset -> {
          url
        }
      }
    }
  }`;

  const data = await client.fetch(query);
  return data[0]; // Assuming there's only one document
};

function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsData | null>(null);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchTestimonials();
      setTestimonialsData(data);
    };
    getTestimonials();
  }, []);

  if (!testimonialsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white py-16">
       {/* comment */}
      <div className="flex justify-end w-full max-w-screen-xl mx-auto">
        <div className="bg-[#00e785] rounded-l-full w-[200px] md:w-[843px] h-[15px] md:h-[23px]"></div>
        <div className="bg-gray-400 w-[100px] md:w-[282px] mr-4 md:mr-0 h-[15px] md:h-[23px]"></div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[1284px] lg:h-[344px] mx-auto px-8 bg-gray-100 flex flex-col lg:flex-row items-center gap-12">
          {/* Section Heading */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-xl mt-10 md:mt-0 font-semibold text-gray-800">
              {testimonialsData.sectionTitle}
            </h2>
            <h3 className="text-3xl text-gray-600 mt-2 leading-relaxed font-medium">
              {testimonialsData.sectionSubtitle}
            </h3>
            <p className="text-sm text-gray-500 mt-4">
              {testimonialsData.sectionDescription}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-60 bg-gray-300"></div>

          {/* Testimonial */}
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:w-2/4 p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </h4>

              <div className="flex items-center">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.authorImage.asset.url}
                    alt={`Portrait of ${testimonial.authorName}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {testimonial.authorName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.authorLocation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
