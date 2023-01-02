import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/itp-logo.png";
import TeacherNavLinks from "./TeacherNavLinks"

export default function TeacherNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("info")
    alert("Logout Successfull!")
    navigate("/login")
  }

  return (
    <nav className="bg-gray-900">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className={`${open ? "text-black":"text-white"} text-3xl md:hidden`} onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
        <NavLink end to="/teacher/dashboard" className="hover:text-purple-500 rounded-full" style={({isActive}) => ({
          backgroundColor: isActive ? '#d6bcfa' : '#111827',
          color : isActive ? 'black' : '#fff'
          })}>
          <li className='block w-32 py-2 rounded-4 font-medium text-center'>
            DASHBOARD
          </li>
        </NavLink>
        <NavLink end to="/teacher/students" className="hover:text-purple-500 rounded-full" style={({isActive}) => ({
          backgroundColor: isActive ? '#d6bcfa' : '#111827',
          color : isActive ? 'black' : '#fff'
          })}>
          <li className='block w-32 py-2 rounded-4 font-medium text-center'>
            STUDENTS
          </li>
        </NavLink>
        <NavLink end to="/teacher/allocated-students" className="hover:text-purple-500 rounded-full" style={({isActive}) => ({
          backgroundColor: isActive ? '#d6bcfa' : '#111827',
          color : isActive ? 'black' : '#fff'
          })}>
          <li className='block w-32 py-2 rounded-4 font-medium text-center'>
            ALLOCATED STUDENTS
          </li>
        </NavLink>
        <TeacherNavLinks />

        </ul>
        <div className="md:block hidden">
          <button onClick={handleLogOut} className="bg-primary md:hover:bg-purple-500 border-purple-500 md:border-2 text-white  px-6 py-2 rounded-full ">
            Log Out
          </button>
        </div>
        
        {/* Mobile nav */}
        <ul
        className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
          <li>
            <NavLink to="/teacher/dashboard" className="py-7 px-3 inline-block">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher/students" className="py-7 px-3 inline-block">
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher/allocated-students" className="py-7 px-3 inline-block">
              Allocated Students
            </NavLink>
          </li>
          <TeacherNavLinks />
          <div className="py-5">
            <button onClick={handleLogOut} className="bg-purple-500 text-white  px-6 py-2 rounded-full">
              Log Out
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};
