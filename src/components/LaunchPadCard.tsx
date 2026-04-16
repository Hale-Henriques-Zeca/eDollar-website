"use client";

import Link from "next/link";
import { Rocket, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function LaunchPadCard() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10">
      <Link href="/LaunchPad">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden group cursor-pointer rounded-[2.5rem]"
        >
          {/* 🔥 BACKGROUND BASE */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-[#001a2e] to-[#001220] backdrop-blur-xl border border-white/10 group-hover:border-[#00D1FF]/40 transition-all duration-500" />
          
          {/* 🌊 GRADIENT OVERLAY E-DOLLAR */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF007A]/20 via-[#00D1FF]/10 to-[#00FF85]/10 opacity-80" />

          {/* ✨ GLOWS DINÂMICOS */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF007A]/20 rounded-full blur-[120px] group-hover:bg-[#FF007A]/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00FF85]/20 rounded-full blur-[120px] group-hover:bg-[#00D1FF]/30 transition-all duration-700" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* 🧠 BLOCO ESQUERDO */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">

              {/* 🚀 ICON PREMIUM */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF007A] blur-2xl opacity-20 animate-pulse" />
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="relative p-6 bg-gradient-to-br from-[#FF007A] via-[#00D1FF] to-[#00FF85] rounded-[2rem] shadow-[0_0_40px_rgba(255,0,122,0.35)]"
                >
                  <Rocket size={42} className="text-white" />
                </motion.div>
              </div>

              {/* 🧾 TEXTO */}
              <div className="space-y-3">

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 bg-[#00FF85]/10 border border-[#00FF85]/20 rounded-full text-[10px] font-black text-[#00FF85] uppercase tracking-widest">
                    Alpha Access
                  </span>
                  <Sparkles size={14} className="text-[#FF007A] animate-pulse" />
                </div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                  <span className="text-white">eDollar </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#00FF85]">
                    LaunchPad
                  </span>
                </h2>

                <p className="text-white/60 text-sm md:text-lg max-w-md font-medium">
                  Acesso exclusivo ao sistema de lançamento, staking e oportunidades do ecossistema EdenKingDom.
                </p>

                {/* 🔥 BOTÃO INTEGRADO (da segunda card) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-2 mt-4
                    px-6 py-3 rounded-xl
                    text-sm font-bold uppercase tracking-widest
                    bg-gradient-to-r from-blue-500 via-pink-500 to-green-400
                    text-white
                    shadow-lg shadow-pink-500/20
                  "
                >
                  Acessar LaunchPad
                  <Rocket size={16} />
                </motion.div>

                {/* 🟢 STATUS */}
                <p className="text-[10px] text-green-400 font-mono uppercase tracking-wider mt-2">
                  Sistema ativo • Pronto para uso
                </p>

              </div>
            </div>

            {/* 👉 LADO DIREITO (CTA VISUAL) */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00D1FF] group-hover:bg-[#00D1FF]/10 transition-all">
                <ChevronRight size={32} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                Enter Platform
              </span>
            </div>

          </div>

          {/* ⚡ BARRA ANIMADA */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-[#FF007A] via-[#00D1FF] to-[#00FF85]"
            />
          </div>

        </motion.div>
      </Link>
    </div>
  );
}