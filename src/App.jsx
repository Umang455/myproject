import React from "react"
import { Routes, Route } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import TeacherLogin from "./components/TeacherLogin"
import AdminLogin from "./components/AdminLogin"
import StudentLogin from "./components/StudentLogin"

function App() {
  return (
    <>
    <HeroSection />
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/student/login" element={<StudentLogin />} />

    </Routes>
    </>
  )
}

export default App
