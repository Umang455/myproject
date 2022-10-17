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
            <AdminDashboard id={id} />
            
            <button type="submit" onClick={handleSubmit}><Link to={auth ? "/admin/dashboard" : "/admin/login"}>Submit</Link></button>
        </form> */}

        <div className="h-screen">
            <p className="text-3xl p-10 font-semibold text-center">
                ADMIN LOGIN
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
                        <button
                        type="submit"
                        className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
