import { useRef, useState } from "react";

import bgm from ".././assets/bgm.jpg";
import { checkValid } from "../utils/validate";
import HeaderMain from "./HeaderMain";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);

  const dispatch = useDispatch();
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };
  const handleSubmit = () => {
    const message = checkValid(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!signInForm) {
      //sign up logic hai ye

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
    if (signInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <HeaderMain />
        <img
          src={bgm}
          className="w-full h-screen absolute bg-gradient-to-b from-black"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 mx-auto px-6 h-1/2 py-8 lg:w-4/6 sm:w-3/5 md:w-1/3 xl:w-3/12 right-0 top-1/4 -translate-y-1/4 left-0 rounded-lg bg-gray-800 my-32 bg-opacity-80  "
      >
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
            ref={name}
            type="text"
            placeholder=" FullName"
            className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={signInForm ? "Email Address" : "Email Address or Phone"}
          className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 ( lg:p-4 my-4) w-full rounded-lg"
        />

        {signInForm && (
          <p className="w-full text-left text-blue-600 hover:text-purple-700">
            Forgot Password?
          </p>
        )}
        <p className=" text-red-800">{errorMessage}</p>
        <button
          onClick={handleSubmit}
          className="p-2 my-2 ( lg:p-4 my-4) left-0 right-0 rounded-lg bg-yellow-400 w-3/5 hover:bg-yellow-500"
        >
          {signInForm ? "Sign In" : "Sign Up"}
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
