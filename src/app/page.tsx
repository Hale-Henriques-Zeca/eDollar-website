"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import DashboardCard from "@/components/DashboardCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExecutivePitchCarousel from "@/components/ExecutivePitchCarousel";




  

export default function Home() {

  const contractAddress = "0xF7543E5B4735C58a176269202847360aaDfA83C1";

  const [stats, setStats] = useState({
    holders: '...',
    volume: '...'
  });

const [currentPage, setCurrentPage] = useState('home');

  // Função para buscar dados reais (Exemplo com BscScan)
  useEffect(() => {
    const fetchStats = async () => {
      // Nota: Para produção, deve-se usar sua API Key do BscScan
      // Aqui usamos um mock/simulação que pode-se substituir pela URL da API
      try {
        // Exemplo de chamada: fetch(`https://api.bscscan.com/api?module=token&action=tokenholdercount&contractaddress=${contractAddress}&apikey=SUA_CHAVE`)
        // Por agora, vamos manter valores de demonstração que mudam levemente
        setStats({
          holders: "....", // Substituir por dados da API
          volume: "...." // Substituir por dados da API
        });
      } catch (e) {
        console.error("Erro ao buscar stats", e);
      }
    };
    fetchStats();
  }, []);

  const addTokenToWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: contractAddress,
              symbol: "E-USD",
              decimals: 18,
              image: "https://ecoin.edenkingdom.org/eusd.jpg",
            },
          },
        });
      } catch (error) { console.error(error); }
    } else { alert("Instale a MetaMask!"); }
  };

  return (
    <main className="min-h-screen bg-[#001220] text-white font-sans">
      {/* HEADER */}
      <Header />



      {/* HERO SECTION */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-600/10 blur-[100px] rounded-full -z-10"></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          A Stablecoin Institucional do <br/>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Ecossistema EdenKingDom
          </span>
        </h1>
        <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Segurança imutável na BNB Smart Chain com supply fixo de 1 quatrilhão. O futuro da liquidação neutra e auditável.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
            Comprar eDollar
          </button>
          <Link href="/edollar-whitepaper">
            <button className="border border-blue-500 px-8 py-3 rounded-xl font-bold hover:bg-blue-500/10 transition">Ler Whitepaper</button>
          </Link>
        </div>
      </section>

      <DashboardCard />

      {/* LAUNCHPAD / STAKING AD */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="relative group overflow-hidden bg-gradient-to-br from-blue-900/60 to-pink-900/60 border border-pink-500/30 p-12 rounded-[3rem] text-center shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full group-hover:bg-pink-500/20 transition"></div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">MINERAÇÃO & AIRDROP</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Ganhe recompensas em <span className="text-green-400 font-bold">USDT</span> e <span className="text-pink-400 font-bold">eDollar</span> fazendo stake de <span className="text-yellow-400 font-bold">E-Coin</span> no nosso sistema exclusivo de Savings no <span className="text-pink-400 font-bold">ecossistema E-Coin</span>.</p>
            <a href="https://ecoin.edenkingdom.org/Savings" target="_blank" className="inline-block bg-white text-black px-12 py-4 rounded-2xl font-black hover:scale-110 hover:-rotate-1 transition shadow-xl shadow-white/10">
              ACESSAR SAVINGS AGORA
            </a>
        </div>
      </section>

 
      {/* STATS SECTION (API READY) */}
      <section id="stats" className="py-10 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-950/30 border border-blue-800 p-6 rounded-2xl text-center">
            <p className="text-blue-400 text-sm uppercase mb-1">Holders Ativos</p>
            <h2 className="text-3xl font-bold text-yellow-400">{stats.holders}</h2>
          </div>
          <div className="bg-blue-950/30 border border-blue-800 p-6 rounded-2xl text-center">
            <p className="text-blue-400 text-sm uppercase mb-1">Volume (24h)</p>
            <h2 className="text-3xl font-bold text-pink-500">{stats.volume}</h2>
          </div>
        </div>
      </section>

      {/* TECH SPECS CARDS */}
      <section id="tech" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-950/40 p-8 rounded-3xl border border-blue-800 hover:border-pink-500 transition group">
            <div className="text-pink-500 text-3xl mb-4 group-hover:scale-110 transition">🛡️</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Sem Owner</h3>
            <p className="text-blue-200 text-sm">Ninguém pode alterar as regras do contrato após o deploy. Imutabilidade total.</p>
          </div>
          <div className="bg-blue-950/40 p-8 rounded-3xl border border-blue-800 hover:border-blue-400 transition group">
            <div className="text-blue-400 text-3xl mb-4 group-hover:scale-110 transition">💎</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Supply Fixo</h3>
            <p className="text-blue-200 text-sm">Não existe inflação on-chain. O supply foi definido na gênese e nunca mudará.</p>
          </div>
          <div className="bg-blue-950/40 p-8 rounded-3xl border border-blue-800 hover:border-pink-500 transition group">
            <div className="text-pink-500 text-3xl mb-4 group-hover:scale-110 transition">🏛️</div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Institucional</h3>
            <p className="text-blue-200 text-sm">Desenvolvido para atender aos padrões exigidos por auditorias e grandes corretoras (CEX).</p>
          </div>
        </div>
      </section>

      

      {/* CONTRACT INFO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-black/40 p-10 rounded-[2.5rem] border border-blue-800/50 backdrop-blur-xl">
          <h2 className="text-3xl font-black mb-10 text-center bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            DETALHES DO CONTRATO
          </h2>
          <div className="space-y-6">
            {[
              { label: "Nome", value: "EdenKingDom USD" },
              { label: "Símbolo", value: "eDollar (E-USD)" },
              { label: "Rede", value: "BNB Smart Chain (BEP-20)" },
              { label: "Supply", value: "1.000.000.000.000.000" }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between border-b border-blue-900/30 pb-4">
                <span className="text-blue-400 font-medium">{item.label}</span>
                <span className="font-mono font-bold text-white">{item.value}</span>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <span className="text-blue-400 font-medium">Endereço do Contrato</span>
              <div className="group relative">
                <span className="font-mono text-xs md:text-base bg-blue-950/50 p-5 rounded-2xl border border-pink-900/50 block break-all text-pink-400 group-hover:border-pink-500 transition cursor-pointer" onClick={() => {
                  navigator.clipboard.writeText(contractAddress);
                  alert("Endereço copiado!");
                }}>
                  {contractAddress}
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase font-black text-pink-600 opacity-50">Clique para copiar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
<ExecutivePitchCarousel />


      
      {/* FOOTER */}

      <Footer />
      
    </main>
  );
}