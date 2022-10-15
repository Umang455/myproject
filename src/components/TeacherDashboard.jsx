import React from "react";
import axios from "axios";
import TeacherLogin from "../pages/TeacherLogin";
import TeacherNavBar from "./TeacherNavBar";

export default function TeacherDashboard() {
    const auth = true;

    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        axios
            .get("http://localhost:9000/teacher/:id")
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
            {auth ? [<h1>Teacher Dashboard</h1>, <TeacherNavBar/>] : <TeacherLogin />}
            {/* {content.map((item) => (
                <div key={item._id}>
                    <h2>{item.username}</h2>
                </div>
            ))} */}

        </>
    );
}