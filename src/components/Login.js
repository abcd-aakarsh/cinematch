import { useState } from "react";
import bg from ".././assets/bg.jpg";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };
  return (
    <>
      <div>
        <img
          src={bg}
          className="w-full h-screen absolute bg-gradient-to-b from-black"
          alt="bg"
        />
      </div>
      <form className="absolute w-4/6 sm:w-3/5 md:w-1/3 xl:w-3/12 right-0 left-0 rounded-lg bg-gray-800 mx-auto my-32 bg-opacity-80 px-5 py-4 ">
        <h1 className="text-white text-3xl mb-4 font-semibold text-center">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        <h3 className="text-white text-lg mb-4 font-semibold text-center">
          {signInForm
            ? "Enter your Movieflix email address and password."
            : "Create Movieflix account using Email or Phone"}
        </h3>
        {!signInForm && (
          <input
            type="text"
            placeholder=" FullName"
            className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder={signInForm ? "Email Address" : "Email Address or Phone"}
          className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
        />
        {signInForm && (
          <p className="w-full text-left text-blue-600 hover:text-purple-700">
            Forgot Password?
          </p>
        )}

        <button className="p-2 my-2 ( lg:p-4 my-4) left-0 right-0 rounded-lg bg-yellow-400 w-3/5 hover:bg-yellow-500">
          Sign In
        </button>
        <p
          className="w-full text-center cursor-pointer text-white hover:text-purple-700"
          onClick={toggleSignIn}
        >
          {signInForm
            ? "New to Movieflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </>
  );
};
export default Login;
