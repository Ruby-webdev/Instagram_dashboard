import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <div className='h-auto w-[80%] flex flex-col  gap-3 text-xs text-gray-600 p-5 tracking-wider'>
            <p>
                <NavLink>About.</NavLink>
                <NavLink> Help.</NavLink>
                <NavLink> Press.</NavLink>
                <NavLink> API.</NavLink>
                <NavLink> Privacy.</NavLink>
                <NavLink> Terms. </NavLink>
                <NavLink>Locations.</NavLink>
                <NavLink> Language.</NavLink>
                <NavLink>Meta Verified.</NavLink>
            </p>
            <span> © 2026 Instagram from Meta</span>

        </div>
    )
}

export default Footer