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
          <a href="https://api.whatsapp.com/send?phone=5511930474470&text=Ola%20Lucas%20%0ATudo%20bem?%0AQueria%20fazer%20o%20teste%20do%20TurboX%20%0Acomo%20fa%C3%A7o?"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
              <Play size={20} />
              TESTE GRÁTIS 3H
            </button>
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://appsturbox.winytvbr.com/control/actions/aplicativos/030624123556.apk" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                APP 1
              </button>
            </a>

            <a href="https://appsturbox.winytvbr.com/control/actions/aplicativos/030624011448.apk" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                APP 2
              </button>
            </a>

            <a href="https://appsturbox.winytvbr.com/control/actions/aplicativos/030624124124.apk" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                APP 3
              </button>
            </a>

            <a href="https://iptv-smarters-pro.br.uptodown.com/windows" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                PC
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;