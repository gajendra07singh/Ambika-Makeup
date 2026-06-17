import React from 'react';
import { Link } from 'react-router-dom';

import gallery1 from '../assets/gallery1.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import serviceBridal from '../assets/service-bridal.jpg';
import serviceEngagement from '../assets/service-engagement.jpg';

const Gallery = () => {
  const images = [
    gallery1,
    serviceBridal,
    serviceEngagement,
    gallery3,
    gallery4,
    serviceBridal,
    gallery1,
    gallery3
  ];

  // Duplicate for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="portfolio" className="pt-12 pb-4 bg-soft-beige overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-black mb-4 block">Our Portfolio</span>
          <h2 className="text-[40px] md:text-[56px] font-serif text-gray-800 leading-[1.1]">
            Bridal <span className="text-gold italic">Transformations</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex">
            {duplicatedImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 px-2 w-[200px] md:w-[260px]">
                <div className="relative overflow-hidden aspect-[3/4] rounded-sm shadow-sm border border-gray-100 group cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white">
                        <span className="text-lg">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-4 text-gold group"
          >
            <span className="uppercase tracking-[0.4em] text-[11px] font-bold">Explore Full Portfolio</span>
            <div className="w-8 h-[1px] bg-gold group-hover:w-16 transition-all duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
