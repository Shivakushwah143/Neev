'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      event: 'Wedding Photography',
      rating: 5,
      text: 'Absolutely magical! They captured every emotion and moment perfectly. The photos are beyond our dreams, and we\'ll treasure them forever. Their professionalism and artistic eye are unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
      location: 'Napa Valley Wedding',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Event Organizer',
      event: 'Corporate Event',
      rating: 5,
      text: 'Outstanding work on our annual gala. They managed to capture the essence of our brand while creating stunning visuals that exceeded all expectations. Highly recommended for any professional event.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      location: 'Tech Conference 2023',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Mother',
      event: 'Family Portrait',
      rating: 5,
      text: 'The family session was incredible! They made everyone feel comfortable and natural. The photos perfectly capture our family\'s personality and love. We couldn\'t be happier with the results.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      location: 'Family Session',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Groom',
      event: 'Destination Wedding',
      rating: 5,
      text: 'They traveled to Greece for our wedding and the results were breathtaking. Every shot tells our love story beautifully. Their attention to detail and creative vision made our special day even more memorable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: 'Santorini Wedding',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Director',
      event: 'Brand Photography',
      rating: 5,
      text: 'Professional, creative, and delivered exactly what we needed for our rebrand. The commercial shots elevated our marketing materials significantly. A true partner in bringing our vision to life.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80',
      location: 'Brand Campaign',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-to-br from-warm-gold/5 to-champagne/10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="relative md:col-span-1">
                  <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden">
                    <img
                      src={currentData.image}
                      alt={currentData.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-warm-gold/90 backdrop-blur-sm p-3 rounded-full">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentData.rating)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-warm-gold fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-muted-text leading-relaxed mb-8">
                    "{currentData.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-charcoal">
                      {currentData.name}
                    </h4>
                    <p className="text-warm-gold font-medium">
                      {currentData.role} • {currentData.event}
                    </p>
                    <p className="text-sm text-muted-text">
                      {currentData.location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-warm-gold w-8'
                    : 'bg-warm-gold/30 hover:bg-warm-gold/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">500+</div>
            <div className="text-sm text-muted-text">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">1000+</div>
            <div className="text-sm text-muted-text">Events Captured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">50+</div>
            <div className="text-sm text-muted-text">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">10+</div>
            <div className="text-sm text-muted-text">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;