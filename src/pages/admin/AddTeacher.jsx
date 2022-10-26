import React from "react";

export default function AddTeacher(){
    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ADD TEACHER
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form>
                <div className="p-4">
                    <div className="p-2">
                        <label
                        htmlFor="name"
                        className="block text-xl">
                            Name :
                        </label>
                        <div className="flex">
                            <input
                            type="text"
                            name="name"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="username"
                        className="block text-xl">
                            Username :
                        </label>
                        <div className="flex">
                            <input
                            type="text"
                            name="username"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="email"
                        className="block text-xl">
                            Email Id :
                        </label>
                        <div className="flex">
                            <input
                            type="email"
                            name="email"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="contact"
                        className="block text-xl">
                            Contact No :
                        </label>
                        <div className="flex">
                            <input
                            type="number"
                            name="contact"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="password"
                        className="block text-xl">
                            Password :
                        </label>
                        <div className="flex">
                            <input
                            type="password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                        ADD
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}