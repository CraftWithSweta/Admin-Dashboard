

import React from 'react';
import NavNotice from './NavNotice';
import NavMsg from './NavMsg';
import NavAvatar from './NavAvatar';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <NavNotice />
        <NavMsg />
        <NavAvatar />
      </ul>
    </nav>
  );
};

export default Navbar;
