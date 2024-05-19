import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Landingpage/Navbar"
import Footer from "../../Components/Landingpage/Footer"

const LandingPageLayout = ({setToken}) => {
  return (
    <main className="bg-[#f5f6fa] scroll-smooth">
      <Navbar setToken={setToken}/>
      <Outlet />
      <Footer />
    </main>
  )
}

export default LandingPageLayout
