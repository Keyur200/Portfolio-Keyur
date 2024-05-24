import React, { useState } from 'react'
import { RiBloggerLine, RiShoppingCart2Line } from 'react-icons/ri'
import { projects } from '../project'
import { Link, useParams } from 'react-router-dom'
import Main from './Main'
import Footer from './Footer'
import TypeWriter from 'typewriter-effect'
const Sidebar = () => {
    const { subpages } = useParams();
    function linkClasses(type = null) {
        let classes = "flex flex-col gap-4 border-2 border-gray-400 hover:text-purple-500 hover:border-purple-500  py-2 px-5 rounded-lg cursor-pointer  transition-all duration-500 "
        if (type === subpages) {
            if(subpages === "blogapp"){
                return classes += "bg-gradient-to-r from-blue-600 py-2.3 via-sky-500 w-[115%]   to-sky-300 overflow-hidden hover:text-white text-white  border-sky-500 hover:border-sky-500"
            }
            if(subpages === "shoppingcart"){
                return classes += "bg-gradient-to-r from-indigo-700 py-2.3 via-purple-600 w-[115%] to-purple-400 overflow-hidden hover:text-white text-white  border-purple-500 hover:border-purple-500"
            }
        }
        return classes;
    }
    return (
        <div className='w-[100%] lg:w-[90%] md:w-[100%]  flex  sm:flex-col justify-center lg:gap-10 md:gap-5 '>
        <div className={`${subpages ? "w-[80%]" : "w-[100%]"} md:w-[100%] flex justify-center lg:flex-row md:flex-row flex-wrap lg:gap-10 md:gap-5 sm:gap-5`}>
            <div className='w-[100%] lg:w-[27%] md:w-[38%] border rounded-md shadow-xl bg-gray-800 text-white relative mb-8 md:mb-0'    >
                <div className=' py-10 px-6 overflow-hidden'>
                    <Link to={'/'} className='flex items-center justify-center flex-col gap-4'>
                        <div className='border-4 border-white rounded-full p-1 z-50 mt-14'>
                            <img src="./images/keyur011.jpg" className='rounded-full z-50  object-cover w-[150px] h-[150px] ' alt="" />
                        </div>
                        <span className='text-xl font-bold'>Keyur Bhimani</span>
                        <div>
                            <p className='flex gap-2'>I am <p className='text-red-500 font-semibold'><TypeWriter options={{loop:true,autoStart: true}} onInit={(typewriter)=>{
                                typewriter.typeString("Web Developer.").pauseFor(2000).deleteAll().typeString("Web Designer.").pauseFor(2000).deleteAll().typeString("Mern Stack Devloper.").pauseFor(2000).deleteAll().start()
                            }} /></p></p>
                        </div>
                    </Link>
                    <hr className='border-2 my-6 border-slate-600 border-dashed' />
                    <div className='flex  flex-col justify-items-start  text-2xl font-bold gap-4'>
                        <h2 className='mb-3'>Projects</h2>
                        <Link className={linkClasses('blogapp')} to={'/blogapp'} id='safe'>
                            <div className='text-md flex gap-3 items-center'>
                                <RiBloggerLine />
                                <p className='text-lg'>Blog App</p>
                            </div>
                        </Link>
                        <Link className={linkClasses('shoppingcart')} to={'/shoppingcart'} >
                            <div className='text-md flex gap-3 items-center '>
                                <RiShoppingCart2Line />
                                <p className='text-lg'>Shopping Cart</p>
                            </div>
                        </Link>

                    </div>
                </div>
                {/* <img src="../images/imag.png" className='absolute top-0 border-b-4 border-b-white z-10' alt="" /> */}
            </div>
            <Main />
        </div>
        </div>

    )
}

export default Sidebar