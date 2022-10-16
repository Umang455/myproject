import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";



export default function AdminLogin() {
    const [auth, setAuth] = useState(false);
    const [id, setId] = useState("");

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
            .post("http://localhost:9000/admin/login", inputs)
            .then((res) => {
                console.log(res);
                alert(res.data.message);
                setAuth(res.data.auth);
                console.log(auth);
                setId(res.data.id);
                console.log(id);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
        {/* <form method="POST">
            <h1>Admin login</h1>
            <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChanges} placeholder="Username" required="" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={inputs.password || ""} onChange={handleChanges} placeholder="Password" required="" />
            </div>
            
            <button type="submit" onClick={handleSubmit}><Link to={auth ? "/admin/dashboard" : "/admin/login"}>Submit</Link></button>
        </form> */}

        <div className="flex flex-row mx-32">
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
                                <Link to="/student/login" elem>Login</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </form>
        </div>
        </>
    )
}