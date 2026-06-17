import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: "LAKME ACADEMY", type: "Certified" },
    { name: "AIR BLACK", type: "Certified" },
    { name: "AMU CERTIFIED", type: "Certified" },
    { name: "TIRLOKI PRASHAD", type: "Certified" }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-bold">PROFESSIONAL JOURNEY</span>
            </div>

            <h2 className="text-[42px] md:text-[56px] font-serif text-[#0A1128] leading-[1.1] mb-8">
              Recognized & <br />
              <span className="text-gold italic text-[48px] md:text-[64px]">Certified Expertise</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              My commitment to excellence is backed by professional certifications from industry-leading institutions. These credentials reflect the rigorous training and global standards I bring to every transformation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-[#0A1128] font-bold text-sm uppercase tracking-wider mb-1">Global Standards</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Training from world-class beauty institutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-[#0A1128] font-bold text-sm uppercase tracking-wider mb-1">Expert Skills</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Advanced techniques in makeup & skincare.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background Accent */}
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl -rotate-2"></div>

            <div className="relative bg-[#0A1128] p-8 md:p-12 rounded-2xl shadow-2xl border border-gold/20">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-white font-serif text-2xl uppercase tracking-[0.2em]">Our Credentials</h3>
                <Award className="text-gold opacity-50" size={32} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex flex-col p-5 bg-white/5 rounded-xl border border-white/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-colors duration-500">
                        <Award size={14} className="text-gold group-hover:text-[#0A1128]" />
                      </div>
                      <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-bold">Verified</span>
                    </div>
                    <span className="text-white text-[13px] font-black uppercase tracking-wider leading-tight">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 opacity-5 pointer-events-none">
                <Award size={200} className="text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
