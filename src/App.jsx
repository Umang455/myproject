import React from "react"
import { Routes, Route } from "react-router-dom"
import Test from "./components/Test"
import  Head  from "./components/Head"
import HeroNavBar from "./components/HeroNavBar"
import HeroSection from "./pages/HeroSection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AdminLogin from "./pages/AdminLogin"
import TeacherLogin from "./pages/TeacherLogin"
import StudentLogin from "./pages/StudentLogin"
import AdminNavBar from "./components/AdminNavBar"
import AdminDashboard from "./components/AdminDashboard"


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={[<Head />, <HeroNavBar />, <HeroSection />]} />
      <Route path="/about" element={[<Head />, <HeroNavBar />, <About />]} />
      <Route path="/contact" element={[<Head />, <HeroNavBar />, <Contact />]} />
      <Route path="/admin/login" element={[<Head />, <HeroNavBar />, <AdminLogin />]} />
      <Route path="/teacher/login" element={[<Head />, <HeroNavBar />, <TeacherLogin />]} />
      <Route path="/student/login" element={[<Head />, <HeroNavBar />, <StudentLogin />]} />
      <Route path="/admin/dashboard" element={[<Head />, <AdminNavBar />, <AdminDashboard />]} />
    </Routes>
    {/* <Test /> */}
    </>
  )
}