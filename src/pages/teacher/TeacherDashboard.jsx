import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Token } from "../../context";

export default function TeacherDashboard() {
  const [content, setContent] = useState({})
//   const [token, setToken] = useContext(Token)

  useEffect(() => {
    return () => {
      setContent(JSON.parse(sessionStorage.getItem("info")))
    }
  }, [])
  console.log(content);
  return(
  <>
  <section className="md:py-[5rem]">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Dashboard</h6>
          </div>
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
                </h6>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            Username
                        </label>
                        <p
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            {content.username}
                        </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="  w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            Full Name
                        </label>
                        <p
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            {content.name}
                        </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="  w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            Email Address
                        </label>
                        <p
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            {content.email}
                        </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="  w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            Mobile No
                        </label>
                        <p
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            {content.mobile_no}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  </>
  );
}