import { Link } from 'react-router-dom';
import './Sidebar.css';
import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage3Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
} from 'react-icons/ri';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h1>
          Admin<span>.</span>
        </h1>
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <RiBarChart2Line className="sidebar-icon" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              <RiEarthLine className="sidebar-icon" /> Social Media
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              <RiMessage3Line className="sidebar-icon" /> Messages
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              <RiCalendarTodoLine className="sidebar-icon" /> Schedule
            </Link>
          </li>
        </ul>
      </div>
      <nav className="sidebar-bottom">
        <Link to="/" className="sidebar-link">
          <RiLogoutCircleRLine className="sidebar-icon" /> Log out
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
