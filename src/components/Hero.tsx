import { Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1635805737707-575885ab0820")'
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          A MELHOR LISTA<br />
          <span className="text-orange-500">CANAIS, FILMES E SÉRIES</span>
        </h1>
        <p className="text-xl mb-8">
          Quer assistir tudo o que quiser? A TURBOX tem a solução pra Você.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
            <Play size={20} />
            TESTE GRÁTIS 3H
          </button>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 'PC'].map((app) => (
              <button 
                key={app}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                APP {app}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;