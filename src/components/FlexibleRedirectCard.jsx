import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

/**
 * Card de Redirecionamento Premium para a página de Detalhes da Liquidez.
 */

const FlexibleRedirectCard = () => {
  return (
    <div className="flex justify-center p-8">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative w-full max-w-[480px] h-[580px] rounded-[50px] overflow-hidden bg-[#001220] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group"
      >
        {/* Camadas de Fundo Animadas */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/20 via-transparent to-[#22c55e]/10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff007f]/10 blur-[100px] rounded-full group-hover:bg-[#ff007f]/20 transition-all duration-700" />
        
        {/* Overlay de Vidro Texturizado */}
        <div className="absolute inset-4 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl z-10 p-10 flex flex-col justify-between">
          
          <div>
            <div className="flex justify-between items-center mb-10">
              <div className="px-4 py-1 rounded-full bg-[#2d5a27]/30 border border-[#22c55e]/30 text-[#22c55e] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Shield size={10} /> Institucional
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 p-2 flex items-center justify-center">
                <Globe className="text-blue-400 group-hover:rotate-180 transition-transform duration-1000" size={24} />
              </div>
            </div>

            <h2 className="text-4xl font-black text-white leading-none tracking-tighter mb-4">
              A Revolução da <br />
              <span className="text-[#ff007f]">Liquidez Flexível</span>
            </h2>
            
            <p className="text-blue-100/50 text-sm leading-relaxed mb-8">
              Descubra como transformar o seu capital em reservas instantâneas e lucrar com a economia global da eDollar.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#22c55e]/20 transition-colors">
                  <Zap size={14} className="text-[#22c55e]" />
                </div>
                <span className="text-xs font-bold text-white/80">Fiat Basket Global</span>
              </div>
              <div className="flex items-center gap-4 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-[#ff007f]/20 transition-colors">
                  <TrendingUp size={14} className="text-[#ff007f]" />
                </div>
                <span className="text-xs font-bold text-white/80">Rendimentos Instantâneos</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <a 
              href="/FlexibleLiquidityDetails"
              className="w-full bg-[#ff007f] hover:bg-white text-white hover:text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group/btn no-underline"
            >
              Ler Manifesto Completo
              <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </a>

            <div className="text-center">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em] font-bold">EdenKingDom v2.0</span>
            </div>
          </div>
        </div>

        {/* Efeito de brilho na borda inferior */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff007f] via-[#0077b6] to-[#22c55e] opacity-50 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </div>
  );
};

export default FlexibleRedirectCard;