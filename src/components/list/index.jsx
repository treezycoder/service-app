import { FaEdit, FaTrash } from "react-icons/fa";
import { useServices } from "../../context";

export default function ServiceList() {
  const {
    isLoggedIn,
    services,
    handleDelete,
    serviceRef,
    setShowEditForm,
    setIsEditing,
  } = useServices();

  return (
    <div
      id="service-list"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
    >
      {services && services.length
        ? services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <p className="text-gray-700 dark:text-gray-200 font-bold mb-4">
                <span className="text-green-300">$</span>
                {service.price}    
              </p>
              {isLoggedIn ? (
                <div className="flex space-x-4">
                  <span
                    onClick={() => {
                      serviceRef.current = service;
                      setShowEditForm(true);
                      setIsEditing(true);
                    }}
                    className="cursor-pointer text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition duration-200"
                  >
                    <FaEdit className="w-5 h-5" />
                  </span>
                  <span
                    onClick={() => {
                      handleDelete(index);
                    }}
                    className="cursor-pointer text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition duration-200"
                  >
                    <FaTrash className="w-5 h-5" />
                  </span>
                </div>
              ) : null}
            </div>
          ))
        : "No Service Is Currently Available"}
    </div>
  );
}
