import React from "react";
import { Link } from "react-router-dom";

export default function TeacherNavBar() {
    const navlinks = [
        {
            name: "View Students",
            link: "/teacher/students",
        },
        {
            name: "Allocated Students",
            link: "/teacher/allocated-students/:id",
        }
    ];

    return(
        <>
        <h1>Teacher NavBar</h1>
        <Link to={navlinks[0].link}>View Students</Link>
        <Link to={navlinks[1].link}>Allocated Students</Link>
        </>
    )
}