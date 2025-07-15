"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-20 pb-20 px-4 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title transition-transform duration-700 ease-out transform hover:scale-105">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-opacity duration-500 ease-in">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 transition-colors duration-300 hover:bg-blue-700 hover:text-white">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/Hustler002/MoneyTrail">
            <Button size="lg" variant="outline" className="px-8 transition-colors duration-300 hover:bg-gray-100">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 overflow-hidden">
          <div
            ref={imageRef}
            className="hero-image transform transition-transform duration-700 ease-in-out">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto transition-opacity duration-700 ease-in-out opacity-90 hover:opacity-100"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
