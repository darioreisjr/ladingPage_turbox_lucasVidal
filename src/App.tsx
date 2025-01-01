import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Plans from './components/Plans.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

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