import React from 'react'
import BlogApp from './BlogApp'
import { Link, useParams } from 'react-router-dom'
import Error from './Error'
import ShoppingCart from './ShoppingCart'
import Projects from '../Pages/Projects'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxFill, RiGitBranchFill, RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiMailFill, RiMailLine } from 'react-icons/ri'
import '../Styles/icons.css'
import { FaDownLong, FaDownload } from 'react-icons/fa6'
import { SiHyperskill } from 'react-icons/si'
const Main = () => {
  const { subpages } = useParams()
  return (
    <div className='bg-white  lg:min-w-[45%] lg:max-w-[45%] md:min-w-[57%] md:max-w-[57%] border overflow-hidden rounded-md shadow-xl'>
      {
        subpages && (
          <Projects />
        )
      }
      {
        (!subpages) && (
          <div className='w-full  lg:p-6 md:px-4 py-10 bg-gray-900 h-full relative'>
            <div className='flex gap-4 items-center justify-center flex-wrap md:px-0 px-6'>
              <Link target={'_blank'} to={'https://www.linkedin.com/in/keyur-bhimani-0910a3309'} className='p-5 border shadow-lg bg-white rounded-md cursor-pointer icons'><RiLinkedinBoxFill className='text-5xl fill-[#0072b1] fill' /></Link>
              <Link target={'_blank'} to={'https://github.com/Keyur200'} className='p-5 shadow-lg bg-white border rounded-md cursor-pointer icons-1'><RiGithubFill className='text-5xl fill-[#2b3137] fill-1' /></Link>
              <button onClick={() => window.location = 'mailto:keyurbhimani2000@gmail.com'} className='p-5 shadow-lg border bg-white rounded-md cursor-pointer icons-3'><RiMailLine className='text-5xl fill-[#c71610] fill-3' /></button>
              <span className='p-5 shadow-lg bg-white border  rounded-md cursor-pointer icons-2'><RiInstagramFill className='text-5xl fill-[#CA3668] fill-2' /></span>
            </div>
            <div className='flex items-center justify-center py-10'>
              <button className='dw bg-white py-3 px-6 rounded-lg bg-gradient-to-b from-[#3375d2] to-[#41c5e9] shadow-lg text-white' ><Link target='_blank' to={'../Resume/Keyur.pdf'} download={true} className='flex items-center gap-3 text-xl hover:scale-110 transition-transform duration-500' >Download CV <FaDownload /></Link></button>
            </div>
            <span className='absolute bg-sky-500 w-8 h-8 rounded-full blur-md md:top-[165px] top-[280px] md:left-16 left-6'></span>
            <span className='absolute bg-purple-500 w-8 h-8 rounded-full blur-md md:top-[165px] top-[280px] md:right-16 right-6'></span>
            <div className='flex flex-col gap-6 text-white lg:items-center lg:px-0 md:px-0 px-8'>
              <p className='flex gap-3 items-center text-lg font-semibold'><SiHyperskill />Skills</p>
              <div className='flex gap-5 lg:flex-row md:flex-row flex-col'>
                <div className='flex flex-wrap gap-3 lg:min-w-[190px] lg:max-w-[190px] md:min-w-[175px] md:max-w-[175px]  relative text-xs border border-gray-600 rounded-md px-5 py-3'>
                  <p className='text-[15px] w-full flex gap-3 items-center mb-2'><span className='w-4 h-4 bg-green-500 rounded-full'></span>Frontend</p>
                  <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>HTML</span>
                  <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>CSS</span>
                  <span className='py-1 px-3 border h-[25px] rounded-md border-yellow-500'>JAVASCRIPT</span>
                  <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>REACT JS</span>
                  <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>Tailwind CSS</span>
                  <span className='absolute w-[100px] h-[50px] blur-3xl top-24 left-20 bg-blue-400'></span>
                </div>
                <div className='flex gap-5 flex-col'>
                  <div className='flex flex-wrap gap-3 lg:min-w-[270px] lg:max-w-[270px] md:min-w-[230px] md:max-w-[230px] relative text-xs border border-gray-600 rounded-md px-5 py-4'>
                    <p className='text-[15px] w-full flex gap-3 items-center mb-2'><span className='w-4 h-4 bg-yellow-500 rounded-full'></span>Backend</p>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>Node JS</span>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-yellow-500'>Express JS</span>
                    <span className='absolute w-[100px] h-[50px] blur-3xl top-4 left-20 bg-purple-400'></span>
                  </div>
                  <div className='flex flex-wrap gap-3 lg:min-w-[270px] lg:max-w-[270px] md:min-w-[230px] md:max-w-[230px] relative text-xs border border-gray-600 rounded-md px-5 py-3'>
                    <p className='text-[15px] w-full flex gap-3 items-center mb-2'><span className='w-4 h-4 bg-yellow-500 rounded-full'></span>Database and Others</p>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-green-500'>MongoDB</span>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-yellow-500'>Cloudinary</span>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-yellow-500'>Git/Github</span>
                    <span className='py-1 px-3 border h-[25px] rounded-md border-yellow-500'>Vercel</span>
                    <span className='absolute w-[100px] h-[50px] blur-3xl top-10 right-3 bg-blue-400'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Main