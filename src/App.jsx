import React from "react"
import { Routes, Route } from "react-router-dom"
import Head from "./components/Head"
import HeroNavBar from "./components/HeroNavBar"
import HeroSection from "./pages/HeroSection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AdminLogin from "./pages/AdminLogin"
import TeacherLogin from "./pages/TeacherLogin"
import StudentLogin from "./pages/StudentLogin"
import AdminNavBar from "./components/AdminNavBar"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminStudent from "./pages/admin/AdminStudent"
import AddStudent from "./pages/admin/AddStudent"
import DeleteStudent from "./pages/admin/DeleteStudent"
import ViewStudents from "./pages/admin/ViewStudents"
import AdminTeacher from "./pages/admin/AdminTeacher"
import AddTeacher from "./pages/admin/AddTeacher"
import DeleteTeacher from "./pages/admin/DeleteTeacher"
import ViewTeachers from "./pages/admin/ViewTeachers"
import AdminMentor from "./pages/admin/AdminMentor"
import AllocateMentor from "./pages/admin/AllocateMentor"
import ViewMentors from "./pages/admin/ViewMentors"
import TeacherNavBar from "./components/TeacherNavBar"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"
import TeacherStudent from "./pages/teacher/TeacherStudent"
import TeacherAllocatedStudents from "./pages/teacher/TeacherAllocatedStudents"
import StudentNavBar from "./components/StudentNavBar"
import StudentDashboard from "./pages/student/StudentDashboard"
import StudentDocuments from "./pages/student/StudentDocuments"
import StudentUploadDocuments from "./pages/student/StudentUploadDocuments"





export default function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={[<Head />, <HeroNavBar />, <HeroSection />]} />
      <Route exact path="/about" element={[<Head />, <HeroNavBar />, <About />]} />
      <Route exact path="/contact" element={[<Head />, <HeroNavBar />, <Contact />]} />
      <Route exact path="/admin/login" element={[<Head />, <HeroNavBar />, <AdminLogin />]} />
      <Route exact path="/teacher/login" element={[<Head />, <HeroNavBar />, <TeacherLogin />]} />
      <Route exact path="/student/login" element={[<Head />, <HeroNavBar />, <StudentLogin />]} />
      <Route exact path="/admin/dashboard" element={[<Head />, <AdminNavBar />, <AdminDashboard />]} />
      <Route exact path="/admin/student" element={[<Head />, <AdminNavBar />, <AdminStudent />]} />
      <Route exact path="/admin/student/add-student" element={[<Head />, <AdminNavBar />, <AddStudent />]} />
      <Route exact path="/admin/student/delete-student" element={[<Head />, <AdminNavBar />, <DeleteStudent />]} />
      <Route exact path="/admin/student/student-list" element={[<Head />, <AdminNavBar />, <ViewStudents />]} />
      <Route exact path="/admin/teacher" element={[<Head />, <AdminNavBar />, <AdminTeacher />]} />
      <Route exact path="/admin/teacher/add-teacher" element={[<Head />, <AdminNavBar />, <AddTeacher />]} />
      <Route exact path="/admin/teacher/delete-teacher" element={[<Head />, <AdminNavBar />, <DeleteTeacher />]} />
      <Route exact path="/admin/teacher/teacher-list" element={[<Head />, <AdminNavBar />, <ViewTeachers />]} />
      <Route exact path="/admin/mentor" element={[<Head />, <AdminNavBar />, <AdminMentor />]} />
      <Route exact path="/admin/mentor/allocate-mentor" element={[<Head />, <AdminNavBar />, <AllocateMentor />]} />
      <Route exact path="/admin/mentor/mentor-list" element={[<Head />, <AdminNavBar />, <ViewMentors />]} />
      <Route exact path="/teacher/dashboard" element={[<Head />, <TeacherNavBar />, <TeacherDashboard />]} />
      <Route exact path="/teacher/student" element={[<Head />, <TeacherNavBar />, <TeacherStudent />]} />
      <Route exact path="/teacher/allocated-students" element={[<Head />, <TeacherNavBar />, <TeacherAllocatedStudents />]} />
      <Route exact path="/student/dashboard" element={[<Head />, <StudentNavBar />, <StudentDashboard />]} />
      <Route exact path="/student/documents" element={[<Head />, <StudentNavBar />, <StudentDocuments />]} />
      <Route exact path="/student/upload-documents" element={[<Head />, <StudentNavBar />, <StudentUploadDocuments />]} />
    </Routes>
    </>
  )
}