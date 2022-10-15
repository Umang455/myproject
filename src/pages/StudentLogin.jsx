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
        <form method="POST" onSubmit={handleSubmit}>
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
        </form>
        </>
    )
}