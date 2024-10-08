import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className='side-bar'>
        <ul className='list'>
            <li className='menu-item'>
                <NavLink to="child-parent-cb">
                    Child to Parent - Cb
                </NavLink>
            </li>
            <li className='menu-item'>
                <NavLink to="child-parent-ss">
                Child to Parent - State Shifting
                </NavLink>
            </li>
            <li className='menu-item'>
                <NavLink to="">
                   Component 3 
                </NavLink>
            </li>
            <li className='menu-item'>
                <NavLink to="">
                   Component 4 
                </NavLink>
            </li>
            <li className='menu-item'>
                <NavLink to="">
                   Component 5 
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar