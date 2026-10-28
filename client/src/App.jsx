import Hero from "./components/Hero.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import Workspaces from "./components/Workspaces.jsx";
import Gallery from "./components/Gallery.jsx";
import Amenities from "./components/Amenities.jsx";
import Location from "./components/Location.jsx";
import WhyCultiv8 from "./components/WhyCultiv8.jsx";
import Reviews from "./components/Reviews.jsx";
import EnquiryForm from "./components/EnquiryForm.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import FooterBottom from "./components/FooterBottom.jsx";
import FloatingContact from "./components/FloatingContact.jsx";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <ClientLogos />
        <Workspaces />
        <Gallery />
        <Amenities />
        <Location />
        <WhyCultiv8 />
        <Reviews />
        <EnquiryForm />
        <Faq />
      </main>
      <Footer />
      <FooterBottom />
      <FloatingContact />
    </>
  );
}
