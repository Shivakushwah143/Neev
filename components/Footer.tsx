import React from 'react';
import Link from 'next/link';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', href: '/services#wedding' },
      { name: 'Event Photography', href: '/services#event' },
      { name: 'Portrait Photography', href: '/services#portrait' },
      { name: 'Commercial Photography', href: '/services#commercial' },
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
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/lensart' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/lensart' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/lensart' },
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
              <span className="text-2xl font-bold">LensArt</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Capturing life's most precious moments with artistic vision and technical excellence. 
              Professional photography services that tell your unique story.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">123 Photography Avenue, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-4 w-4 text-warm-gold" />
                <span className="text-sm">hello@lensart.com</span>
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

            {/* Newsletter Signup */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-md font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-white/70 text-sm mb-4">
                Get the latest updates and photography tips.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-warm-gold"
                />
                <button className="bg-warm-gold text-white px-4 py-2 rounded text-sm font-medium hover:bg-warm-gold/90 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} LensArt Photography. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-warm-gold transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;