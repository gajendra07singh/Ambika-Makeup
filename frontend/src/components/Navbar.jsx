import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Youtube, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full fixed top-0 z-[100]">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] py-1 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-300 font-semibold">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gold" /> Based in Mathura, India</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+919528147783" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} className="text-gold" /> +91 95281 47783
            </a>
            <div className="flex items-center gap-4 border-l pl-4 border-white/10">
              <a href="https://www.instagram.com/ambika_beautystudio/" target="_blank" rel="noopener noreferrer">
                <Instagram size={13} className="cursor-pointer hover:text-gold" />
              </a>
              <Facebook size={13} className="cursor-pointer hover:text-gold" />
              <Youtube size={13} className="cursor-pointer hover:text-gold" />
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
