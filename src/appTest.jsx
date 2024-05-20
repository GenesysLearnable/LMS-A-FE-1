import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom"
  import { ToastContainer } from "react-toastify"
  import "react-toastify/dist/ReactToastify.css"
  
  // Landing page imports
  import LandingPageLayout from "./Layout/LandingPage/LandingPageLayout"
  import Landingpage from "./Pages/Landingpage"
  import About from "./Components/Landingpage/About"
  import Courses from "./Components/Landingpage/Courses"
  import ProductDesign from "./Components/Courses/Course/ProductDesign"
  import Web3 from "./Components/Courses/Course/Web3"
  import Backend from "./Components/Courses/Course/Backend"
  import Frontend from "./Components/Courses/Course/Frontend"
  import Testimonials from "./Components/Landingpage/Testimonials"
  
  // Sign up page
  import CreateAccountStudent from "./Components/Signup and Login/CreateAccountStudent"
  import StudentDashboard from "./Student-Dashboard/StudentDashboard"
  import ErrorPage from "./Pages/ErrorPage"
  import LoginProvider from "./LoginContext"
  import LoginPage from "./Pages/LoginPage"
  import SDashboardLayout from "./Layout/Dashboard/SDashboardLayout"
  import Account from "./Pages/student pages/Account"
  import StudentCourses from "./Pages/student pages/StudentCourses"
  import Forum from "./Pages/student pages/Forum"
  import Certification from "./Pages/student pages/Certification"
  import CourseContent from "./Components/Dashboard_courses/CourseContent"
  import SelectedCourse from "./Components/Dashboard_courses/SelectedCourse"
  import Quiz from "./quiz/quiz"
  import { useState } from "react"
  
  // Main component
  const App = () => {
    const [token, setToken] = useState()
  
    // Routes
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<Landingpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/course/product-design" element={<ProductDesign />} />
            <Route path="/course/web3" element={<Web3 />} />
            <Route path="/course/backend" element={<Backend />} />
            <Route path="/course/frontend" element={<Frontend />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Route>
  
          <Route path="/signup" element={<CreateAccountStudent />} />
          <Route path="/login" element={<LoginPage />} />
          {!token ? (
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
          ) : (
            <Route path="/students" element={<SDashboardLayout />}>
              <Route path="/students/dashboard" element={<StudentDashboard />} />
              <Route path="/students/account" element={<Account />} />
              <Route path="/students/courses" element={<StudentCourses />} />
              <Route path="/students/courses/:id" element={<SelectedCourse />} />
              <Route
                path="/students/courses/:id/:moduleId"
                element={<CourseContent />}
              />
              <Route path="/students/quiz" element={<Quiz />} />
              <Route path="/students/forum" element={<Forum />} />
              <Route path="/students/certificate" element={<Certification />} />
            </Route>
          )}
          <Route path="*" element={<ErrorPage />} />
        </>
      )
    )
  
    return (
      <LoginProvider>
        <ToastContainer autoClose={2500} />
        <RouterProvider router={router} />
      </LoginProvider>
    )
  }
  
  export default App
  