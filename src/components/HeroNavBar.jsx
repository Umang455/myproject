import React from "react";
import { Link } from "react-router-dom";

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
                                    <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                    <Link to="/about">About</Link>
                                    </li>
                                    <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                    <Link to="/contact">Contact</Link>
                                    </li>
                                    <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                    <a href="http://gpmumbai.ac.in/gpmweb/">GPMumbai</a>
                                    </li>
                                    <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                    <a href="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php">MIS Portal</a>
                                    </li>
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