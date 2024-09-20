import { FaHome } from "react-icons/fa";
import { useServices } from "../../context";

export default function NavBar() {
  const {
    isLoggedIn,
    setShowEditForm,
    setIsEditing,
    homeRef,
    setShowLoginForm,
    setShowLogoutForm,
  } = useServices();

  const handleScrollToHome = () => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleAddService = () => {
    setShowEditForm(true);
    setIsEditing(false);
  };

  const handleAuthToggle = () => {
    if (!isLoggedIn) {
      setShowLoginForm(true);
    } else {
      setShowLogoutForm(true);
    }
  };

  return (
    <nav className="fixed z-[1000] w-full bg-black/80">
      <ul className="flex items-center justify-between gap-3 py-1 px-3">
        <span onClick={handleScrollToHome} className="cursor-pointer">
          <FaHome className="text-white/50 hover:text-white text-lg" />
        </span>
        <p className="flex gap-2">
          {isLoggedIn && (
            <span onClick={handleAddService} className="cursor-pointer ">
              <button className="text-gray-100 hover:text-blue-300">
                Add Service
              </button>
            </span>
          )}
          <span
            onClick={handleAuthToggle}
            className="text-gray-100 hover:text-blue-300 cursor-pointer"
          >
            <button>{isLoggedIn ? "Logout" : "Login"}</button>
          </span>
        </p>
      </ul>
    </nav>
  );
}
