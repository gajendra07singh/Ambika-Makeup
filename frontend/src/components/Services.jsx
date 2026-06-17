import React, { useState } from 'react';
import { Sparkles, Gem, Paintbrush, User, Scissors, Wand2, Star, Heart, Camera, Brush, Sparkle, ShoppingBag, BookOpen, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import serviceBridal from '../assets/Radiant Soft Glam Bridal Makeup for Modern Brides.jpg';
import serviceEngagement from '../assets/service-engagement.jpg';
import serviceParty from '../assets/✨ Soft glam makeup vibes! ✨.jpg';
import serviceSkin from '../assets/gallery1.jpg';
import serviceHair from '../assets/gallery4.jpg';
import serviceHD from '../assets/hero1.jpg';
import serviceReception from '../assets/download.jpg';
import serviceHaldi from '../assets/download (1).jpg';
import serviceEditorial from '../assets/download (2).jpg';
import serviceSider from '../assets/Soft Glam Wedding Look  Elegant soft glam bridal makeup with glowing skin, nude lips, and flawless.jpg';
import serviceEye from '../assets/Glitter Glam Beauty Look _ Soft Pink Sparkle Makeup 💖.jpg';
import serviceSaree from '../assets/💃 Grace meets tradition in this beautiful half saree (langa voni)_ Perfect for festivals, weddings.jpg';

export const allServices = [
  {
    title: 'Bridal & Pre-Bridal',
    description: '<b>Luxury</b> bridal transformations and <b>comprehensive</b> pre-bridal packages.',
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    image: serviceBridal
  },
  {
    title: 'Engagement Makeup',
    description: '<b>Elegant</b> and sophisticated looks tailored for your <b>engagement ceremony</b>.',
    icon: <Gem size={28} strokeWidth={1.5} />,
    image: serviceEngagement
  },
  {
    title: 'Party Makeup',
    description: '<b>Glamorous</b> and long-lasting makeup for all your <b>special occasions</b>.',
    icon: <Paintbrush size={28} strokeWidth={1.5} />,
    image: serviceParty
  },
  {
    title: 'Skin Care',
    description: '<b>Professional</b> skin treatments and consultations for <b>all skin types</b>.',
    icon: <User size={28} strokeWidth={1.5} />,
    image: serviceSkin
  },
  {
    title: 'Hair Styling',
    description: '<b>Creative</b> and trendy hair designs to <b>complement</b> your makeup.',
    icon: <Scissors size={28} strokeWidth={1.5} />,
    image: serviceHair
  },
  {
    title: 'HD & Airbrush',
    description: '<b>High-definition</b> and airbrush techniques for a <b>flawless</b> finish.',
    icon: <Wand2 size={28} strokeWidth={1.5} />,
    image: serviceHD
  },
  {
    title: 'Reception Makeup',
    description: 'A stellar look for your reception, blending modern glam with elegance.',
    icon: <Star size={28} strokeWidth={1.5} />,
    image: serviceReception
  },
  {
    title: 'Haldi & Mehendi',
    description: 'Vibrant and long-lasting makeup for your traditional pre-wedding rituals.',
    icon: <Heart size={28} strokeWidth={1.5} />,
    image: serviceHaldi
  },
  {
    title: 'Editorial Makeup',
    description: 'Professional makeup for photoshoots, portfolios, and fashion editorials.',
    icon: <Camera size={28} strokeWidth={1.5} />,
    image: serviceEditorial
  },
  {
    title: 'Sider Makeup',
    description: 'Beautiful and coordinated looks for the bride\'s sisters and family.',
    icon: <Brush size={28} strokeWidth={1.5} />,
    image: serviceSider
  },
  {
    title: 'Eye Makeup',
    description: 'Specialize in dramatic smokey eyes, glitter, or natural eye enhancement.',
    icon: <Sparkle size={28} strokeWidth={1.5} />,
    image: serviceEye
  },
  {
    title: 'Saree Draping',
    description: 'Perfect saree and lehenga draping in various traditional and modern styles.',
    icon: <ShoppingBag size={28} strokeWidth={1.5} />,
    image: serviceSaree
  },
  {
    title: "Bridal Masterclass",
    description: "<b>Professional</b> 30-day certification course covering A-Z of <b>Bridal transformations</b>.",
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    image: serviceHD
  },
  {
    title: "Self Makeup Workshop",
    description: "Exclusive <b>3-day workshop</b> to learn the art of enhancing your <b>own beauty</b>.",
    icon: <Award size={28} strokeWidth={1.5} />,
    image: serviceParty
  },
  {
    title: "Hair Specialization",
    description: "<b>15-day intensive</b> course on creative hair designs and <b>bridal styling</b>.",
    icon: <Scissors size={28} strokeWidth={1.5} />,
    image: serviceHair
  }
];

const Services = ({ showAll = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  const shouldShowAll = showAll || isExpanded;
  const displayServices = shouldShowAll ? allServices : allServices.slice(0, 6);

  return (
    <section id="services" className={`pt-12 pb-2 border-b border-gray-100 ${isServicesPage ? 'bg-soft-beige' : 'bg-white'}`}>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-gold uppercase tracking-[6px] text-[14px] font-bold mb-1 block">OUR SERVICES</span>
          <h2 className="text-[48px] md:text-[56px] font-serif font-[500] text-[#1f2940] leading-tight mb-4">
            Professional Beauty Services
          </h2>

          <div className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 bg-[#1a1a1a] rounded-sm border-l-4 border-gold shadow-2xl transform hover:scale-105 transition-transform duration-300">
             <Award className="text-gold" size={20} strokeWidth={2.5} />
             <span className="text-white uppercase tracking-[0.4em] text-[13px] font-black">Certified By Lakme Academy</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gold/30"></div>
            <div className="w-2 h-2 rotate-45 border border-gold/30"></div>
            <div className="w-12 h-[1px] bg-gold/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className="bg-white group relative rounded-xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full border border-gray-50 max-w-[320px] mx-auto"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative pt-9 pb-8 px-5 text-center flex-grow flex flex-col justify-start">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md z-10 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full border border-gold/20 flex items-center justify-center text-gold">
                    {React.cloneElement(service.icon, { size: 18, strokeWidth: 1.5 })}
                  </div>
                </div>

                <h3 className="text-[20px] font-serif text-[#1a1a1a] mb-3 font-semibold tracking-wide">
                  {service.title}
                </h3>

                <p
                  className="text-gray-700 text-[14px] leading-relaxed font-normal max-w-[240px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
            </div>
          ))}
        </div>

        {!shouldShowAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setIsExpanded(true)}
              className="gold-btn inline-block cursor-pointer"
            >
              VIEW ALL SERVICES
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
