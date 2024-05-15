import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Dashboard_courses/Sidebar"

const SDashboardLayout = () => {
  return (
    <section className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      <Outlet />
    </section>
  )
}

export default SDashboardLayout
