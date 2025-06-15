import React from 'react';

const NavNotice = () => {
  return (
    <li className="relative group">
      <button className="relative">
        <i className="bi bi-bell text-xl"></i>
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
      </button>

      <ul className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded hidden group-hover:block">
        <li className="p-2 border-b font-semibold">You have 4 notifications</li>
        {['30 min ago', '2 hrs ago', '4 hrs ago', '1 day ago'].map((time, index) => (
          <li key={index} className="p-2 hover:bg-gray-100">
            <div className="flex items-start gap-2">
              <i className="bi bi-exclamation-circle text-warning"></i>
              <div>
                <p className="font-semibold">Lorem Ipsum</p>
                <p className="text-sm text-gray-500">Some notification text.</p>
                <p className="text-xs text-gray-400">{time}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavNotice;
