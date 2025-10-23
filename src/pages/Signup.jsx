import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import SplitText from "../animations/SplitText";
import FadeContent from "../animations/FadeContent";
import { ImCross } from "react-icons/im";

const Signup = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 flex-1">
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-[50vw] ml-[calc((100%-100vw)/2)]">
          <img
            src="https://res.cloudinary.com/dypdup2xw/image/upload/v1761203111/Tunic_koo1au.jpg"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="hidden lg:block"></div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="min-w-[300px] lg:min-w-[400px]flex flex-col gap-2 p-10 rounded-lg shadow-xl">
            <SplitText
              text="Register"
              className="font-semibold text-primary text-[42px] poppins"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <p className="mb-6 text-[16px] text-neutral">
              Welcome back! Please enter your details.
            </p>
            {/* Main Form */}
            <FadeContent blur={true} duration={300} easing="ease-out" initialOpacity={0}>
            <form>
              <fieldset className="flex flex-col gap-3">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-neutral">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                    placeholder="Enter your name"
                  />
                </div>
                {/* Image Url */}
                <div className="flex flex-col gap-1">
                  <label className="text-neutral">Image URL</label>
                  <input
                    type="url"
                    className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                    placeholder="Enter your image link"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-neutral">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-neutral">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                    placeholder="••••••••"
                  />
                  <p className="text-error font-medium flex items-center gap-1"><ImCross />Password must be 6 characters long</p>
                </div>
                {/* Buttons */}
                <button className="btn btn-primary mt-2 font-semibold text-[16px] cursor-target">
                  Create Account
                </button>
                <button className="btn bg-white font-semibold text-[16px] hover:bg-white/80 text-black transition ease-in-out duration-200 cursor-target">
                  <FaGoogle />
                  Sign in with Google
                </button>
                {/* Already Have An Account? */}
                <div className="text-center">
                  <span className="text-accent-content">
                    Already have an account?&nbsp;&nbsp;
                  </span>
                  <Link
                    to="/auth"
                    className="link link-hover text-accent font-medium cursor-target"
                  >
                    Login
                  </Link>
                </div>
              </fieldset>
            </form>
            </FadeContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
