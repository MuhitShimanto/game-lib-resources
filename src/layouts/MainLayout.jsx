import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 w-full">
          <Outlet />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default MainLayout;
