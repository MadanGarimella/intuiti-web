import Hero from "../sections/home/Hero";
import Services from "../sections/home/Services";
import WhyIntuiti from "../sections/home/WhyIntuiti";
import HowWeWork from "../sections/home/HowWeWork";
import Portfolio from "../sections/home/Portfolio";
import Pricing from "../sections/home/Pricing";
import Testimonials from "../sections/home/Testimonials";
import FAQ from "../sections/home/FAQ";
import FinalCTA from "../sections/home/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyIntuiti />
      <HowWeWork />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Home;