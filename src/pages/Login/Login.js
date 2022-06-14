import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "./../../components/Loading/Loading";
import auth from "./../../firebase.init";
import Sectiontille from "./../../components/Loading/Sectiontille";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [getUser] = useAuthState(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { name: displayName, email, password };
    console.log(user);
    await signInWithEmailAndPassword(email, password);
    e.target.reset();
  };
  const handlePassReset = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Reset password email has been sent");
    } else {
      toast.error("Type your email first");
    }
  };
  // navigate
  useEffect(() => {
    if (getUser) {
      navigate(from, { replace: true });
    }
  }, [getUser, from, navigate]);
  //
  if (loading || sending) {
    return <Loading />;
  }
  return (
    <div>
      <Sectiontille>Admin Login</Sectiontille>
      <div className="full-form bg-info py-4 w-[95vw] md:w-[70vw] mx-auto">
        <form onSubmit={handleSignUp}>
          <div className="grid xl:grid-cols-1 xl:gap-6"></div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 er-blue-500 focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="btn hero-btn mb-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>

          {error && (
            <p>
              <small className="text-error">{error.message}</small>
            </p>
          )}
          <p>
            <small>
              Forgot password?{" "}
              <span
                onClick={handlePassReset}
                className="text-red-500 cursor-pointer"
              >
                {" "}
                Click here
              </span>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
