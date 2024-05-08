import About from "../Components/Landingpage/About"
import Collaborations from "../Components/Landingpage/Collaborations"
import Hero from "../Components/Landingpage/Hero"
import Navbar from "../Components/Landingpage/Navbar"

const Landingpage = () => {
  return (
        <>
          <Navbar />
          <Hero />
          <Collaborations />
          <About/>
        </>
      
  )
}

export default Landingpage