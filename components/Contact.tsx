'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Service Area',
      details: ['Online Services', 'Serving Indore & MP'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['hello@yourphotography.com', 'bookings@yourphotography.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sun: 9:00 AM - 8:00 PM', 'Available for weekend events'],
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Let's Capture Your Special Moments
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto leading-relaxed">
            Ready to book your photography session? We serve clients across Indore and Madhya Pradesh. 
            Share your vision and we'll create beautiful memories together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">
                  Book Your Session
                </CardTitle>
                <p className="text-muted-text">
                  Fill out the form below and we'll get back to you within 2 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-charcoal font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="border-champagne/30 focus:border-warm-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-charcoal font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="border-champagne/30 focus:border-warm-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-charcoal font-medium">
                        WhatsApp Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="border-champagne/30 focus:border-warm-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-charcoal font-medium">
                        Service Type *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-champagne/30 focus:border-warm-gold">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding Photography</SelectItem>
                          <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                          <SelectItem value="portrait">Family Portraits</SelectItem>
                          <SelectItem value="event">Event Photography</SelectItem>
                          <SelectItem value="maternity">Maternity Shoot</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-charcoal font-medium">
                      Event/Shoot Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="border-champagne/30 focus:border-warm-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Your Requirements *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your event, location preferences, number of people, special moments you want captured..."
                      rows={6}
                      className="border-champagne/30 focus:border-warm-gold resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3 group">
                    Send Booking Request
                    <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-warm-gold/10 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-warm-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-text">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-warm-gold to-champagne text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Quick Response Guaranteed
                </h3>
                <p className="text-white/90 mb-6">
                  For urgent wedding bookings or same-day inquiries, call us directly.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warm-gold">
                  Call Now: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <div className="h-96 bg-muted-text/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-warm-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Service Areas
                </h3>
                <p className="text-muted-text mb-4">
                  We serve clients across Madhya Pradesh
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="text-center p-3 bg-warm-gold/10 rounded-lg">
                    <p className="font-medium text-charcoal">Indore</p>
                  </div>
                  <div className="text-center p-3 bg-warm-gold/10 rounded-lg">
                    <p className="font-medium text-charcoal">Ujjain</p>
                  </div>
                  <div className="text-center p-3 bg-warm-gold/10 rounded-lg">
                    <p className="font-medium text-charcoal">Bhopal</p>
                  </div>
                  <div className="text-center p-3 bg-warm-gold/10 rounded-lg">
                    <p className="font-medium text-charcoal">Dewas</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;