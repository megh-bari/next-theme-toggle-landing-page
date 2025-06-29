"use client"
import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CommandOptions } from "./components/section/CommandOptions";
import { Contribution } from "./components/section/Contribution";
import { CTASection } from "./components/section/CTASection";
import { DemoVideo } from "./components/section/DemoVideo";
import { Dependencies } from "./components/section/Dependencies";
import { Features } from "./components/section/Features";
import Hero from "./components/section/Hero";
import { HowItWorks } from "./components/section/HowItWorks";
import { InstallationGuide } from "./components/section/InstallationGuide";
import { WhatGetsCreated } from "./components/section/WhatGetsCreated";
import LoadingScreen from "./components/ui/LoadingScreen";
import { LenisProvider } from "./components/LenisProvider";

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setMounted(true)
  //   // Check if user has visited before
  //   const hasVisited = localStorage.getItem("next-theme-toggle-visited")

  //   if (hasVisited) {
  //     // Skip loading for returning users
  //     setIsLoading(false)
  //   } else {
  //     // Show loading for first-time visitors
  //     const timer = setTimeout(() => {
  //       setIsLoading(false)
  //       localStorage.setItem("next-theme-toggle-visited", "true")
  //     }, 5000)

  //     return () => clearTimeout(timer)
  //   }
  // }, [])
  useEffect(() => {
    document.body.classList.add('loading-background');
    setMounted(true);
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading-background');
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading-background');
    };
  }, []);

  if (!mounted || isLoading) {
    return <LoadingScreen />;
  }


  return (
    <>
    <LenisProvider/>
      <div className="min-h-screen w-full relative bg-gradient-to-br from-black via-black/90 to-gray-900/90 text-white">
        {/* Pearl Mist Background with Top Glow */}
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 120% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
          }}
        /> */}
        <Header />

        <main>
          <Hero />
          <DemoVideo />
          <Features />
          <InstallationGuide />
          <HowItWorks />
          <Dependencies />
          <WhatGetsCreated />
          <CommandOptions />
          <CTASection />
          <Contribution />
        </main>
        <Footer />

      </div>
    </>
  );
}
