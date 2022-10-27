import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import logo from "../../assets/images/logo1.png";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import "./navbar.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let activeStyle = {
    textDecoration: "underline",
  };

  const handlerLogOut = () => {
    logOut().then(() => {});
    toast
      .success("User Logout.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bg-slate-500 shadow-lg">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Classroom"
          title="Classroom"
          className="inline-flex items-center"
        >
          <img className="rounded shadow-lg" src={logo} alt="./" />
          <span className="ml-2 text-3xl font-bold tracking-wide text-orange-400 ">
            Classroom
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/courses"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              aria-label="Courses"
              title="Courses"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              aria-label="FAQ"
              title="FAQ"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              aria-label="Blog"
              title="Blog"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <p> Blog</p>
            </NavLink>
          </li>
          <li>
            <label class="rocker rocker-small">
              <input type="checkbox" />
              <span class="switch-left">Light</span>
              <span class="switch-right">Dark</span>
            </label>
          </li>
          <li>
            {user?.photoURL ? (
              <img
                title={user?.displayName}
                className="rounded-full"
                style={{ height: "30px" }}
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUser></FaUser>
            )}
          </li>
          <li>
            {user?.uid ? (
              <div className="">
                <span title={user?.displayName}>{user?.displayName}</span>
                <button
                  className="btn btn-active btn-ghost mx-2"
                  onClick={handlerLogOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <li>
                  <button className="btn btn-active btn-ghost mr-2">
                    <Link to="/login">Login</Link>
                  </button>

                  <button className="btn btn-active btn-ghost">
                    <Link to="/signup">SignUp</Link>
                  </button>
                </li>
              </>
            )}
          </li>
        </ul>

        <div className="lg:hidden  ">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full ">
              <div className="p-5 bg-slate-500 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink
                      to="/"
                      aria-label="Classroom"
                      title="Classroom"
                      className="inline-flex items-center"
                    >
                      <img className="rounded shadow-lg" src={logo} alt="./" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Classroom
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 ">
                    <li>
                      <NavLink
                        to="/courses"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        aria-label="Courses"
                        title="Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        aria-label="FAQ"
                        title="FAQ"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p> Blog</p>
                      </NavLink>
                    </li>
                    <li>
                      {user?.photoURL ? (
                        <img
                          className="rounded-full"
                          style={{ height: "30px" }}
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUser></FaUser>
                      )}
                    </li>
                    <li>
                      {user?.uid ? (
                        <div className="">
                          <li>{user?.displayName}</li>
                          <button
                            className="btn btn-active btn-ghost"
                            onClick={handlerLogOut}
                          >
                            Logout
                          </button>
                        </div>
                      ) : (
                        <>
                          <li>
                            <button className="btn btn-active btn-ghost">
                              <Link to="/login">Login</Link>
                            </button>
                          </li>
                          <li>
                            <button className="btn btn-active btn-ghost">
                              <Link to="/signup">SignUp</Link>
                            </button>
                          </li>
                        </>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
