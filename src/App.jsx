<<<<<<< HEAD
import React from "react";
=======
// Resources
>>>>>>> develop2.0
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
<<<<<<< HEAD
} from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import About from "./Components/Landingpage/About";
import LandingPageLayout from "./Layout/LandingPage/LandingPageLayout";
import CoursePage from "./Pages/CoursePage";
import Testimonials from "./Components/Landingpage/Testimonials";
import StudentDashboard from "./Student-Dashboard/StudentDashboard";
import SignupPage from "./Pages/SignupPage";
import CreateAccountStudent from "./Components/Signup and Login/CreateAccountStudent";
=======
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
>>>>>>> develop2.0

// Sign up page
import CreateAccountStudent from "./Components/Signup and Login/CreateAccountStudent"
import StudentDashboard from "./Student-Dashboard/StudentDashboard"
import ErrorPage from "./Pages/ErrorPage"
import LoginProvider from "./LoginContext"
import LoginPage from "./Pages/LoginPage"

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
<<<<<<< HEAD
        <Route path="/course" element={<CoursePage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/student" element={<CreateAccountStudent />} />
        <Route path="*" element={<h1>404 Error or something like that</h1>} />
      </Route>
=======
      </Route>

      <Route path="/signup" element={<CreateAccountStudent />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/studentDashBoard" element={<StudentDashboard />} />

      <Route path="*" element={<ErrorPage />} />
>>>>>>> develop2.0
    </>
  )
);

// Main component
const App = () => {
<<<<<<< HEAD
  return <RouterProvider router={router} />;
};
=======
  return (
    <LoginProvider>
      <ToastContainer autoClose={2500} />
      <RouterProvider router={router} />
    </LoginProvider>
  )
}
>>>>>>> develop2.0

export default App;
