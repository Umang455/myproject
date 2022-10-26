import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function TeacherLogin() {
    const [inputs, setInputs] = React.useState({});

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        axios
            .post("http://localhost:9000/teacher/login", inputs)
            .then((res) => {
                console.log(res);
                alert(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
        {/* <form method="POST" onSubmit={handleSubmit}>
            <h1>Teacher login</h1>
            <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChanges} placeholder="Username" required="" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={inputs.password || ""} onChange={handleChanges} placeholder="Password" required="" />
            </div>

            <button type="submit" ><Link to={"/teacher/dashboard"}>Submit</Link></button>
        </form> */}

        <p className="text-3xl p-10 font-semibold text-center">
            TEACHER LOGIN
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form>
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
                    <NavLink to="/teacher/dashboard">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-slate-700">
                            LOGIN
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
        </>
    )
}