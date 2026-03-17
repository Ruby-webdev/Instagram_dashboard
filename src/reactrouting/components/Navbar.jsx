import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='flex w-full h-[78px] bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-around p-5'>
    <div className=' font-extrabold p-4 w-[15%] flex items-center justify-center tracking-widest text-2xl text-blue-700 hover:cursor-pointer'><Link to="/">LOGO</Link></div>
    <div className=' w-[40%] h-full '>
        <ul className='flex justify-around items-center p-3 text-white'>
            <li className='text-white font-semibold capitalize cursor-pointer '><NavLink to="/home">home</NavLink></li>
            <li className='text-white font-semibold capitalize cursor-pointer '><NavLink to="/about">about</NavLink></li>
            <li className='text-white font-semibold capitalize cursor-pointer '><NavLink to="/projects">projects</NavLink></li>
            <li className='text-white font-semibold capitalize cursor-pointer '><NavLink to="/contact">contact</NavLink></li>
        </ul>
    </div>
    <button className=' px-7 py-3 rounded-lg cursor-pointer bg-amber-100 hover:bg-blue-600 hover:text-white'><Link to="/login">Login</Link></button>
   </div>
  )
}

export default Navbar