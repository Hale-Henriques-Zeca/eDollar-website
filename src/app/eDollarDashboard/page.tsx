"use client";

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Wallet, 
  TrendingUp, 
  ExternalLink, 
  Lock, 
  Info, 
  BarChart3, 
  Globe,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import StabilityMechanism from './StabilityMechanism';
import StabilityEnginePanel from "./StabilityEnginePanel";

/**
 * EdenKingDom USD (E-USD) Dashboard
 * Uma interface institucional para monitorização da stablecoin BEP-20.
 * Ficheiro único consolidado sem dependências de 'next/link' ou 'next/image'.
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const CONTRACT_ADDRESS = "0xF7543E5B4735C58a176269202847360aaDfA83C1";
  const TOTAL_SUPPLY = "1,000,000,000,000,000";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navegação */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">EdenKingDom <span className="text-blue-600">USD</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => setActiveTab('overview')} className={`text-sm font-medium ${activeTab === 'overview' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}>Visão Geral</button>
              <button onClick={() => setActiveTab('whitepaper')} className={`text-sm font-medium ${activeTab === 'whitepaper' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}>Whitepaper</button>
              <a href={`https://bscscan.com/token/${CONTRACT_ADDRESS}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800">
                BscScan <ExternalLink size={14} />
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Ligar Carteira
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-500">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            <button onClick={() => {setActiveTab('overview'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-medium py-2">Visão Geral</button>
            <button onClick={() => {setActiveTab('whitepaper'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-medium py-2">Whitepaper</button>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Ligar Carteira</button>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' ? (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
              <div className="relative z-10 md:w-2/3">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block border border-blue-500/30">
                  Mainnet Ativa
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  A Próxima Geração de Stablecoins Institucionais.
                </h1>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  EdenKingDom USD (E-USD) é um token BEP-20 imutável desenhado para máxima transparência e segurança na BNB Smart Chain. Sem funções de mint/burn após o deploy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex-1 min-w-[160px]">
                    <p className="text-slate-400 text-xs mb-1 uppercase">Supply Total</p>
                    <p className="text-xl font-bold">{TOTAL_SUPPLY}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex-1 min-w-[160px]">
                    <p className="text-slate-400 text-xs mb-1 uppercase">Rede</p>
                    <p className="text-xl font-bold">BSC (Mainnet)</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Imutabilidade Total</h3>
                <p className="text-slate-500 text-sm">Contrato sem proprietário (no owner) e sem funções sensíveis expostas após a criação.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Lock size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Supply Fixo</h3>
                <p className="text-slate-500 text-sm">A emissão ocorreu exclusivamente no constructor no momento da criação. Impossível criar novos tokens (no mint).</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Zero Taxas</h3>
                <p className="text-slate-500 text-sm">Sem taxas internas de transferência. O que torna-nos ideal para liquidez institucional e Exchanges.</p>
              </div>
            </div>

            <StabilityEnginePanel />
            <StabilityMechanism />
            

            {/* Smart Contract Info */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-blue-600" size={20} />
                  <h2 className="font-bold">Detalhes do Contrato</h2>
                </div>
                <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded">Solidity 0.8.24</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Endereço do Contrato</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="bg-slate-100 p-3 rounded-lg text-sm text-slate-700 font-mono flex-1 break-all">
                          {CONTRACT_ADDRESS}
                        </code>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(CONTRACT_ADDRESS);
                          }}
                          className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-600"
                          title="Copiar"
                        >
                          <Wallet size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome</label>
                        <p className="text-lg font-semibold mt-1">EdenKingDom USD</p>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Símbolo</label>
                        <p className="text-lg font-semibold mt-1">E-USD</p>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Decimais</label>
                        <p className="text-lg font-semibold mt-1">18</p>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Taxa de Queima</label>
                        <p className="text-lg font-semibold mt-1 text-green-600">0%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-5 text-slate-300 font-mono text-xs overflow-x-auto">
                    <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                      <span className="text-blue-400">// Solidity Interpretation Kit</span>
                      <span className="text-slate-500">EUSD.sol</span>
                    </div>
                    <pre className="leading-relaxed">
{`contract EUSD is ERC20 {
    uint256 public constant GENESIS_SUPPLY =
        1_000_000_000_000_000 * 10 ** 18;

    constructor(address genesisHolder)
        ERC20("EdenKingDom USD", "E-USD")
    {
        require(genesisHolder != address(0), "Invalid");
        _mint(genesisHolder, GENESIS_SUPPLY);
    }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold mb-4">Whitepaper & Kit de Interpretação</h1>
              <p className="text-slate-500">Filosofia de design e documentação técnica da E-USD.</p>
            </div>

            <div className="space-y-6">
              <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">1. Resumo Executivo</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  EdenKingDom USD (E-USD) é uma stablecoin institucional BEP‑20 implantada na BNB Smart Chain (Mainnet), concebida com supply fixo (genesis‑only), sem owner, sem mint/burn pós‑deploy, sem taxas internas e sem listas de controlo. A estabilidade não é responsabilidade do token; ela é garantida por infraestrutura económica externa (tesouraria, liquidez, vaults e operações de mercado).
                </p>
              </section>

              <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">2. Filosofia "Menos é Mais"</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Stablecoins com privilégios on‑chain (mint/burn, owners, blacklists, pausas administrativas) introduzem risco regulatório, dependência de governação técnica e incerteza operacional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="font-bold text-sm mb-1 text-slate-800">Sem Privilégios</p>
                    <p className="text-xs text-slate-500 text-balance">Nenhum endereço tem controlo especial sobre o contrato após a emissão inicial.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="font-bold text-sm mb-1 text-slate-800">Transparência Radical</p>
                    <p className="text-xs text-slate-500 text-balance">O supply é imutável e visível on-chain, sem surpresas inflacionárias.</p>
                  </div>
                </div>
              </section>

              <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Pronto para Auditar</h3>
                  <p className="text-blue-100 opacity-90">O código segue o padrão OpenZeppelin ERC20 verificado.</p>
                </div>
                <button onClick={() => setActiveTab('overview')} className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  Voltar ao Dashboard <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">
                E
              </div>
              <span className="text-sm font-bold tracking-tight">EdenKingDom USD</span>
            </div>
            <div className="flex gap-8 text-slate-400 text-xs">
              <a href="#" className="hover:text-blue-600">Termos de Uso</a>
              <a href="#" className="hover:text-blue-600">Política de Privacidade</a>
              <a href="#" className="hover:text-blue-600">Documentação</a>
              <a href="#" className="hover:text-blue-600">Suporte</a>
            </div>
            <p className="text-slate-400 text-xs">© 2025-2026 EdenKingDom Ecosystem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;