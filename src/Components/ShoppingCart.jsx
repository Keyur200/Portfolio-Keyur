import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/blogapp.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ShoppingCart = () => {
  return (
    <div className=' h-auto overflow-hidden bg-white  p-5'>
      <Link target={'_blank'} to={'https://emize.vercel.app'} className='relative mainn cursor-pointer '>
        <img src="../images/banner2.png" className='border-4 border-black rounded-xl' alt="" />
        <span className='absolute bottom-0 left-0 py-2 px-4 rounded-es-xl rounded-tr-xl text-2xl font-extrabold bg-gradient-to-r from-indigo-600  to-purple-400  text-white'>Shopping Cart</span>
        <p className="bg bg-gradient-to-tr from-indigo-300 to-purple-400"><p className='flex text-gray-800  gap-3 items-center text-sm md:text-lg lg:text-xl  hover:scale-125 transition-transform duration-500 font-bold '>Click to redirect website <FaExternalLinkAlt /></p>  </p>
      </Link>
      <div className='py-5 gap-2 flex flex-col justify-start'>
        <span className='text-xl font-bold underline '>Project Description</span>
        <p className='text-lg font-semibold'>» React JS Project (Redux)</p>
        <p>Technology used : </p>
        <div className='flex gap-x-5  gap-y-3 flex-wrap'>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>React JS</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>React Redux</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>Redux Toolkit</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>User Interface</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>Tailwind CSS</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>Git</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>Github</span>
          <span className='bg-gradient-to-r  from-indigo-500  to-purple-400 text-sm py-2 px-3 rounded-full text-black'>Vercel</span>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart