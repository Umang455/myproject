import React from "react";
import axios from "axios";
import AdminLogin from "../pages/AdminLogin";
import AdminNavBar from "./AdminNavBar";
// import { id } from "../pages/AdminLogin";

export default function AdminDashboard(props) {
    const auth = true;
    

    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(`http://localhost:9000/admin/${props.id}`)
            .then((res) => {
                // console.log(res);
                setContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [auth]);

    return (
        <><h1>Admin Dashboard</h1>
        <p>{props.id}</p>
        <p>{content}</p>
            {auth ? <AdminNavBar/> : <AdminLogin />}
            {/* {content.map((item) => (
                <div key={item._id}>
                    <h2>{item.username}</h2>
                </div>
            ))} */}

        </>
    );
}