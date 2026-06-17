import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera, Instagram, Plus, Play, Award, Tv, Newspaper, Users, Star,
  CheckCircle2, Heart, Sparkles, MessageSquare, Phone, ArrowRight, X
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Asset imports
import bridal1 from '../assets/Radiant Soft Glam Bridal Makeup for Modern Brides.jpg';
import bridal2 from '../assets/Soft Glam Wedding Look  Elegant soft glam bridal makeup with glowing skin, nude lips, and flawless.jpg';
import engagement1 from '../assets/service-engagement.jpg';
import party1 from '../assets/✨ Soft glam makeup vibes! ✨.jpg';
import party2 from '../assets/Glitter Glam Beauty Look _ Soft Pink Sparkle Makeup 💖.jpg';
import tradition1 from '../assets/💃 Grace meets tradition in this beautiful half saree (langa voni)_ Perfect for festivals, weddings.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import heroImg from '../assets/hero.png';
import download from '../assets/download.jpg';
import download1 from '../assets/download (1).jpg';
import download2 from '../assets/download (2).jpg';
import aImg from '../assets/a.jpeg';

// Sample Video Placeholder
const videoPlaceholder = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80";

const categories = [
  "All", "Bridal Makeup", "Pre-Bridal", "Engagement", "Party Makeup",
  "Celebrity Makeup", "Photoshoots", "TV Appearances", "News Coverage",
  "Seminars & Events", "Hair Styling", "Beauty Services"
];

const portfolioItems = [
  { id: 1, category: "Bridal Makeup", image: bridal1, title: "Royal HD Bridal", tag: "HD MAKEUP" },
  { id: 2, category: "Bridal Makeup", image: bridal2, title: "Soft Glam Wedding", tag: "AIRBRUSH" },
  { id: 3, category: "Engagement", image: engagement1, title: "Elegant Engagement", tag: "GLOWY" },
  { id: 4, category: "Party Makeup", image: party1, title: "Modern Party Glow", tag: "FESTIVE" },
  { id: 5, category: "Celebrity Makeup", image: download, title: "Red Carpet Look", tag: "CELEBRITY" },
  { id: 6, category: "Photoshoots", image: gallery1, title: "Fashion Editorial", tag: "EDITORIAL" },
  { id: 7, category: "TV Appearances", image: download2, title: "Studio Appearance", tag: "MEDIA" },
  { id: 8, category: "Hair Styling", image: gallery4, title: "Bridal Updo", tag: "HAIR" },
  { id: 9, category: "Pre-Bridal", image: download1, title: "Skin Rejuvenation", tag: "SKINCARE" },
  { id: 10, category: "Seminars & Events", image: gallery3, title: "Masterclass 2023", tag: "TRAINING" },
  { id: 11, category: "Beauty Services", image: aImg, title: "Premium Facial", tag: "BEAUTY" },
  { id: 12, category: "News Coverage", image: tradition1, title: "Industry Interview", tag: "PRESS" },
  { id: 13, category: "Party Makeup", image: party2, title: "Sparkle & Shine", tag: "GLAM" },
  { id: 14, category: "Bridal Makeup", image: heroImg, title: "Traditional South Indian", tag: "TRADITIONAL" },
];

const PortfolioPage = ({ onBookClick }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Bridal Transformations", value: "100+", icon: Sparkles },
    { label: "Celebrity Projects", value: "50+", icon: Star },
    { label: "Years Experience", value: "12+", icon: Award }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* SECTION 1 – HERO PORTFOLIO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 md:grid-cols-4 h-full">
            <div className="relative overflow-hidden group">
              <img src={bridal1} className="w-full h-full object-cover opacity-40 animate-slow-zoom" alt="Portfolio 1" />
            </div>
            <div className="relative overflow-hidden group border-l border-white/5">
              <img src={bridal2} className="w-full h-full object-cover opacity-40 animate-slow-zoom" style={{ animationDelay: '2s' }} alt="Portfolio 2" />
            </div>
            <div className="relative overflow-hidden group border-l border-white/5 hidden md:block">
              <img src={party1} className="w-full h-full object-cover opacity-40 animate-slow-zoom" style={{ animationDelay: '4s' }} alt="Portfolio 3" />
            </div>
            <div className="relative overflow-hidden group border-l border-white/5 hidden md:block">
              <img src={tradition1} className="w-full h-full object-cover opacity-40 animate-slow-zoom" style={{ animationDelay: '6s' }} alt="Portfolio 4" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-6 block animate-fade-up">A LEGACY OF BEAUTY</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-wider mb-8 animate-fade-up leading-tight" style={{ animationDelay: '200ms' }}>
              Our Portfolio
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg mb-10 font-light animate-fade-up leading-relaxed" style={{ animationDelay: '400ms' }}>
              Every face tells a story. Explore our journey of beauty transformations, celebrity collaborations, bridal artistry, media recognition, and unforgettable client experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <button
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                className="gold-btn px-10 py-4 shadow-xl"
              >
                VIEW GALLERY
              </button>
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-white hover:text-black transition-all duration-500"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2 – PORTFOLIO INTRODUCTION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src={download} className="w-full h-64 object-cover rounded-sm shadow-2xl" alt="Intro 1" />
                    <img src={gallery3} className="w-full h-48 object-cover rounded-sm shadow-xl" alt="Intro 2" />
                  </div>
                  <div className="pt-12 space-y-4">
                    <img src={gallery4} className="w-full h-48 object-cover rounded-sm shadow-xl" alt="Intro 3" />
                    <img src={party2} className="w-full h-64 object-cover rounded-sm shadow-2xl" alt="Intro 4" />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 -z-10 rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">ARTISTRY & EXCELLENCE</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#111111] leading-tight mb-6">A Collection Of Beauty, Elegance & Artistry</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                At Ambika Beauty Studio, every transformation reflects our passion, creativity, and dedication to perfection. From luxury bridal makeovers to celebrity appearances, media events, photoshoots, and special occasions, our portfolio showcases the trust our clients place in us.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-3 mb-1">
                       <stat.icon size={18} className="text-gold" />
                       <span className="text-2xl font-serif text-[#111111]">{stat.value}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – FILTERABLE PORTFOLIO GALLERY */}
      <section id="gallery" className="py-16 bg-[#F8F4EF]/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">EXPLORE OUR WORK</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111111]">Visual Showcase</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 border-b border-gray-200 pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeFilter === cat ? 'text-gold' : 'text-gray-400 hover:text-[#111111]'}`}
              >
                {cat}
                {activeFilter === cat && (
                  <div className="absolute bottom-[-21px] left-0 w-full h-[2px] bg-gold"></div>
                )}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer aspect-[4/5]"
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-gold uppercase tracking-[0.3em] text-[9px] font-bold mb-2">{item.tag}</span>
                  <h4 className="text-white font-serif text-xl">{item.title}</h4>
                  <div className="w-8 h-[1px] bg-gold mt-4 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Plus size={18} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – BRIDAL TRANSFORMATIONS (BEFORE/AFTER SLIDER CONCEPT) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">STUNNING REVEALS</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-5">Bridal Beauty Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic text-xs">
              A showcase of our most stunning bridal transformations, designed to make every bride feel confident, elegant, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { before: gallery4, after: bridal1, title: "Modern HD Bride" },
              { before: gallery1, after: bridal2, title: "Royal Traditional" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="relative group overflow-hidden rounded-sm aspect-video shadow-xl">
                  <div className="flex h-full">
                    <div className="w-1/2 relative overflow-hidden">
                       <img src={item.before} className="w-full h-full object-cover grayscale" alt="Before" />
                       <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-white text-[8px] font-bold uppercase tracking-widest">Before</div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                       <img src={item.after} className="w-full h-full object-cover" alt="After" />
                       <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-white text-[8px] font-bold uppercase tracking-widest">After</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111] to-transparent p-4">
                    <h4 className="text-white font-serif text-xl">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3">
             {[bridal1, bridal2, tradition1, heroImg, engagement1].map((img, i) => (
               <div key={i} className="aspect-square overflow-hidden rounded-sm shadow-md group">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Bridal ${i}`} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – CELEBRITY PORTFOLIO */}
      <section className="py-8 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Side: Adjusted Text Size */}
            <div className="w-full lg:w-2/5">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">STAR ARTISTRY</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">Celebrity <br /><span className="text-gold">Portfolio</span></h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                Trusted by celebrities and VIP clients for exclusive red carpet events and high-profile public appearances.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2 border border-gold/50 text-gold rounded-full text-[9px] font-bold uppercase tracking-widest">
                <Award size={14} />
                Celebrity Artist
              </div>
            </div>

            {/* Right Side: Small Swiper */}
            <div className="w-full lg:w-3/5">
               <Swiper
                 modules={[Autoplay, Navigation]}
                 spaceBetween={12}
                 slidesPerView={2}
                 breakpoints={{
                   640: { slidesPerView: 3 }
                 }}
                 autoplay={{ delay: 4000 }}
                 navigation
                 className="celebrity-swiper"
               >
                 {[download, download2, gallery4, gallery3].map((img, idx) => (
                   <SwiperSlide key={idx}>
                      <div className="relative group overflow-hidden aspect-square rounded-sm shadow-xl">
                        <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Celebrity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-3">
                           <span className="text-gold uppercase tracking-widest text-[7px] font-bold">VIP</span>
                           <h4 className="text-[10px] font-serif text-white group-hover:text-gold transition-colors">Exclusive Look</h4>
                        </div>
                      </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – TV APPEARANCES & MEDIA COVERAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">AS SEEN ON</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-5">TV & Media Recognition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Tv, title: "TV Appearances", desc: "Featured on national beauty programs.", badge: "TV APPEARANCE", img: download2 },
              { icon: Newspaper, title: "News Coverage", desc: "Interviews & features in top journals.", badge: "FEATURED IN NEWS", img: tradition1 },
              { icon: Award, title: "Media Awards", desc: "Recognized for excellence in artistry.", badge: "MEDIA RECOGNITION", img: gallery1 },
              { icon: Sparkles, title: "Industry Events", desc: "Work highlighted at major summits.", badge: "INDUSTRY EXCELLENCE", img: gallery3 }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-sm shadow-lg">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[#111111] text-[7px] font-bold uppercase tracking-widest">{item.badge}</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                    <item.icon size={14} />
                  </div>
                  <div>
                    <h4 className="text-base font-serif text-[#111111] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 9 – SEMINARS & EVENTS */}
      <section className="py-12 bg-[#111111] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="max-w-xl">
               <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-2 block">EDUCATIONAL</span>
               <h2 className="text-2xl md:text-3xl font-serif">Seminars & Events</h2>
            </div>
            <Link to="/courses" className="text-gold uppercase tracking-widest text-[9px] font-bold border-b border-gold/30 pb-1 hover:border-gold transition-all">
               JOIN NEXT WORKSHOP
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="relative group h-[400px] overflow-hidden rounded-sm">
                <img src={gallery3} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" alt="Seminar" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                   <h4 className="text-xl font-serif text-white mb-1">Masterclass 2023</h4>
                   <p className="text-gray-400 text-[10px]">Empowering future artists.</p>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {[download, download1, gallery1, tradition1].map((img, i) => (
                   <div key={i} className="relative h-[196px] overflow-hidden rounded-sm group">
                      <img src={img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all" alt={`Event ${i}`} />
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – TRANSFORMATION STORIES */}
      <section className="py-10 bg-white">
         <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-2 block">REAL RESULTS</span>
            <h2 className="text-2xl font-serif text-[#111111] mb-8">Transformation Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { name: "Sana Khan", type: "HD Bridal", feedback: "The transformation was magical. I felt like a queen on my wedding day.", img: bridal1 },
                 { name: "Priya Sharma", type: "Party Glam", feedback: "Everyone loved my look at the reception. Thank you Ambika!", img: party1 },
                 { name: "Anjali Gupta", type: "Engagement", feedback: "So natural yet so elegant. Exactly what I wanted for my engagement.", img: engagement1 }
               ].map((story, i) => (
                 <div key={i} className="p-5 border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-500 bg-white group text-left">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-gold/20 p-1 mx-auto">
                       <img src={story.img} className="w-full h-full object-cover rounded-full" alt={story.name} />
                    </div>
                    <div className="text-center">
                       <h4 className="text-base font-serif text-[#111111] mb-0.5">{story.name}</h4>
                       <span className="text-gold uppercase tracking-widest text-[7px] font-bold block mb-2">{story.type}</span>
                       <p className="text-gray-500 text-[11px] italic mb-3 leading-relaxed">"{story.feedback}"</p>
                       <div className="flex justify-center gap-0.5 text-gold">
                          {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 11 – VIDEO PORTFOLIO SECTION */}
      <section className="py-16 bg-[#F8F4EF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">BEHIND THE BRUSH</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#111111] mb-5">Watch The Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bridal Reveal", category: "Transformation", img: bridal1 },
              { title: "Celebrity Prep", category: "Behind The Scenes", img: download },
              { title: "Masterclass Highlights", category: "Seminar", img: gallery3 }
            ].map((video, idx) => (
              <div key={idx} className="group relative aspect-video overflow-hidden rounded-sm shadow-xl cursor-pointer">
                <img src={video.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={video.title} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-all">
                    <Play className="text-white fill-current ml-1" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black to-transparent">
                  <span className="text-gold uppercase tracking-widest text-[8px] font-bold mb-1 block">{video.category}</span>
                  <h4 className="text-white font-serif text-base">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 – INSTAGRAM PORTFOLIO FEED */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
              <div>
                 <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-3 block">SOCIAL FEED</span>
                 <h2 className="text-3xl font-serif text-[#111111]">Follow Our Journey</h2>
              </div>
              <a
                href="https://www.instagram.com/ambika_beautystudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 text-[9px] uppercase tracking-widest font-bold hover:bg-gold transition-all duration-500 rounded-sm"
              >
                <Instagram size={16} />
                @ambika_beautystudio
              </a>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5">
              {[bridal1, party1, gallery4, download, tradition1, heroImg, download2, gallery1, party2, download1, aImg, bridal2].map((img, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/ambika_beautystudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group"
                >
                   <img src={img} className="w-full h-full object-cover" alt="Instagram" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <Instagram size={20} />
                   </div>
                </a>
              ))}
           </div>
        </div>
      </section>


      {/* SECTION 14 – ACHIEVEMENTS & RECOGNITION */}
      <section className="py-16 bg-[#F8F4EF]">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Celebrity Collaborations", "Media Recognition", "Bridal Expertise",
                "12+ Years Experience", "Client Satisfaction", "Professional Excellence"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-sm shadow-sm border border-gray-100">
                   <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                      <CheckCircle2 size={20} />
                   </div>
                   <span className="text-xs uppercase tracking-widest font-bold text-[#111111]">{text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 15 – FINAL CTA */}
      <section className="relative py-12 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} className="w-full h-full object-cover opacity-30" alt="CTA Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-3 block">THE NEXT TRANSFORMATION</span>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-5 leading-tight">
              Ready To Be Our Next <br />
              <span className="text-gold italic">Transformation Story?</span>
            </h2>
            <p className="text-gray-300 text-sm mb-6 font-light max-w-md leading-relaxed">
              Book your appointment today and experience premium beauty services from Ambika Beauty Studio.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={onBookClick}
                className="gold-btn px-6 py-3 shadow-2xl text-[10px]"
              >
                BOOK APPOINTMENT
              </button>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-white hover:text-black transition-all duration-500">
                VIEW SERVICES
              </Link>
              <div className="w-full mt-5 flex flex-wrap justify-center lg:justify-start gap-6 border-t border-white/10 pt-5">
                 <a href="tel:+919528147783" className="flex items-center gap-3 text-white group">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold transition-all">
                       <Phone size={12} />
                    </div>
                    <div>
                       <div className="text-[8px] text-gray-400 uppercase tracking-widest">Call Us</div>
                       <div className="text-[11px] font-bold tracking-widest">+91 95281 47783</div>
                    </div>
                 </a>
                 <a href="https://wa.me/919528147783" className="flex items-center gap-3 text-white group">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all">
                       <MessageSquare size={12} />
                    </div>
                    <div>
                       <div className="text-[8px] text-gray-400 uppercase tracking-widest">WhatsApp</div>
                       <div className="text-[11px] font-bold tracking-widest">+91 95281 47783</div>
                    </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER TAGLINE */}
      <div className="py-8 bg-white text-center">
         <div className="flex justify-center gap-2 text-gold mb-4">
            {[...Array(3)].map((_, i) => <Sparkles key={i} size={14} />)}
         </div>
         <p className="text-[#111111] font-serif text-2xl italic mb-3">"Artistry in every touch."</p>
         <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] max-w-xl mx-auto px-6">
           Ambika Beauty Studio • Luxury Professional Services
         </p>
      </div>

      {/* LIGHTBOX PREVIEW */}
      {selectedImage && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-6 animate-fade-in" onClick={() => setSelectedImage(null)}>
           <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors" onClick={() => setSelectedImage(null)}>
              <X size={40} strokeWidth={1} />
           </button>
           <img
             src={selectedImage}
             className="max-w-full max-h-[90vh] object-contain shadow-2xl"
             alt="Enlarged Portfolio"
             onClick={(e) => e.stopPropagation()}
           />
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
