'use client';
import Image from 'next/image';
import { ethers } from 'ethers';

export default function Home() {
  const contractAddress = "0xF7543E5B4735C58a176269202847360aaDfA83C1";
  const tokenSymbol = "E-USD";
  const tokenDecimals = 18;
  const tokenImage = "https://ecoin.edenkingdom.org/eusd.jpg"; // Use o link real da imagem após o deploy

  const addTokenToWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: contractAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          },
        });
      } catch (error) {
        console.error("Erro ao adicionar token:", error);
      }
    } else {
      alert("Por favor, instale a MetaMask!");
    }
  };

  return (
    <main className="min-h-screen bg-[#001220] text-white font-sans">
      {/* HEADER */}
            <nav className="flex justify-between items-center p-6 border-b border-blue-900/50 bg-[#001220]/80 backdrop-blur-md sticky top-0 z-50">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
                   <Image src="/eusd.jpg" alt="eDollar Logo" fill className="object-cover" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  eDollar
                </span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-blue-200">
                <a href="LaunchPad" className="hover:text-pink-400 transition">LaunchPad</a>
                <a href="#tokenomics" className="hover:text-pink-400 transition">Tokenomics</a>
                <a href="#roadmap" className="hover:text-pink-400 transition">Roadmap</a>
              </div>
              <a href="https://ecoin.edenkingdom.org/Savings" target="_blank" className="bg-gradient-to-r from-blue-500 to-pink-600 px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition">
                Launch App
              </a>
            </nav>

      {/* HERO SECTION */}
      <section className="relative py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          O Futuro do Rendimento Passivo em <br/>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Stablecoin Imutável
          </span>
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">
          O eDollar (E-USD) não é apenas uma moeda, é o motor de liquidação do ecossistema EdenKingDom. 
          Segurança institucional com transparência total na BNB Smart Chain. [cite: 1, 7]
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={addTokenToWallet} className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition flex items-center gap-2">
             Adicionar à MetaMask
          </button>
          <a href="https://ecoin.edenkingdom.org/Savings" target="_blank" className="bg-pink-600 px-8 py-3 rounded-xl font-bold hover:bg-pink-700 transition">
            Começar a Ganhar (Airdrop/Stake)
          </a>
        </div>
      </section>

      {/* LAUNCHPAD / STAKING SECTION */}
      <section id="launchpad" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/40 to-pink-900/20 p-10 rounded-[40px] border border-blue-700 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 blur-[50px] rounded-full"></div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Launchpad & Savings</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Participe na nossa mineração exclusiva! Faça stake dos seus ativos e receba recompensas em **USDT** e **eDollar (E-USD)**. 
            É a combinação perfeita de Airdrop e Mineração do eDollar e aquisição dos primeiros holders.
          </p>
          <a href="https://ecoin.edenkingdom.org/Savings" target="_blank" className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg px-12 py-4 rounded-2xl font-black hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition group">
            ACESSAR PAINEL DE STAKING <span className="group-hover:ml-2 transition-all">→</span>
          </a>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Roadmap de Expansão</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-green-500 p-2 rounded-full">✓</div>
            <div>
              <h4 className="text-xl font-bold text-yellow-500">Deploy Mainnet & Código Verificado [cite: 3]</h4>
              <p className="text-blue-200">Contrato imutável implantado com sucesso na BNB Smart Chain. [cite: 4, 7]</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="bg-blue-500 p-2 rounded-full">🚀</div>
            <div>
              <h4 className="text-xl font-bold">Liquidez em DEX/CEX & Ecossistema EdenKingDom [cite: 31, 45]</h4>
              <p className="text-blue-200">Integração do eDollar como unidade base de liquidação e listagem em grandes corretoras. [cite: 44, 45]</p>
            </div>
          </div>
          <div className="flex gap-6 items-start opacity-50">
            <div className="bg-gray-500 p-2 rounded-full">🌐</div>
            <div>
              <h4 className="text-xl font-bold">Expansão Multichain </h4>
              <p className="text-blue-200">Criação de versões representadas (wrapped) em outras redes líderes. </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTRACT */}
      <footer className="py-20 px-6 border-t border-blue-900/50 text-center">
        <p className="text-blue-400 mb-4 font-mono text-sm">Contrato: {contractAddress}</p>
        <p className="text-gray-500 text-xs">© 2025 EdenKingDom. Governança Off-Chain. Imutabilidade On-Chain. [cite: 40]</p>
      </footer>
    </main>
  );
}