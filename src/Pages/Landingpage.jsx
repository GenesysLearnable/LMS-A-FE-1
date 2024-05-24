import About from "../Components/Landingpage/About";
import AboutCard from "../Components/Landingpage/AboutCard";
import Collaborations from "../Components/Landingpage/Collaborations";
import Courses from "../Components/Landingpage/Courses";
import Faqs from "../Components/Landingpage/Faqs";
import Hero from "../Components/Landingpage/Hero";
import Testimonials from "../Components/Landingpage/Testimonials";

const Landingpage = () => {
  const noScrollbar = {
    // Hide scrollbar for Chrome, Safari and Opera
    "::-webkit-scrollbar": {
      display: "none",
    },
    // Hide scrollbar for IE, Edge and Firefox
    "-ms-overflow-style": "none", // IE and Edge
    "scrollbar-width": "none", // Firefox
  };
  return (
    <>
      <Hero />
      <Collaborations />
      <About />
      <AboutCard />
      <Courses />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Landingpage;
