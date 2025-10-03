'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Events', 'Portraits', 'Commercial'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Weddings',
      image: 'https://media.istockphoto.com/id/2168707868/photo/indian-couple-holding-hand-close-up-in-wedding-ceremony.webp?a=1&b=1&s=612x612&w=0&k=20&c=YohVKdmbHl85l5Iy_retZo7uMDh53b7B-TEx5EmxF5c=',
      title: 'Sarah & Michael Wedding',
      location: 'Tuscany, Italy',
    },
    {
      id: 2,
      category: 'Weddings',
      image: 'https://media.istockphoto.com/id/2148405076/photo/smiling-bride-and-groom-ready-to-exchange-floral-garlands-during-their-wedding-ceremony.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxQ4t9dX-xn-_BfH__ecqsXt_YGpbq2WH73vQGIQK-E=',
      title: 'Emma & James Celebration',
      location: 'Napa Valley, CA',
    },
    {
      id: 3,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D',
      title: 'Corporate Gala 2023',
      location: 'New York City',
    },
    {
      id: 4,
      category: 'Portraits',
      image: 'https://images.unsplash.com/photo-1640162558363-88cb21a08021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZhbWlseSUyMFBvcnRyYWl0JTIwU2Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Family Portrait Session',
      location: 'Central Park, NY',
    },
    {
      id: 5,
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Beach Wedding Ceremony',
      location: 'Santorini, Greece',
    },
    {
      id: 6,
      category: 'Commercial',
      image: 'https://plus.unsplash.com/premium_photo-1661907801393-3b36254a81b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8THV4dXJ5JTIwSG90ZWwlMjBDYW1wYWlnbid8ZW58MHx8MHx8fDA%3D',
      title: 'Luxury Hotel Campaign',
      location: 'Los Angeles, CA',
    },
    {
      id: 7,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1720798299109-6adf5d84438c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFubml2ZXJzYXJ5JTIwQ2VsZWJyYXRpb24lMjBpbmRpYW4lMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Anniversary Celebration',
      location: 'Paris, France',
    },
    {
      id: 8,
      category: 'Portraits',
      image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww',
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
             <Link href="/contact">
                <Button className="btn-primary text-lg px-10 py-4 group">
                  Get contect
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;