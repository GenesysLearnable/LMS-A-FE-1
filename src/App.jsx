import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Landingpage from "./Pages/Landingpage"
import About from "./Components/Landingpage/About"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landingpage />} >
        <Route path="/about" element={<About/>} />
      </Route>
      <Route path="/other" element={<h1>Hello World</h1>} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
