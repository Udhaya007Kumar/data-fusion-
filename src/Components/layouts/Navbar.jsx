import React, { useState } from 'react';
import { Link } from 'react-router';
import { Search } from './Search';
import {ModeToggle} from './Darkmode/mode-toggle';
import {UserNav} from './user-nav';




const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   
    return (
        <div>
            <div className="p-8 font-geist">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-6 mr-5">
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/connectionmang">Connections Management</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/Projectdetails">Projectdetails</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/sourceselection">Sourceselection</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/DataSourcemagement">DataSourceManagement</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/loginv1">Login</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden  ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Search, Theme Toggle, and User Nav */}
        <div className="hidden md:flex gap-2 ">
          <Search />
          <ModeToggle />
          <span className='p-2 mr-2'><UserNav /></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 rounded-lg p-4">
          <ul className="space-y-4">
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/connectionmang">Connections Management</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/Projectdetails">Projectdetails</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/sourceselection">Sourceselection</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/DataSourcemagement">DataSourceManagement</Link>
            </li>
            <li className="text-sm font-medium transition-colors hover:text-primary">
              <Link to="/loginv1">Login</Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-5">
            <Search />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      )}
    </div>
       
            
            
            
            
        </div>
    
        
     
    );
};

export default Navbar;