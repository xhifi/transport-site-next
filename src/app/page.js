"use client";

import Footer from "@/components/footer";
import Services from "@/components/services";
import Features from "@/components/features";
import Carousel from "@/components/carousel";
import Contact from "@/components/Contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      {/* <Carousel /> */}
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
