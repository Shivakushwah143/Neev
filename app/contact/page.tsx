'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Star, CircleCheck as CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    budget: '',
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
      title: 'Studio Location',
      details: ['123 Photography Avenue', 'New York, NY 10001', 'United States'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Available 9 AM - 6 PM EST'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['hello@lensart.com', 'bookings@lensart.com', 'Response within 2 hours'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: By Appointment'],
      action: 'Book Meeting'
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 6-12 months in advance for weddings, and 2-4 weeks for other sessions to ensure availability.'
    },
    {
      question: 'What\'s included in your packages?',
      answer: 'All packages include professional editing, online gallery, print release, and customer support. Specific inclusions vary by service.'
    },
    {
      question: 'Do you travel for destination weddings?',
      answer: 'Yes! We love destination weddings and have photographed events across the globe. Travel fees may apply depending on location.'
    },
    {
      question: 'When will I receive my photos?',
      answer: 'Weddings: 4-6 weeks, Events: 2-3 weeks, Portraits: 1-2 weeks. We provide sneak peeks within 48 hours for weddings.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Absolutely incredible experience! They captured our day perfectly.',
      rating: 5,
      service: 'Wedding Photography'
    },
    {
      name: 'Michael Chen',
      text: 'Professional, creative, and delivered exactly what we needed.',
      rating: 5,
      service: 'Corporate Event'
    },
    {
      name: 'Emily Rodriguez',
      text: 'The family session was amazing! Everyone felt so comfortable.',
      rating: 5,
      service: 'Family Portrait'
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
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
              Let's Create Something
              <span className="text-gradient block">Beautiful Together</span>
            </h1>
            
            <p className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
              Ready to capture your special moments? We'd love to hear about your vision 
              and discuss how we can bring it to life with our photography expertise.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-gold mb-1">24hr</div>
                <div className="text-sm text-muted-text">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-gold mb-1">500+</div>
                <div className="text-sm text-muted-text">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-gold mb-1">10+</div>
                <div className="text-sm text-muted-text">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-gold mb-1">99%</div>
                <div className="text-sm text-muted-text">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-3xl text-charcoal flex items-center">
                  <MessageCircle className="h-8 w-8 text-warm-gold mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-text text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-charcoal border-b border-champagne/20 pb-2">
                      Personal Information
                    </h3>
                    
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
                          className="border-champagne/30 focus:border-warm-gold h-12"
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
                          className="border-champagne/30 focus:border-warm-gold h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-charcoal font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="border-champagne/30 focus:border-warm-gold h-12"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-charcoal border-b border-champagne/20 pb-2">
                      Project Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-charcoal font-medium">
                          Service Type *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="border-champagne/30 focus:border-warm-gold h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Photography</SelectItem>
                            <SelectItem value="event">Event Photography</SelectItem>
                            <SelectItem value="portrait">Portrait Photography</SelectItem>
                            <SelectItem value="commercial">Commercial Photography</SelectItem>
                            <SelectItem value="other">Other / Custom Project</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-charcoal font-medium">
                          Budget Range
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="border-champagne/30 focus:border-warm-gold h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over-10000">Over $10,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-charcoal font-medium">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Event/Session Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="border-champagne/30 focus:border-warm-gold h-12"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Tell Us About Your Vision *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your vision, special requirements, timeline, location, style preferences, or any questions you have. The more details you provide, the better we can tailor our proposal to your needs."
                      rows={6}
                      className="border-champagne/30 focus:border-warm-gold resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-4 group">
                    Send Message & Get Free Quote
                    <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  
                  <p className="text-sm text-muted-text text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-warm-gold/10 p-3 rounded-full flex-shrink-0">
                      <info.icon className="h-6 w-6 text-warm-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-charcoal mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-text text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="btn-secondary text-xs">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-warm-gold to-champagne text-white">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  For urgent inquiries or last-minute bookings, call us directly. 
                  We're here to help make your vision come to life.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-warm-gold w-full">
                  Call: +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            {/* Testimonials Preview */}
            <Card className="border-0 shadow-lg bg-ivory/50">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal flex items-center">
                  <Star className="h-5 w-5 text-warm-gold mr-2 fill-current" />
                  What Our Clients Say
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-warm-gold fill-current" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-text italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-xs font-medium text-charcoal">
                      - {testimonial.name}
                    </p>
                    {index < testimonials.length - 1 && (
                      <hr className="border-champagne/20" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-text">
              Quick answers to common questions about our photography services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-warm-gold/10 p-2 rounded-full flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-warm-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-text text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <div className="h-96 bg-gradient-to-br from-warm-gold/20 to-champagne/10 flex items-center justify-center relative">
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-warm-gold mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Visit Our Studio
                </h3>
                <p className="text-muted-text text-lg mb-4">
                  123 Photography Avenue<br />
                  New York, NY 10001
                </p>
                <Button className="btn-secondary">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-warm-gold/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-champagne/10 rounded-full"></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;