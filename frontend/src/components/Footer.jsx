import React from 'react';
import { Instagram, Facebook, Youtube, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] pt-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center text-gold">
                <span className="font-serif text-xl">A</span>
                </div>
                <div>
                <h1 className="text-xl font-serif tracking-widest text-white uppercase leading-tight">Ambika</h1>
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-bold">Makeup Studio</p>
                </div>
            </div>
            <p className="text-gray-300 font-normal leading-relaxed text-sm max-w-xs mb-8">
              Professional <span className="text-white font-bold">Makeup Artist</span> & <span className="text-white font-bold">Skin Care Expert</span>. Certified by <span className="text-gold font-bold">Lakme Academy</span>. Enhancing your natural beauty for every special occasion.
            </p>
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-gray-300 text-[11px] uppercase tracking-widest font-bold">
                  <Clock size={14} className="text-gold" />
                  <span>10 AM To 8 PM</span>
               </div>
               <div className="flex items-center gap-3 text-gray-300 text-[11px] uppercase tracking-widest font-bold">
                  <MapPin size={14} className="text-gold" />
                  <span>Mathura, India</span>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-300 font-bold">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-widest mb-8">Our Services</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-300 font-bold">
              <li><Link to="/services" className="hover:text-gold transition-colors">Bridal & Pre-Bridal</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Engagement Makeup</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Party Makeup</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Skin Care</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Hair Styling</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">HD & Airbrush</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-widest mb-8">Follow Us</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest text-gray-300 font-bold">
              <li><a href="https://www.instagram.com/ambika_beautystudio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><Instagram size={14} /> @ambika_beautystudio</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Facebook size={14} /> Facebook</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Youtube size={14} /> YouTube</a></li>
              <li><a href="https://wa.me/919528147783" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-3.5 h-3.5" /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            © 2024 Ambika Makeup Studio. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <span className="text-white/10">|</span>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
