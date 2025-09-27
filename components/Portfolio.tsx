'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Events', 'Portraits', 'Commercial'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80',
      title: 'Sarah & Michael Wedding',
      location: 'Tuscany, Italy',
    },
    {
      id: 2,
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      title: 'Emma & James Celebration',
      location: 'Napa Valley, CA',
    },
    {
      id: 3,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      title: 'Corporate Gala 2023',
      location: 'New York City',
    },
    {
      id: 4,
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      title: 'Family Portrait Session',
      location: 'Central Park, NY',
    },
    {
      id: 5,
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      title: 'Beach Wedding Ceremony',
      location: 'Santorini, Greece',
    },
    {
      id: 6,
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Hotel Campaign',
      location: 'Los Angeles, CA',
    },
    {
      id: 7,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      title: 'Anniversary Celebration',
      location: 'Paris, France',
    },
    {
      id: 8,
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      title: 'Executive Headshots',
      location: 'San Francisco, CA',
    },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto leading-relaxed">
            Explore our collection of captured moments, each telling a unique story 
            through the lens of artistic vision and technical expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-warm-gold text-white hover:bg-warm-gold/90'
                  : 'border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg card-hover cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-warm-gold text-white">
                  {item.category}
                </Badge>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-warm-gold/5 to-champagne/5 rounded-2xl p-12 border border-champagne/20">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              Love What You See?
            </h3>
            <p className="text-lg text-muted-text mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Every project is a new opportunity 
              to capture the extraordinary in the ordinary.
            </p>
            <Button className="btn-primary text-lg px-8 py-3">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;