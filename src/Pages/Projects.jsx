import React from 'react'
import { useParams } from 'react-router-dom'
import BlogApp from '../Components/BlogApp'
import ShoppingCart from '../Components/ShoppingCart'

const Projects = () => {
    const {subpages} = useParams()
    return (
            <div className=''>
                {subpages === "" ? <BlogApp /> : ""}
                {subpages === "blogapp" ? <BlogApp /> : ""}
                {subpages === "shoppingcart" ? <ShoppingCart /> : ""}
            </div>
    )
}

export default Projects