import React from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavigation";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experiance from "@/components/Experiance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black/10 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiance />
        <Footer />
      </div>
    </main> 
  );
}
