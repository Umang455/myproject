import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
        <div className="mt-32 flex flex-row mx-32">
            <form className="basis-1/3">
                <div className="w-1/2 p-6 m-auto bg-gray-300 rounded-md">
                    <p className="text-3xl font-semibold text-center text-gray-900">
                        Admin Login
                    </p>
                    <form>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-slate-700">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </form>

            <form className="basis-1/3">
                <div className="w-1/2 p-6 m-auto bg-gray-300 rounded-md">
                    <p className="text-3xl font-semibold text-center text-gray-900">
                        Teacher Login
                    </p>
                    <form>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-slate-700">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </form>

            <form className="basis-1/3">
                <div className="w-1/2 p-6 m-auto bg-gray-300 rounded-md ">
                    <p className="text-3xl font-semibold text-center text-gray-900">
                        Student Login
                    </p>
                    <form>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-slate-700">
                                <Link to="/student/login">Login</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </form>
        </div>
        </>
    );
}