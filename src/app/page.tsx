"use client";

import Navbar from "@/components/layout/navbar";
import HomeSection from "@/components/layout/HomeSection";
import AboutMe from "@/components/layout/AboutMe";
import Technologies from "@/components/layout/Technologies";
import Experiencies from "@/components/layout/Experiencies";
import Contato from "@/components/layout/Contato";
import Footer from "@/components/layout/Footer";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection id="home" />
      <AboutMe id="about-me" />
      <Technologies id="technologies" />
      <Experiencies id="experiences" />
      <Contato id="contato" />
      <Footer />
      <button
        className="fixed bottom-4 right-4 z-60 p-3 md:p-4 bg-slate-800 rounded-full 
             focus:ring-2 focus:ring-blue-300 focus:outline-none hover:bg-slate-700 
             transition-colors duration-300 ease-in-out cursor-pointer shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ArrowUp
          className="h-6 w-6 md:h-7 md:w-7 text-blue-300"
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </main>
  );
}
