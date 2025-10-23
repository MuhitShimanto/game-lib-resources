import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
