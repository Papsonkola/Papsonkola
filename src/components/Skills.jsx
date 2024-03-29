import React from 'react'

import HTML from  '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Reac from '../assets/react.png'
import Boot from '../assets/bootstrap.png'
import Git from '../assets/github.png'
import Tail from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold  inline border-b-4 border-[#8dbd45]'>Skills</p>
                <p className='py-4'>\\ These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='Html logo'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='Html logo'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='Html logo'/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reac} alt='Html logo'/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt='Html logo'/>
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tail} alt='Html logo'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-3' src={Boot} alt='Html logo'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills