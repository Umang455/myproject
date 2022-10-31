import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TeacherChangeInfo(){
    const [inputs, setInputs] = React.useState("");

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:9000/teacher/update/info/${localStorage.getItem("userId")}`, inputs)
            .then((res) => {
                alert(res.data.message);
                localStorage.setItem("info", JSON.stringify(res.data.result));
                console.log(res);

                // navigate("/admin/dashboard");
            })
            .catch((err) => {
                console.log('error : ',err);
                alert(err.response.data.message);
            });
    };

    

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
             CHANGE INFO
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form onSubmit={handleSubmit}>
                <div className="p-4">
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
                            autoComplete="on"
                            onChange={handleChanges}
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
                            name="mobile_no"
                            autoComplete="on"
                            onChange={handleChanges}
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    {/* <div className="p-2">
                        <label
                        htmlFor="contact"
                        className="block text-xl">
                            About :
                        </label>
                        <div className="flex">
                            <textarea
                            name="about"
                            onChange={handleChanges}
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div> */}
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                        SAVE
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}