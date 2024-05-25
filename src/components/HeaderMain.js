import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderMain = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="bg-gray-800 pr-8 w-full flex items-center justify-between px-4">
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
    </>
  );
};

export default HeaderMain;
