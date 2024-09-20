import { useServices } from "../../context";

export default function LogOutForm() {
  const { showLogoutForm, setShowLogoutForm, isLoggedIn, setIsLoggedIn } =
    useServices();

  const handleOutsideClick = (event) => {
    // Check if the click is outside the modal content
    if (event.target.classList.contains("modal")) {
      setShowLogoutForm(false);
    }
  };

  return (
    <div
      className="modal z-[1010] flex items-center justify-center fixed inset-0 bg-black/50"
      onClick={handleOutsideClick}
    >
      <div className="modal-content bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Log Out</h2>
        <p className="text-gray-700 mb-6 text-center">
          Are you sure you want to proceed?
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setShowLogoutForm(false);
            }}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Yes
          </button>
          <button
            onClick={() => setShowLogoutForm(false)}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
