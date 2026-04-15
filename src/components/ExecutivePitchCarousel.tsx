import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente: ExecutivePitchCarousel
 * Estilo inspirado no Shiba Inu, com rotação contínua e interatividade total.
 */
export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  // Slides baseados no conteúdo do Whitepaper e imagens fornecidas
  const slides = [
    {
      id: 1,
      title: "Visão Institucional",
      desc: "A primeira stablecoin BEP-20 com supply fixo de 1 quatrilhão para liquidações globais.",
      tag: "ESTRATÉGIA",
      img: "https://ecoin.edenkingdom.org/logo.jpg" // Substitua pelo link das suas imagens locais se necessário
    },
    {
      id: 2,
      title: "Imutabilidade Total",
      desc: "Sem owner, sem funções de mint/burn. O contrato é selado para máxima segurança.",
      tag: "TECNOLOGIA",
      img: "https://ecoin.edenkingdom.org/logo.jpg"
    },
    {
      id: 3,
      title: "Paridade 2026",
      desc: "Data de paridade oficial definida para 15 de Abril de 2026. Roadmap concluído.",
      tag: "ROADMAP",
      img: "https://ecoin.edenkingdom.org/logo.jpg"
    },
    {
      id: 4,
      title: "Savings & Rewards",
      desc: "Ganhe recompensas em USDT e eDollar através do nosso sistema de staking exclusivo.",
      tag: "ECOSSISTEMA",
      img: "https://ecoin.edenkingdom.org/logo.jpg"
    }
  ];

  // Lógica de Autoplay (Rotação Infinita)
  useEffect(() => {
    let interval;
    if (!isPaused && !isDragging) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          if (carouselRef.current.scrollLeft >= maxScroll) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: 2, behavior: 'auto' });
          }
        }
      }, 30); // Velocidade do scroll
    }
    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // Handlers para Arrastar (Mouse/Touch)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do arraste
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Suporte para Touch (Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  return (
    <div className="w-full bg-[#001220] py-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-pink-500 font-black text-xs uppercase tracking-[0.4em] mb-2">Pitch Apresentação</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">eDollar Executive Pitch</h1>
        </div>
        <div className="hidden md:flex gap-2">
           <div className="w-12 h-1 bg-pink-600 rounded-full"></div>
           <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
           <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Container do Carrossel */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing px-6 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={(e) => {
          if (!isDragging) return;
          const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          carouselRef.current.scrollLeft = scrollLeft - walk;
        }}
      >
        {/* Duplicamos os slides para criar o efeito infinito visual */}
        {[...slides, ...slides].map((slide, index) => (
          <div 
            key={`${slide.id}-${index}`}
            className="min-w-[320px] md:min-w-[450px] bg-gradient-to-br from-blue-900/40 to-[#001220] border border-blue-800/50 rounded-[3rem] p-8 relative group transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10"
          >
            <div className="absolute top-6 right-8">
              <span className="text-[10px] font-black bg-pink-600/20 text-pink-500 px-3 py-1 rounded-full border border-pink-500/20">
                {slide.tag}
              </span>
            </div>
            
            <div className="w-full h-48 mb-8 rounded-[2rem] overflow-hidden border border-gray-800 bg-black">
               <img 
                src={slide.img} 
                alt={slide.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
               />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              {slide.title}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              {slide.desc}
            </p>

            <div className="flex items-center justify-between mt-auto">
               <button className="text-xs font-bold text-pink-500 uppercase tracking-widest flex items-center gap-2 group/btn">
                  Detalhes do Slide <span className="group-hover:translate-x-2 transition-transform">→</span>
               </button>
               <div className="text-[10px] text-gray-600 font-mono">
                  {String(slide.id).padStart(2, '0')} / 04
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] animate-pulse">
          Passe o mouse para ler • Arraste para navegar
        </p>
      </div>
    </div>
  );
}