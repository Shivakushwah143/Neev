import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Camera, Building, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with timeless elegance and artistic vision.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Digital gallery'],
      price: 'Starting from $2,500',
    },
    {
      icon: Users,
      title: 'Event Photography',
      description: 'Professional coverage for corporate events, parties, and celebrations.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      features: ['Corporate events', 'Birthday parties', 'Anniversaries', 'Social gatherings'],
      price: 'Starting from $800',
    },
    {
      icon: Camera,
      title: 'Portrait Photography',
      description: 'Individual, family, and couple portraits that showcase your personality.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      features: ['Family portraits', 'Individual headshots', 'Couple sessions', 'Maternity shoots'],
      price: 'Starting from $400',
    },
    {
      icon: Building,
      title: 'Commercial Photography',
      description: 'Professional imagery for businesses, products, and marketing needs.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
      features: ['Product photography', 'Corporate headshots', 'Architecture', 'Brand imagery'],
      price: 'Starting from $600',
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto leading-relaxed">
            From intimate weddings to grand celebrations, we offer comprehensive photography services 
            tailored to capture your most precious moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg card-hover bg-white">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-warm-gold" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-charcoal group-hover:text-warm-gold transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <span className="text-warm-gold font-semibold bg-champagne/20 px-3 py-1 rounded-full text-sm">
                    {service.price}
                  </span>
                </div>
                <CardDescription className="text-muted-text text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-text">
                        <div className="w-1.5 h-1.5 bg-warm-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="btn-secondary w-full group mt-6">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-warm-gold/5 rounded-2xl p-12 border border-champagne/20">
            <h3 className="text-3xl font-bold text-charcoal mb-4">
              Ready to Capture Your Story?
            </h3>
            <p className="text-lg text-muted-text mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something beautiful together. 
              Every moment deserves to be preserved with artistry and care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="btn-primary text-lg px-8 py-3">
                Get Free Quote
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;