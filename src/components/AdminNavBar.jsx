import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavBar() {
    const navlinks = [
        {
            name: "Add Student",
            link: "/admin/add-student",
        },
        {
            name: "Delete Student",
            link: "/admin/delete-student",
        },
        {
            name: "View Students",
            link: "/admin/students",
        },
        {
            name: "Add Teacher",
            link: "/admin/add-teacher",
        },
        {
            name: "Delete Teacher",
            link: "/admin/delete-teacher",
        },
        {
            name: "View Teachers",
            link: "/admin/teachers",
        },
        {
            name: "Allocate Mentors",
            link: "/admin/allocate-student",
        },
        {
            name: "View Mentor",
            link: "/admin/teacher-students/abc1",
        }
    ];

    return(
        <>
        <h1>Admin NavBar</h1>
        <Link to={navlinks[0].link}>Add Student</Link>
        <Link to={navlinks[1].link}>Delete Student</Link>
        <Link to={navlinks[2].link}>View Students</Link><br />
        <Link to={navlinks[3].link}>Add Teacher</Link>
        <Link to={navlinks[4].link}>Delete Teacher</Link>
        <Link to={navlinks[5].link}>View Teachers</Link><br />
        <Link to={navlinks[6].link}>Allocate Mentors</Link>
        <Link to={navlinks[7].link}>View Mentor</Link>
        </>
    )
}