"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Wallet, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Banknote, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  PieChart,
  Building2
} from 'lucide-react';
import FlexibleRedirectCard from "@/components/FlexibleRedirectCard";
import Header from "@/components/Header";
 

const FlexibleLiquidity = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('Global');

  const currencies = [
    { code: 'Global', name: 'Todas as Regiões', flag: '🌍', yield: '8.4%', liquidity: '1.2B' },
    { code: 'MZN', name: 'Moçambique', flag: '🇲🇿', yield: '12.5%', liquidity: '45M' },
    { code: 'AOA', name: 'Angola', flag: '🇦🇴', yield: '14.2%', liquidity: '32M' },
    { code: 'EUR', name: 'Portugal/EU', flag: '🇪🇺', yield: '5.2%', liquidity: '450M' },
    { code: 'BRL', name: 'Brasil', flag: '🇧🇷', yield: '10.8%', liquidity: '180M' },
  ];

  return (
    <div className="min-h-screen bg-[#001220] text-white font-sans pb-20">
      <Header />
      {/* Header Estilo Institucional */}
      <header className="relative py-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0077b6_0%,transparent_70%)] opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <span className="text-[#22c55e] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-10 block">
                Liquidity Provider Protocol v2.0
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                Flexible <span className="text-[#ff007f]">Liquidity</span>
              </h1>
              <p className="text-blue-100/60 max-w-2xl text-lg">
                Forneça liquidez local ao ecossistema global eDollar. Transforme o seu capital fiduciário em reservas instantâneas e receba dividendos por cada transação no seu país.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Total Value Locked</p>
                <p className="text-2xl font-black text-[#22c55e]">$1,942,000,450.00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lado Esquerdo: Gestão de Depósito */}
        <section className="lg:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Wallet className="text-[#ff007f]" size={20} /> Fornecer Liquidez
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-bold uppercase mb-2 block">Selecionar Moeda Local</label>
                <div className="grid grid-cols-3 gap-2">
                  {currencies.slice(1).map(c => (
                    <button 
                      key={c.code}
                      onClick={() => setSelectedCurrency(c.code)}
                      className={`p-3 rounded-xl border text-sm font-bold transition-all ${selectedCurrency === c.code ? 'bg-[#22c55e] border-[#22c55e] text-black' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}
                    >
                      {c.flag} {c.code}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-bold uppercase mb-2 block">Montante para Reserva</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl text-2xl font-bold focus:border-[#ff007f] outline-none transition-all"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-slate-500">{selectedCurrency}</span>
                </div>
              </div>

              <div className="p-4 bg-[#2d5a27]/20 border border-[#2d5a27]/30 rounded-2xl">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 italic">Rendimento Estimado (APY)</span>
                  <span className="text-[#22c55e] font-black">~12.5%</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">As taxas são distribuídas em tempo real conforme o volume de transações regionais.</p>
              </div>

              <button className="w-full bg-[#ff007f] hover:bg-[#ff007f]/80 text-white font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(255,0,127,0.3)] transition-all uppercase tracking-widest">
                Ativar Reserva Instantânea
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2d5a27] to-[#001220] p-8 rounded-[32px] border border-white/10">
            <h4 className="font-bold flex items-center gap-2 mb-4 text-[#22c55e]">
              <ShieldCheck size={18} /> Proteção de Custódia
            </h4>
            <p className="text-xs text-blue-100/60 leading-relaxed">
              Os seus fundos fiduciários são mantidos em contas bancárias parceiras auditadas. A eDollar garante a paridade através do protocolo de colaterização cruzada.
            </p>
          </div>
        </section>

        {/* Centro e Direita: Mapa e Estatísticas */}
        <section className="lg:col-span-2 space-y-8">
          
          {/* Dashboard de Rendimento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px]">
              <div className="flex justify-between items-start mb-4">
                <TrendingUp className="text-[#22c55e]" />
                <span className="text-[10px] bg-[#22c55e]/10 text-[#22c55e] px-2 py-1 rounded">Ao Vivo</span>
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase">Meus Ganhos Totais</p>
              <h2 className="text-4xl font-black mt-2 text-white tracking-tighter">$12,450.82</h2>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] text-[#22c55e]">+2.4% hoje</span>
                <span className="text-[10px] text-slate-500">Próximo payout em 4h</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px]">
              <div className="flex justify-between items-start mb-4">
                <PieChart className="text-[#ff007f]" />
                <span className="text-[10px] bg-white/10 text-white px-2 py-1 rounded">Global Weight</span>
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase">Atividade da Reserva</p>
              <h2 className="text-4xl font-black mt-2 text-white tracking-tighter">482 <span className="text-lg text-slate-500">TXs/min</span></h2>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] text-blue-400">9 Bancos Parceiros Ativos</span>
              </div>
            </div>
          </div>

          {/* Lista de Regiões */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Globe size={20} className="text-blue-400" /> Cesta de Moedas Ativas
              </h3>
              <button className="text-xs font-bold text-blue-400 hover:text-white transition-colors">Ver Mapa de Liquidez</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-slate-500 uppercase font-bold tracking-widest border-b border-white/5">
                    <th className="px-8 py-4">Região / Moeda</th>
                    <th className="px-8 py-4">Rendimento Est.</th>
                    <th className="px-8 py-4">Liquidez Total</th>
                    <th className="px-8 py-4">Status Banco</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {currencies.slice(1).map((c) => (
                    <tr key={c.code} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{c.flag}</span>
                          <div>
                            <p className="font-bold text-sm">{c.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono">{c.code} Pool</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[#22c55e] font-black">{c.yield}</span>
                      </td>
                      <td className="px-8 py-6 text-sm font-mono text-slate-300">
                        ${c.liquidity}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-blue-400" />
                          <span className="text-[10px] font-bold text-slate-400 uppercase">API Connected</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 rounded-full hover:bg-[#ff007f] transition-all group-hover:scale-110">
                          <ChevronRight size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
 
      </main>
       <FlexibleRedirectCard /> 
    </div>
  );
};

export default FlexibleLiquidity;