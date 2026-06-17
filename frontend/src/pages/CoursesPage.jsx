import React from 'react';
import { BookOpen, Award, Users, Star, CheckCircle2, Calendar } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-4 block">Ambika Academy</span>
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-serif text-white uppercase tracking-tight mb-6 leading-[1]">Professional <br /> <span className="text-gold italic">Academy Courses</span></h1>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-[40px] md:text-[56px] font-serif text-gray-800 leading-[1.1] mb-8">
            Empowering <span className="text-gold">Future Artists</span>
          </h2>
          <p className="text-gray-600 font-light text-[22px] leading-relaxed mb-12 italic border-l-2 border-gold/20 pl-8">
            Join <span className="text-[#111111] font-bold">Ambika Saraswat's</span> exclusive masterclasses and <span className="text-gold font-bold">professional certification</span> courses. Whether you are a beginner looking to start your career or a professional wanting to upgrade your skills, our academy provides <span className="text-[#111111] font-bold">hands-on training</span> with the latest industry techniques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fcfaf7] rounded-full flex items-center justify-center text-gold mb-4 border border-gold/10">
                    <Award size={32} strokeWidth={1} />
                </div>
                <h4 className="font-serif font-bold uppercase tracking-widest text-sm">Certified</h4>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fcfaf7] rounded-full flex items-center justify-center text-gold mb-4 border border-gold/10">
                    <Users size={32} strokeWidth={1} />
                </div>
                <h4 className="font-serif font-bold uppercase tracking-widest text-sm">Hands-on</h4>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fcfaf7] rounded-full flex items-center justify-center text-gold mb-4 border border-gold/10">
                    <Star size={32} strokeWidth={1} />
                </div>
                <h4 className="font-serif font-bold uppercase tracking-widest text-sm">Premium Tools</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 bg-[#fcfaf7]">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Professional Bridal Makeup Masterclass",
                duration: "30 Days",
                level: "Advanced",
                desc: "Complete A-Z of bridal transformations, traditional and modern looks, saree draping, and business of bridal makeup.",
                price: "Contact for Pricing"
              },
              {
                title: "Self Makeup Workshop",
                duration: "3 Days",
                level: "Beginner",
                desc: "Learn how to enhance your own beauty. Day looks, party glamour, and skincare routine tailored to your face.",
                price: "Best Value"
              },
              {
                title: "Hairstyling Specialization",
                duration: "15 Days",
                level: "Intermediate",
                desc: "From basic braids to complex bridal buns and floral styling. All about creative and trendy hair designs.",
                price: "Limited Seats"
              }
            ].map((course, i) => (
              <div key={i} className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gold/10 text-gold text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-gold/20">{course.level}</span>
                    <span className="flex items-center gap-2 text-gray-400 text-[11px] font-black uppercase tracking-widest"><Calendar size={16} /> {course.duration}</span>
                  </div>
                  <h3 className="text-[28px] md:text-[34px] font-serif font-black text-gray-800 mb-4 leading-tight group-hover:text-gold transition-colors">{course.title}</h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed mb-8 italic">{course.desc}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {['Certification', 'Live Demo', 'Practice Session', 'Product Guide'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[12px] uppercase tracking-widest font-black text-gray-900">
                        <CheckCircle2 size={16} className="text-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-auto text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-10 shrink-0">
                  <p className="text-gold font-serif text-lg mb-6">{course.price}</p>
                  <a href="/contact" className="block w-full md:w-auto bg-[#1a1a1a] text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-black transition-all rounded-sm">
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
