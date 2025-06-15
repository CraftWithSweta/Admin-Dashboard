import React from 'react';
import './header.css';
import Logo from './Logo';
//icons

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Searchbar from './Searchbar';
import Navbar from './Navigation/Navbar';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow flex items-center justify-between px-4 py-2">
      <Logo />
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default Header;

