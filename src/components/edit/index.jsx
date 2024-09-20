import { FaTimes } from "react-icons/fa";
import { useServices } from "../../context";
import { useState } from "react";

export default function EditForm() {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });
  const {
    setServices,
    serviceRef,

    setShowEditForm,
    isEditing,
    setIsEditing,
  } = useServices();

  function handleSubmit(event) {
    event.preventDefault();

    if (isEditing) {
      setServices((prevServices) =>
        prevServices.map((service) =>
          service === serviceRef.current
            ? { ...service, ...newService }
            : service
        )
      );
      alert("Service was updated");
      setShowEditForm(false);
    } else {
      setServices((prevServices) => [...prevServices, newService]);
      alert("New Service was added");
      setNewService({
        name: "",
        description: "",
        price: "",
      });
      setShowEditForm(false);
    }
  }

  function handleClose() {
    serviceRef.current = null;
    setShowEditForm(false);
    setIsEditing(false);
  }

  return (
    <div
      id="option-form-overlay"
      className={`w-full h-screen z-[1002] inset-0 fixed bg-black/80 backdrop-blur-sm flex items-center justify-center`}
      onClick={handleClose}
    >
      <div
        id="option-form-container"
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <FaTimes className="text-red-500 text-xl" />
        </span>
        <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
          {isEditing ? "Editing Service" : "Adding New Service"}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Service Name:</span>
            <input
              type="text"
              onChange={(event) =>
                setNewService({ ...newService, name: event.target.value })
              }
              required
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Service Price:</span>
            <input
              type="number"
              onChange={(event) => {
                setNewService({ ...newService, price: event.target.value });
              }}
              required
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Service Description:</span>
            <textarea
              onChange={(event) => {
                setNewService({
                  ...newService,
                  description: event.target.value,
                });
              }}
              required
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-900"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
