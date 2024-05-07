import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import SignupPage from "./Pages/SignUpPage"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<SignupPage/>} />)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
