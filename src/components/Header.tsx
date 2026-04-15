"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Download,
  ArrowLeftRight,
  Bot,
  TrendingUp,
  Users,
  Menu,
  X,
  Repeat2,
  PiggyBank,
  CandlestickChart,
  Sprout,
  Megaphone,
  Scale,
  HeartHandshake,
  Building2,
  UtensilsCrossed,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "E-Coin", href: "https://ecoin.edenkingdom.org", external: true, icon: Sprout },
  { name: "Importar", href: "https://ecoin.edenkingdom.org/import-guide", icon: Download },
  { name: "MozP2P", href: "https://efte.edenkingdom.org/p2p", icon: Repeat2 },
  { name: "Poupança", href: "https://ecoin.edenkingdom.org/Savings", icon: PiggyBank },
  { name: "Trading AI", href: "https://ecoin.edenkingdom.org/ecoin-ai-trading", icon: Bot },
  { name: "Investir", href: "https://ecoin.edenkingdom.org/ecoin-rewards", icon: TrendingUp },
  { name: "Agricultura", href: "https://efarm.edenkingdom.org", icon: Sprout },
  { name: "Acionistas", href: "https://eshare.edenkingdom.org", icon: Users },
  { name: "Lei", href: "https://elaw.edenkingdom.org", external: true, icon: Scale },
  { name: "Doações", href: "https://esocial.edenkingdom.org", external: true, icon: HeartHandshake },
  { name: "Organização", href: "https://edenkingdom.org", external: true, icon: Building2 },
  { name: "Restaurante", href: "https://efc.edenkingdom.org", external: true, icon: UtensilsCrossed },
  { name: "Marketing", href: "https://emarketing.edenkingdom.org", icon: Megaphone },
  { name: "Exchange", href: "https://efte.edenkingdom.org", icon: CandlestickChart },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 🔥 GOLD LINE */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#001220]/90 backdrop-blur-xl border-b border-blue-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        {/* 🔥 GLOW BACKGROUND */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          } bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)]`}
        />

        <div
          className={`relative mx-auto max-w-[1400px] flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* 🟡 LOGO */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
              <img
                src="/eusd.jpg"
                alt="eDollar"
                className="object-cover w-full h-full"
              />
            </div>

            <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent group-hover:opacity-80 transition">
              eDollar
            </span>
          </a>

          {/* 🧭 NAV */}
          <nav className="hidden lg:flex flex-1 items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[11px] font-bold uppercase text-gray-400 hover:text-[#D4AF37] transition"
                >
                  <Icon size={14} />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* ⚙️ RIGHT */}
          <div className="flex items-center gap-3">
            {/* STATUS */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-mono">
                BSC LIVE
              </span>
            </div>

            {/* 🚀 BUTTON */}
            <a
              href="https://ecoin.edenkingdom.org/Savings"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-pink-600 px-5 py-2 rounded-full text-xs font-bold hover:scale-105 transition shadow-lg shadow-pink-500/20"
            >
              Launch App
            </a>

            {/* 📱 MOBILE */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-[#001220]/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={16} />
                  <span className="text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}