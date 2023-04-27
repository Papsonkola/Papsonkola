import React from 'react'
import realestate from '../assets/realestate.jpg'
import tech from '../assets/techbrains.png'
import netflix from '../assets/netfixweb.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#8dbd45]'>Work</p>
          <p className='py-6'>\\Check out some of my recent work</p>
        </div>
      
      {/* Container */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {/* Grid item */}
        <div style={{backgroundImage: `url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Real Estate Web Application
            </span>
            <div className='pt-8 text-center'>
              <a href='https://papsonestate.netlify.app' target='_bank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        
        {/* Grid item */}
        <div style={{backgroundImage: `url(${netflix})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Netflix clone App
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

         {/* Grid item */}
         <div style={{backgroundImage: `url(${tech})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Techbrains Website
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

         {/* Grid item */}
         <div style={{backgroundImage: `url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Real Estate Web Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

         {/* Grid item */}
         <div style={{backgroundImage: `url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Real Estate Web Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

         {/* Grid item */}
         <div style={{backgroundImage: `url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Real Estate Web Application
            </span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Work