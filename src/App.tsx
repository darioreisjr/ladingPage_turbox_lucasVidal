import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Plans />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ParallaxProvider>
  );
}

export default App;