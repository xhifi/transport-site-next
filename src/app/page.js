"use client";

import ServiceSprite from "@/components/ServiceSprite";
import Card from "@/components/core/Card";
import Footer from "@/components/footer";
import Services from "@/components/services";
import Features from "@/components/features";

export default function Home() {
  return (
    <main>
      <Services />
      <Features />
      <Footer />
    </main>
  );
}
