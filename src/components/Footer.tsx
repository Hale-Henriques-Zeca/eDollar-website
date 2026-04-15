import React from "react";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Send, 
  Twitter, 
  MessageSquare, 
  Smartphone,
  MapPin,
  Mail,
  ShieldCheck,
  Globe
} from "lucide-react";

/**
 * Nota: Removidas as dependências 'next/link' e 'react-icons' para compatibilidade.
 * Utilizam-se SVGs inline ou Lucide-React para ícones e tags <a> para links.
 */

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-blue-900/30 pt-20 pb-10 overflow-hidden text-white">
      {/* FUNDO CINEMATOGRÁFICO E-DOLLAR */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#000814] to-black">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e40af33,transparent_60%)] opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#D4AF3711,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* EDOLLAR BRANDING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full border border-pink-500/50 flex items-center justify-center bg-pink-500/10">
               <span className="text-pink-500 text-[30px] font-black">e$</span>
            </div>
            <h2 className="font-black text-xl tracking-tighter">eDollar</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed italic">
            "A estabilidade do dólar com a transparência da blockchain. Integrado ao ecossistema EdenKingDom para liquidações globais imutáveis."
          </p>
          
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-[10px] text-blue-500 font-mono tracking-widest uppercase">
              <ShieldCheck size={12} />
              <span>Contract Verified</span>
            </div>
            <code className="text-[9px] text-gray-600 break-all bg-gray-900/50 p-2 rounded border border-white/5">
              0xF7543E5B4735C58a176269202847360aaDfA83C1
            </code>
          </div>
        </motion.div>

        {/* NAVEGAÇÃO PITCH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6 border-l-2 border-[#D4AF37] pl-3">
            Explorar
          </h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="/edollar-whitepaper" className="hover:text-pink-400 cursor-pointer transition flex items-center gap-2">
                Whitepaper V.1
              </a>
            </li>
            <li>
               <a href="https://ecoin.edenkingdom.org/Savings" className="hover:text-pink-400 cursor-pointer transition">
                Poupança eDollar
               </a>
            </li>
            <li className="hover:text-pink-400 cursor-pointer transition">Tokenomics</li>
            <li className="hover:text-pink-400 cursor-pointer transition">Transparência On-chain</li>
            <li className="hover:text-pink-400 cursor-pointer transition">Auditoria de Código</li>
          </ul>
        </motion.div>

        {/* REDES SOCIAIS E-COIN & CEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6 border-l-2 border-[#D4AF37] pl-3">
            Comunidade
          </h3>
          <div className="flex flex-col gap-6">
             <div>
               <p className="text-[10px] text-gray-600 uppercase mb-3 tracking-tighter">Oficial eDollar</p>
               <div className="flex gap-4">
                  <a href="https://t.me/eDollar2025" className="text-blue-400 hover:scale-110 transition p-2 bg-white/5 rounded-lg border border-white/10"><Send size={18} /></a>
                  <a href="https://x.com/CoinE28810" className="text-white hover:scale-110 transition p-2 bg-white/5 rounded-lg border border-white/10"><Twitter size={18} /></a>
                  <a href="https://t.me/+tZf9BhknTPs3Nzg0" className="text-indigo-500 hover:scale-110 transition p-2 bg-white/5 rounded-lg border border-white/10"><MessageSquare size={18} /></a>
                  <a href="#" className="text-green-500 hover:scale-110 transition p-2 bg-white/5 rounded-lg border border-white/10"><Smartphone size={18} /></a>
               </div>
             </div>
             <div>
               <p className="text-[10px] text-gray-600 uppercase mb-3 tracking-tighter">CEO Athelstan Atanas</p>
               <div className="flex gap-4 text-gray-400">
                  <a href="https://instagram.com/athelstanatanas" className="hover:text-pink-500 transition"><Instagram size={18} /></a>
                  <a href="#" className="hover:text-blue-500 transition"><Facebook size={18} /></a>
                  <a href="#" className="hover:text-white transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.43-.3 6.83-1.02 10.18-1.04 4.81-5.18 8.04-10.1 7.84-5.45-.22-9.61-4.82-9.61-10.27.02-5.44 4.16-10.04 9.61-10.27.02 1.34.01 2.68.02 4.02-3.41.23-5.96 3.11-5.96 6.25 0 3.13 2.55 6.01 5.96 6.25 1.45.1 2.87-.2 4.02-1.02.73-3.05.73-6.22.73-9.36 0-4.33 0-8.66.01-12.99Z"/>
                    </svg>
                  </a>
               </div>
             </div>
          </div>
        </motion.div>

        {/* SUPORTE INSTITUCIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6 border-l-2 border-[#D4AF37] pl-3">
            Institucional
          </h3>
          <div className="space-y-4">
            <a href="mailto:support@edenkingdom.org" className="group block p-3 bg-white/5 border border-white/10 rounded-xl hover:border-pink-500/50 transition">
               <div className="flex items-center gap-2 mb-1">
                 <Mail size={10} className="text-gray-500 group-hover:text-pink-500" />
                 <span className="text-[10px] text-gray-500 block uppercase">Suporte Geral</span>
               </div>
               <span className="text-xs text-white">support@edenkingdom.org</span>
            </a>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
               <div className="flex items-center gap-2 mb-1">
                 <MapPin size={10} className="text-gray-500" />
                 <span className="text-[10px] text-gray-500 block uppercase">Sede Global</span>
               </div>
               <span className="text-xs text-white">📍 Nova Iorque, US</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
               <div className="flex items-center gap-2 mb-1">
                 <Globe size={10} className="text-gray-500" />
                 <span className="text-[10px] text-gray-500 block uppercase">Ecosystem</span>
               </div>
               <span className="text-xs text-white uppercase font-bold tracking-widest">Grupo EdenKingDom</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT AREA */}
      <div className="w-full border-t border-white/5 mt-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em]">
            Since © 2025 to {new Date().getFullYear()} EdenKingDom (EKD) • eDollar Stablecoin
          </div>
          <div className="flex gap-4 text-[10px] text-blue-900 font-black uppercase tracking-[0.5em]">
            <span>Immutable</span>
            <span>Secure</span>
            <span>Institutional</span>
          </div>
        </div>
        <div className="text-center mt-8 opacity-20 hover:opacity-100 transition duration-1000">
           <span className="text-[35px] text-gray-500 font-mono">EdenKingDom (EKD) — Built from Genesis, Designed for Eternity.</span>
        </div>
      </div>
    </footer>
  );
}