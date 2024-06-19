import React from 'react'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='w-[80%] md:w-[100%] flex justify-center flex-col py-10 '>
        <Sidebar />
    </div>
  )
}

export default Home