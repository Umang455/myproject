import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroNavBar() {
    return (
        <>
        <div className="bg-gray-900 mt-10">
            <div className="mx-auto max-w-7xl">
                <div className="relative flex h-16 items-center">
                    <div className="flex flex-1 justify-center items-stretch">
                        <div className="">
                            <ul className="position">
                                <div className="flex space-x-6 text-gray-50 items-center">
                                    <NavLink end to="/" style={({isActive}) => ({
                                        backgroundColor: isActive ? '#1f2937' : '#111827',
                                    })}>
                                        <li className='block w-32 py-2 rounded-md font-medium text-center'>
                                            HOME
                                        </li>
                                    </NavLink>
                                    <NavLink end to="/about" style={({isActive}) => ({
                                        backgroundColor: isActive ? '#1f2937' : '#111827',
                                    })}>
                                        <li className='block w-32 py-2 rounded-md font-medium text-center'>
                                            ABOUT
                                        </li>
                                    </NavLink>
                                    <NavLink to="/contact" style={({isActive}) => ({
                                        backgroundColor: isActive ? '#1f2937' : '#111827',
                                    })}>
                                        <li className='block w-32 py-2 rounded-md font-medium text-center'>
                                            CONTACT
                                        </li>
                                    </NavLink>
                                    <a href="http://gpmumbai.ac.in/gpmweb/" target="_blank">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center'>
                                            GPMumbai
                                        </li>
                                    </a>
                                    <a href="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php" target="_blank">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center'>
                                            MIS Portal
                                        </li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}