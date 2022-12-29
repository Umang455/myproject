import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/itp-logo.png";

export default function TeacherNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        <NavLink end to="/teacher/dashboard" style={({isActive}) => ({
          backgroundColor: isActive ? '#1f2937' : '#111827',
          })}>
          <li className='block w-32 py-2 rounded-4 font-medium text-center'>
            Dashboard
          </li>
        </NavLink>
        <NavLink end to="/teacher/students" style={({isActive}) => ({
          backgroundColor: isActive ? '#1f2937' : '#111827',
          })}>
          <li className='block w-32 py-2 rounded-md font-medium text-center'>
            Students
          </li>
        </NavLink>
        <NavLink to="/teacher/allocated-students" style={({isActive}) => ({
          backgroundColor: isActive ? '#1f2937' : '#111827',
          })}>
            <li className='block w-32 py-2 rounded-md font-medium text-center'>
              Allocated Students
            </li>
          </NavLink>
        </ul>
        <div className="md:block hidden">
          <NavLink to="/login" className="bg-primary text-white  px-6 py-2 rounded-full">
            <button className="bg-primary text-white  px-6 py-2 rounded-full">
              Log Out
            </button>
            </NavLink>
        </div>
        
        {/* Mobile nav */}
        <ul
        className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
        <li>
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="py-7 px-3 inline-block">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="py-7 px-3 inline-block">
              Contact
            </NavLink>
          </li>
          <li>
            <a href="https://www.gpmumbai.ac.in/" target="_blank" className="py-7 px-3 inline-block">
              GPMumbai
            </a>
          </li>
          <li>
            <a hreg="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php" target="__blank" className="py-7 px-3 inline-block">
              MIS Portal
            </a>
          </li>
          <div className="py-5">
          <NavLink to="/login">
            <button className="bg-black text-white  px-6 py-2 rounded-full">
              Log Out
            </button>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};
