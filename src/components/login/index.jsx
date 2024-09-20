import { useEffect, useState } from "react";
import { useServices } from "../../context";
import { FaTimes } from "react-icons/fa";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const {
    isLoggedIn,
    setIsLoggedIn,
    services,
    setServices,
    homeRef,
    serviceRef,
    showEditForm,
    setShowEditForm,
    isEditing,
    setIsEditing,
    showLoginForm,
    setShowLoginForm,
  } = useServices();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    if (username === "admin" && password === "password123") {
      setTimeout(() => {
        setIsLoggedIn(true);
        setShowLoginForm(false);
        setIsLoggingIn(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setIsLoggingIn(false);
        setTimeout(() => {
          alert("Wrong username or password");
        }, 1000);
      }, 3000);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div
      id=""
      className={`w-full z-[1001] h-screen fixed flex items-center justify-center bg-white/0 backdrop-blur-sm`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-[400px] `}
      >
        <div
          className={`flex justify-between items-center mb-4 ${
            isLoggingIn ? "hidden" : "block"
          }`}
        >
          <h2 className={`text-2xl font-bold text-gray-800 `}>Login</h2>
          <span
            onClick={() => {
              setShowLoginForm(false);
              setIsLoggedIn(false);
              setUsername("");
              setPassword("");
            }}
            className="cursor-pointer text-red-600"
          >
            <FaTimes className="text-xl" />
          </span>
        </div>

        {isLoggingIn ? (
          <div className={`text-green-500 text-center`}>Logging in...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
