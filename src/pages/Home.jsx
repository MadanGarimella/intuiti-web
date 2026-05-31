import Hero from "../sections/home/Hero";
import TrustedSection from "../sections/home/TrustedSection";
import ProductShowcase from "../sections/home/ProductShowcase";
import Features from "../sections/home/Features";
import ProductScreenshots from "../sections/home/ProductScreenshots";
import ComparsionSection from "../sections/home/ComparsionSection";
import RoadMap from "../sections/home/RoadMap";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedSection />
      <ProductShowcase />
      <Features />
      <ProductScreenshots />
      <ComparsionSection />
      <RoadMap />
    </>
  );
};

export default Home;