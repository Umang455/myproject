import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminDashboard() {
    const [content, setContent] = useState({});
    const token = JSON.parse(sessionStorage.getItem("token"))
    const navigate = useNavigate()

    useEffect(() => {
      axios
      .get("https://inplantportal.onrender.com/teacher", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        setContent(JSON.parse(sessionStorage.getItem("info")))
      })
      .catch((err) => {
        navigate("/login");
      })
    }, []);
        return (
            <>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-auto rounded-lg border-4 border-dashed border-gray-200">
                            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <p className="text-lg font-medium leading-6 text-gray-900">Information</p>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{content.name || ""}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Designation</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Root</dd>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{content.email || ""}</dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Contact No.</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">+91 {content.mobile_no || ""}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};