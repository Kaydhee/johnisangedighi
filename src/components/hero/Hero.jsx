"use client";

import Nav from "../nav/Nav";
import "./hero.css";

import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      text: "Explore a variety of properties to suit your lifestyle.",
      description: "Our professional services",
      bgImage: "/images/old.webp",
      textFade: "fade-left",
    },
    {
      text: "Secure your future with the right property today.",
      description: "Our professional services",
      bgImage: "/images/construction.jpg",
      textFade: "fade-right",
    },
    {
      text: "Commercial Marine Valuation",
      description: "Our professional services",
      bgImage: "/images/rig.jpg",
      textFade: "fade-up",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [isHovered]);

  useEffect(() => {
    setTriggerAnimation(true);

    const timeout = setTimeout(() => {
      setTriggerAnimation(false);
    }, 1000); // Duration matches animation time

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <section
      className="relative h-screen w-full bg-secondary overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Nav />
      </div>

      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        ))}
      </div>

      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-12 text-white z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute flex flex-col items-start transition-all duration-[1000ms] ${
              currentSlide === index
                ? `${slide.textFade} opacity-100`
                : "opacity-0"
            }`}
          >
            {/* Slanted Background with Blur and Overlay */}
            <div className="relative bg-white text-black px-6 py-4 sm:px-12 sm:py-8 w-[90%] sm:w-fit mx-auto before:absolute before:top-0 before:left-0 before:w-full before:h-full before:skew-y-[-5deg] before:bg-white before:opacity-90 before:backdrop-blur-sm before:z-[-1]">
              {/* Paragraph with Slide Up Animation */}
              <p
                className={`text-base sm:text-2xl font-medium mb-2 sm:mb-4 text-center sm:text-left ${
                  triggerAnimation ? "animate-slideUp" : ""
                }`}
              >
                {slides[currentSlide].description}
              </p>

              {/* Heading with Slide In Right Animation */}
              <h1
                className={`text-2xl sm:text-5xl font-bold text-center sm:text-left ${
                  triggerAnimation ? "animate-slideInRight" : ""
                }`}
              >
                {slides[currentSlide].text}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {isHovered && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black px-4 py-2 rounded-full z-20"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black px-4 py-2 rounded-full z-20"
          >
            &#8594;
          </button>
        </>
      )}
    </section>
  );
}
