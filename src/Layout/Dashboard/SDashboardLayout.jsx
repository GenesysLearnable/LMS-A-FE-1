import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Dashboard_courses/Sidebar"
import { UserEmail } from "../../LoginContext"
import useCourseStore from "../../utlis/loader"
import { useEffect } from "react"

const SDashboardLayout = () => {
  const { fetchCourse } = useCourseStore()
  const { email } = UserEmail()

  useEffect(() => {
    fetchCourse(email)
  }, [fetchCourse, email])
  
  return (
    <section className="flex overflow-hidden h-screen bg-slate-100 ">
      <section>
        <Sidebar />
      </section>

      <Outlet />
    </section>
  )
}

export default SDashboardLayout
