import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './LayoutAdmin.css';

function LayoutAdmin() {
  return (
    <div className="layout-admin">
      <Sidebar />
      <div className="admin-main">
        <Header />
        <div className="admin-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
