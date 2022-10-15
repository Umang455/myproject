import React from "react"
import { Routes, Route } from "react-router-dom"
import HeroSection from "./pages/HeroSection"
import TeacherLogin from "./pages/TeacherLogin"
import AdminLogin from "./pages/AdminLogin"
import StudentLogin from "./pages/StudentLogin"
import AdminDashboard from "./components/AdminDashboard"
import TeacherDashboard from "./components/TeacherDashboard"
import StudentDashboard from "./components/StudentDashboard"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
    </>
  )
}