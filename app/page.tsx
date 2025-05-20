import React from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavigation";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black/10 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {name:'Home', link: '/', icon: <FaHome />}
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main> 
  );
}
