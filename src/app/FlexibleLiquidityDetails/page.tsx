"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Banknote, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Building2, 
  Users, 
  Coins,
  CheckCircle2
} from 'lucide-react';

/**
 * Página: O Manifesto da Flexible Liquidity
 * Explicação detalhada do ecossistema Peer-to-Bank-to-Peer da eDollar.
 */

const FlexibleLiquidityManifesto = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <main className="min-h-screen bg-[#001220] text-white selection:bg-[#ff007f]/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#0077b6_0%,transparent_70%)] opacity-40" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Protocolo de Liquidez Global
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Flexible <br />
              <span className="bg-gradient-to-r from-[#ff007f] via-[#0077b6] to-[#22c55e] bg-clip-text text-transparent">
                Liquidity
              </span>
            </h1>
            <p className="text-xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed">
              O ecossistema que transforma moeda fiduciária local em reservas globais instantâneas, gerando rendimento real para quem sustenta a rede.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O QUE ESTÁS A CONSTRUIR (PALAVRAS SIMPLES) */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-[#ff007f] rounded-full" />
                O Nosso Plano: A Visão
              </h2>
              <div className="space-y-6 text-blue-100/70 text-lg leading-relaxed">
                <p>
                  Estamos a construir um ecossistema de liquidez <strong>peer-to-bank-to-peer</strong>. Uma "Cesta de Moedas Fiduciárias" (Fiat Basket) onde o dinheiro nunca precisa de sair fisicamente de um país para liquidar uma transação internacional.
                </p>
                <ul className="space-y-4">
                  {[
                    "Utilizadores tornam-se Provedores de Liquidez (LPs).",
                    "Rendimento de Poupança Passiva 24/7.",
                    "Localismo Global: Reservas locais para uso local.",
                    "Parceria Bancária Win-Win via API."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#22c55e] mt-1 shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-8 rounded-[40px] bg-gradient-to-br from-[#2d5a27]/20 to-transparent border border-[#2d5a27]/30"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff007f]/20 blur-3xl rounded-full" />
              <h3 className="text-[#22c55e] font-mono text-xs font-bold uppercase tracking-widest mb-6">🧠 Ideia Central</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <Users className="text-[#ff007f]" />
                  </div>
                  <p className="text-sm"><strong>Pessoas</strong> colocam dinheiro fiduciário (MZN, EUR, USD) e ele vira <strong>Liquidez Instantânea</strong>.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <Zap className="text-blue-400" />
                  </div>
                  <p className="text-sm">Outros utilizadores no mesmo país usam essa liquidez para transações rápidas.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-[#22c55e]" />
                  </div>
                  <p className="text-sm">Quem fornece a liquidez ganha <strong>rendimento automático</strong> através das taxas.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILARES DO SISTEMA */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-black mb-20 tracking-tight">Infraestrutura <span className="text-[#0077b6]">Institucional</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Local Liquidity */}
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[40px] bg-white/5 border border-white/10 relative group">
            <div className="w-16 h-16 bg-blue-600/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600/40 transition-colors">
              <Globe className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Liquidez Local</h3>
            <p className="text-blue-100/50 text-sm leading-relaxed mb-6">
              Cada país possui sua própria reserva de liquidez (Flexible Liquidity Pool). Isso garante que o dinheiro flua sem fricção entre fronteiras.
            </p>
            <div className="text-[10px] font-mono text-[#22c55e] uppercase font-black">Reserva Regional Ativa</div>
          </motion.div>

          {/* Card 2: Automatic Yield */}
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[40px] bg-white/5 border border-white/10 relative group">
            <div className="w-16 h-16 bg-green-600/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-green-600/40 transition-colors">
              <TrendingUp className="text-[#22c55e]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Rendimento Automático</h3>
            <p className="text-blue-100/50 text-sm leading-relaxed mb-6">
              Cada transação feita no país gera taxas que são distribuídas instantaneamente para os provedores de liquidez daquela região.
            </p>
            <div className="text-[10px] font-mono text-[#ff007f] uppercase font-black">Fees Distribution v2</div>
          </motion.div>

          {/* Card 3: Bank Integration */}
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[40px] bg-white/5 border border-white/10 relative group">
            <div className="w-16 h-16 bg-pink-600/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-pink-600/40 transition-colors">
              <Building2 className="text-[#ff007f]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bancos Parceiros</h3>
            <p className="text-blue-100/50 text-sm leading-relaxed mb-6">
              Os bancos ganham com depósitos, levantamentos e volume. Através de APIs, eles tornam-se o elo entre o fiat e o digital.
            </p>
            <div className="text-[10px] font-mono text-blue-400 uppercase font-black">API Win-Win Integration</div>
          </motion.div>
        </div>
      </section>

      {/* COMO FAZER PARTE */}
      <section className="py-24 px-6 bg-[#2d5a27]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 italic text-[#22c55e]">Como fazer parte da revolução?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Depósito", desc: "Coloque o seu dinheiro fiduciário na reserva local." },
              { step: "02", title: "Liquidez", desc: "O seu capital serve de suporte às transações do seu país." },
              { step: "03", title: "Rendimento", desc: "Receba lucros passivos direto na sua conta eDollar." }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-black/40 border border-white/5 text-left">
                <span className="text-[#ff007f] font-black text-2xl mb-4 block">{s.step}</span>
                <h4 className="font-bold mb-2 text-white">{s.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
         <Link href="/flexible-liquidity">
  <button className="mt-16 bg-[#ff007f] hover:bg-white hover:text-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest transition-all shadow-2xl">
    Iniciar Agora
  </button>
</Link>
        </div>
      </section>

      {/* FOOTER MANIFESTO */}
      <footer className="py-20 px-6 text-center border-t border-white/5">
        <ShieldCheck className="mx-auto text-[#22c55e] mb-6" size={40} />
        <h3 className="text-2xl font-bold mb-2 tracking-tight">Liquidity-as-a-Service Global</h3>
        <p className="text-slate-500 text-sm uppercase tracking-[0.4em] font-mono font-bold">EdenKingDom Ecosystem</p>
      </footer>
    </main>
  );
};

export default FlexibleLiquidityManifesto;