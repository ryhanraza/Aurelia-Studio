import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { SEO } from "./components/SEO";

function Home() {
  return (
    <Layout>
      <SEO 
        title="Aurelia Studio | Premium Interior Design & Architecture" 
        description="Aurelia Studio creates sophisticated, timeless interiors for high-end residential and commercial spaces. Bespoke design services in New York."
      />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
    </Layout>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
