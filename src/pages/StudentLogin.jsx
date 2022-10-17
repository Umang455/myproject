import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StudentLogin() {
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
            .post("http://localhost:9000/student/login", inputs)
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
            <h1>Student login</h1>
            <div>
                <label htmlFor="username">Enrollment No : </label>
                <input type="text" name="enrollment_no" value={inputs.enrollment_no || ""} onChange={handleChanges} placeholder="Enrollment No" required="" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={inputs.password || ""} onChange={handleChanges} placeholder="Password" required="" />
            </div>
            <button type="submit" ><Link to={"/student/dashboard"}>Submit</Link></button>
        </form> */}

        <p className="text-3xl p-10 font-semibold text-center">
            STUDENT LOGIN
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form>
                <div className="p-4">
                    <div className="p-2">
                        <label
                        htmlFor="enrollment_no"
                        className="block text-xl">
                            Enrollment No :
                        </label>
                        <div className="flex">
                            <input
                            type="text"
                            name="enrollment_no"
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
        </>
    )
}