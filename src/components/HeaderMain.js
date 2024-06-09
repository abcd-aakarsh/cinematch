import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const HeaderMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {user ? (
        <div className="bg-gray-950 pr-8 w-full flex items-center justify-between px-4">
          <div>
            <img src={logo} alt="logo" className="w-48 " />
          </div>

          <div className="flex gap-6 items-center">
            <p className="text-white font-semibold">User: {user.displayName}</p>
            <button
              onClick={handleSignout}
              className="bg-red-700 font-bold text-white px-4 py-1  items-center flex hover:bg-white hover:text-black  rounded-xl"
            >
              Signout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img src={logo} alt="logo" className="absolute z-10 w-48 " />
        </div>
      )}
    </>
  );
};

export default HeaderMain;
