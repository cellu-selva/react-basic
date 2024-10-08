import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ menus }) => {
  return (
    <div className="side-bar">
      <ul className="list">
        {menus.map((menu) => (
          <li className="menu-item" key={menu.to}>
            <NavLink to={menu.to}>{menu.name}</NavLink>
          </li>
        ))}
        {/* <li className="menu-item">
          <NavLink to="child-parent-cb">Child to Parent - Cb</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="child-parent-ss">Child to Parent - State Shifting</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="child-parent-ref">Child to Parent - Ref</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="child-parent-event">Child to Parent - Event</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="child-parent-context">Child to Parent - Context</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="child-parent-redux">Child to Parent - Redux</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
