import React from "react";
import axios from "axios";

export default function AdminLogin() {
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
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
        <form method="POST" onSubmit={handleSubmit}>
            <h1>Admin login</h1>
            <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChanges} placeholder="Username" required="" />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={inputs.password || ""} onChange={handleChanges} placeholder="Password" required="" />
            </div>
            <button type="submit" >Submit</button>
        </form>
        </>
    )
}