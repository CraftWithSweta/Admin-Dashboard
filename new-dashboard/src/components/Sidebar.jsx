import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-full bg-white shadow-md p-4 z-20">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-100 px-3 py-2 no-underline rounded flex items-center gap-2">
          <i className="bi bi-house-door"></i> <span>Dashboard</span>
        </Link>
        <Link to="/users" className="hover:bg-gray-100 px-3 py-2 no-underline rounded flex items-center gap-2">
          <i className="bi bi-people"></i> <span>Users</span>
        </Link>
        <Link to="/reports" className="hover:bg-gray-100 px-3 py-2 no-underline rounded flex items-center gap-2">
          <i className="bi bi-bar-chart"></i> <span>Reports</span>
        </Link>
        <Link to="/settings" className="hover:bg-gray-100 px-3 py-2 no-underline rounded flex items-center gap-2">
          <i className="bi bi-gear"></i> <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
