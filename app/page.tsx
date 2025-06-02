"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Work from "@/app/components/Work/page"
import Navbar from '@/app/components/Navbar/page'
import Hero from '@/app/components/Hero/page'
import Pricing from "@/app/components/Pricing/page"
import FAQ from "@/app/components/FAQ/page"
import Footer from  "@/app/components/Footer/page"
export default function AIStartupLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-1600 via-indigo-900 to-black"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(3, 2, 3, 0.3) 0%, 
              transparent 50%),
            radial-gradient(circle at 20% 80%, 
              rgba(35, 7, 85, 0.4) 0%, 
              transparent 50%),
            radial-gradient(circle at 80% 20%, 
              rgba(168, 85, 247, 0.4) 0%, 
              transparent 50%),
            linear-gradient(125deg, 
rgb(32, 13, 75) 0%,
rgb(31, 4, 78) 25%, 
rgb(198, 176, 253) 40%, 
rgb(31, 4, 78) 75%, 
              #000000 100%)
          `
        }}
      />
      <div className="absolute inset-0">
        {[...Array(90)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <Navbar />
     <Hero />
     <Work />
     <Pricing />
     <FAQ />
     <Footer />
    </div>
  );
}