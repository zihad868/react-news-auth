import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const photoUrl = form.get('photo')
   
    createUser(email, password)
       .then(userCredential => {
        const user = userCredential.user;
        console.log("User Create Success",user);
       })
       .catch(error => {
        console.error("User create fail", error)
       })
  }

  return (
    <div>
      <Navbar />
      <dir>
        <h3 className="text-3xl font-bold text-center mt-6">Please Register</h3>
        <form onSubmit={handleRegister} className="sm:w-1/2 md:w-3/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
      <p className="mt-7 text-center">
        Already have an account ?{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
