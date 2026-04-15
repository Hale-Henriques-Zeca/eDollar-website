"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, ArrowRight } from "lucide-react";

const DashboardCard = () => {
  return (
    <div className="mt-16 flex justify-center px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="
          w-full max-w-[400px]
          relative overflow-hidden
          rounded-[32px]
          border border-white/20
          backdrop-blur-2xl
          bg-gradient-to-br from-green-400/20 via-white/10 to-blue-500/10
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          transition-all duration-500
        "
      >

        {/* 🌊 Glow Azul */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* 🌸 Glow Pink */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10 p-8 text-center">

          {/* 🔵 STATUS */}
          <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/60 mb-4">
           STATUS DO SISTEMA: VERIFICADO
          </p>

          {/* 🟡 LOGO + TITLE */}
          <div className="flex flex-col items-center gap-4 mb-6">

            {/* LOGO */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="relative w-75 h-75 rounded-full overflow-hidden border-2 border-white/30 shadow-md"
            >
              <img
                src="/eusd.jpg"
                alt="eDollar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent group-hover:opacity-80 transition">
              eDollar
            </span>
              <span className="bg-gradient-to-r from-blue-400 via-white to-pink-500 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
          </div>

          {/* 🟣 BOTÃO */}
          <motion.a
            href="/eDollarDashboard"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full
              flex items-center justify-center gap-3
              py-5
              rounded-2xl
              font-bold uppercase tracking-widest
              text-white
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              shadow-lg shadow-pink-500/20
              transition-all duration-300
            "
          >
            Acessar o Painel
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* 📡 FOOTER */}
          <p className="mt-5 text-[10px] text-white/50 font-mono uppercase tracking-wider">
            Monitoramento institucional em tempo real
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardCard;