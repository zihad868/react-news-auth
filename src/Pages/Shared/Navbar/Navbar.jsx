import { Link, NavLink } from "react-router-dom";
import userPhoto from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
       .then(() => {
        console.log('user Logout')
        setUser(null)
       })
       .catch(error => {
        console.error("Logout Error", error);
       })
  }

    const navLinks = 
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/career'>Career</NavLink></li>
    </>


  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center justify-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={userPhoto} alt="" />
            {
              user ? 
                 <Link onClick={handleLogout} className="btn">Logout</Link>
                 :
                 <Link to='/login' className="btn">Login</Link>
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
