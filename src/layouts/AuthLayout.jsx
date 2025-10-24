import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 min-h-[92vh] w-full max-w-[1600px] mx-auto flex">
          <Outlet />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default AuthLayout;
