import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-700 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <FaInstagram className="text-xl" />
          </a>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Tresor Ngahame. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
