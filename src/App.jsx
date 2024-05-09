import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Landingpage from "./Pages/Landingpage"
import About from "./Components/Landingpage/About"
import LandingPageLayout from "./Layout/LandingPage/LandingPageLayout"
import CoursePage from "./Pages/CoursePage"
import Testimonials from "./Components/Landingpage/Testimonials"
import StudentDashboard from "./Student-Dashboard/StudentDashboard"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/course" element={<CoursePage />} />
      <Route path="/Student" element={<StudentDashboard />} />
      </Route>
      
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
