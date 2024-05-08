import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Homepage from "./Pages/Homepage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/other" element={<h1>Hello World</h1>} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
