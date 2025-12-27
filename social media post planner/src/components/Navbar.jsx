import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b-4 border-b-[#d8a406]">
      <div className="max-w-7xl mx-auto px-8 py-1.5">
        <div className="flex items-center justify-between">
          {/* === Logo === */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex flex-row items-center space-x-2">
              <div className="w-[60px] h-[60px]">
                <img src="/images/postify.svg" alt="logo" />
              </div>
              <div>
                <span className="text-[#4f0581] font-extrabold text-3xl group-hover:text-[#efac02] transition-colors duration-300">
                  Post
                </span>
                <span className="text-[#efac02] font-extrabold text-3xl group-hover:text-[#4f0581] transition-colors duration-300">
                  ify
                </span>
              </div>
            </div>
          </Link>

          {/* === Navigation Links === */}
          <div>
            <nav className="flex justify-center items-center space-x-4 bg-transparent py-4">
              <Link
                to="/"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Home
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

              <Link
                to="/about"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/about") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                About
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/about") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

              {/* <Link
                to="/dashboard"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/dashboard") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Dashboard
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/dashboard") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link> */}

              <Link
                to="/services"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/services") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Services
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/services") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

               <Link
                to="/contact"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/contact") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Contact Us
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/contact") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

              <Link
                to="/registration"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/registration")
                    ? "text-[#efac02]"
                    : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Registration
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/registration") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

              <Link
                to="/login"
                className={`relative px-4 py-2 rounded-full text-lg font-bold transition-all duration-300 ${
                  isActive("/login") ? "text-[#efac02]" : "text-[#4f0581]"
                } hover:opacity-80`}
              >
                Login
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#efac02] rounded-full transform transition-transform duration-300 origin-left ${
                    isActive("/login") ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </Link>

            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
