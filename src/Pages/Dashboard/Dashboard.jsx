import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = ({ menus }) => {
  return (
    <div className="dashboard-container">
      <div className="side-bar-container">
        <Sidebar menus={menus} />
      </div>
      <div className="dashboard-content">
        {/* Dashboard */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
