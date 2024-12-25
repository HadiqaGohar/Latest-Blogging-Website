import React from 'react'
import Header from './components/Header'
import FeaturedPost from './components/FeaturedPost'
import OurMission from './components/OurMission'
import Catogories from './components/Catogories'
import SpecialPost from './components/SpecialPost'
import Author from './components/Author'
import Logos from './components/Logos'
import Testimonials from './components/Testimonials'
import JoinOurTeam from './components/JoinOurTeam'
import Footer from './components/Footer'

function Home() {
  return (
    <div className=" min-h-screen  text-[#eef7f4] bg-[#050c11] font-sans ">
      {/* Header */}
      <div className='max-w-screen-2xl mx-auto'>
        <Header/>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-10 md:mt-16 px-4 w-full lg:-w-[1440px] h-[720px] mx-auto">
        <h1 className="text-4xl sm:text-5xl opacity-90 lg:text-6xl font-bold  leading-tight ">
          Exploring Human <span className='text-[#00e785]'>Stories</span> and <span className='text-[#00e785]'>Ideas:</span> <br /> A Journey of <span className='text-[#00e785]'>Creativity </span> and Understanding.
        </h1>
        <p className="mt-4 text-sm md:text-lg opacity-90 max-w-4xl">
          Welcome to a space where stories come to life, ideas ignite minds, and knowledge bridges gaps. 
          Dive into thought-provoking narratives, discover unique perspectives, and deepen your 
          understanding of the world around you. Whether you&apos;re here to read, write, or simply explore, 
          this platform offers a journey into the boundless world of creativity and innovation.
        </p>
        <button 
          className="mt-8 bg-[#00e785] text-black px-6 py-3 rounded-full hover:bg-[#00c66d] focus:outline-none"
        >
          Start Reading
        </button>
      </main>




      <div>
        <FeaturedPost/>
      </div>
      <div>
        <OurMission/>
      </div>
      <div>
        <Catogories/>
      </div>
      <div>
        <SpecialPost/>
      </div>
      <div>
        <Author/>
      </div>
      <div>
        <Logos/>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <JoinOurTeam/>
      </div>
      <div>
        <Footer/>
      </div>
      {/* https://www.figma.com/design/bkS8Q28skNXu6RG1pJZea8/Client-First-Template-12---Blog-(Community)?node-id=533-2806&t=4aZAqBfH1aC6XZ5x-0 */}
    </div>
  )
}

export default Home
