// Importing outlet
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Header at the top of every page */}
      <Header />
      {/* Outlet to render the current page */}
      <Outlet />
      {/* Footer at the bottom of every page */}
      <Footer />
    </>
  );
};

export default App;