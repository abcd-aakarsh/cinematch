import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Headerrr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
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
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex  items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="w-32 md:w-48" />
            </Link>
          </div>
          {isMobile ? (
            <div className="flex items-center ">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-2 py-2 rounded-md text-sm font-medium"
              >
                <FaHome className="inline-block " /> Home
              </Link>
              <Link
                to="/search"
                className="text-white hover:text-gray-300 px-1 py-2 rounded-md text-sm font-medium"
              >
                <FaSearch className="inline-block " /> Search
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaHome className="inline-block mr-1" /> Home
              </Link>
              <Link
                to="/search"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaSearch className="inline-block mr-1" /> Search
              </Link>
              {user && (
                <div className="flex items-center gap-6">
                  <p className="text-white text-sm font-medium">
                    User: {user.displayName}
                  </p>
                  <button
                    onClick={handleSignout}
                    className="bg-red-600 font-semibold text-white px-4 py-1 flex items-center hover:bg-white hover:text-black rounded-full"
                  >
                    Signout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headerrr;
