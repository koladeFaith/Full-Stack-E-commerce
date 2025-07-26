// import { useFormik } from "formik";
// import * as Yup from "yup";
// import React from "react";
// const Signup = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required("First name is required"),
//       lastName: Yup.string().required("Last name is required"),
//       email: Yup.string().email("Invalid Email").required("Email is required"),
//       password: Yup.string()
//         .min(8, "Password must be 8 characters or more")
//         .required("Password is required"),
//     }),
//   });
//   console.log(formik.touched);

//   return (
//     <>
//       <form action="" onSubmit={formik.handleSubmit}>
//         <br />
//         <input
//           type="text"
//           placeholder="First name"
//           name="firstName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />{" "}
//         {formik.touched.firstName ? (
//           <span className="text-danger">{formik.errors.firstName}</span>
//         ) : null}
//         <br /> <br />
//         <input
//           type="text"
//           placeholder="Last name"
//           name="lastName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />{" "}
//         {formik.touched.lastName ? (
//           <span className="text-danger">{formik.errors.lastName}</span>
//         ) : null}
//         <br /> <br />
//         <input
//           type="text"
//           placeholder="Email"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />{" "}
//         {formik.touched.email ? (
//           <span className="text-danger">{formik.errors.email}</span>
//         ) : null}
//         <br /> <br />
//         <input
//           type="text"
//           placeholder="Password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />{" "}
//         {formik.touched.password ? (
//           <span className="text-danger">{formik.errors.password}</span>
//         ) : null}
//         <br /> <br />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Signup;
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim()
    ) {
      toast.error("Pls, all fields are required");
      return;
    }
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6300/api/signup",
        formData
      );
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.error("Error: " + error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error("An unexpected error occurred: " + error.message);
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-300 opacity-90"></div>

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-20 h-20 bg-white bg-opacity-10 rounded-full top-20 left-20"></div>
        <div className="absolute w-16 h-16 bg-white bg-opacity-10 rounded-full top-60 right-20"></div>
        <div className="absolute w-24 h-24 bg-white bg-opacity-10 rounded-full bottom-20 left-20"></div>
        <div className="absolute w-12 h-12 bg-white bg-opacity-10 rounded-full top-40 right-16"></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-white bg-opacity-30 rounded-full top-20 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-white bg-opacity-40 rounded-full top-40 right-1/4"></div>
        <div className="absolute w-3 h-3 bg-white bg-opacity-20 rounded-full bottom-32 left-1/3"></div>
        <div className="absolute w-2 h-2 bg-white bg-opacity-35 rounded-full top-3/5 right-1/4"></div>
        <div className="absolute w-1 h-1 bg-white bg-opacity-50 rounded-full bottom-20 right-2/5"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Left Side - Image */}
              <div className="hidden md:block lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-80"></div>
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
                  alt="Luxora Shopping Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                      </div>
                      <h1 className="text-4xl font-bold drop-shadow-2xl">
                        Luxora
                      </h1>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 drop-shadow-lg">
                      Welcome to Premium Shopping
                    </h2>
                    <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
                      Join thousands of satisfied customers and discover a world
                      of luxury products curated just for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-slate-300 bg-opacity-90">
                {/* Form Header */}
                <div className="text-center lg:text-left mb-6">
                  {/* Mobile Logo - Only visible on small screens */}
                  <div className="flex items-center justify-center lg:hidden space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-teal-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-[#4facfe] drop-shadow-lg">
                      Luxora
                    </h1>
                  </div>

                  <h2 className="text-[27px] lg:text-[35px] font-bold text-indigo-700 mb-1">
                    Create Your Account
                  </h2>
                  <p className="text-indigo-700 text-sm">
                    Start your premium shopping journey
                  </p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-purple-700 text-sm font-medium mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <input
                          type="text"
                          className="w-full pl-10 pr-3 py-2.5 bg-purple-700 bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white text-sm placeholder-white placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-opacity-30 transition-all duration-300"
                          placeholder="John"
                          name="firstName"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-700 text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <input
                          type="text"
                          className="w-full pl-10 pr-3 py-2.5 bg-purple-700 bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white text-sm placeholder-white placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-opacity-30 transition-all duration-300"
                          placeholder="Doe"
                          name="lastName"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-purple-700 text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                      <input
                        type="email"
                        className="w-full pl-10 pr-3 py-2.5 bg-purple-700 bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white text-sm placeholder-white placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-opacity-30 transition-all duration-300"
                        placeholder="john@example.com"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-purple-700 text-sm font-medium mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <input
                          type="password"
                          className="w-full pl-10 pr-10 py-2.5 bg-purple-700 bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white text-sm placeholder-white placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-opacity-30 transition-all duration-300"
                          placeholder="••••••••"
                          name="password"
                          onChange={handleChange}
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-200">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-700 text-sm font-medium mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <input
                          type="password"
                          className="w-full pl-10 pr-10 py-2.5 bg-purple-700 bg-opacity-30 border border-white border-opacity-30 rounded-lg text-white text-sm placeholder-white placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-opacity-30 transition-all duration-300"
                          placeholder="••••••••"
                          name="forPassword"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-60 hover:text-opacity-100 transition-all duration-200">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-purple-600 bg-white bg-opacity-20 border-white border-opacity-30 rounded focus:ring-purple-500"
                    />
                    <label className="text-indigo-700 text-opacity-80 text-[12px] leading-relaxed">
                      Privacy Policy Terms of Service I agree to the end{" "}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    type="submit">
                    <span>Create Account</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                </form>

                {/* Sign In Link & Social Options */}
                <div className="mt-6 space-y-4">
                  {/* Sign In Link */}
                  <div className="text-center">
                    <p className="text-indigo-700 text-opacity-80 text-sm">
                      Already have an account?{" "}
                      <Link
                        to="/signin"
                        className="text-purple-700 hover:text-purple-900 font-semibold underline transition-colors duration-200">
                        Sign Up
                      </Link>
                    </p>
                  </div>

                  {/* Social Signup Options */}
                  <div>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white border-opacity-30"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-3 bg-indigo-900 bg-opacity-15 text-indigo-900 text-opacity-100 text-xs">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center px-3 py-2 bg-pink-700 bg-opacity-70 border border-white border-opacity-30 rounded-lg text-white hover:bg-opacity-30 transition-all duration-300">
                        <svg
                          className="w-4 h-4 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span className="text-xs">Google</span>
                      </button>

                      <button className="flex items-center justify-center px-3 py-2 bg-pink-700 bg-opacity-70 border border-white border-opacity-30 rounded-lg text-white hover:bg-opacity-30 transition-all duration-300">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span className="text-xs">Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
