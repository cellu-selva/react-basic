import React from 'react'
import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="side-bar-container">
        <Sidebar/>
      </div>
      <div className="dashboard-content">
        {/* Dashboard */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard