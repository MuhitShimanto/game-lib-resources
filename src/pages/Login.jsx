import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import SplitText from "../animations/SplitText";
import FadeContent from "../animations/FadeContent";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import firebaseErrorHandler from "../utilities/firebaseErrorHandler";
import AuthContext from "../contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { user, setUser, emailSignIn, googleSignIn } = useContext(AuthContext);
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const curLocation = useLocation();
  const cameFrom = curLocation.state || "/";

  const handleSignin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    emailSignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Email Sign in Successful");
        navigate(cameFrom);
      })
      .catch((error) => {
        toast.error(firebaseErrorHandler(error));
      });
  };
  const handleGoogleSignin = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Sign in Successful");
        navigate(cameFrom);
      })
      .catch((error) => {
        toast.error(firebaseErrorHandler(error));
      });
  };
  if(user) {
    return <Navigate to="/"/>
  }
  return (
    <><Helmet>
        <title>GameHub | Login</title>
      </Helmet>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 flex-1">
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-[50vw] ml-[calc((100%-100vw)/2)]">
          <img
            src="https://res.cloudinary.com/dypdup2xw/image/upload/v1761203111/Tunic_koo1au.jpg"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="hidden lg:block"></div>
        <div className="h-full flex justify-center items-center">
          <div className="min-w-[300px] lg:min-w-[400px] flex flex-col gap-2 p-10 rounded-lg shadow-xl">
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
              <form onSubmit={(e) => handleSignin(e)}>
                <fieldset className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target"
                      placeholder="Enter your email"
                    />
                  </div>
                  {/* Password */}
                  <div className="relative flex flex-col gap-1">
                    <div
                      className="absolute z-10 bottom-6 right-3 cursor-pointer"
                      onClick={() => setPassShow(!passShow)}
                    >
                      {passShow ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    <label className="text-neutral">Password</label>
                    <input
                      name="password"
                      type={passShow ? "text" : "password"}
                      className="input input-bordered w-full outline-none hover:border-primary focus:border-primary focus:shadow-sm focus:shadow-primary transition ease-in-out duration-200 cursor-target pr-10"
                      placeholder="••••••••"
                      required
                    />
                    <p className="mt-2 text-error font-medium flex items-center gap-1 animate-pulse"></p>
                  </div>
                  {/* Forgot Password */}
                  <div className="text-left">
                    <Link
                      to="forgot-password"
                      className="link link-hover text-accent font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  {/* Buttons */}

                  <button className="btn btn-primary mt-2 font-semibold text-[16px] cursor-target">
                    Sign in
                  </button>
                  <button
                    onClick={(e) => handleGoogleSignin(e)}
                    className="btn bg-white font-semibold text-[16px] hover:bg-white/80 text-black transition ease-in-out duration-200 cursor-target"
                  >
                    <FaGoogle />
                    Continue with Google
                  </button>
                  {/* Already Have Account */}
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
