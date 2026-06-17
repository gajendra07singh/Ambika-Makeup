import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import heroImg from '../assets/hero.png';
import heroImg1 from '../assets/hero1.jpg';

const Hero = ({ onBookClick }) => {
  const slides = [heroImg, heroImg1];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden group bg-[#0a0a0a]">
      {/* Background Carousel - Fixed to right side on desktop to clear face area */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          speed={2500}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          className="h-full w-full"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt={`Premium Makeup Artistry ${index + 1}`}
                  className="w-full h-full object-cover object-center md:object-[70%_center] animate-ken-burns"
                />
                {/* Responsive Overlays */}
                <div className="absolute inset-0 bg-black/40 md:hidden"></div> {/* Mobile: Full overlay */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-[60%]"></div> {/* Desktop: Dark side bar */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl space-y-6 md:space-y-8">

            {/* Tagline */}
            <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: '200ms' }}>
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-[12px] font-bold block">
                The Art of Luxury Makeovers
              </span>
            </div>

            {/* Main Title - Structured to be more vertical and compact */}
            <div className="relative animate-fade-up" style={{ animationDelay: '400ms' }}>
              <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-serif text-white tracking-tight leading-[1] mb-6 drop-shadow-2xl">
                Ambika <br />
                <span className="text-gold italic">Makeup Studio</span>
              </h1>
              <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed tracking-wide border-l border-gold/30 pl-6 italic">
                Elevating your natural beauty with professional HD bridal makeup and editorial styling. Where every stroke is a masterpiece.
              </p>
            </div>

            {/* Action Buttons - Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <button
                onClick={onBookClick}
                className="group relative overflow-hidden bg-gold text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 rounded-sm shadow-xl"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              <a
                href="#portfolio"
                className="group border border-white/20 text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500 rounded-sm backdrop-blur-sm"
              >
                Our Gallery
              </a>
            </div>

            {/* Subtle SEO footer */}
            <div className="pt-8 animate-fade-up opacity-40 hover:opacity-100 transition-opacity" style={{ animationDelay: '800ms' }}>
              <p className="text-[10px] text-white tracking-[0.3em] uppercase">
                Bridal • Editorial • Fashion • Celebrity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation controls - Moved to bottom right corner */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
        <button className="hero-prev w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-500 backdrop-blur-sm">
          <ChevronLeft size={20} />
        </button>
        <button className="hero-next w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-500 backdrop-blur-sm">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 right-10 md:right-20 h-full w-[1px] bg-white/5 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
