import React from 'react';
import founderImg from '../assets/a.jpeg';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-12 pb-6 bg-[#fff9f5] border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          {/* LEFT COLUMN: 340px */}
          <div className="w-full lg:w-[340px] shrink-0">
            <div className="relative mb-4">
              <img
                src={founderImg}
                alt="Ambika - Founder"
                className="w-[320px] h-[380px] object-cover rounded-[12px] shadow-lg"
              />
            </div>
            <div className="mt-4">
              <h4 className="font-serif text-2xl text-[#0A1128] leading-tight mb-1">Ambika Saraswat</h4>
              <p className="text-gold uppercase tracking-widest text-[10px] font-black mb-5">Founder & Makeup Artist</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "LAKME ACADEMY",
                  "AIR BLACK",
                  "AMU CERTIFIED",
                  "TIRLOKI PRASHAD"
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="relative group flex items-center gap-3 p-3 bg-[#0A1128] rounded-lg border border-gold/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)] hover:border-gold hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                       <Award size={14} className="text-gold group-hover:text-[#0A1128] transition-colors" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-gold/60 text-[7px] uppercase tracking-[0.2em] font-bold mb-1">Verified</span>
                      <span className="text-white text-[10px] uppercase tracking-wider font-black leading-tight">{cert}</span>
                    </div>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Remaining Width */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-gold uppercase tracking-[4px] text-[10px] font-bold mb-3 block">ABOUT US</span>

            <h2 className="font-serif text-[42px] lg:text-[52px] leading-[1.1] mb-4">
              <span className="text-[#0A1128] block">Redefining Beauty</span>
              <span className="text-gold block">With Skin Care Expert</span>
            </h2>

            <p className="text-[16px] text-[#333333] leading-[1.8] max-w-[650px] mb-4">
              <span className="font-bold text-[#0A1128]">Ambika Saraswat</span> is a professional <span className="font-bold text-gold">Makeup Artist</span> and <span className="font-bold text-gold">Skin Care expert</span>. Certified by the prestigious <span className="font-bold text-[#0A1128]">Lakme Academy</span>, she brings <span className="font-bold text-[#0A1128]">luxury beauty services</span> to Mathura. Specializing in <span className="font-bold text-gold">Bridal, Pre-Bridal, Engagement</span>, and <span className="font-bold text-gold">Party makeup</span>, along with advanced skin care treatments.
            </p>
            {/* STATS SECTION: Compact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4 border-t border-gray-100 mb-4">
              <div>
                <p className="text-[36px] font-serif text-gold leading-none mb-1 font-bold">8+</p>
                <p className="text-[12px] uppercase tracking-wider text-gray-700 font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-[36px] font-serif text-gold leading-none mb-1 font-bold">1500+</p>
                <p className="text-[12px] uppercase tracking-wider text-gray-700 font-bold">Happy Clients</p>
              </div>
              <div>
                <p className="text-[36px] font-serif text-gold leading-none mb-1 font-bold">20+</p>
                <p className="text-[12px] uppercase tracking-wider text-gray-700 font-bold">Awards Won</p>
              </div>
              <div>
                <p className="text-[36px] font-serif text-gold leading-none mb-1 font-bold">100%</p>
                <p className="text-[12px] uppercase tracking-wider text-gray-700 font-bold">Satisfaction</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Link to="/about" className="inline-flex items-center justify-center bg-gold text-white w-[220px] h-[48px] uppercase tracking-widest text-[11px] font-bold hover:bg-[#a68549] transition-all duration-300">
                KNOW MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
