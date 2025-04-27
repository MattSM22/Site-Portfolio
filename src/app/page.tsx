"use client";

import Navbar from "@/components/layout/navbar";
import HomeSection from "@/components/layout/HomeSection";
import AboutMe from "@/components/layout/AboutMe";
import Technologies from "@/components/layout/Technologies";
import Experiencies from "@/components/layout/Experiencies";
import Contato from "@/components/layout/Contato";
import Footer from "@/components/layout/Footer";

import { ArrowUp } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import NavbarMobile from "@/components/custom/NavbarMobile/NavbarMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="relative">
      {isMobile ? (<NavbarMobile />) : (<Navbar />)}
      <HomeSection id="home" />
      <AboutMe id="about-me" />
      <Technologies id="technologies" />
      <Experiencies id="experiences" />
      <Contato id="contato" />
      <Footer />
      <button
        className="fixed bottom-0 right-0 z-50 m-4 p-3 bg-slate-800 
                  rounded-full focus:ring-2 focus:ring-blue-300 focus:outline-none hover:bg-slate-700 
                  transition-colors duration-300 ease-in-out cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ArrowUp
          className="h-6 w-6 text-blue-300"
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </main>
  );
}
