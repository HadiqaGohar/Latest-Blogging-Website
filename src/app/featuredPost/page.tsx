import Link from 'next/link'
import Image from 'next/image'

const FeaturedPost = () => {
  return (
    <div className="bg-[#f8f4ec] mx-auto px-6 py-12">
      <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col md:flex-row justify-center items-center gap-8 bg-[#f8f4ec]">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-medium text-gray-600 mb-4 mt-20">Featured Post</h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            <span className='text-yellow-500'>Step-by-step</span> guide to choosing great <br />font pairs
          </h3>
          <p className="text-gray-600 mb-4"><span className='text-violet-600'>By John Doe</span> | May 23, 2022</p>
          <p className="text-gray-700 mb-6">
          Master the art of font pairing with our step-by-step guide. Learn tips, tricks, and techniques to create visually stunning and cohesive typography.
          </p>
          <Link href="/blog/step-by-step-guide-to-choosing-great-font-pairs">
            <button className="mt-4 bg-[#00e785] text-black px-6 py-3 hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300">
              Read More
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          {/* Image Placeholder */}
          <div className="w-full md:w-[515px] h-auto md:h-[356px] rounded-lg flex items-center justify-center">
            <Image src="/home/img1.jpeg" width={515} height={356} alt={''} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost
