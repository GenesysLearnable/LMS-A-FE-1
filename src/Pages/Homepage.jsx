import About from "../Components/Homepage/About"
import Collaborations from "../Components/Homepage/Collaborations"
import Hero from "../Components/Homepage/Hero"
import Navbar from "../Components/Homepage/Navbar"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaborations />
      <About/>
    </>
  )
}

export default Homepage
