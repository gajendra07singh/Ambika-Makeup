import React from 'react';
import { Award, ShieldCheck, UserCheck, Home } from 'lucide-react';

const features = [
  {
    title: 'Certified Artists',
    description: 'Trained & <b>certified</b> makeup professionals.',
    icon: <Award className="text-gold" size={36} strokeWidth={1} />
  },
  {
    title: 'Premium Products',
    description: 'We use only <b>high-end</b> skin-safe products.',
    icon: <ShieldCheck className="text-gold" size={36} strokeWidth={1} />
  },
  {
    title: 'Personalized Looks',
    description: '<b>Customized</b> looks that suit your personality.',
    icon: <UserCheck className="text-gold" size={36} strokeWidth={1} />
  },
  {
    title: 'Home Service',
    description: 'We offer <b>home service</b> for your convenience.',
    icon: <Home className="text-gold" size={36} strokeWidth={1} />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="pt-0 pb-8 bg-[#f6f8fb] border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-black mb-4 block">Why Choose Us</span>
          <h2 className="text-[40px] md:text-[56px] font-serif text-gray-800 leading-[1.1]">
            Excellence In <span className="text-gold italic">Every Detail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-10 border border-gray-100 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-500 group rounded-sm">
              <div className="mb-6 group-hover:scale-125 transition-transform duration-500">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-black text-gray-900 mb-4 tracking-wide group-hover:text-gold transition-colors">{feature.title}</h4>
              <p
                className="text-[15px] text-gray-700 font-normal leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
