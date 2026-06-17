import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Risha Sharma",
    role: "Bride",
    text: "Ambika did my bridal makeup and it was extremely happy with the look. She is very professional and made me feel so comfortable.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Priyanka Joshi",
    role: "Party Makeup",
    text: "Best makeup artist in Mathura! She uses premium products and her work is just amazing. Highly recommended for any event.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Ritika Verma",
    role: "Engagement",
    text: "Highly recommended! My engagement look was exactly how I imagined. The makeup was flawless and lasted all day.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Sneha Kapoor",
    role: "Bridal",
    text: "The best experience ever. The makeup was so natural yet glamorous. She really knows what suits your skin type.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Anjali Gupta",
    role: "Bridal Client",
    text: "I couldn't have asked for a better experience. Ambika is so calm and her work is flawless. Everyone loved my look!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 bg-[#0a0a0a] text-white border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-black mb-4 block">TESTIMONIALS</span>
          <h2 className="text-[40px] md:text-[56px] font-serif mb-6 leading-[1.1]">
            What Our <span className="text-gold italic">Clients</span> Say
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 max-w-4xl mx-auto">
          {/* Left: Featured Image with Quote */}
          <div className="md:col-span-7 relative rounded-[24px] overflow-hidden group shadow-xl h-[240px]">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80"
              alt="Ambika Makeup Studio"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
              </div>
              <p className="text-white text-lg md:text-xl font-serif italic leading-tight max-w-xl">
                "Her artistry is unmatched. I've never felt more beautiful than on my wedding day."
              </p>
            </div>
          </div>

          {/* Right: Google Rating Card */}
          <div className="md:col-span-5 bg-[#121212] rounded-[24px] border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden h-[240px]">
            <div className="flex justify-between items-start mb-2">
                <p className="text-gray-300 text-[10px] uppercase tracking-[0.3em] font-bold">Google Rating</p>
                <div className="bg-white p-1.5 rounded-lg">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                </div>
            </div>

            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-7xl font-serif text-white leading-none">4.9</h3>
              <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-gold text-gold" />
                  ))}
              </div>
            </div>

            <p className="text-gray-300 text-[11px] leading-relaxed max-w-[220px]">
                Rated <span className="text-white font-bold">4.9/5</span> on Google based on <span className="text-gold font-bold">200+</span> verified customer reviews.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 }
            }}
            className="pb-12 testimonial-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="bg-[#121212] p-7 rounded-[24px] border border-white/5 flex flex-col w-full hover:bg-[#181818] transition-all duration-300">
                  {/* Stars at Top Left */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="flex-grow">
                    <p className="text-gray-200 font-normal text-[15px] leading-relaxed mb-8">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                        src={t.img}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                    />
                    <div>
                        <h4 className="text-[14px] font-bold text-white tracking-wide">{t.name}</h4>
                        <p className="text-[12px] text-gray-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center mt-4">
            <a
                href="https://www.google.com/search?q=Ambika+Makeup+Studio+Mathura+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#001730] text-white px-8 py-3.5 rounded-xl font-bold text-[13px] hover:bg-black transition-colors shadow-lg"
            >
                <svg viewBox="0 0 24 24" width="16" height="16" className="fill-current">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.34-1.92 4.36-1.12 1.12-2.88 2.2-5.92 2.2-4.78 0-8.68-3.88-8.68-8.68s3.9-8.68 8.68-8.68c2.6 0 4.6 1.04 6 2.36l2.32-2.32C18.66 1.44 15.82 0 12.48 0 5.58 0 0 5.58 0 12.48s5.58 12.48 12.48 12.48c3.74 0 6.58-1.22 8.78-3.5 2.26-2.26 2.96-5.44 2.96-8.1 0-.78-.06-1.52-.18-2.2H12.48z"/>
                </svg>
                Write a Google Review
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
