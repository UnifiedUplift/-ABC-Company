"use client";
// import useLocoScroll from '@/hooks/useLocoScroll';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

function page() {
  // useLocoScroll();
  return (
    // <div data-scroll-container>
    <div className="">
      <div>
      <section className="fixed w-full z-10">
        <Navbar />
      </section>

      <section id="home">
        <Hero />
      </section>
      </div>
      <section id="services" data-scroll-section>
        <Services />
      </section>
      {/* <section id="about" data-scroll-section>
        <About />
      </section> */}
      <section id="contact" data-scroll-section>
        <Contact />
      </section>
      {/* <section data-scroll-container>
      <Footer  />
      </section> */}
    </div>
  );
}

export default page;
