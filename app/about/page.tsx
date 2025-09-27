'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Award, Users, Heart, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Couples', icon: Heart },
    { number: '1000+', label: 'Events Captured', icon: Camera },
    { number: '50+', label: 'Awards Won', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Users },
  ];

  const values = [
    {
      icon: Camera,
      title: 'Artistic Vision',
      description: 'We see beyond the ordinary, capturing moments with creativity and unique perspective.',
    },
    {
      icon: Heart,
      title: 'Emotional Connection',
      description: 'Every photo tells a story, preserving the emotions and memories that matter most.',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Professional equipment and expertise ensure the highest quality results.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your vision guides our work, creating images that reflect your unique story.',
    },
  ];

  const achievements = [
    'Featured in Wedding Photography Magazine',
    'Winner of Best Wedding Photographer 2023',
    'International Photography Awards - Gold Medal',
    'Published in Vogue Weddings',
    'Client Satisfaction Rate: 99.8%',
    'Over 1 Million Photos Delivered',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in">
              <div className="inline-block">
                <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
                  About Us
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
                Capturing Stories,
                <span className="text-gradient block">Creating Memories</span>
              </h1>
              
              <p className="text-xl text-muted-text leading-relaxed">
                For over a decade, we've been dedicated to preserving life's most precious moments 
                through the art of photography. Our passion lies in telling your unique story with 
                creativity, authenticity, and technical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button className="btn-primary group">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?auto=format&fit=crop&w=800&q=80"
                  alt="Professional photographer at work"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warm-gold mb-1">10+</div>
                  <div className="text-sm text-muted-text">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-warm-gold text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-warm-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-gold/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-warm-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-text">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-br from-warm-gold/5 to-champagne/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-text leading-relaxed">
              <p>
                LensArt Photography was born from a simple belief: every moment has the power to become a 
                timeless memory. Founded in 2013 by passionate photographers with a shared vision, we've 
                grown from a small studio to an award-winning photography team.
              </p>
              <p>
                What started as documenting friends' weddings has evolved into capturing love stories 
                across the globe. Our journey has taken us from intimate backyard ceremonies to grand 
                destination celebrations, each one teaching us something new about the art of storytelling 
                through photography.
              </p>
              <p>
                Today, we're proud to be recognized as one of the leading photography studios in the region, 
                but our mission remains the same: to preserve the emotions, connections, and beauty of life's 
                most significant moments with artistry and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Our Values
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              The principles that guide our work and shape every interaction with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg card-hover bg-ivory/50">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-warm-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-warm-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
                Awards & Recognition
              </h2>
              <p className="text-xl text-muted-text leading-relaxed">
                Our commitment to excellence has been recognized by industry leaders and 
                celebrated by clients worldwide.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-gold flex-shrink-0" />
                    <span className="text-muted-text">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <Button className="btn-primary">
                View Portfolio
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=800&q=80"
                alt="Award ceremony"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Achievement Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-champagne/20">
                <div className="text-center">
                  <Award className="h-12 w-12 text-warm-gold mx-auto mb-3" />
                  <div className="text-lg font-bold text-charcoal">Best Photography</div>
                  <div className="text-sm text-muted-text">Studio 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-warm-gold to-champagne">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's create something beautiful together. Every story is unique, 
              and we can't wait to help tell yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warm-gold text-lg px-8 py-3">
                Get Started
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;