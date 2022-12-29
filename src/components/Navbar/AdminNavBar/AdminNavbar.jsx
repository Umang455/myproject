import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/itp-logo.png";
import AdminNavLink from "./AdminNavLinks"

export default function AdminNavbar() {
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
        <NavLink end to="/admin/dashboard" style={({isActive}) => ({
          backgroundColor: isActive ? '#1f2937' : '#111827',
          })}>
          <li className='block w-32 py-2 rounded-4 font-medium text-center'>
            HOME
          </li>
        </NavLink>
        <AdminNavLink />

        </ul>
        <div className="md:block hidden">
            <button className="bg-primary text-white  px-6 py-2 rounded-full">
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
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li>
          <AdminNavLink />
          <div className="py-5">
            <button className="bg-black text-white  px-6 py-2 rounded-full">
              Log Out
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};
