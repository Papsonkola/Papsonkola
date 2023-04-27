import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 p-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#8dbd45]'>
                        About
                    </p>

                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Kolawole, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>
                        As a relatively young React developer, I'm passionate about building excellent software that improves the lives of people. I currently specialize in building the frontend aspect of web applications. I'm also open to opportunities to learn new technoogies and programming languages to stay up-to-date with the latest trends in the industry.
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About