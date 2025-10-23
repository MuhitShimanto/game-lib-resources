import Galaxy from "../../animations/Galaxy";

const Newsletter = () => {
  return (
    <>
      <div className="relative bg-black">
        <div
          style={{ position: "relative", height: "500px", overflow: "hidden" }}
        >
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.0}
            glowIntensity={0.25}
            saturation={0.15}
            hueShift={240}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] mx-auto flex justify-between items-center">
            <div className="w-full flex flex-col justify-center gap-12">
              <h1 className="font-bold text-5xl montserrat">Stay up to date</h1>
              <p className="text-secondary-content/65 poppins">
                Get the latest on indie games, free game keys, developer
                spotlights, and exclusive deals delivered straight to you. No
                spam, just games.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <form className="w-1/2 flex">
                <input
                  type="email"
                  className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target text-lg py-2 px-4"
                  placeholder="Enter your email"
                />
                <button className="py-2 px-4 bg-primary text-primary-content font-medium rounded-tr rounded-br cursor-pointer">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
