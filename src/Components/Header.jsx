import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
// import { logout } from '../../redux/Slices/authSlice';
// import { removeUser } from '../../redux/Slices/profileSlice';
// import { useDispatch } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";


export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    // Clear token from local storage
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // sessionStorage.clear();
    // dispatch(logout());
    // dispatch(removeUser());
    // navigate('/')
  };

  return (
    <>
      <div className="h-12 mt-4 mb-2 md:px-4 md:gap-10 flex items-center border-b border-gray-200 justify-between">
        <h1 className="h-12 md:w-30 w-full place-items-start flex items-center">
          Home / {pathname.split('/')[pathname.split('/').length - 1]}
        </h1>

        <div className="flex items-center md:gap-2 md:mr-2">
          <div className="relative hidden md:flex">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none border bg-transparent border-gray-400 w-[15rem] h-10 pl-11 pr-4  rounded-lg"
            />
          </div>

          <div className="relative">
            <div
              className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
              onClick={toggleProfileMenu}
            >
              <span className="sr-only">Open user menu</span>
              <FaUserCircle className='text-3xl bg-white' />

            </div>
            {isProfileMenuOpen && (
              <div className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  onClick={() => navigate('/dashboard/user')}
                  className=" rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                >
                  Your Profile
                </div>
                <div
                  onClick={() => navigate('/auth')}
                  className=" rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                >
                  Settings
                </div>
                <button onClick={() => handleSignOut()}
                  className=" rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
