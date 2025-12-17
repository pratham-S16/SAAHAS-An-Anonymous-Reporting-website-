"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="w-full text-xl max-w-6xl mx-auto flex items-center justify-between py-2 px-6">
        <div className="flex items-center gap-2">
          <img src="images/logo-only.png" alt="Saahas Logo" className="h-16 w-auto ml-2" />
        </div>

        <ul className="hidden md:flex gap-10 text-black font-medium">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">About</li>
          <li className="cursor-pointer hover:opacity-70">FAQ</li>
        </ul>
      </nav>

      {/* HERO CONTENT */}
      <section className="w-full bg-[#565eeb] text-white py-20 px-6 rounded-b-3xl">
      <div className="w-full x-auto text-center">
        <p className="uppercase tracking-[0.2em] text-[#000452] text-lg font-bold mb-4">
          SAFE • SILENT • SUPPORTIVE
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Speak up safely, <br /> even anonymously.
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          A secure space to report harassment, seek help, and learn your rights.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className=" cursor-pointer px-6 py-3 bg-[#000452] text-white rounded-lg font-medium hover:opacity-80 transition">
            Report Anonymously
          </button>

          <button className="cursor-pointer px-6 py-3 bg-white text-black border border-black rounded-lg font-medium hover:bg-gray-200 transition">
            Find Legal Help
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
