import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/43f6ad93-0636-45d2-9f0b-2f60b19765f3' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#8dbd45] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>\\Submit the form below or send me a mail at papsonkola@gmail.com</p>
            </div>

            <input className='bg-[#ccd6f6] hover:bg-white p-2 rounded-md' type='text' placeholder='Name' name='name'></input>
            <input className='bg-[#ccd6f6] hover:bg-white p-2 my-4 rounded-md' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#ccd6f6] hover:bg-white p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#8dbd45] hover:border-[#8dbd45] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's talk</button>
        </form>
    </div>
  )
}

export default Contact