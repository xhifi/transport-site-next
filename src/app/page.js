"use client";

import Footer from "@/components/footer";
import Services from "@/components/services";
import Features from "@/components/features";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Services />
      <Features />
      <Footer />
    </main>
  );
}
