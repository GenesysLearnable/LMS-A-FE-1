import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Landingpage/Navbar';
import Footer from '../../Components/Landingpage/Footer';

const LandingPageLayout = () => {
  return (
    <main className="bg-[#f5f6fa] scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
