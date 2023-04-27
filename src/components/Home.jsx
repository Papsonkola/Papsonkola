import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#8dbd45]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kolawole Olawuni,</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Frontend Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[600px]'>As a detail-oriented and motivated front-end developer, I am passionate about building responsive and engaging user interfaces. My goal is to contribute to the success of a dynamic team and grow my skills as a front-end developer.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-[#8dbd45] hover:border-[#8dbd45]'>
                 View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>  </button>
            </div>

        </div>
    </div>
  )
}

export default Home