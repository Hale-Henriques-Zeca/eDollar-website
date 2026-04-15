"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Database,
  ArrowRight,
  Activity,
  Layers,
  DollarSign,
} from "lucide-react";

const Node = ({ title, icon: Icon, color }: any) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div
      className={`
        w-16 h-16 rounded-2xl flex items-center justify-center
        bg-white/5 border border-white/10
        backdrop-blur-xl
        shadow-md
      `}
    >
      <Icon className={`${color}`} size={24} />
    </div>
    <span className="text-xs text-white/60 font-mono">{title}</span>
  </div>
);

const Line = () => (
  <div className="flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-pink-500"
    />
  </div>
);

const StabilityEnginePanel = () => {
  return (
    <div className="mt-20 px-4 flex justify-center">
      <div className="w-full max-w-6xl relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] p-10">

        {/* 🔵 Glow fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.2),transparent_60%)]" />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] text-white/40 font-mono uppercase">
              Monitor do motor de estabilidade da eDollar
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Sistema de Estabilidade de Pinos do Preço
            </h2>
          </div>

          {/* FLOW */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6">

            <Node title="Cofre do Tesouro" icon={Database} color="text-blue-400" />
            <Line />

            <Node title="Psinas de Liquidez" icon={Layers} color="text-purple-400" />
            <Line />

            <Node title="Operações do mercado" icon={Activity} color="text-pink-400" />
            <Line />

            <Node title="Estabilidade do preço" icon={Shield} color="text-green-400" />
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

            {/* PEG */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <p className="text-xs text-white/40 mb-2 uppercase"> Valor de Pinos do Preço</p>
              <motion.h3
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold text-green-400"
              >
                $1.00
              </motion.h3>
            </div>

            {/* RESERVES */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <p className="text-xs text-white/40 mb-2 uppercase">Reservas</p>
              <h3 className="text-2xl font-bold text-blue-400">$2.4M</h3>
            </div>

            {/* ARBITRAGE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <p className="text-xs text-white/40 mb-2 uppercase">Status de Arbitragem</p>
              <h3 className="text-2xl font-bold text-pink-400">Ativa</h3>
            </div>
          </div>

          {/* EXPLICAÇÃO VISUAL */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-white/50 text-sm leading-relaxed">
             A estabilidade é mantida por meio de infraestrutura econômica externa, incluindo reservas de tesouraria, fornecimento de liquidez e operações ativas de mercado — e não por mecanismos de tokens on-chain.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StabilityEnginePanel;