import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginuser } from "../Features/LoginThunk";



const Login = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const user = useSelector((state) => state.login.user);

  console.log(user);
  



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    console.log("Remember Me:", rememberMe);
    dispatch(loginuser({ email, password }));

  };
  return (
    <div>
      <div className="p-5 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md border-black border-4">
          {/* CompanyLogo */}
          <div className="rounded-full h-16 w-16 bg-gray-200 flex items-center justify-center border border-gray-200 mx-auto">
            <h1 className="text-lg font-bold text-black font-geist">Logo</h1>
          </div>
          <h2 className="text-2xl font-bold text-center text-black font-geist">
            Welcome Back
            <h4 className="text-sm text-center text-gray-400 font-geist">
              Sign in to your Account
            </h4>
          </h2>

          {/* FormDetails */}
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            <div className="mt-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
            {/* <button>eye</button> */}

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-lg font-geist text-blue-500 hover:text-blue-700 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 w-full rounded-lg
         
          text-xl text-center font-geist"
              >
                Sign in
              </button>
            </div>

            {/* {
          loading ? (
            <div className="flex items-center justify-center mt-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : null
        } */}

            {/* {
          error ? (
            <div className="mt-6">
              <h1 className="text-red-500 font-geist font-xl">Error message will appear here</h1>
            </div>
          ) : null
        } */}

            {/* <div className="mt-6">
          <h1 className="text-red-500 font-geist font-xl">Error message will appear here</h1>
        </div> */}

            <div>
              <p className="font-geist text-gray-400 font-sm text-center mt-2">
                Two-factor authentication enabled <br />
                Or Continue with
              </p>
            </div>

            <div className="flex space-x-4 justify-center mt-4">
              <button className="bg-white border border-gray-300 p-4 rounded-lg text-gray-600 hover:bg-gray-200 text-lg w-full">
                Google
              </button>
              <button className="bg-white border border-gray-300 p-4 rounded-lg text-gray-600 hover:bg-gray-200 text-lg w-full">
                Microsoft
              </button>
              <button className="bg-white border border-gray-300 p-4 rounded-lg text-gray-600 hover:bg-gray-200 text-lg w-full">
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
