import { Link } from "react-router";
import LightRays from "../../animations/LightRays";
import { Helmet } from "react-helmet-async";

const GameNotFound = () => {
  return (<><Helmet>
        <title>Not Found | GameHub</title>
      </Helmet>
    <div className="h-screen overflow-hidden relative">
      {/* Overlay Starts */}
      <div className="absolute inset-0 z-99">
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#eea000"
            raysSpeed={1.5}
            lightSpread={1.0}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/85 z-11"></div>
      <img
        src="https://res.cloudinary.com/dypdup2xw/image/upload/v1761203111/Stardew_Valley2_my9dkn.jpg"
        alt="Not Found"
        className="absolute inset-0 w-full z-10"
      />
      {/* Overlay Ends */}
      <div className="absolute inset-0 z-999 flex flex-col gap-3 justify-center items-center text-center">
        <h1 className="text-[250px] font-bold poppins">4<span className="text-primary">0</span>4</h1>
        <h1 className="mt-[-50px] text-[80px] font-semibold poppins">
          The Game You're Looking For Doesn't Exist
        </h1>
        <Link
          to="/all-games"
          className="mt-6 px-6 py-3 bg-primary text-primary-content font-medium text-lg rounded-lg"
        >
          Explore All Games
        </Link>
      </div>
    </div></>
  );
};

export default GameNotFound;
