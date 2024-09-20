import { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import LoginForm from "./components/login";
import LogOutForm from "./components/logout";
import NavBar from "./components/navbar";
import { useServices } from "./context";

function App() {
  const { homeRef, showLoginForm, showLogoutForm, isLoggedIn, setIsLoggedIn } =
    useServices();
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div className={`${isLoggedIn ? "dark" : ""} bg-gray-50 dark:bg-gray-800`}>
      {showLoginForm && <LoginForm />}
      {showLogoutForm && <LogOutForm />}
      <div id="navbar-container">
        <NavBar />
      </div>
      <div ref={homeRef} id="content-container" className={`pt-10`}>
        <Home />
      </div>
      <div id="footer-container" className={``}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
