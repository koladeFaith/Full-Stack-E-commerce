import React from "react";
import img from "../assets/6920933.jpg";

function Hero() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row items-center justify-between pt-[100px] md:pt-[150px] lg:pt-0"
        style={{
          background: "linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)",
        }}>
        {/* Left Side - Text with Unique Features */}
        <div className="md:full lg:w-1/2 md:h-[400px] text-center md:text-left mb-6 space-y-6 px-md-0 px-4 relative w-full lg:h-auto">
          {/* Tagline / Badge */}
          <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium animate-pulse">
            #1 Premium eBook Marketplace
          </div>

          {/* Animated Text Line (Marquee effect) */}
          <div className="overflow-hidden whitespace-nowrap">
            <p className="text-purple-700 font-semibold text-sm animate-slide">
              Curated Collections · Trusted Authors · Instant Access · Global
              Reach.
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover Premium eBooks Tailored to Your Taste
          </h1>

          <p className="text-gray-600 leading-tight  text-center">
            Dive into a library of top-rated titles across categories like
            business, faith, tech, and more. Only on <strong>Luxora</strong>.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className=" md:w-full lg:w-1/2  md:mt-0 md:flex justify-center">
          <img
            src={img} // Replace with actual image path
            alt="Books"
            className="max-w-full h-auto rounded-lg shadow-xl "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
