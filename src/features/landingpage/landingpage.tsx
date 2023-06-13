import About from "./about/about";
import ContactForm from "./contact/contactForm";
import Landing from "./landing/landing";
import Pharmacies from "./pharmacies/pharmacies";
import Products from "./products/products";

function LandingPage() {
  return (
    <div className="w-screen bg-tertiary overflow-x-clip scroll-m-0">
      <Landing />
      <Pharmacies />
      <Products /> 
      <ContactForm />
      <About />
    </div>
  );
}

export default LandingPage;
