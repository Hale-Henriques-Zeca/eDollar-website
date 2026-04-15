import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Anchor, 
  RefreshCcw, 
  Database, 
  Layers, 
  ArrowDownUp, 
  Activity,
  Lock
} from 'lucide-react';

/**
 * Componente: Stability Mechanism Dashboard
 * Ilustra visualmente por que a E-USD é estável comparada a criptos normais.
 * Foco: Imutabilidade, Reservas e Liquidez.
 */

const StabilityMechanism = () => {
  return (
    <section className="mt-12 space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-2 px-2">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
          <Activity size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Mecanismo de Estabilidade do preco da eDollar</h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Protocolo de Estabilidade Institucional</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ILUSTRAÇÃO: O PILAR DE IMUTABILIDADE */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Anchor size={120} className="text-blue-900" />
          </div>

          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Lock className="text-blue-600" size={20} />
            Invariante de Fornecimento
          </h3>

          <div className="relative h-64 flex items-end justify-around gap-4 pb-8 border-b border-slate-100">
            {/* Cripto Normal (Volátil) */}
            <div className="flex flex-col items-center gap-2">
              <motion.div 
                animate={{ height: [100, 180, 80, 150] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-12 bg-slate-200 rounded-t-lg relative"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase">BTC/ETH</div>
              </motion.div>
              <span className="text-[10px] font-mono text-slate-400">Volátil</span>
            </div>

            {/* eDollar (Estável) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-[160px] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl relative shadow-[0_-10px_20px_rgba(37,99,235,0.2)]">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 uppercase whitespace-nowrap">eDollar (E-USD)</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2 text-center">
                  <ShieldCheck size={32} className="mb-2" />
                  <span className="text-[10px] font-black leading-tight">SUPPLY IMUTÁVEL & FIXO</span>
                </div>
                {/* Linha de Estabilidade */}
                <motion.div 
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 left-0 w-full h-[2px] bg-yellow-400 shadow-[0_0_10px_#facc15]"
                />
              </div>
              <span className="text-[10px] font-mono text-blue-600 font-bold tracking-tighter uppercase"> Anchor Fixado</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Mecanismo de Queima/Emissão</span>
              <span className="font-mono text-red-500 font-bold uppercase">Desativado</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-blue-600" />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              Diferente de stablecoins algorítmicas, a eDollar (E-USD) não "imprime" dinheiro para manter o preço. O fornecimento é 100% fixo desde o primeiro dia.
            </p>
          </div>
        </div>

        {/* MONITORIZAÇÃO DE INFRAESTRUTURA EXTERNA */}
        <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)]" />
          
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 relative z-10">
            <Database className="text-blue-400" size={20} />
            Ancoragem de Valor (Ativos externos)
          </h3>

          <div className="space-y-6 relative z-10">
            {/* Ativo 1: Reservas */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-blue-400">
                <span>Reserva Colateral</span>
                <span>Auditada</span>
              </div>
              <div className="group bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <Layers size={20} />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" 
                    />
                  </div>
                </div>
                <span className="text-sm font-bold">100%</span>
              </div>
            </div>

            {/* Ativo 2: Liquidez */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-pink-400">
                <span>Liquidez de Mercado</span>
                <span>Profundidade ativa</span>
              </div>
              <div className="group bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400">
                  <ArrowDownUp size={20} />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-400" 
                    />
                  </div>
                </div>
                <span className="text-sm font-bold">85%</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                <RefreshCcw className="text-blue-400 shrink-0 animate-spin-slow" size={16} />
                <p className="text-[10px] text-blue-200 leading-normal uppercase tracking-wider font-mono">
                  A estabilidade é mantida através de arbitragem institucional e vaults de tesouraria que compram/vendem no mercado aberto para manter o Pinos do Preço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StabilityMechanism;