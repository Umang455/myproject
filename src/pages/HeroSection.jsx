import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
        <div className="bg-gradient-to-r from-indigo-300 min-h-[94%] sticky top-0 overflow-hidden to-red-200 flex flex-col justify-center text-center text-black items-center h-3/4">
          <h1 className="md:text-5xl text-7xl font-semibold py-2">
          Government Polytechnic, Mumbai
          </h1>
          <h3 className="text-5xl font-medium py-4">Inplant Training Portal</h3>
          <h2 className="text-2xl font-medium py-4">An online communication tool for inplant training portal</h2>
          <div className="text-xl">
          <NavLink to="/login">
            <button className="px-6 py-2 bg-purple-800 border-2 border-purple-800 hover:text-purple-800 text-white rounded-lg hover:bg-transparent border-2 shadow-lg">
            Get Started
            </button>
            </NavLink>
          </div>
        </div>
        </>
    );
}