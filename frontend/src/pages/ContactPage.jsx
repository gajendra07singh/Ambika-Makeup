import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Plus,
  Minus,
  MessageSquare,
  Star,
  CheckCircle2,
  Send,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

// Asset imports for Instagram Feed
import gallery1 from '../assets/gallery1.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import download from '../assets/download.jpg';
import download1 from '../assets/download (1).jpg';
import download2 from '../assets/download (2).jpg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0 md:last:border-b">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-serif text-luxury-black group-hover:text-gold transition-colors pr-4">{question}</span>
        <div className="text-gray-400 group-hover:text-gold transition-colors shrink-0">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bridal Makeup',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for booking! We have received your request and an email notification has been sent.");
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Bridal Makeup',
          date: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to book appointment: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error connecting to server. Please make sure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Bridal Makeup", "Pre-Bridal Package", "Engagement Makeup",
    "Party Makeup", "Celebrity Makeup", "Photoshoot Makeup",
    "Hair Styling", "Beauty Services", "Makeup Training", "Other"
  ];

  const features = [
    "Professional Makeup Artists", "Bridal Makeup Specialists",
    "Celebrity Makeup Experience", "TV & Media Appearance Expertise",
    "Featured In News & Media", "Premium International Products",
    "Personalized Consultation", "Hygienic Luxury Environment",
    "Latest Beauty Trends", "Exceptional Client Experience"
  ];

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by filling out our online form, calling us directly, or sending a message on WhatsApp. We recommend booking at least 1-2 weeks in advance for regular services."
    },
    {
      question: "Do I need to book bridal makeup in advance?",
      answer: "Yes, bridal bookings often fill up 6-12 months in advance. We recommend reaching out as soon as your wedding date is fixed to ensure availability."
    },
    {
      question: "Do you offer home service?",
      answer: "Yes, we offer premium door-step beauty services and on-location bridal/event makeup for your convenience."
    },
    {
      question: "Do you provide destination wedding makeup?",
      answer: "Absolutely! Our team is available for destination weddings both across India and internationally. Travel and accommodation charges apply."
    },
    {
      question: "Which makeup products do you use?",
      answer: "We use only premium, international brands such as MAC, Huda Beauty, Estée Lauder, Dior, NARS, and Charlotte Tilbury to ensure a flawless and long-lasting finish."
    },
    {
      question: "Do you offer makeup training courses?",
      answer: "Yes, we offer professional makeup artistry courses ranging from basic to advanced levels, including bridal specialization."
    },
    {
      question: "How can I get pricing information?",
      answer: "Please contact us with your specific requirements (date, location, number of people) for a customized quote. Our bridal packages are tailored to your needs."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* SECTION 1 – HERO CONTACT SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
            alt="Luxury Beauty Studio"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 animate-fade-up">Ambika Beauty Studio</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 animate-fade-up [animation-delay:200ms]">Let's Create Your <br /><span className="text-gold italic">Perfect Look</span></h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg mb-10 font-light leading-relaxed animate-fade-up [animation-delay:400ms]">
            Whether you're planning your wedding, engagement, party, photoshoot, celebrity appearance, or beauty consultation, we're here to help you look and feel your absolute best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up [animation-delay:600ms]">
            <a href="#booking" className="gold-btn min-w-[200px] flex items-center justify-center gap-2">
              Book Appointment <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919528147783"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-semibold hover:bg-white/20 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> WhatsApp Now
            </a>
          </div>
        </div>

        {/* Floating Beauty Elements (SVG Blobs) */}
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-gold/10 blur-3xl rounded-full animate-pulse [animation-delay:1s]"></div>
      </section>

      {/* SECTION 2 – CONTACT INFORMATION */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-4">We'd Love To Hear From You</h2>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Contact us for appointments, consultations, bridal bookings, beauty services, makeup training, or any inquiries. Our team is here to provide you with the ultimate luxury experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Phone size={20} />, title: "Call Us", detail: "+91 95281 47783", sub: "Daily 10AM - 8PM", link: "tel:+919528147783" },
              { icon: <Mail size={20} />, title: "Email Us", detail: "ambika...studio@gmail.com", sub: "Inquiries", link: "mailto:ambikamakeupstudio@gmail.com" },
              { icon: <MapPin size={20} />, title: "Studio Address", detail: "Mathura, UP", sub: "India - 281001", link: "#map" },
              { icon: <Clock size={20} />, title: "Working Hours", detail: "Mon – Sun", sub: "10:00 AM – 8:00 PM", link: null }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`bg-white p-6 rounded-sm card-shadow group transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gold/20 ${!item.link ? 'pointer-events-none' : ''}`}
              >
                <div className="w-12 h-12 bg-soft-beige flex items-center justify-center rounded-full text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-luxury-black mb-2">{item.title}</h3>
                <p className="text-gray-900 font-medium mb-1 text-sm truncate">{item.detail}</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">{item.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – QUICK CONTACT FORM */}
      <section id="booking" className="py-8 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Reservation</span>
              <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-3 leading-tight">Book Your <br /><span className="italic">Luxury Appointment</span></h2>
              <p className="text-gray-600 mb-5 font-light leading-relaxed text-sm">
                Take the first step towards your stunning transformation. Fill out the form below, and our luxury consultants will contact you to finalize your appointment details.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-soft-beige flex items-center justify-center text-gold">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 text-sm">Personalized Consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-soft-beige flex items-center justify-center text-gold">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 text-sm">Premium Product Selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-soft-beige flex items-center justify-center text-gold">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 text-sm">Expert Artistry Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-6 md:p-7 card-shadow border border-gray-100 rounded-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Service Required</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm appearance-none cursor-pointer"
                        >
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
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
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Event Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 block">Your Message</label>
                    <textarea
                      rows="2"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-[#F9F9F9] border-b border-transparent py-2.5 px-4 focus:outline-none focus:border-gold transition-colors text-gray-800 text-sm resize-none placeholder:text-gray-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#D4AF37] hover:bg-[#B38F4D]'} text-white py-3 flex items-center justify-center gap-3 shadow-lg shadow-gold/20 text-[11px] uppercase tracking-[0.2em] font-bold transition-all rounded-sm`}
                  >
                    {isSubmitting ? 'Processing...' : 'Book Consultation'} <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="h-px bg-gray-100 w-full"></div>
      </div>

      {/* SECTION 5 – GOOGLE MAP SECTION */}
      <section id="map" className="py-16 bg-soft-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-luxury-black mb-2">Visit Our Studio</h2>
            <p className="text-gray-500 font-light text-sm">Experience luxury and beauty at our premier location.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-3/4 h-[400px] rounded-sm overflow-hidden shadow-xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113575.0223706059!2d77.6067098418659!3d27.481005517208885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711750000001%3A0x139ad46914560a67!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718612345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ambika Beauty Studio Location"
              ></iframe>
            </div>

            <div className="lg:w-1/4 space-y-6">
              <div className="bg-soft-beige p-8 rounded-sm h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-luxury-black mb-6">Location Details</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin size={20} className="text-gold shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold text-luxury-black uppercase tracking-wider mb-1">Address</p>
                        <p className="text-gray-600 text-sm leading-relaxed">Mathura, Uttar Pradesh, India - 281001</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 size={20} className="text-gold shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold text-luxury-black uppercase tracking-wider mb-1">Landmarks</p>
                        <p className="text-gray-600 text-sm">Near Central Business District</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 size={20} className="text-gold shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold text-luxury-black uppercase tracking-wider mb-1">Parking</p>
                        <p className="text-gray-600 text-sm">Free Dedicated Parking Available</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 size={20} className="text-gold shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-bold text-luxury-black uppercase tracking-wider mb-1">Accessibility</p>
                        <p className="text-gray-600 text-sm">Elevator Access Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – WHY CLIENTS LOVE US */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black">Why Choose Ambika Beauty Studio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-5 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 flex flex-col items-center group rounded-sm">
                <div className="w-10 h-10 rounded-full bg-soft-beige flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="text-[13px] font-serif font-bold text-luxury-black tracking-wide leading-tight">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – SOCIAL MEDIA CONNECT */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">Community</span>
              <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6 leading-tight">Stay Connected With <br /><span className="italic">Our Beauty Journey</span></h2>
              <p className="text-gray-600 text-base mb-8 font-light leading-relaxed">
                Follow us for the latest transformations, celebrity work, bridal makeovers, beauty tips, and exclusive event highlights. Be a part of our growing community of beauty enthusiasts.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/ambika_beautystudio" className="gold-btn py-3 px-8">Follow Us</a>
                <a href="/portfolio" className="outline-btn py-3 px-8">View Portfolio</a>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3">
              {[
                { icon: <Instagram size={28} />, name: "Instagram", handle: "@ambika_studio", color: "hover:text-pink-600", link: "https://instagram.com/ambika_beautystudio" },
                { icon: <Facebook size={28} />, name: "Facebook", handle: "Ambika Studio", color: "hover:text-blue-600", link: "#" },
                { icon: <MessageSquare size={28} />, name: "WhatsApp", handle: "+91 95281 47783", color: "hover:text-green-500", link: "https://wa.me/919528147783" },
                { icon: <Star size={28} />, name: "Google", handle: "5.0 ★ Rating", color: "hover:text-yellow-500", link: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className={`bg-soft-beige/30 p-6 flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-white hover:card-shadow border border-transparent hover:border-gold/10 rounded-sm`}
                >
                  <div className={`text-gray-400 mb-3 transition-colors duration-300 ${social.color}`}>
                    {social.icon}
                  </div>
                  <h4 className="text-luxury-black font-bold text-[11px] uppercase tracking-widest mb-1">{social.name}</h4>
                  <p className="text-gray-500 text-[10px]">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – FAQ SECTION */}
      <section className="py-16 bg-[#FDF9F3]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold uppercase tracking-[0.4em] text-[11px] font-black mb-3 block">QUESTIONS</span>
              <h2 className="text-[32px] md:text-[48px] font-serif text-luxury-black">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – INSTAGRAM FEED */}
      <section className="py-4 bg-soft-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-2">
            <div>
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-black mb-1 block">Visual Diary</span>
              <h2 className="text-xl md:text-2xl font-serif text-luxury-black">Follow Our Latest Work</h2>
            </div>
            <a
              href="https://instagram.com/ambika_beautystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold uppercase tracking-[0.2em] text-[9px] flex items-center gap-1.5 hover:gap-3 transition-all mb-1"
            >
              @ambika_beautystudio <ArrowRight size={12} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[gallery1, gallery3, gallery4, download, download1, download2].map((img, index) => (
              <a
                key={index}
                href="https://www.instagram.com/ambika_beautystudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative group overflow-hidden bg-gray-100 rounded-sm block shadow-sm border border-gray-100"
              >
                <img
                  src={img}
                  alt="Portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={16} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-[9px] mb-4 max-w-2xl mx-auto uppercase tracking-[0.2em] font-medium">
              Bridal Transformations • Celebrity Makeup • News Features • TV Appearances
            </p>
            <a href="https://instagram.com/ambika_beautystudio" className="bg-gold text-white px-8 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-gold-dark transition-all rounded-sm shadow-md">View Full Gallery</a>
          </div>
        </div>
      </section>

      {/* SECTION 11 – FINAL CALL TO ACTION */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80"
            alt="Call to Action"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black to-transparent opacity-95"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">Ready For Your <br /><span className="text-gold italic">Transformation?</span></h2>
            <p className="text-gray-400 text-sm mb-8 font-light leading-relaxed max-w-xl">
              Book your appointment today and experience beauty, elegance, and confidence like never before. Your journey to perfection begins here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#booking" className="bg-gold text-white px-6 py-2.5 rounded-sm uppercase tracking-widest text-[10px] font-bold hover:bg-gold-dark transition-all flex items-center gap-2">
                Book Appointment <ArrowRight size={14} />
              </a>
              <a href="tel:+919528147783" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-sm uppercase tracking-widest text-[10px] font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Phone size={14} /> Call Now
              </a>
              <a
                href="https://wa.me/919528147783"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-6 py-2.5 rounded-sm uppercase tracking-widest text-[10px] font-bold hover:bg-[#25D366]/30 transition-all flex items-center gap-2"
              >
                <MessageSquare size={14} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
