import React from 'react';
import profileimg from '../../assets/fab.png';

const NavAvatar = () => {
  return (
    <li className="relative group">
      <button className="flex items-center space-x-2">
        <img src={profileimg} className="w-8 h-8 rounded-full" />
        <span className="hidden md:inline">Profile</span>
      </button>

      <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
        <li className="px-4 py-2 border-b">
          <h6 className="font-semibold">Sweta Aryal</h6>
          <span className="text-sm text-gray-500">Web Developer</span>
        </li>
        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">My Profile</a></li>
        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Need Help?</a></li>
      </ul>
    </li>
  );
};

export default NavAvatar;
