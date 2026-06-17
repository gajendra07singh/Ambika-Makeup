import React, { useState } from 'react';
import {
  Sparkles, Heart, Star, CheckCircle2, Phone, MessageSquare,
  Award, Camera, Tv, Eye, Scissors, Brush, Wand2,
  Users, ShieldCheck, Plus, Minus, Gem, Paintbrush, BookOpen, Flower2, Newspaper, Sun
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Asset imports
import serviceBridal from '../assets/Radiant Soft Glam Bridal Makeup for Modern Brides.jpg';
import serviceEngagement from '../assets/service-engagement.jpg';
import serviceParty from '../assets/✨ Soft glam makeup vibes! ✨.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import hero1 from '../assets/hero1.jpg';
import heroImg from '../assets/hero.png';
import download from '../assets/download.jpg';
import download1 from '../assets/download (1).jpg';
import download2 from '../assets/download (2).jpg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-serif transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-[#111111] group-hover:text-gold'}`}>
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gray-400" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, services, description, image, icon: Icon, bgClass = "bg-white", onBookClick }) => {
  const whatsappUrl = `https://wa.me/919528147783?text=${encodeURIComponent(`Hi Ambika, I'm interested in the "${title}" service. Could you please share the pricing and details?`)}`;

  return (
    <section className={`py-12 md:py-20 border-b border-gray-100 ${bgClass}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-md shadow-2xl border border-gray-100">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold p-5 text-white hidden md:block z-10 shadow-2xl rounded-sm">
                <Icon size={24} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="flex-1 text-left">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-4 block">PREMIUM SERVICE</span>
            <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-6">{title}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed italic border-l-2 border-gold/20 pl-6">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <CheckCircle2 size={12} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[12px] uppercase tracking-widest font-black text-[#111111]">{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-4 text-gold group"
              >
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Book This Service</span>
                <div className="w-6 h-[1px] bg-gold group-hover:w-10 transition-all duration-500"></div>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
              >
                <MessageSquare size={13} />
                Ask The Price
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GridService = ({ title, services, description, icon: Icon, bg = "bg-white" }) => {
  const whatsappUrl = `https://wa.me/919528147783?text=${encodeURIComponent(`Hi Ambika, I'm interested in the "${title}" service. Could you please share the pricing and details?`)}`;

  return (
    <div className={`${bg} p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden rounded-sm flex flex-col h-full`}>
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-gold">
        <Icon size={50} strokeWidth={1} />
      </div>
      <div className="w-9 h-9 bg-[#F8F4EF] rounded-full flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform duration-500">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-serif text-[#111111] mb-2">{title}</h3>
      {description && <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">{description}</p>}

      <div className="space-y-2 mb-6">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <CheckCircle2 size={11} className="text-gold" />
            <span className="text-[10px] uppercase tracking-wide font-medium text-gray-700">{service}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
        >
          <MessageSquare size={12} />
          Ask Price
        </a>
      </div>
    </div>
  );
};

const CategoryList = ({ title, items, bg = "bg-white" }) => {
  const whatsappUrl = `https://wa.me/919528147783?text=${encodeURIComponent(`Hi Ambika, I'm interested in the "${title}" category services. Could you please share the pricing?`)}`;

  return (
    <div className={`p-6 border border-gray-100 rounded-md hover:shadow-lg transition-all duration-300 ${bg} flex flex-col h-full`}>
      <h3 className="text-xl font-serif text-[#111111] mb-4 pb-3 border-b border-gold/20">{title}</h3>

      <ul className="space-y-3 mb-8">
        {items.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-[13px] text-gray-600">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
        >
          <MessageSquare size={12} />
          Ask Price
        </a>
      </div>
    </div>
  );
};

const ServicesPage = ({ onBookClick }) => {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* SECTION 1 – HERO SERVICES SECTION */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-[#0a0a0a] border-b border-gray-800">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ambika Makeup Studio Services"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] md:text-[14px] font-bold mb-4 block animate-fade-up">WHAT WE OFFER</span>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-serif text-white uppercase tracking-tight mb-5 animate-fade-up leading-[1]" style={{ animationDelay: '200ms' }}>
              Professional <span className="text-gold italic">Beauty</span> <br /> & Makeup Services
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10 font-light animate-fade-up italic border-l border-gold/30 pl-6" style={{ animationDelay: '400ms' }}>
              From <span className="text-white font-bold">bridal transformations</span> to <span className="text-white font-bold">celebrity-ready looks</span>, we provide premium beauty services designed to make every client look and feel <span className="text-gold font-bold">extraordinary</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <button
                onClick={onBookClick}
                className="gold-btn px-10 py-4 shadow-2xl text-[12px] font-black"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – BRIDAL MAKEUP SERVICES */}
      <ServiceCard
        title="Bridal Makeup Services"
        description="Your wedding day deserves perfection. Our bridal makeup services are designed to enhance your natural beauty while ensuring a flawless and long-lasting look."
        image={serviceBridal}
        icon={Sparkles}
        bgClass="bg-[#F8F4EF]"
        onBookClick={onBookClick}
        services={[
          "HD Bridal Makeup", "Airbrush Bridal Makeup", "Traditional Bridal Makeup",
          "Luxury Bridal Makeup", "Destination Bridal Makeup", "Reception Makeup",
          "Wedding Day Makeup", "Bridal Hairstyling", "Bridal Draping", "Accessories Styling"
        ]}
      />

      {/* SECTION 4 – PRE-BRIDAL SERVICES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-[450px] shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <img src={gallery1} className="w-full h-[200px] object-cover rounded-md shadow-2xl hover:scale-105 transition-transform duration-500" alt="Pre-bridal 1" />
                <img src={gallery3} className="w-full h-[200px] object-cover rounded-md mt-8 shadow-2xl hover:scale-105 transition-transform duration-500" alt="Pre-bridal 2" />
                <img src={gallery4} className="w-full h-[200px] object-cover rounded-md -mt-8 shadow-2xl hover:scale-105 transition-transform duration-500" alt="Pre-bridal 3" />
                <img src={download1} className="w-full h-[200px] object-cover rounded-md shadow-2xl hover:scale-105 transition-transform duration-500" alt="Pre-bridal 4" />
              </div>
            </div>

            <div className="flex-1">
              <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-4 block">RADIANT PREPARATION</span>
              <h2 className="text-[40px] md:text-[52px] font-serif text-[#111111] leading-[1.1] mb-6">Pre-Bridal <span className="text-gold">Packages</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">Prepare for your <span className="text-gold font-bold">special day</span> with our customized pre-bridal treatments designed to give you <span className="text-[#111111] font-bold">radiant skin</span> and complete confidence.</p>

              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { name: "Skin Care", icon: <Flower2 size={20} /> },
                  { name: "Facial", icon: <Sparkles size={20} /> },
                  { name: "Detan", icon: <Sun size={20} /> },
                  { name: "Body Polish", icon: <Gem size={20} /> },
                  { name: "Manicure", icon: <Heart size={20} /> },
                  { name: "Hair Spa", icon: <Scissors size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#F8F4EF] text-center group hover:bg-[#111111] transition-all duration-500 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl">
                    <div className="text-gold mb-2 flex justify-center group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-gray-800 group-hover:text-white transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Pre-Bridal Beauty Packages", "Cleanup & Facial", "Bleach Services", "Waxing & Threading", "Pedicure & Hair Treatments"].map((s, i) => (
                   <div key={i} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                        <CheckCircle2 size={12} className="text-gold group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[11px] uppercase tracking-widest font-black text-[#111111]">{s}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – ENGAGEMENT MAKEUP */}
      <ServiceCard
        title="Engagement Makeup"
        description="Elegant and sophisticated engagement looks crafted to make your special moments unforgettable."
        image={serviceEngagement}
        icon={Gem}
        bgClass="bg-[#F8F4EF]"
        onBookClick={onBookClick}
        services={[
          "HD Engagement Makeup", "Airbrush Engagement Makeup", "Custom Hair Styling",
          "Saree Draping", "Jewelry Setting", "Grooming Consultation"
        ]}
      />

      {/* SECTION 6 – PARTY MAKEUP SERVICES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-4 block">GLAMOUR FOR ALL</span>
            <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-6">Party <span className="text-gold italic">Makeup</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic text-lg font-light leading-relaxed border-b border-gold/20 pb-6">
              Look <span className="text-gold font-bold">glamorous</span> for birthdays, anniversaries, family functions, festive celebrations, and <span className="text-[#111111] font-bold">special occasions</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GridService
              title="Soft Glam"
              services={["Natural Finish", "Glowing Skin", "Soft Eyes", "Nude Lips"]}
              icon={Wand2}
              bg="bg-[#F8F4EF]"
            />
            <GridService
              title="Party Ready"
              services={["HD Party Makeup", "Evening Glam", "Festive Looks", "Cocktail Style"]}
              icon={Paintbrush}
            />
            <GridService
              title="Special Event"
              services={["Anniversary", "Birthday", "Family Function", "Celebrations"]}
              icon={Star}
              bg="bg-[#F8F4EF]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 – CELEBRITY & VIP MAKEUP */}
      <section className="py-6 bg-[#111111] text-white overflow-hidden relative border-b border-gold/20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4"></div>

        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-[220px] shrink-0">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={15}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="celebrity-slider"
              >
                {[download, download2, gallery4, serviceParty].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="aspect-[4/5] relative group overflow-hidden rounded-md shadow-2xl">
                       <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Celebrity Portfolio" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                          <span className="text-gold uppercase tracking-widest text-[9px] font-bold mb-0.5">Red Carpet Event</span>
                          <h4 className="text-white font-serif text-base">Exclusive Styling</h4>
                       </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex-1">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-2 block">EXCLUSIVE ACCESS</span>
              <h2 className="text-[26px] md:text-[34px] font-serif mb-4 leading-tight">Celebrity & <br /> <span className="text-gold">VIP Makeup</span></h2>

              <p className="text-gray-400 text-[11px] mb-5 leading-relaxed font-light">
                Trusted by celebrities and VIP clients for professional appearances. We understand the high-stakes requirements of red carpets and camera lights.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                {["Celebrity Makeup", "VIP Event Makeup", "Award Function Makeup", "Media Appearance Styling"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-5 h-[1px] bg-gold group-hover:w-8 transition-all duration-500"></div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold">{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-24 pt-4 border-t border-white/5">
                 <div className="text-left">
                    <div className="text-2xl font-serif text-gold mb-0">50+</div>
                    <div className="text-[8px] uppercase tracking-widest text-gray-500">Celebrity Clients</div>
                 </div>
                 <div className="text-left">
                    <div className="text-2xl font-serif text-gold mb-0">100+</div>
                    <div className="text-[8px] uppercase tracking-widest text-gray-500">Red Carpet Looks</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8, 9, 10 – SPECIALIZED MAKEUP SERVICES */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GridService
              title="Casual Makeup"
              description="Effortless everyday elegance for office meetings, brunches, or simple outings."
              services={["Daily Wear Look", "Office Makeup", "Natural Finish", "No-Makeup Look"]}
              icon={Brush}
            />
            <GridService
              title="Fashion & Photoshoot"
              description="Professional camera-ready makeup for photoshoots, portfolios, and fashion campaigns."
              services={["Fashion Shoot Makeup", "Model Portfolio", "Editorial & Beauty", "Commercial Shoots"]}
              icon={Camera}
              bg="bg-[#F8F4EF]"
            />
            <GridService
              title="TV & Media Appearance"
              description="Specialized makeup services for television appearances and public broadcasts."
              services={["Television Makeup", "News Appearance", "Anchor Styling", "Studio Interviews"]}
              icon={Tv}
            />
          </div>
        </div>
      </section>

      {/* SECTION 10 – HAIR SERVICES */}
      <section className="pt-4 pb-8 bg-[#F8F4EF] border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
           <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-1 block">CROWNING GLORY</span>
           <h2 className="text-[24px] md:text-[32px] font-serif text-[#111111] mb-5">Professional Hair Services</h2>

           <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">
              {[
                { name: "Bridal Styling", img: serviceBridal },
                { name: "Curling", img: serviceEngagement },
                { name: "Straightening", img: hero1 },
                { name: "Hair Spa", img: gallery1 },
                { name: "Coloring", img: download1 },
                { name: "Extensions", img: gallery4 }
              ].map((h, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden bg-white shadow-md rounded-md">
                   <img src={h.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={h.name} />
                </div>
              ))}
           </div>

           <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
              {["Engagement Hairstyling", "Party Hairstyles", "Smoothening", "Highlights", "Treatment"].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                   <Scissors size={10} className="text-gold" />
                   <span className="text-[9px] uppercase tracking-widest font-bold text-gray-600">{s}</span>
                </div>
              ))}
           </div>

           <a
             href={`https://wa.me/919528147783?text=${encodeURIComponent("Hi Ambika, I'm interested in your Professional Hair Services. Could you please share the pricing?")}`}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-5 py-2 border border-gold/30 text-gold rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
           >
             <MessageSquare size={12} />
             Ask Price
           </a>
        </div>
      </section>

      {/* SECTION 11, 12, 13 – SKIN, HAND/FOOT, GROOMING */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryList
              title="Skin & Beauty Care"
              items={["Luxury Facials", "Skin Brightening", "Hydration Therapy", "Anti-Aging Facial", "Acne Care", "Gold/Diamond Facial"]}
            />
            <CategoryList
              title="Hand & Foot Care"
              items={["Spa Manicure", "Spa Pedicure", "Nail Care & Polishing", "Bridal Hand Care", "Luxury Foot Spa"]}
              bg="bg-[#F8F4EF]/30"
            />
            <CategoryList
              title="Grooming Services"
              items={["Eyebrow Threading", "Face Threading", "Full Face Grooming", "Waxing Services", "Bridal Grooming"]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 14 – BEAUTY ACADEMY */}
      <section className="py-20 bg-[#F8F4EF] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-[400px] shrink-0">
               <div className="relative group">
                  <img src={gallery3} className="w-full aspect-square object-cover rounded-md shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Training" />
                  <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-500 rounded-md"></div>
                  <div className="absolute -bottom-10 -right-10 bg-[#111111] p-10 hidden md:block rounded-sm shadow-2xl border-l-4 border-gold">
                     <Award className="text-gold mb-4" size={40} />
                     <p className="text-white text-[12px] uppercase tracking-[0.2em] font-black leading-tight">Professional <br /> Certification <br /> Programs</p>
                  </div>
               </div>
            </div>

            <div className="flex-1">
               <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-black mb-4 block">EMPOWERING ARTISTS</span>
               <h2 className="text-[40px] md:text-[56px] font-serif text-[#111111] leading-[1.1] mb-6">Professional <br /> <span className="text-gold italic">Makeup Training</span></h2>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed italic border-l-2 border-gold/20 pl-6">Learn professional makeup artistry from experts. We offer <span className="text-[#111111] font-bold">comprehensive courses</span> from basics to advanced techniques with <span className="text-gold font-bold">hands-on practice</span>.</p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {["Basic Makeup Course", "Advanced Makeup Course", "Bridal Specialization", "HD & Airbrush Training", "Hairstyling Training", "Professional Certification"].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                       <BookOpen size={20} className="text-gold" />
                       <span className="text-[12px] uppercase tracking-widest font-black text-[#111111]">{c}</span>
                    </div>
                  ))}
               </div>

               <a
                 href={`https://wa.me/919528147783?text=${encodeURIComponent("Hi Ambika, I'm interested in your Professional Makeup Training. Could you please share the details and pricing?")}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="gold-btn inline-flex items-center gap-3 text-[12px] px-10 py-4 shadow-2xl font-black"
               >
                 <MessageSquare size={16} />
                 ASK PRICE & DETAILS
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15 – SERVICE PROCESS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-2 block">OUR APPROACH</span>
          <h2 className="text-[28px] md:text-[36px] font-serif text-[#111111] mb-8">How We Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements." },
              { step: "02", title: "Skin Analysis", desc: "Detailed analysis of your skin type and needs." },
              { step: "03", title: "Look Planning", desc: "Customizing colors and styles for your event." },
              { step: "04", title: "Professional Service", desc: "Expert application with premium products." },
              { step: "05", title: "Final Perfection", desc: "Last-minute styling for a flawless finish." }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-[32px] md:text-[38px] font-serif font-bold text-[#111111] mb-1 leading-none transition-colors">{s.step}</div>
                <h4 className="text-[15px] font-serif text-[#111111] mb-1.5">{s.title}</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed max-w-[160px] mx-auto">{s.desc}</p>
                {i < 4 && <div className="hidden md:block absolute top-[25px] -right-[15px] w-8 h-[1px] bg-gold/30"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 17 – FAQ SECTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-2 block">QUESTIONS</span>
            <h2 className="text-[28px] md:text-[36px] font-serif text-[#111111] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="bg-[#F8F4EF] p-6 md:p-8 rounded-md shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              <div className="flex flex-col">
                <FAQItem
                  question="Do you provide bridal packages?"
                  answer="Yes, we offer comprehensive bridal and pre-bridal packages that can be customized according to your needs, including makeup, hair, draping, and skin treatments."
                />
                <FAQItem
                  question="Do you offer HD and Airbrush makeup?"
                  answer="Absolutely. We specialize in both HD and Airbrush makeup techniques to provide a flawless, long-lasting, and camera-ready finish for your special day."
                />
                <FAQItem
                  question="Do you provide home service?"
                  answer="Yes, we provide on-site services for bridal bookings and large groups. For individual services, we welcome you to our studio for the full luxury experience."
                />
              </div>
              <div className="flex flex-col">
                <FAQItem
                  question="Can I book makeup for destination weddings?"
                  answer="We love destination weddings! Ambika and her team are available for travel across India and internationally to ensure you look stunning no matter the location."
                />
                <FAQItem
                  question="What products do you use?"
                  answer="We use only premium international brands such as MAC, Bobbi Brown, Estée Lauder, Huda Beauty, NARS, and Charlotte Tilbury to ensure high-quality, long-lasting results."
                />
                <FAQItem
                  question="How early should I book my bridal appointment?"
                  answer="We recommend booking at least 3-6 months in advance, especially during peak wedding seasons, to ensure availability for your specific dates."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18 – FINAL CTA */}
      <section className="relative py-12 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img src={hero1} className="w-full h-full object-cover opacity-70" alt="background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/40 to-transparent"></div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-2 block">THE TRANSFORMATION AWAITS</span>
            <h2 className="text-[28px] md:text-[42px] font-serif text-white mb-4 leading-tight">
              Book Your Beauty <br />
              <span className="text-gold italic">Transformation Today</span>
            </h2>
            <p className="text-gray-300 text-[14px] mb-6 font-light max-w-lg leading-relaxed">
              Whether it's your wedding, engagement, party, photoshoot, or special event, Ambika Beauty Studio is ready to create your perfect look.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={onBookClick}
                className="gold-btn px-6 py-3 shadow-2xl text-[10px]"
              >
                BOOK APPOINTMENT
              </button>
              <a href="tel:+919528147783" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white hover:text-black transition-all duration-500">
                <Phone size={13} />
                CALL NOW
              </a>
              <a href="https://wa.me/919528147783" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-green-600 hover:border-green-600 transition-all duration-500">
                <MessageSquare size={13} />
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER TAGLINE */}
      <div className="py-8 bg-white text-center">
         <p className="text-gold font-serif text-2xl italic mb-3">"Beauty. Elegance. Confidence."</p>
         <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] max-w-xl mx-auto px-6 leading-relaxed">
           Ambika Beauty Studio – Creating unforgettable transformations through artistry, passion, and excellence.
         </p>
      </div>

    </div>
  );
};

export default ServicesPage;
