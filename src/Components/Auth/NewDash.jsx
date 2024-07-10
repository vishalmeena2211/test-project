import { useState } from "react";
import Footer from "../Footer";
import { NavLink, Outlet } from "react-router-dom"

import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-white font-bold text-xl">
                Logo
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-10 space-x-4">
                <NavLink
                  to="/dashboard"
                  activeClassName="text-gray-300"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/login"
                  activeClassName="text-gray-300"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  activeClassName="text-gray-300"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  SignUp
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {showMenu ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {showMenu && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/dashboard"
                activeClassName="bg-gray-900 text-white"
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/login"
                activeClassName="bg-gray-900 text-white"
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName="bg-gray-900 text-white"
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                SignUp
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}


function NewDashboards() {

  return (
    <div className="flex flex-col bg-transparent h-screen w-full">
      {/* Navbar */}
      <Nav />
      {/* Render Current Page */}
      <div className="flex justify-between py-0 w-full h-full item-center">
        <div className="flex justify-center items-center w-full">
          <Outlet />
        </div>
        <div className=" h-[600px] hidden md:block w-3/5 overflow-hidden rounded-2xl">
          <div className="flex align-center justify-center w-full relative overflow-hidden transform rotate-12 translate-x-12 -translate-y-12 ">
            <img src="https://res.cloudinary.com/dc7entfb0/image/upload/q_60/v1/prabhotsav/d8ne9xc5kqtirhab680a" alt="" className="h-[900px] object-cover w-full transform -rotate-12 translate-x-8 -translate-y-20 origin-bottom-right" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewDashboards;
