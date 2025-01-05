// Importing outlet
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="w-full h-[100vh]">
      {/* Header at the top of every page */}
      <Header />
      {/* Outlet to render the current page */}
      <Outlet />
      {/* Footer at the bottom of every page */}
      <Footer />
    </div>
    
  );
};

export default App;