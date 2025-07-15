"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

// Hook to fade in sections
function useFadeInOnScroll() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return [ref, inView];
}

export default function Home() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [featuresRef, featuresInView] = useFadeInOnScroll();
  const [howItWorksRef, howItWorksInView] = useFadeInOnScroll();
  const [testimonialsRef, testimonialsInView] = useFadeInOnScroll();
  const [ctaRef, ctaInView] = useFadeInOnScroll();

  const fadeClass = "opacity-0 transition-opacity duration-1000 ease-out";
  const visibleClass = "opacity-100";

  return (
    <div className="mt-40 space-y-20">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-zinc-800 dark:to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section
        ref={featuresRef}
        className={`${fadeClass} ${featuresInView ? visibleClass : ""} py-20 dark:bg-zinc-950 dark:text-white`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            All-in-One Tools for Financial Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="
                  p-6 shadow-md dark:bg-zinc-900 
                  transform transition-transform duration-500 ease-out 
                  hover:scale-105 hover:shadow-xl
                "
              >
                <CardContent className="space-y-4 pt-4 text-center">
                  <div
                    className="
                      inline-block 
                      transition-transform duration-500 ease-out 
                      hover:scale-125
                    "
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
</section>


      {/* How It Works Section */}
<section
  ref={howItWorksRef}
  className={`${fadeClass} ${howItWorksInView ? visibleClass : ""} py-20 bg-blue-50 dark:bg-zinc-900 dark:text-white`}
>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      How MoneyTrail Simplifies Your Journey
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {howItWorksData.map((step, index) => (
        <div key={index} className="text-center">
          <div
            className="w-16 h-16 bg-blue-200 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-6
                       transition-transform duration-500 ease-out
                       hover:scale-110"
          >
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
<section
  ref={testimonialsRef}
  id="testimonials"
  className={`${fadeClass} ${testimonialsInView ? visibleClass : ""} py-20 dark:bg-zinc-950 dark:text-white`}
>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-14">
      Hear from Our Happy Users
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <Card
          key={index}
          className="
            p-6 dark:bg-zinc-900
            transform transition-transform duration-500 ease-out 
            hover:scale-105 hover:shadow-lg
          "
        >
          <CardContent className="pt-4">
            <div className="flex items-center mb-4">
              <div
                className="
                  inline-block rounded-full overflow-hidden
                  transform transition-transform duration-500 ease-out 
                  hover:scale-110
                "
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="font-semibold text-md">{testimonial.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {testimonial.quote}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`${fadeClass} ${ctaInView ? visibleClass : ""} py-20 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-800 dark:to-blue-600`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Take Charge of Your Finances Today</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm">Thousands are already achieving financial clarity and control with MoneyTrail. Join them today.</p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-200 dark:text-blue-800 animate-bounce">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
