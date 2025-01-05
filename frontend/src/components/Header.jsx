// Importing NavLink from React Router to create navigation links
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="bg-black text-lg">
        <ul className="flex font-medium">
          <li className="m-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 ${isActive ? "text-gray-400" : "text-gray-300"} hover:text-blue-400`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 ${isActive ? "text-gray-400" : "text-gray-300"} hover:text-blue-400`
              }
            >
              About
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 ${isActive ? "text-gray-400" : "text-gray-300"} hover:text-blue-400`
              }>
              Contact
            </NavLink>
            </li>
            <li className="m-3">
            <NavLink 
                to="/register" 
                className={({isActive}) => `py-2 ${isActive ? "text-gray-400" : "text-gray-300"} hover:text-blue-400`}>
                    Register
            </NavLink>
            </li>
            <li className="m-3">
            <NavLink 
                to="/login" 
                className={({isActive}) => `py-2 ${isActive ? "text-gray-400" : "text-gray-300"} hover:text-blue-400`}>
                    Log In
            </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;