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
      name: 'Priya Sharma',
      role: 'Bride',
      event: 'Traditional Marwari Wedding',
      rating: 5,
      text: 'Absolutely magical! They captured every emotion and moment of our Marwari wedding perfectly. The photos of our pithi ceremony and phera rituals are beyond our dreams. Their understanding of Indian traditions made all the difference.',
      image: 'https://images.unsplash.com/photo-1729101145932-5e33c8e9ba9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kYWluJTIwZ2lybCUyMGZvciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      location: 'Rajwada Palace, Indore',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Groom',
      event: 'Punjabi Wedding',
      rating: 5,
      text: 'Outstanding work on our Anand Karaj ceremony! They beautifully captured the chooda ceremony and all the vibrant celebrations. Made us feel so comfortable throughout the hectic wedding schedule.',
      image: 'https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      location: 'Local Gurudwara, Indore',
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Mother of the Bride',
      event: 'Gujarati Wedding',
      rating: 5,
      text: 'The team understood our Gujarati traditions perfectly. They captured the garba night and mandap ceremony with such elegance. The family portraits with our traditional attire are absolutely priceless.',
      image: 'https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
      location: 'Farmhouse, Indore',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Event Planner',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional and creative team! They handled our large corporate event with multiple dignitaries perfectly. The candid shots during cultural performances were particularly impressive.',
      image: 'https://images.unsplash.com/photo-1659805839124-ecec1232ea31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHklMjBib3l8ZW58MHx8MHx8fDA%3D',
      location: 'Hotel Fortune, Indore',
    },
    {
      id: 5,
      name: 'Sunita yadav',
      role: 'Mother',
      event: 'Family Portrait',
      rating: 5,
      text: 'The family session at Lal Bagh Palace was incredible! They made our children feel comfortable and captured our family bond beautifully. The traditional and contemporary mix in photos is exactly what we wanted.',
      image: 'https://images.unsplash.com/photo-1688802928956-fa8139142c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFvbWFudGljJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
      location: 'Lal Bagh Palace, Indore',
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      role: 'Business Owner',
      event: 'Commercial Photography',
      rating: 5,
      text: 'Excellent work for our jewelry brand campaign at Sarafa Bazaar. They understood the traditional aesthetics we wanted and delivered stunning images that boosted our sales significantly.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D',
      location: 'Sarafa Bazaar, Indore',
    },
    {
      id: 7,
      name: 'Deepika jha',
      role: 'Bride',
      event: 'South Indian Wedding',
      rating: 5,
      text: 'They beautifully captured our Telugu wedding rituals - from the muhurtham to the mangalsutra ceremony. The attention to detail in capturing our silk sarees and gold jewelry was remarkable.',
      image: 'https://images.unsplash.com/photo-1635194936300-08a36d3a90de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBodG90fGVufDB8fDB8fHww',
      location: 'Convention Center, Indore',
    },
    {
      id: 8,
      name: 'Rajesh Khanna',
      role: 'Father of the Groom',
      event: 'Wedding Photography',
      rating: 5,
      text: 'As a father, I was worried about the wedding chaos, but the photography team managed everything smoothly. They captured all the important family moments without being intrusive.',
      image: 'https://plus.unsplash.com/premium_photo-1669850858880-d88baa3d24d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
      location: 'Ujjain Wedding',
    }
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
            Don't just take our word for it. Here's what our clients from across Madhya Pradesh have to say about 
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
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">350+</div>
            <div className="text-sm text-muted-text">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">500+</div>
            <div className="text-sm text-muted-text">Events Captured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">25+</div>
            <div className="text-sm text-muted-text">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warm-gold mb-2">8+</div>
            <div className="text-sm text-muted-text">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;