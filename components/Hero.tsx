'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
      title: 'Capturing Love Stories',
      subtitle: 'That Last Forever',
    },
    {
      image: 'https://images.unsplash.com/photo-1693845804012-247c7995a74c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
      title: 'Timeless Wedding',
      subtitle: 'Photography',
    },
    {
      image: 'https://images.unsplash.com/photo-1680490964562-60ee7fd82944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGluZGlhbiUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
      title: 'Moments That',
      subtitle: 'Matter Most',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-charcoal/40"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">

          
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block">
                  {slides[currentSlide].title}
                </span>
                <span className="hero-text block mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
                Professional photography services that capture the essence of your special moments 
                with artistic vision and technical excellence.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Button className="btn-primary text-lg px-10 py-4 group">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-10 py-4">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">400</div>
                <div className="text-sm text-white">Events Captured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-warm-gold' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;