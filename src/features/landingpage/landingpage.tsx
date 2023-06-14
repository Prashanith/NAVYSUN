import About from "./about/about";
import ContactForm from "./contact/contactForm";
import Landing from "./landing/landing";
import Pharmacies from "./pharmacies/pharmacies";
import Products from "./products/products";
import Services from "./services/services";

function LandingPage() {
  return (
    <div className="w-screen bg-tertiary overflow-x-clip scroll-m-0">
      <Landing />
      <Products />
      <Services />
      <Pharmacies />
      <ContactForm />
      <About />
    </div>
  );
}

export default LandingPage;
