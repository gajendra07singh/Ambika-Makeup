import React, { useState } from 'react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full fixed top-0 z-[100]">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] py-1.5 border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-300 font-bold">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-gold" />
              <span className="hidden sm:inline">Best Makeup Studio in Mathura</span>
              <span className="sm:hidden">Mathura</span>
            </span>
            {/* Desktop Only: Phone Link moved closer to address */}
            <a href="tel:+919528147783" className="hidden lg:flex items-center gap-1.5 hover:text-gold transition-colors whitespace-nowrap border-l pl-4 border-white/10">
              <Phone size={11} className="text-gold" /> +91 95281 47783
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Mobile Only: Phone Link */}
            <a href="tel:+919528147783" className="flex lg:hidden items-center gap-1.5 hover:text-gold transition-colors whitespace-nowrap">
              <Phone size={11} className="text-gold" /> +91 95281 47783
            </a>

            <div className="flex items-center gap-3 sm:gap-6 border-l pl-3 sm:pl-6 border-white/10">
              <a href="https://www.instagram.com/ambika_beautystudio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Instagram size={14} />
                <span className="hidden lg:inline">Instagram</span>
              </a>
              <a href="https://wa.me/919528147783" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.123.553 4.197 1.603 6.042L0 24l6.103-1.6c1.789.976 3.804 1.49 5.85 1.491h.005c6.632 0 12.028-5.397 12.031-12.03a11.799 11.799 0 00-3.517-8.481z"/>
                </svg>
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-2 shadow-sm relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
              <path d="M22 2C22 2 19 12 12 12C5 12 2 8 2 8C2 8 6 19 12 19C18 19 22 15 22 15C22 15 26 19 32 19C38 19 42 8 42 8C42 8 39 12 32 12C25 12 22 2 22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 42C22 42 25 32 32 32C39 32 42 36 42 36C42 36 38 25 32 25C26 25 22 29 22 29C22 29 18 25 12 25C6 25 2 36 2 36C2 36 5 32 12 32C19 32 22 42 22 42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="22" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <div className="flex flex-col">
              <h1 className="text-xl font-serif tracking-[0.15em] text-gray-900 uppercase font-bold leading-none">Ambika</h1>
              <p className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold">Makeup Studio</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] uppercase tracking-widest font-bold transition-colors ${isActive(link.path) ? 'text-gold' : 'text-gray-800 hover:text-gold'}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onBookClick}
              className="bg-gold text-white px-7 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-gold-dark transition-all rounded-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-8 flex flex-col gap-6 shadow-xl animate-fade-in absolute top-full left-0 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest font-bold py-2 ${isActive(link.path) ? 'text-gold' : 'text-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="bg-gold text-white text-center py-4 text-xs uppercase tracking-widest font-bold rounded-sm"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
