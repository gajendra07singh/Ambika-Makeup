import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Award, Star, Heart, Camera, CheckCircle2,
  Users, Calendar, GraduationCap, Quote, Phone,
  MessageSquare, ChevronRight, PlayCircle, Newspaper,
  MapPin, ShieldCheck, Trophy, Target, Eye, Brush, Wand2,
  Tv, Video, Briefcase, Medal
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Certifications from '../components/Certifications';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Asset imports
import founderImg from '../assets/a.jpeg';
import heroImg from '../assets/hero.png';
import hero1 from '../assets/hero1.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import serviceBridal from '../assets/Radiant Soft Glam Bridal Makeup for Modern Brides.jpg';
import serviceEngagement from '../assets/service-engagement.jpg';
import serviceParty from '../assets/✨ Soft glam makeup vibes! ✨.jpg';
import download from '../assets/download.jpg';
import download1 from '../assets/download (1).jpg';
import download2 from '../assets/download (2).jpg';
import serviceSider from '../assets/Soft Glam Wedding Look  Elegant soft glam bridal makeup with glowing skin, nude lips, and flawless.jpg';
import serviceEye from '../assets/Glitter Glam Beauty Look _ Soft Pink Sparkle Makeup 💖.jpg';
import serviceSaree from '../assets/💃 Grace meets tradition in this beautiful half saree (langa voni)_ Perfect for festivals, weddings.jpg';

const StatCounter = ({ end, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-[40px] md:text-[50px] font-serif text-gold font-bold leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-gray-500 font-bold">
        {label}
      </div>
    </div>
  );
};

const AboutPage = ({ onBookClick }) => {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="About Ambika Makeup Studio"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <span className="text-gold uppercase tracking-[0.6em] text-[12px] md:text-[14px] font-bold mb-4 block animate-fade-up">ESTABLISHED 2016</span>
            <h1 className="text-6xl md:text-9xl lg:text-[110px] font-serif text-white uppercase tracking-tight mb-6 animate-fade-up leading-[1]" style={{ animationDelay: '200ms' }}>
              Our <span className="text-gold italic">Story</span>
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – OUR STORY (Updated to match design) */}
      <section className="pt-12 md:pt-16 pb-12 bg-[#F8F4EF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* LEFT COLUMN: Founder Portrait & Badge */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-6">
                <img
                  src={founderImg}
                  alt="Ambika Saraswat"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                />
              </div>

              {/* Certification Badges */}
              <div className="mt-8">
                <h4 className="font-serif text-[32px] text-[#0A1128] leading-tight mb-1">Ambika Saraswat</h4>
                <p className="text-gold uppercase tracking-[0.3em] text-[12px] font-black mb-6">Founder & Makeup Artist</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "LAKME ACADEMY",
                    "AIR BLACK",
                    "AMU CERTIFIED",
                    "TIRLOKI PRASHAD"
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="relative group flex items-center gap-3 p-4 bg-[#0A1128] rounded-xl border border-gold/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)] hover:border-gold transition-all duration-500"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-all duration-500">
                        <Award size={16} className="text-gold group-hover:text-[#0A1128] transition-colors" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-gold text-[8px] uppercase tracking-[0.2em] font-bold mb-1">Verified</span>
                        <span className="text-white text-[11px] uppercase tracking-wider font-black leading-tight">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Content & Stats */}
            <div className="w-full lg:w-[60%] lg:pt-4">
              <span className="text-gold uppercase tracking-[0.3em] text-[12px] font-bold mb-2 block">ABOUT US</span>

              <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-6">
                Redefining Beauty <br />
                <span className="text-gold">With Skin Care Expert</span>
              </h2>

              <div className="text-gray-700 text-[16px] leading-relaxed mb-8 max-w-2xl">
                <p className="mb-4">
                  <span className="font-bold text-[#111111]">Ambika Saraswat</span> is a highly acclaimed <span className="text-gold font-bold">Makeup Artist</span> and <span className="text-gold font-bold">Skin Care expert</span> based in Mathura. Certified by the world-renowned <span className="font-bold text-[#111111]">Lakme Academy</span>, she brings a blend of professional expertise and artistic vision to the world of luxury beauty. Her specialization lies in creating flawless <span className="text-gold font-bold italic">Bridal, Pre-Bridal, Engagement,</span> and <span className="text-gold font-bold italic">Party transformations</span> that enhance natural beauty with sophistication.
                </p>
                <p>
                  With a deep-seated passion for perfection, Ambika utilizes only the finest <span className="font-bold text-[#111111]">international premium products</span> to ensure every look is radiant, long-lasting, and camera-ready. Her personalized approach focuses on understanding each client's unique features and personal style, ensuring that every woman feels her most confident, elegant, and beautiful version on her most significant days.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-y border-gray-200/50">
                <div>
                  <div className="text-[32px] font-serif text-gold font-bold mb-1">8+</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">YEARS EXPERIENCE</div>
                </div>
                <div>
                  <div className="text-[32px] font-serif text-gold font-bold mb-1">1500+</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">HAPPY CLIENTS</div>
                </div>
                <div>
                  <div className="text-[32px] font-serif text-gold font-bold mb-1">20+</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">AWARDS WON</div>
                </div>
                <div>
                  <div className="text-[32px] font-serif text-gold font-bold mb-1">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">SATISFACTION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      {/* SECTION 3 – WHAT MAKES US SPECIAL */}
      <section className="py-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-2 block">EXCELLENCE</span>
          <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-12">
            What Makes Us <span className="text-gold italic">Special</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Sparkles size={22} />, title: "Bridal Makeup Specialists", desc: "Crafting unforgettable looks for your most special day." },
              { icon: <Wand2 size={22} />, title: "HD & Airbrush Experts", desc: "Flawless, camera-ready finish with advanced techniques." },
              { icon: <Star size={22} />, title: "Celebrity Makeup Experience", desc: "Trusted by public figures for red-carpet perfection." },
              { icon: <Newspaper size={22} />, title: "Featured In Media & News", desc: "Recognized excellence across various media platforms." },
              { icon: <ShieldCheck size={22} />, title: "Premium International Products", desc: "Using only the finest brands for superior results." },
              { icon: <Users size={22} />, title: "Personalized Consultation", desc: "Tailored beauty plans that match your unique style." },
              { icon: <Brush size={22} />, title: "Professional Hair Styling", desc: "Complete transformations from makeup to hair." },
              { icon: <Target size={22} />, title: "Hygienic Luxury Environment", desc: "Maintaining the highest standards of safety and comfort." },
              { icon: <Eye size={22} />, title: "Trend-Based Modern Looks", desc: "Staying ahead with the latest global beauty trends." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-[#F8F4EF] border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 rounded-lg flex flex-col items-center text-center w-[320px]">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gold mb-5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-[20px] font-serif font-black text-[#111111] mb-3 leading-tight group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – CELEBRITY MAKEUP EXPERIENCE */}
      <section className="py-12 bg-[#111111] text-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-gold uppercase tracking-[0.5em] text-[11px] font-bold mb-2 block">VIP CLIENTELE</span>
              <h2 className="text-[36px] md:text-[48px] font-serif mb-6 leading-[1.1]">Trusted By <span className="text-gold italic">Celebrities</span> & Public Personalities</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light italic border-l border-gold/30 pl-6">
                Our expertise and dedication have given us the opportunity to work with <span className="font-bold text-white">celebrities, influencers,</span> and <span className="font-bold text-white">public figures</span>. We understand the importance of <span className="text-gold font-bold">camera-ready perfection</span> and create flawless looks for various professional platforms.
              </p>
              <div className="inline-flex items-center gap-2 py-2.5 px-6 bg-gold/10 border border-gold/30 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <Award className="text-gold" size={18} />
                <span className="text-gold uppercase tracking-[0.3em] font-black text-[12px]">Celebrity Makeup Artist</span>
              </div>
            </div>

            <div className="lg:w-[40%] grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="relative group overflow-hidden rounded-sm aspect-[4/5]">
                  <img src={download2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Celebrity Event" />
                </div>
                <div className="relative group overflow-hidden rounded-sm aspect-square">
                  <img src={download} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Celebrity Meet" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="relative group overflow-hidden rounded-sm aspect-square">
                  <img src={gallery4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Professional Shoot" />
                </div>
                <div className="relative group overflow-hidden rounded-sm aspect-[4/5]">
                  <img src={serviceParty} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="VIP Client" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – FEATURED IN NEWS & MEDIA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-2 block">RECOGNITION</span>
            <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-6">
              Recognized By <span className="text-gold italic">News & Media</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              The work of <span className="font-bold text-[#111111]">Ambika Beauty Studio</span> has been widely appreciated and recognized by various <span className="font-bold text-gold">media platforms</span>, beauty events, television appearances, and public programs across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "News Coverage", icon: <Newspaper size={24} />, badge: "Featured In News", img: download1 },
              { title: "TV Appearance", icon: <Tv size={24} />, badge: "TV Appearance", img: gallery1 },
              { title: "Media Recognition", icon: <Video size={24} />, badge: "Media Recognition", img: download2 },
              { title: "Industry Recognition", icon: <Medal size={24} />, badge: "Industry Recognition", img: hero1 }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8F4EF] group relative overflow-hidden rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={item.title} />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-3 mb-4 text-gold">
                      {item.icon}
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-gold/10 border border-gold/20">{item.badge}</span>
                   </div>
                   <h3 className="text-[22px] font-serif font-black text-[#111111] group-hover:text-gold transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – PROFESSIONAL EVENTS & SEMINARS */}
      <section className="py-16 bg-[#F8F4EF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10 text-center md:text-left">
            <span className="text-gold uppercase tracking-[0.5em] text-[11px] font-bold mb-2 block">EDUCATION & EVENTS</span>
            <h2 className="text-[36px] md:text-[48px] font-serif text-[#111111] leading-[1.1] mb-4">Beauty Events <br className="hidden md:block" /> <span className="text-gold">& Seminars</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl font-light italic">
              Ambika Beauty Studio actively participates in <span className="font-bold text-[#111111]">beauty seminars</span>, professional workshops, <span className="font-bold text-[#111111]">industry events</span>, and educational programs to stay updated with the latest global beauty trends.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[gallery3, serviceBridal, serviceEngagement, download2].map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-sm aspect-[4/5] shadow-sm">
                <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Seminar Event" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                   <h4 className="text-white font-serif text-lg mb-0.5">Professional Event</h4>
                   <p className="text-gold text-[10px] uppercase tracking-widest font-bold">Workshop {2022 + idx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – OUR ACHIEVEMENTS */}
      <section className="py-16 bg-[#111111] relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCounter end={1500} label="Happy Clients" />
            <StatCounter end={500} label="Bridal Transformations" />
            <StatCounter end={150} label="Professional Projects" />
            <StatCounter end={100} label="Client Satisfaction" suffix="%" />
          </div>

          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
             <div className="text-gold uppercase tracking-[0.4em] text-[12px] font-black">Celebrity Collaborations</div>
             <div className="text-gold uppercase tracking-[0.4em] text-[12px] font-black">Media Recognition</div>
             <div className="text-gold uppercase tracking-[0.4em] text-[12px] font-black md:col-span-1 col-span-2">8+ Years Of Experience</div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – OUR MISSION & VISION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="p-8 md:p-14 bg-[#F8F4EF] relative group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-gold">
                  <Target size={120} />
               </div>
               <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-6 block">OUR PURPOSE</span>
               <h3 className="text-[40px] md:text-[50px] font-serif text-[#111111] mb-6 leading-tight">MISSION</h3>
               <p className="text-gray-700 text-[22px] md:text-[24px] leading-relaxed font-light italic border-l-2 border-gold/30 pl-8">
                 "To <span className="text-[#111111] font-bold">empower every woman</span> by enhancing her <span className="text-gold font-bold">natural beauty</span> and helping her feel confident, elegant, and <span className="text-gold font-bold">unforgettable</span> during life's most special moments."
               </p>
               <div className="mt-10 w-24 h-[2px] bg-gold"></div>
            </div>

            <div className="p-8 md:p-14 bg-[#111111] relative group overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-gold">
                  <Eye size={120} />
               </div>
               <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-6 block">OUR FUTURE</span>
               <h3 className="text-[40px] md:text-[50px] font-serif text-white mb-6 leading-tight">VISION</h3>
               <p className="text-gray-300 text-[22px] md:text-[24px] leading-relaxed font-light italic border-l-2 border-gold/30 pl-8">
                 "To become one of <span className="text-white font-bold">India's most trusted</span> beauty studios by delivering exceptional experiences, <span className="text-gold font-bold">innovative makeup artistry</span>, and unmatched customer satisfaction."
               </p>
               <div className="mt-10 w-24 h-[2px] bg-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 – CLIENT TESTIMONIALS */}
      <section className="py-12 bg-[#F8F4EF] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-gold uppercase tracking-[0.5em] text-[14px] font-bold mb-4 block">TESTIMONIALS</span>
            <h2 className="text-[40px] md:text-[50px] font-serif text-[#111111]">What Our Clients Say</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {[
              { name: "Priya Sharma", role: "Bride", text: "Ambika made me look like a dream on my wedding day. The makeup was so natural yet glamorous. Everyone couldn't stop praising!" },
              { name: "Sneha Kapoor", role: "Celebrity Client", text: "I've worked with many artists, but Ambika's attention to detail is unmatched. She knows exactly what works for the camera." },
              { name: "Anjali Gupta", role: "Party Makeup", text: "The HD makeup lasted for over 12 hours without a single crease. Truly the best luxury beauty experience in the city!" },
              { name: "Riya Mehta", role: "Engagement Look", text: "Thank you for the elegant look! I felt so confident and beautiful. The products used were clearly top-notch." }
            ].map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 h-full border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-gold mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <Quote className="absolute top-10 right-10 text-gold/10" size={60} />
                  <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F8F4EF] rounded-full flex items-center justify-center text-gold font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111111] text-sm uppercase tracking-wider">{t.name}</h4>
                      <p className="text-xs text-gold font-medium uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECTION 11 – CALL TO ACTION */}
      <section className="relative py-12 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img src={hero1} className="w-full h-full object-cover opacity-20 scale-110" alt="background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-4 block">EXPERIENCE LUXURY</span>
            <h2 className="text-[32px] md:text-[45px] font-serif text-white mb-6 leading-tight">
              Ready To Experience <br />
              <span className="text-gold italic">Luxury Beauty Services?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light max-w-xl leading-relaxed">
              Let our experts create the perfect look for your special occasion. Whether it's your wedding or a red carpet event, we ensure you shine.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onBookClick}
                className="gold-btn px-10 py-4 shadow-2xl"
              >
                BOOK APPOINTMENT
              </button>
              <Link to="/gallery" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-[12px] font-bold hover:bg-white hover:text-black transition-all duration-500">
                VIEW PORTFOLIO
              </Link>
              <a href="tel:+910000000000" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-[12px] font-bold hover:bg-white hover:text-black transition-all duration-500">
                <Phone size={16} />
                CALL NOW
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Tagline */}
        <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
           <p className="text-white/5 font-serif text-[120px] leading-none select-none">Ambika</p>
        </div>
      </section>

      {/* FOOTER TAGLINE (Above actual footer) */}
      <div className="py-4 bg-white border-t border-gray-100 text-center">
         <p className="text-gold font-serif text-2xl italic mb-4">"Beauty. Elegance. Confidence."</p>
         <p className="text-gray-500 text-sm uppercase tracking-[0.3em]">Ambika Beauty Studio – Creating unforgettable transformations.</p>
      </div>

    </div>
  );
};

export default AboutPage;
