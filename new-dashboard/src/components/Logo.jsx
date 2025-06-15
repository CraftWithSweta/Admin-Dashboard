import React from 'react'
import './logo.css'

//icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Logo = () => {
  const toggleSidebar = () => {
    document.body.classList.toggle('sidebar-open');
  };

  return (
    <div className="flex items-center gap-2">
      <a href="/" className="text-xl font-bold no-underline ">Admin Dashboard</a>
      <i className="bi bi-list cursor-pointer text-2xl" onClick={toggleSidebar}></i>
    </div>
  );
};

export default Logo;
