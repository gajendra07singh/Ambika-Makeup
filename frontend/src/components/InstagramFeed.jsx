import React, { useRef, useState } from 'react';
import { Instagram, Play, Pause, Heart } from 'lucide-react';

const reels = [
  {
    id: 1,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-stylist-fixing-the-hair-of-a-client-in-a-salon-45124-large.mp4',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop',
    likes: '1.8K',
    caption: 'T nagar to France 🇫🇷 transformation beige gold 💛...',
    link: 'https://www.instagram.com/reels/C8j_Xz_y8o_/'
  },
  {
    id: 2,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-with-a-brush-45127-large.mp4',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop',
    likes: '2.5K',
    caption: 'Soft glam for our beautiful bride ✨',
    link: 'https://www.instagram.com/ambika_beautystudio/'
  },
  {
    id: 3,
    video: 'https://assets.mixkit.co/preview/videos/45123/45123-large.mp4',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
    likes: '1.2K',
    caption: 'Behind the scenes at the salon today! 💇‍♀️',
    link: 'https://www.instagram.com/ambika_beautystudio/'
  },
  {
    id: 4,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-applying-makeup-to-another-woman-45123-large.mp4',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop',
    likes: '3.1K',
    caption: 'Our signature bridal glow is here to stay 🌟',
    link: 'https://www.instagram.com/ambika_beautystudio/'
  },
  {
    id: 5,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-makeup-artist-applying-eyeshadow-on-a-client-45125-large.mp4',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    likes: '950',
    caption: 'The perfect hair day starts here. 🎀',
    link: 'https://www.instagram.com/ambika_beautystudio/'
  },
  {
    id: 6,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-beautician-applying-cream-on-the-face-of-a-woman-45129-large.mp4',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
    likes: '2.2K',
    caption: 'Skincare is self care. ✨',
    link: 'https://www.instagram.com/ambika_beautystudio/'
  }
];

const ReelCard = ({ reel }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/5] block max-w-[320px] mx-auto w-full bg-black">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.image}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loop
        playsInline
        muted={!isPlaying}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 flex flex-col justify-end p-8 text-white ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        {/* Instagram Icon Top Right */}
        <div className="absolute top-6 right-6">
          <Instagram size={24} strokeWidth={1.5} />
        </div>

        {/* Center Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause fill="white" size={28} />
            ) : (
              <Play fill="white" size={28} className="ml-1" />
            )}
          </button>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Heart size={20} fill="#eab308" className="text-[#eab308]" />
            <span className="font-bold text-lg">{reel.likes}</span>
          </div>
          <p className="text-sm font-medium mb-5 line-clamp-2 leading-relaxed tracking-wide">
            {reel.caption}
          </p>
          <a
            href={reel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#eab308] text-gray-900 font-bold rounded-2xl hover:bg-white transition-all duration-300 text-sm uppercase flex items-center justify-center tracking-widest shadow-lg cursor-pointer"
          >
            Watch Reel
          </a>
        </div>
      </div>
    </div>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-[#fafafa] border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Follow Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">Follow Us on Instagram</h2>
          <p className="text-gray-700 font-medium mb-8 max-w-2xl mx-auto">Behind the scenes, client transformations & luxury beauty moments.</p>

          <a
            href="https://www.instagram.com/ambika_beautystudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-white transition-all duration-300 group"
          >
            <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">@ambika_beautystudio</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
