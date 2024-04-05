import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        
        loginUser(email, password)
          .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            
            // Navigate After Login
            navigate(location.state ? location.state : '/')
          })

          .catch(error => {
            console.error("Login Error", error)
          })
    }

  return (
    <div>
      <Navbar />
      <dir>
        <h3 className="text-3xl font-bold text-center mt-6">Please Login</h3>
        <form onSubmit={handleSubmit} className="sm:w-1/2 md:w-3/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </dir>
      <p className="mt-7 text-center">You Do not have account ? <Link to='/register' className="text-blue-500 font-bold">Register</Link></p>
    </div>
  );
};

export default Login;
