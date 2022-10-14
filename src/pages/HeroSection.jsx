import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
        <Link to="/admin/login">Admin Login</Link>
        <Link to="/teacher/login">Teacher Login</Link>
        <Link to="/student/login">Student Login</Link>
        </>
    );
}