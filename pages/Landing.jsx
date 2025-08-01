import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative pt-4">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}></div>

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-20 h-20 bg-white/10 rounded-full top-1/4 left-1/12 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "0s" }}></div>
        <div
          className="absolute w-15 h-15 bg-white/10 rounded-full top-3/5 right-1/5 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "-2s" }}></div>
        <div
          className="absolute w-25 h-25 bg-white/10 rounded-full bottom-1/5 left-1/5 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "-4s" }}></div>
        <div
          className="absolute w-10 h-10 bg-white/10 rounded-full top-2/5 right-1/10 animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "-6s" }}></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-white/30 rounded-full top-1/5 left-[15%] animate-pulse"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full top-2/5 right-1/5 animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute w-3 h-3 bg-white/20 rounded-full bottom-[30%] left-1/4 animate-pulse"
          style={{ animationDelay: "3s" }}></div>
        <div
          className="absolute w-2 h-2 bg-white/35 rounded-full top-3/5 right-[15%] animate-pulse"
          style={{ animationDelay: "4s" }}></div>
        <div
          className="absolute w-1 h-1 bg-white/50 rounded-full bottom-1/5 right-2/5 animate-pulse"
          style={{ animationDelay: "5s" }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
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
            <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
              Luxora
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full shadow-lg animate-pulse"></div>
        </div>

        {/* Tagline */}
        <div
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4 drop-shadow-lg">
            Premium E-commerce Platform
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Explore a refined digital library. Luxora delivers premium e-books
            and a superior reading experience tailored just for you.
          </p>
        </div>

        {/* Features */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
              <p className="text-white/70 text-sm">
                Handpicked premium e-books, curated with care and crafted for
                excellence
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-bounce"
                style={{ animationDelay: "0.5s" }}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-white/70 text-sm">
                Instant access to your premium e-books — anytime, anywhere in
                the world, for a reading experience.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/25 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div
                className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-bounce"
                style={{ animationDelay: "1s" }}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Secure Shopping</h3>
              <p className="text-white/70 text-sm">
                Safe and secure transactions with buyer protection
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group">
            <Link to="/signup">
              <span className="text-white">Get Started</span>
            </Link>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

          <button className="bg-transparent border-2 border-white/30 backdrop-blur-lg text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
            <Link to="/signin">
              <span className="text-white">Sign In</span>
            </Link>
          </button>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "0.8s" }}>
          <p className="text-white/60 text-sm">
            Join thousands of satisfied customers • Free shipping on orders over
            $100
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
