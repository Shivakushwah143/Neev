import React from 'react';
import Link from 'next/link';
import { Camera, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', href: '/services#wedding' },
      { name: 'Pre-Wedding Shoots', href: '/services#pre-wedding' },
      { name: 'Family Portraits', href: '/services#portrait' },
      { name: 'Event Photography', href: '/services#event' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Booking Process', href: '/process' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/yourphotography' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/yourphotography' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <Camera className="h-8 w-8 text-warm-gold transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold">Your Photography</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Professional online photography services based in Indore. 
              Capturing your special moments across Madhya Pradesh with artistic vision and technical excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">Online Services • Serving Indore & MP</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">LensArt@gmain.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-full hover:bg-warm-gold transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-warm-gold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-warm-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-warm-gold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-warm-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-warm-gold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-warm-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Online Booking Notice */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-md font-medium text-white mb-3">Online Booking</h4>
              <p className="text-white/70 text-sm mb-4">
                Book your photography session online. Available throughout Indore and Madhya Pradesh.
              </p>
              <Link href="/contact">
                <button className="bg-warm-gold text-white px-4 py-2 rounded text-sm font-medium hover:bg-warm-gold/90 transition-colors duration-300 w-full">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} Your Photography. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;