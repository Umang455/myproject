import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {
    const navigate = useNavigate();

    const [inputs, setInputs] = React.useState({});
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [info, setInfo] = useState(localStorage.getItem("info"));

    localStorage.setItem("authenticated", false);
    localStorage.setItem("userId", null);
    localStorage.setItem("info", null);

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:9000/admin/login", inputs)
            .then((res) => {
                alert(res.data.message);
                localStorage.setItem("authenticated", true);
                localStorage.setItem("userId", res.data.user._id);
                localStorage.setItem("info", JSON.stringify(res.data.user));
                navigate("/admin/dashboard");
            })
            .catch((err) => {
                console.log('error : ',err);
                alert(err.response.data.message);
            });
    };

    return (
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ADMIN LOGIN
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form onSubmit={handleSubmit}>
                <div className="p-4">
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
                            onChange={handleChanges}
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
                            onChange={handleChanges}
                            type="password"
                            name="password"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-slate-700">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}