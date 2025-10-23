import { Link, NavLink } from "react-router";
import Logo from "/logo2.png";

const navMenu = [
  <li key={1}><NavLink to="/">Home</NavLink></li>,
  <li key={2}><NavLink to="/all-games">Explore</NavLink></li>,
  <li key={3}><NavLink to="/upcoming">Upcoming</NavLink></li>,
  <li key={4}><NavLink to="/about-us">About Us</NavLink></li>,
];

const Navbar = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-[1600px] mx-auto navbar shadow-sm py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={Logo} className="h-[45px]" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu}</ul>
          </div>
          <Link to="/auth" className="btn bg-primary text-primary-content">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
