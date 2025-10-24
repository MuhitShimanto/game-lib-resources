import { Link, NavLink } from "react-router";
import Logo from "/logo2.png";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import firebaseErrorHandler from "../../utilities/firebaseErrorHandler";

const navMenu = [
  <li key={1}>
    <NavLink to="/">Home</NavLink>
  </li>,
  <li key={2}>
    <NavLink to="/all-games">Explore</NavLink>
  </li>,
  <li key={3}>
    <NavLink to="/upcoming">Upcoming</NavLink>
  </li>,
  <li key={4}>
    <NavLink to="/about-us">About Us</NavLink>
  </li>,
];

const Navbar = () => {
  const { user, setUser, handleSignOut } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleSignoutFunc = () => {
    handleSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        toast.error(firebaseErrorHandler(error));
      });
  };
  return (
    <div className="bg-black ">
      <div className="max-w-[1600px] mx-auto navbar shadow-sm py-3">
        <div className="navbar-start py-3">
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
          {user ? (
            <div className="dropdown dropdown-center z-999">
              <div tabIndex={0} role="button" className="m-1 h-[50px] w-[50px]">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.freepik.com/256/13127/13127040.png?semt=ais_white_label"
                  }
                  className="h-full w-full object-cover rounded-full border-2 border-primary cursor-pointer"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-primary text-primary-content rounded-box z-1 min-w-32 p-2 shadow-sm"
              >
                <li className="py-2 px-4 mx-auto font-medium cursor-pointer hover:bg-white/30">
                  My Profile
                </li>
                <li
                  onClick={handleSignoutFunc}
                  className="py-2 px-4 mx-auto font-medium cursor-pointer hover:bg-white/30"
                >
                  Sign Out
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth" className="btn bg-primary hover:bg-primary/80 text-primary-content">
                Sign in
              </Link>
              <Link to="/auth/sign-up" className="hidden md:flex btn bg-white hover:bg-white/80 text-primary-content">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// (
//             <div className="h-[50px] w-[50px] overflow-hidden">
//               <img
//                 src={
//                   user.photoURL ||
//                   "https://cdn-icons-png.freepik.com/256/13127/13127040.png?semt=ais_white_label"
//                 }
//                 className="h-full w-full object-cover rounded-full border-2 border-primary cursor-pointer"
//                 onClick={handleSignoutFunc}
//               />
//             </div>
//           )
