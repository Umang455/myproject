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
                                    <Link to="/">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                            HOME
                                        </li>
                                    </Link>
                                    <Link to="/about">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                            ABOUT
                                        </li>
                                    </Link>
                                    <Link to="/contact">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                            CONTACT
                                        </li>
                                    </Link>
                                    <a href="http://gpmumbai.ac.in/gpmweb/" target="_blank">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
                                            GPMumbai
                                        </li>
                                    </a>
                                    <a href="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php" target="_blank">
                                        <li className='block w-32 py-2 rounded-md font-medium text-center bg-slate-800'>
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