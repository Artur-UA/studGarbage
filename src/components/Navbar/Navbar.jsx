import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return <nav className='nav'>
        <div>
            {/* <a href='/profile'>Profile</a> */}
            <NavLink to ='/profile'>Profile</NavLink>
        </div>
        <div>
            {/* <a href='/message'>Messages</a> */}
            <NavLink to ='/message'>Messages</NavLink>
        </div>
        <div>
            <NavLink to ='/news'>News</NavLink>
        </div>
        <div>
            <NavLink to ='/music'>Music</NavLink>
        </div>
        <div>
            <NavLink to ='/setting'>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;