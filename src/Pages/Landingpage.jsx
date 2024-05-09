import About from "../Components/Landingpage/About"
import AboutCard from "../Components/Landingpage/AboutCard"
import Collaborations from "../Components/Landingpage/Collaborations"
import Courses from "../Components/Landingpage/Courses"
import Faqs from "../Components/Landingpage/Faqs"
import Hero from "../Components/Landingpage/Hero"
import Testimonials from "../Components/Landingpage/Testimonials"

const Landingpage = () => {
  return (
    <>  
      <Hero />
      <Collaborations />
      <About />
      <AboutCard />
      <Courses />
      <Testimonials />
      <Faqs/>
    </>
  )
}

export default Landingpage
