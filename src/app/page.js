"use client";

import Footer from "@/components/footer";
import Services from "@/components/services";
import Features from "@/components/features";
import Contact from "@/components/Contact";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      {/* <Carousel /> */}
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
