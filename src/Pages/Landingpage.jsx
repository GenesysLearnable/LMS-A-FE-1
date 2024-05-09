import About from "../Components/Landingpage/About"
import AboutCard from "../Components/Landingpage/AboutCard"
import Collaborations from "../Components/Landingpage/Collaborations"
import Courses from "../Components/Landingpage/Courses"
import Hero from "../Components/Landingpage/Hero"
import Navbar from "../Components/Landingpage/Navbar"
import Testimonials from "../Components/Landingpage/Testimonials"

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaborations />
      <About />
      <AboutCard />
      <Courses />
      <Testimonials />
    </>
  )
}

export default Landingpage
