import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Landingpage from "./Pages/Landingpage"
import About from "./Components/Landingpage/About"
import LandingPageLayout from "./Layout/LandingPage/LandingPageLayout"
import Testimonials from "./Components/Landingpage/Testimonials"
import CreateAccountStudent from "./Components/Signup and Login/CreateAccountStudent"
import StudentDashboard from "./Student-Dashboard/StudentDashboard"
import ErrorPage from "./Pages/ErrorPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginProvider from "./LoginContext"
import Courses from "./Components/Landingpage/Courses"
import ProductDesign from "./Components/Courses/Course/ProductDesign"
import Web3 from "./Components/Courses/Course/Web3"
import Backend from "./Components/Courses/Course/Backend"
import Frontend from "./Components/Courses/Course/Frontend"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/product-design" element={<ProductDesign />} />
        <Route path="/course/web3" element={<Web3 />} />
        <Route path="/course/backend" element={<Backend />} />
        <Route path="/course/frontend" element={<Frontend />} />
      </Route>
      <Route path="/signup" element={<CreateAccountStudent />} />
      <Route path="/studentDashBoard" element={<StudentDashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
)

const App = () => {
  return (
    <LoginProvider>
      <ToastContainer autoClose={2500} />
      <RouterProvider router={router} />
    </LoginProvider>
  )
}

export default App
