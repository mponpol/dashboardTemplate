import { Outlet } from 'react-router-dom';
import './LayoutAuth.css';

function LayoutAuth() {
  return (
    <div className="layout-auth">
      <Outlet />
    </div>
  );
}

export default LayoutAuth;
