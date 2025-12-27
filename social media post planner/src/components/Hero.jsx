import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-end min-h-screen bg-cover bg-center text-white px-8 md:px-2 pt-4 mt-23"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
      }}
    >
      {/* Content */}
      <div className=" flex flex-col max-w-xl md:mr-24 lg:mr-20 text-right">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
          Plan. Schedule.{" "}
          <span className="text-white opacity-90">Shine Online.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-100/90 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Create your perfect content calendar, automate your posts, and elevate
          your brand — all from one beautifully designed platform.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-5 pt-6">
          <Link
            to="/registration"
            className="px-8 py-3 bg-white text-[#5C0E8A] font-bold rounded-full shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>

          <Link
            to="/services"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-[#efac02] hover:text-[#fff] transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
