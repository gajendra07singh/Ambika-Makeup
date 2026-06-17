import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bridal Makeup',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to Database and Trigger Email
    try {
      await fetch('https://backend-u9y0.onrender.com/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          date: formData.date,
          message: formData.message
        }),
      });

      setIsSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Bridal Makeup',
          date: '',
          message: ''
        });
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="pt-2 pb-8 bg-[#fdf9f3] flex justify-center items-center border-b border-gray-100">
      {/* Outer wrapper to make it feel like a distinct component */}
      <div className="max-w-[1200px] w-full mx-auto px-6 py-6 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Info (30% width) */}
          <div className="lg:w-[35%] flex flex-col items-start pl-4">
            <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-black mb-2 block">Get In Touch</span>
            <h2 className="text-[42px] lg:text-[52px] font-serif text-[#1F2940] mb-4 leading-[1.1] font-bold">
              Book Your <br /> <span className="text-gold italic">Appointment</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone size={16} className="text-gold group-hover:text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 text-[15px] font-black tracking-wide">+91 95281 47783</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Mail size={16} className="text-gold group-hover:text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 text-[15px] font-black tracking-wide">ambikamakeupstudio@gmail.com</span>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300 shrink-0">
                  <MapPin size={16} className="text-gold group-hover:text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-900 text-[15px] font-black tracking-wide leading-relaxed">Mathura, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Center: Form (42% width) */}
          <div className="lg:w-[42%]">
            {isSubmitted ? (
              <div className="bg-white border border-gray-100 p-8 rounded-sm text-center animate-in fade-in zoom-in duration-500 shadow-sm max-w-[320px] mx-auto">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-2 italic">Thank You!</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">Your message has been received.<br />We will connect with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 text-gray-900 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 text-gray-900 rounded-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 text-gray-900 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Service Required</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] text-gray-900 focus:outline-none focus:border-gold transition-colors appearance-none rounded-sm cursor-pointer"
                      >
                        <option>Bridal Makeup</option>
                        <option>Engagement Makeup</option>
                        <option>Party Makeup</option>
                        <option>HD Makeup</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] focus:outline-none focus:border-gold transition-colors text-gray-900 rounded-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-[#F9F9F9] border-b border-transparent p-2.5 text-[13px] focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 text-gray-900 rounded-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-1">
                  <button type="submit" className="w-full bg-[#D4AF37] text-white py-3 px-6 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#B38F4D] transition-all rounded-sm shadow-sm flex items-center justify-center gap-3">
                    Book Consultation <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Image (30% width) */}
          <div className="lg:w-[30%] relative h-[320px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 w-24"></div>
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000"
              alt="Makeup Palette"
              className="w-full h-full object-cover rounded-sm grayscale-[0.2] contrast-[1.1]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
