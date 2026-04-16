"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Zap } from "lucide-react";

export default function FlexibleLiquidityCard() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <Link href="/FlexibleLiquidityDetails">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-[2.5rem] group cursor-pointer border border-white/10 bg-[#001220] shadow-2xl"
        >
          {/* 🔥 BACKGROUND GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-blue-900/40 to-pink-900/40" />

          {/* 🌌 RADIAL EFFECTS */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#ff007f33_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#22c55e22_0%,transparent_50%)]" />

          {/* 🫒 OLIVE BORDER FX */}
          <div className="absolute inset-0 border-[6px] border-[#2d5a27]/10 pointer-events-none rounded-[2.5rem]" />

          {/* 🌈 GLOW */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-400/20 blur-[120px]" />

          {/* CONTENT */}
          <div className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT SIDE */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">

              {/* ICON */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#0077b6] to-[#ff007f] rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-[#ff007f]/20 transition-all duration-500">
                <Globe className="text-white animate-pulse" size={36} />
              </div>

              {/* TEXT */}
              <div className="space-y-3 max-w-md">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-[10px] font-black text-[#22c55e] tracking-widest uppercase">
                    Live Yield
                  </span>
                  <span className="text-xl font-mono font-bold text-white">
                    14.2% <span className="text-xs text-slate-500">APY</span>
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                  Flexible <span className="text-[#ff007f]">Liquidity</span>
                </h2>

                <p className="text-blue-100/50 text-sm leading-relaxed">
                  Torne-se um provedor de liquidez instantânea no seu país. Receba taxas de transação e poupe em moeda local com rendimento institucional.
                </p>

                {/* INFO BAR */}
                <div className="flex items-center gap-3 p-3 bg-[#2d5a27]/20 rounded-2xl border border-[#2d5a27]/30 w-fit mx-auto md:mx-0">
                  <Zap size={16} className="text-[#22c55e]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Conectado a Bancos Globais
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CTA */}
            <div className="flex flex-col items-center gap-4">

              <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00D1FF] group-hover:bg-[#00D1FF]/10 transition-all">
                <ArrowRight size={28} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>

              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                Para Mais Detalhes
              </span>

            </div>

          </div>

          {/* 🔥 BOTTOM STRIP */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-[#ff007f] via-[#00D1FF] to-[#22c55e]"
            />
          </div>

          {/* Botão de Ação */}
          <a 
            href="/FlexibleLiquidity"
            className="w-full bg-white hover:bg-[#ff007f] text-black hover:text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 group/btn shadow-[0_15px_30px_rgba(0,0,0,0.4)] no-underline"
          >
            <span>Gerir Reservas</span>
            <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
          </a>

          {/* FOOTER */}
          <div className="relative z-10 px-10 pb-6 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff007f]" />
              <div className="w-2 h-2 rounded-full bg-[#0077b6]" />
              <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">
              Powered by EdenKingDom
            </span>
          </div>

        </motion.div>
      </Link>
    </div>
  );
}