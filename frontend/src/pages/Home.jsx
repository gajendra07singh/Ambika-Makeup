import Hero from '../components/Hero'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import InstagramFeed from '../components/InstagramFeed'
import Contact from '../components/Contact'

const Home = ({ onBookClick }) => {
  return (
    <main className="bg-white relative">
      <Hero onBookClick={onBookClick} />
      <About onBookClick={onBookClick} />
      <Certifications />
      <Services onBookClick={onBookClick} />
      <WhyChooseUs onBookClick={onBookClick} />
      <Testimonials />
      <Gallery />
      <InstagramFeed />
      <Contact />
    </main>
  )
}

export default Home
