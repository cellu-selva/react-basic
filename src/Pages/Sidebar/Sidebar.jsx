import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className='side-bar'>
        <ul className='list'>
            <li className='menu-item'>
                <NavLink to="child-parent-data">
                    Child to Parent
                </NavLink>
            </li>
            <li className='menu-item'>
                <NavLink to="">
                   Component 2 
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