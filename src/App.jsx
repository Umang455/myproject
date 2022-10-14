import React from "react"
import { Routes, Route } from "react-router-dom"
import HeroSection from "./pages/HeroSection"
import TeacherLogin from "./pages/TeacherLogin"
import AdminLogin from "./pages/AdminLogin"
import StudentLogin from "./pages/StudentLogin"
import AdminDashboard from "./components/AdminDashboard"

function App() {
  return (
    <>
    <HeroSection />
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/admin/:id" element={<AdminDashboard />} />
    </Routes>
    </>
  )
}

export default App
