import { FaGoogle } from "react-icons/fa";
import asideImg from "/login-aside.jpg";
import { Link } from "react-router";
import SplitText from "../animations/SplitText";
import FadeContent from "../animations/FadeContent";

const Login = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 flex-1">
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-[50vw] ml-[calc((100%-100vw)/2)]">
          <img
            src={asideImg}
            className="h-full w-full object-cover object-top-right"
          />
        </div>
        <div className="hidden lg:block"></div>
        <div className="h-full flex justify-center items-center">
          <div className="min-w-[300px] lg:min-w-[400px] flex flex-col gap-2 bg-base-100 p-10 rounded-lg shadow-xl">
            {/* <h1 className="font-semibold text-primary text-5xl poppins">
              Log in
            </h1> */}
            {/* <BlurText
              text="Log in"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-semibold text-primary text-5xl poppins"
            /> */}
            <SplitText
              text="Log in"
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
            <FadeContent
              blur={true}
              duration={300}
              easing="ease-out"
              initialOpacity={0}
            >
              <form>
                <fieldset className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Email</label>
                    <input
                      type="email"
                      className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Password</label>
                    <input
                      type="password"
                      className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="text-left">
                    <a className="link link-hover text-accent font-medium">
                      Forgot password?
                    </a>
                  </div>

                  <button className="btn btn-primary mt-2 font-semibold text-[16px] cursor-target">
                    Sign in
                  </button>
                  <button className="btn bg-white font-semibold text-[16px] hover:bg-white/80 text-black transition ease-in-out duration-200 cursor-target">
                    <FaGoogle />
                    Sign in with Google
                  </button>
                  <div className="text-center">
                    <span className="text-accent-content">
                      Don't have an account?&nbsp;&nbsp;
                    </span>
                    <Link
                      to="sign-up"
                      className="link link-hover text-accent font-medium cursor-target"
                    >
                      Sign Up
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

export default Login;
