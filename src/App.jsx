// Resources
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
      <Route path="/studentDashBoard" element={<StudentDashboard />} />

      <Route path="*" element={<ErrorPage />} />
    </>
  )
)

// Main component
const App = () => {
  return (
    <LoginProvider>
      <ToastContainer autoClose={2500} />
      <RouterProvider router={router} />
    </LoginProvider>
  )
}

export default App
