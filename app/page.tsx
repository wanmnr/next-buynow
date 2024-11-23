// app/page.tsx
import Hero from "./components/home/Hero";
import CompanyIntro from "./components/home/CompanyIntro";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Testimonials from "./components/home/Testimonials";
import Benefits from "./components/home/Benefits";
import CallToAction from "./components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </>
  );
}
