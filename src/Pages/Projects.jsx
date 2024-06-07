import React from 'react'
import { useParams } from 'react-router-dom'
import BlogApp from '../Components/BlogApp'
import ShoppingCart from '../Components/ShoppingCart'
import Ecommerce from '../Components/Ecommerce'

const Projects = () => {
    const {subpages} = useParams()
    return (
            <div className=''>
                {subpages === "ecommerce" ? <Ecommerce /> : ""}
                {subpages === "blogapp" ? <BlogApp /> : ""}
                {subpages === "shoppingcart" ? <ShoppingCart /> : ""}
            </div>
    )
}

export default Projects