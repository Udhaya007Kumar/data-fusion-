import React from "react";
import LoginpageComponent from "../Components/Auth/LoginpageComponent";


const Login_v1 = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Modal Container */}
        <div className="flex h-[90vh] w-[90vw] max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Sidebar Section with Full Page Background Image */}
          <div
            className=" hidden lg:block relative w-1/2  flex-col bg-muted text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-20 flex items-center text-lg font-medium p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              Acme Inc
            </div>
            <div className="relative z-20 mt-auto p-4">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This library has saved me countless hours of work and
                  helped me deliver stunning designs to my clients faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div>
          </div>

          {/* Right Section with Login Form */}
          <div className="flex-1 bg-zinc-900 p-8 flex items-center justify-center text-white">
            <div className="w-full max-w-md flex flex-col justify-center space-y-6 sm:w-[350px]">
              <LoginpageComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_v1;

// {/* <div className="flex h-screen justify-center items-center">
//   <div className="flex h-screen">
//       {/* Left Sidebar Section with Full Page Background Image */}
//       <div
//         className="relative w-1/2 h-full flex flex-col bg-muted p-10 text-white"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark overlay for text contrast */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         <div className="relative z-20 flex items-center text-lg font-medium">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="mr-2 h-6 w-6"
//           >
//             <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
//           </svg>
//           Acme Inc
//         </div>

//         <div className="relative z-20 mt-auto">
//           <blockquote className="space-y-2">
//             <p className="text-lg text-white">
//               &ldquo;This library has saved me countless hours of work and
//               helped me deliver stunning designs to my clients faster than ever
//               before.&rdquo;
//             </p>
//             <footer className="text-sm">Sofia Davis</footer>
//           </blockquote>
//         </div>
//       </div>

//       {/* Right Section with Login Form */}
//       <div className="flex-1 bg-white p-8 lg:p-12 flex items-center justify-center">
//         <div className="w-full max-w-md flex flex-col justify-center space-y-6 sm:w-[350px]">
//           <LoginpageComponent />
//         </div>
//       </div>
//     </div>
//   </div> */}
