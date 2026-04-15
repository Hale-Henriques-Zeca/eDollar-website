import Link from 'next/link';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans leading-relaxed">
      {/* NAVBAR SIMPLES */}
      <nav className="p-6 border-b border-gray-800 bg-[#0f172a] sticky top-0 z-50">
        <Link href="/" className="text-pink-500 font-bold hover:underline flex items-center gap-2">
           ← Voltar ao Início
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto py-20 px-6">
        {/* HEADER DO DOCUMENTO */}
        <header className="mb-16 border-b border-gray-800 pb-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">EdenKingDom USD (E-USD)</h1>
          <p className="text-2xl text-yellow-500 font-medium">Whitepaper Oficial + Solidity Interpretation Kit</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full border border-green-800">Status: Mainnet • Verificado</span>
            <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full border border-blue-800">Rede: BNB Smart Chain (ID 56)</span>
          </div>
          <p className="mt-8 text-pink-400 font-bold text-lg italic">
            Publicado em: 15 de Abril de 2026 — Versão 1 (V.1)
          </p>
          <div className="mt-4 p-4 bg-black/40 rounded-lg border border-gray-800">
            <p className="text-xs uppercase text-gray-500 mb-1">Endereço do Contrato (Mainnet)</p>
            <code className="text-yellow-500 break-all">0xF7543E5B4735C58a176269202847360aaDfA83C1</code>
          </div>
        </header>

        {/* CONTEÚDO */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Resumo Executivo</h2>
            <p>
              EdenKingDom USD (E-USD) é uma stablecoin institucional BEP‑20 implantada na BNB Smart Chain (Mainnet), concebida com supply fixo (genesis‑only), sem owner, sem mint/burn pós‑deploy, sem taxas internas e sem listas de controle. A estabilidade não é responsabilidade do token; ela é garantida por infraestrutura econômica externa (tesouraria, liquidez, vaults e operações de mercado). Esse desenho reduz risco sistêmico, melhora previsibilidade e atende aos padrões exigidos por auditorias e CEX.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Problema</h2>
            <p>
              Stablecoins com privilégios on‑chain (mint/burn, owners, blacklists, pausas administrativas) introduzem risco regulatório, dependência de governança técnica e incerteza operacional. O mercado institucional demanda tokens simples, imutáveis e previsíveis, onde a política econômica ocorre fora do contrato.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Solução</h2>
            <p>
              A E‑USD remove qualquer alavanca on‑chain após o deploy:
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-400">
                <li>Mint ocorre uma única vez no constructor (gênese)</li>
                <li>Supply imutável</li>
                <li>Nenhuma função pública sensível</li>
                <li>Estabilidade 100% externa (off‑chain / on‑market)</li>
              </ul>
              <strong className="block mt-4 text-blue-400">Resultado: um ativo de liquidação neutro, auditável e compatível com integrações institucionais.</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Arquitetura Técnica</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <li><span className="text-gray-500">Padrão:</span> BEP‑20 (OpenZeppelin v5)</li>
              <li><span className="text-gray-500">Rede:</span> BNB Smart Chain</li>
              <li><span className="text-gray-500">Compilador:</span> Solidity 0.8.24</li>
              <li><span className="text-gray-500">Otimização:</span> Habilitada (200 runs)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Tokenomics</h2>
            <div className="border border-gray-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-gray-800">
                  <tr><td className="p-4 text-gray-400">Nome</td><td className="p-4 text-white">EdenKingDom USD</td></tr>
                  <tr><td className="p-4 text-gray-400">Símbolo</td><td className="p-4 text-white text-yellow-500 font-bold">E‑USD</td></tr>
                  <tr><td className="p-4 text-gray-400">Supply Total</td><td className="p-4 text-white">1.000.000.000.000.000 (1 Quaternário)</td></tr>
                  <tr><td className="p-4 text-gray-400">Distribuição</td><td className="p-4 text-white">100% Genesis Holder</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Estabilidade (Modelo Econômico)</h2>
            <p>A paridade é mantida por Liquidez profunda (DEX/CEX), Tesouraria e Vaults segregados e Gestão de risco fora do contrato. <strong>Invariante: totalSupply() nunca muda.</strong></p>
          </div>

          {/* ... (Continue as outras seções 7, 8, 9 com o mesmo padrão) ... */}

          <div className="p-8 bg-black/60 rounded-3xl border-2 border-pink-900/30">
            <h2 className="text-2xl font-bold text-pink-500 mb-6 underline">Apêndice A — Solidity Interpretation Kit</h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-xs font-mono text-green-400">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EUSD is ERC20 {
    uint256 public constant GENESIS_SUPPLY = 1_000_000_000_000_000 * 10 ** 18;

    constructor(address genesisHolder) ERC20("EdenKingDom USD", "E-USD") {
        require(genesisHolder != address(0), "Invalid genesis holder");
        _mint(genesisHolder, GENESIS_SUPPLY);
    }
}`}
            </pre>
            <p className="mt-6 text-sm text-gray-400">
              <strong>Linha a linha (essencial):</strong> pragma 0.8.24 estável, ERC20 auditado, GENESIS_SUPPLY constante pública para transparência total. Ausência de funções de mint/burn garante supply imutável.
            </p>
          </div>

          <footer className="mt-20 pt-10 border-t border-gray-800 text-sm text-gray-500">
            <p className="mb-4 font-bold text-red-900">10. Disclaimer</p>
            <p>Este documento é informativo e não constitui aconselhamento financeiro. Operações com criptoativos envolvem risco. A estabilidade depende de infraestrutura e gestão externa ao contrato.</p>
            <p className="mt-4">Contato institucional: EdenKingDom</p>
          </footer>
        </section>
      </article>
    </div>
  );
}