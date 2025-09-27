'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Camera, Building, Star, Clock, MapPin, ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'wedding',
      icon: Heart,
      title: 'Wedding Photography',
      subtitle: 'Your Love Story, Beautifully Captured',
      description: 'From intimate ceremonies to grand celebrations, we capture every emotion and detail of your special day with artistic vision and documentary storytelling.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80',
      price: 'Starting from $2,500',
      duration: '8-12 hours',
      deliverables: '500+ edited photos',
      features: [
        'Pre-wedding consultation',
        'Engagement session included',
        'Full ceremony coverage',
        'Reception photography',
        'Online gallery',
        'Print release included',
        'USB with high-res images',
        '24/7 customer support'
      ],
      packages: [
        {
          name: 'Essential',
          price: '$2,500',
          duration: '6 hours',
          photos: '300+ photos',
          features: ['Ceremony & reception', 'Online gallery', 'Print release']
        },
        {
          name: 'Premium',
          price: '$3,500',
          duration: '8 hours',
          photos: '500+ photos',
          features: ['Full day coverage', 'Engagement session', 'USB delivery', 'Second photographer']
        },
        {
          name: 'Luxury',
          price: '$5,000',
          duration: '10 hours',
          photos: '800+ photos',
          features: ['Extended coverage', 'Album included', 'Rehearsal dinner', 'Same-day preview']
        }
      ]
    },
    {
      id: 'event',
      icon: Users,
      title: 'Event Photography',
      subtitle: 'Memorable Moments, Professionally Documented',
      description: 'Corporate events, parties, and celebrations captured with professionalism and creativity. We blend into your event while ensuring every important moment is preserved.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      price: 'Starting from $800',
      duration: '2-8 hours',
      deliverables: '200+ edited photos',
      features: [
        'Event planning consultation',
        'Arrival to departure coverage',
        'Key moments documentation',
        'Group photos',
        'Online gallery',
        'Same-day highlights',
        'Professional editing',
        'Quick turnaround'
      ],
      packages: [
        {
          name: 'Basic',
          price: '$800',
          duration: '3 hours',
          photos: '150+ photos',
          features: ['Key moments', 'Online gallery', '48hr delivery']
        },
        {
          name: 'Standard',
          price: '$1,200',
          duration: '5 hours',
          photos: '250+ photos',
          features: ['Full coverage', 'Same-day highlights', 'Group photos']
        },
        {
          name: 'Premium',
          price: '$1,800',
          duration: '8 hours',
          photos: '400+ photos',
          features: ['Extended coverage', 'Second photographer', 'Live social sharing']
        }
      ]
    },
    {
      id: 'portrait',
      icon: Camera,
      title: 'Portrait Photography',
      subtitle: 'Individual Stories, Artistic Expression',
      description: 'Personal branding, family portraits, and individual sessions that capture personality and emotion. Perfect for professionals, families, and personal milestones.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      price: 'Starting from $400',
      duration: '1-3 hours',
      deliverables: '50+ edited photos',
      features: [
        'Pre-session consultation',
        'Multiple outfit changes',
        'Professional lighting',
        'Various backgrounds',
        'Online gallery',
        'Retouching included',
        'Print options',
        'Personal usage rights'
      ],
      packages: [
        {
          name: 'Individual',
          price: '$400',
          duration: '1 hour',
          photos: '25+ photos',
          features: ['Studio or outdoor', '2 outfit changes', 'Basic retouching']
        },
        {
          name: 'Family',
          price: '$600',
          duration: '2 hours',
          photos: '50+ photos',
          features: ['Multiple locations', 'Group & individual shots', 'Advanced editing']
        },
        {
          name: 'Professional',
          price: '$800',
          duration: '3 hours',
          photos: '75+ photos',
          features: ['Branding session', 'Multiple looks', 'LinkedIn optimization']
        }
      ]
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Photography',
      subtitle: 'Brand Stories, Professional Impact',
      description: 'Product photography, corporate headshots, and brand imagery that elevates your business. Professional quality for marketing, websites, and promotional materials.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80',
      price: 'Starting from $600',
      duration: '2-6 hours',
      deliverables: '100+ edited photos',
      features: [
        'Brand consultation',
        'Product styling',
        'Multiple angles',
        'Professional lighting',
        'Post-production',
        'Commercial usage rights',
        'Quick turnaround',
        'Ongoing support'
      ],
      packages: [
        {
          name: 'Product',
          price: '$600',
          duration: '2 hours',
          photos: '50+ photos',
          features: ['Up to 10 products', 'White background', 'Basic retouching']
        },
        {
          name: 'Branding',
          price: '$1,200',
          duration: '4 hours',
          photos: '100+ photos',
          features: ['Lifestyle shots', 'Team photos', 'Office environment']
        },
        {
          name: 'Campaign',
          price: '$2,500',
          duration: '6 hours',
          photos: '200+ photos',
          features: ['Full campaign', 'Multiple locations', 'Advanced post-production']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and preferences to understand your unique story.'
    },
    {
      step: '02',
      title: 'Planning & Preparation',
      description: 'Detailed planning including timeline, locations, and any special requirements for your session.'
    },
    {
      step: '03',
      title: 'Photography Session',
      description: 'Professional photography with attention to every detail, ensuring comfort and natural moments.'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Expert editing and retouching to enhance your images while maintaining authenticity.'
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'High-resolution images delivered through secure online gallery with ongoing support.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-warm-gold/10 to-champagne/5">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
              Professional Photography
              <span className="text-gradient block">Services</span>
            </h1>
            
            <p className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
              From intimate weddings to corporate events, we offer comprehensive photography services 
              tailored to capture your most important moments with artistic vision and technical excellence.
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold mb-2">500+</div>
                <div className="text-sm text-muted-text">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold mb-2">1000+</div>
                <div className="text-sm text-muted-text">Events Captured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-gold mb-2">50+</div>
                <div className="text-sm text-muted-text">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-ivory'}`}>
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-warm-gold/10 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-warm-gold" />
                    </div>
                    <Badge variant="outline" className="border-warm-gold text-warm-gold">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    {service.title}
                  </h2>
                  <p className="text-lg text-warm-gold font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-text leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                
                {/* Service Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-warm-gold" />
                    <span className="text-sm text-muted-text">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-warm-gold" />
                    <span className="text-sm text-muted-text">{service.deliverables}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-warm-gold" />
                    <span className="text-sm text-muted-text">Premium Quality</span>
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">What's Included:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-sm text-muted-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="btn-primary group">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="btn-secondary">
                    View Gallery
                  </Button>
                </div>
              </div>
              
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Packages */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {service.title} Packages
                </h3>
                <p className="text-muted-text">
                  Choose the package that best fits your needs and budget
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {service.packages.map((pkg, pkgIndex) => (
                  <Card key={pkgIndex} className={`border-0 shadow-lg card-hover ${pkgIndex === 1 ? 'ring-2 ring-warm-gold/20 bg-warm-gold/5' : 'bg-white'}`}>
                    <CardHeader className="text-center pb-4">
                      {pkgIndex === 1 && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-warm-gold text-white">
                          Most Popular
                        </Badge>
                      )}
                      <CardTitle className="text-xl text-charcoal">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-warm-gold">{pkg.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-4 w-4 text-warm-gold" />
                          <span className="text-sm text-muted-text">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Camera className="h-4 w-4 text-warm-gold" />
                          <span className="text-sm text-muted-text">{pkg.photos}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-warm-gold flex-shrink-0" />
                            <span className="text-sm text-muted-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="btn-secondary w-full mt-6">
                        Select Package
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-warm-gold/5 to-champagne/10">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Our Process
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and 
              professional experience every step of the way.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-warm-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-warm-gold/30 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-warm-gold to-champagne">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss your photography needs and create something beautiful together. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warm-gold text-lg px-8 py-3">
                Get Free Quote
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 text-lg px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;