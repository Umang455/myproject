import React from "react";
import axios from "axios";

export default function AdminDashboard() {

    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("http://localhost:9000/admin/list")
            .then((res) => {
                console.log(res);
                setContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            {content.map((item) => (
                <div key={item._id}>
                    <h2>{item.username}</h2>
                </div>
            ))}

        </>
    );
}