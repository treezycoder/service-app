import { useRef } from "react";
import { createContext, useContext, useState } from "react";

const ServiceAppContext = createContext();
export default function ServiceAppProvider({ children }) {
  const [services, setServices] = useState([
    {
      name: "General Consultation",
      description:
        "A comprehensive health check-up and consultation with a physician.",
      price: 50,
    },
    {
      name: "Dental Cleaning",
      description:
        "Professional cleaning of teeth to remove plaque and tartar.",
      price: 75,
    },
    {
      name: "Cardiology Screening",
      description:
        "Heart health screening, including EKG and consultation with a cardiologist.",
      price: 120,
    },
    {
      name: "Vaccination",
      description:
        "Routine vaccinations for flu, tetanus, and other preventable diseases.",
      price: 25,
    },
    {
      name: "Physical Therapy",
      description:
        "Rehabilitation services for injury recovery and pain management.",
      price: 100,
    },
    {
      name: "Prenatal Care",
      description: "Comprehensive care and monitoring during pregnancy.",
      price: 200,
    },
    {
      name: "Dermatology Consultation",
      description:
        "Consultation for skin conditions, including acne, rashes, and skin cancer screening.",
      price: 80,
    },
    {
      name: "Vision Test",
      description:
        "Eye examination to assess vision and prescribe corrective lenses.",
      price: 40,
    },
    {
      name: "Allergy Testing",
      description:
        "Tests to identify allergies to food, environment, and other allergens.",
      price: 150,
    },
    {
      name: "Mental Health Counseling",
      description: "One-on-one counseling session with a licensed therapist.",
      price: 90,
    },
  ]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem("login");
    if (savedLogin) {
      return JSON.parse(savedLogin);
    } else {
      return false;
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLogoutForm, setShowLogoutForm] = useState(false);
  const homeRef = useRef(null);
  const serviceRef = useRef(null);

  //update functions
  function handleEdit(serviceIndex) {}

  function handleDelete(serviceIndex) {
    const newServices = [...services];
    newServices.splice(serviceIndex, 1);
    setServices(newServices);
  }

  function handleAdd() {}

  return (
    <ServiceAppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        services,
        setServices,
        handleEdit,
        handleDelete,
        handleAdd,
        homeRef,
        serviceRef,
        showEditForm,
        setShowEditForm,
        isEditing,
        setIsEditing,
        showLoginForm,
        setShowLoginForm,
        showLogoutForm,
        setShowLogoutForm,
      }}
    >
      {children}
    </ServiceAppContext.Provider>
  );
}

const useServices = () => useContext(ServiceAppContext);
export { useServices };
