import React from 'react'
import user_icon from "../../assets/user_icon.svg"


const Footer = () => {
  return (
    <footer className='bg-[#050505] text-white py-8'>
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
            <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
              <div className='flex-1 mb-4 md:mb-0'>
              <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Noor</h3>
          
            <p className='text-gray-400'>Mern Stack Developer developer based in Pakistan, specializing in web development.</p>
        </div>
        <div className="flex-1 w-full">
            <form className="flex items-center justify-center gap-3">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400  ' />
          
            <button type='submit' className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  text-white px-4 py-2 rounded-r-lg  ">Subscribe</button>
            </form>
        </div>
        </div>
      
    </div>
    <hr />
    <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center px-6">
      <p className="text-gray-400">
      © {new Date().getFullYear()} Noor Fatima. All rights are reserved.
      </p>
      <div className=" flex space-x-4 my-4 md:my-0 ">
        <p className='text-gray-400 hover:text-white' >Terms of services</p>
        <p className='text-gray-400 hover:text-white'>Privacy Policy</p>
        <p className='text-gray-400 hover:text-white'>Connect with me</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer
