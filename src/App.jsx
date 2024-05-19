import { useState } from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CreateAccountStudent from "./Components/Signup and Login/CreateAccountStudent"
import LoginPage from "./Pages/LoginPage"
import SDashboardLayout from "./Layout/Dashboard/SDashboardLayout"
import StudentDashboard from "./Student-Dashboard/StudentDashboard"
import Account from "./Pages/student pages/Account"
import StudentCourses from "./Pages/student pages/StudentCourses"
import SelectedCourse from "./Components/Dashboard_courses/SelectedCourse"
import CourseContent from "./Components/Dashboard_courses/CourseContent"
import Quiz from "./quiz/quiz"
import Forum from "./Pages/student pages/Forum"
import Certification from "./Pages/student pages/Certification"
import LandingPageLayout from "./Layout/LandingPage/LandingPageLayout"
import Landingpage from "./Pages/Landingpage"
import About from "./Components/Landingpage/About"
import Courses from "./Components/Landingpage/Courses"
import ProductDesign from "./Components/Dashboard_for_students/ProductDesign"
import Web3 from "./Components/Courses/Course/Web3"
import Backend from "./Components/Courses/Course/Backend"
import Frontend from "./Components/Courses/Course/Frontend"
import Testimonials from "./Components/Landingpage/Testimonials"
import ErrorPage from "./Pages/ErrorPage"
import LoginProvider from "./LoginContext"


const App = () => {
  const [ token, setToken ] = useState(null)


  return (
    <LoginProvider>
      <ToastContainer autoClose={2500} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout setToken={setToken} />}>
            <Route index element={<Landingpage />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Courses />} />
            <Route path="course/product-design" element={<ProductDesign />} />
            <Route path="course/web3" element={<Web3 />} />
            <Route path="course/backend" element={<Backend />} />
            <Route path="course/frontend" element={<Frontend />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
          <Route
            path="signup"
            element={<CreateAccountStudent setToken={setToken} />}
          />
          <Route path="login" element={<LoginPage setToken={setToken} />} />
          {token ? (
            <Route
              path="/students"
              element={<SDashboardLayout setToken={setToken} />}
            >
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="account" element={<Account />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route path="courses/:id" element={<SelectedCourse />} />
              <Route path="courses/:id/:moduleId" element={<CourseContent />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="forum" element={<Forum />} />
              <Route path="certificate" element={<Certification />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  )
}
export default App
