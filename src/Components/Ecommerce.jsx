import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/blogapp.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
const Ecommerce = () => {
  return (
    <div className=' h-auto overflow-hidden bg-white  p-5'>
      <Link target={'_blank'} to={'https://ecommece.vercel.app'} className='relative mainn overflow-hidden cursor-pointer '>
        <img src="../images/banner3.png" className='border-4  h-[180px] md:h-[250px] lg:h-[330px]   hover:scale-125 border-black rounded-xl' alt="" />
        <span className='absolute bottom-0 left-0 py-2 px-4 rounded-es-xl rounded-tr-xl text-2xl font-extrabold bg-gradient-to-r from-gray-600  to-gray-400  text-white'>Ecommerce</span>
        <p className="bg bg-gradient-to-tr from-gray-400  to-gray-200"><p className='flex gap-3 text-gray-800 text-sm md:text-lg lg:text-xl  items-center hover:scale-125 transition-transform duration-500 font-bold'>Click to redirect website <FaExternalLinkAlt /></p>  </p>
      </Link>
      <div className='py-5 gap-2 flex flex-col justify-start'>
        <span className='text-xl font-bold underline '>Project Description</span>
        <p className='text-lg font-semibold'>» MERN Stack Project</p>
        <p>Technology used : </p>
        <div className='flex gap-x-5  gap-y-3 flex-wrap'>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>React JS</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Express JS</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>MongoDB</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Node JS</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>React Redux</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>React Router Dom</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Context API</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Tailwind CSS</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Braintree</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Payment Gateway</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>JsonWebToken</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Admin Panel</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Git</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Github</span>
          <span className='bg-gradient-to-r  from-gray-600  to-gray-400 text-sm py-2 px-3 rounded-full text-black'>Vercel</span>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce