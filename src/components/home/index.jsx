import { useServices } from "../../context";
import ServiceList from "../list";
import EditForm from "../edit";
import LoginForm from "../login";

export default function Home() {
  const { showEditForm } = useServices();
  return (
    <div id="home" className=" min-h-screen flex flex-col items-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Welcome To Our Services App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Checkout Some of our services we offer
        </p>
      </header>
      <main className="flex flex-col items-center w-full max-w-4xl">
        {showEditForm && <EditForm />}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full ">
          <ServiceList />
        </div>
      </main>
    </div>
  );
}
