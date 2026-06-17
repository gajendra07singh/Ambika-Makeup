import React from 'react';
import Testimonials from '../components/Testimonials';
import { MessageSquare, Star, Quote } from 'lucide-react';

const ReviewsPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-4 block">Client Love</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-wider mb-6">Reviews</h1>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <MessageSquare className="text-gold/20 mx-auto mb-8" size={64} />
          <h2 className="text-4xl font-serif text-gray-800 mb-8">What Our Brides Say</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed italic">
            "Your trust is our biggest achievement. We feel honored to be a part of your special day and helping you look your absolute best."
          </p>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <Testimonials />

      {/* Extended Reviews Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Anjali Gupta", role: "Bridal Client", text: "I couldn't have asked for a better experience. Ambika is so calm and her work is flawless." },
              { name: "Megha Jain", role: "Academy Student", text: "The masterclass was life-changing. I learned so many techniques that I use every day now." },
              { name: "Simran Kaur", role: "Party Makeup", text: "The makeup lasted all night through dancing and sweating. Highly impressed!" },
              { name: "Pooja Sharma", role: "Bridal Client", text: "She made me look like a queen on my wedding day. Everyone kept asking about my makeup!" }
            ].map((review, i) => (
              <div key={i} className="bg-[#121212] p-10 border border-white/5 rounded-[32px] relative shadow-xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} className="fill-gold text-gold" />)}
                </div>
                <p className="text-gray-300 font-light italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-serif font-bold border border-gold/20">{review.name[0]}</div>
                    <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">{review.name}</h4>
                        <p className="text-[11px] text-gray-500 uppercase tracking-widest">{review.role}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-serif mb-8 italic">Want to experience the transformation?</h2>
          <a href="/contact" className="inline-block bg-[#1a1a1a] text-white px-12 py-4 text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all rounded-sm shadow-lg">
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
