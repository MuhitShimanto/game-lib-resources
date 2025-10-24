import { Link } from "react-router";
import Prism from "../../animations/Prism";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | GameHub</title>
      </Helmet>
      <div className="h-screen overflow-hidden relative">
        {/* Overlay Starts */}
        <div className="absolute inset-0 z-99">
          <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <Prism
              animationType="hover"
              timeScale={0.5}
              height={4}
              baseWidth={5.5}
              scale={3.2}
              hueShift={0}
              colorFrequency={1}
              noise={0.0}
              glow={0.8}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/90 z-11"></div>
        <img
          src="https://res.cloudinary.com/dypdup2xw/image/upload/v1761203109/Dead_Cells2_zugi0b.jpg"
          alt="Not Found"
          className="absolute inset-0 w-full z-10"
        />
        {/* Overlay Ends */}
        <div className="absolute inset-0 z-999 flex flex-col gap-3 justify-center items-center text-center">
          <h1 className="text-[250px] font-bold poppins">
            4<span className="text-[#48cae4]">0</span>4
          </h1>
          <h1 className="mt-[-50px] text-[80px] font-semibold poppins animate-pulse">
            Game Over! Page Not Found
          </h1>
          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-[#48cae4] text-black/75 font-medium text-lg rounded-lg hover:bg-[#0096c7] hover:text-white transition ease-in-out duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
