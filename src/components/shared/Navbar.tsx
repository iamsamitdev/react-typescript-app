/* eslint-disable */
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-100 sm:flex sm:justify-between sm:px-4 sm:py-4 sm:items-center fixed w-full">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl font-semibold">REACT~TW</span>
        </NavLink>

        <nav className="px-2 pt-2 pb-4 hidden sm:flex md:mr-auto">
          <NavLink
            to="/"
            href="#"
            className="mt-1 py-1 block text-grey-900 font-semibold rounded px-2 hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            href="#"
            className="mt-1 py-1 block text-grey-900 font-semibold rounded px-2 hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/service"
            href="#"
            className="mt-1 py-1 block text-grey-900 font-semibold rounded px-2 hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
          >
            SERVICE
          </NavLink>

          <NavLink
            to="/contact"
            href="#"
            className="mt-1 py-1 block text-grey-900 font-semibold rounded px-2 hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
          >
            CONTACT
          </NavLink>
        </nav>

        <nav className="md:ml-auto px-2 pt-2 pb-4 hidden sm:flex">
          <NavLink
            to="/login"
            className="inline-flex text-gray-600 border-indigo-500 border-opacity-50 border-2 py-1 px-3 hover:border-indigo-600 rounded text-sm"
          >
            LOGIN
          </NavLink>
          <NavLink
            to="/register"
            className="inline-flex text-gray-600 border-indigo-500 border-opacity-50 border-2 ml-2 py-1 px-3 hover:border-indigo-600 rounded text-sm"
          >
            REGISTER
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
