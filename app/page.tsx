'use client';

import { Menu, X, ChevronDown, Copy, Check, Music } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface EcosystemItem {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('DEG7sgkeqqKPYSru9NqJNtxZmJth2ZnnkKPtKCSspump');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const features: Feature[] = [
    {
      title: 'Memory & Learning',
      description: 'GLIM remembers your conversations and learns your preferences over time.',
      icon: '💚'
    },
    {
      title: 'Telegram Native',
      description: 'No app to install. GLIM lives where you already are - on Telegram.',
      icon: '✈️'
    },
    {
      title: 'Unique Personality',
      description: 'A personality that\'s distinctly GLIM. Not just another chatbot.',
      icon: '😊'
    },
    {
      title: 'Community Powered',
      description: 'Participate in governance and earn rewards from the GLIM ecosystem.',
      icon: '👥'
    },
    {
      title: 'Extensible & Open',
      description: 'Build on top of GLIM. Integrate with your favorite tools and services.',
      icon: '🔌'
    },
    {
      title: 'Constantly Evolving',
      description: 'New capabilities and features added regularly based on community feedback.',
      icon: '📈'
    }
  ];

  const ecosystem: EcosystemItem[] = [
    {
      name: 'Telegram',
      description: 'Talk to Glim',
      icon: '✈️',
      link: 'https://t.me/Glimpse_AI_bot'
    },
    {
      name: 'X (Twitter)',
      description: 'Follow updates',
      icon: '𝕏',
      link: 'https://x.com/GlimCompanion'
    },
    {
      name: 'Solana',
      description: 'Blockchain powered',
      icon: '◎',
      link: 'https://github.com/solana-labs/solana/tree/master/programs/bpf_loader/gen-syscall-list'
    },
    {
      name: '0G',
      description: 'Data layer',
      icon: '⚡',
      link: ''
    },
    {
      name: 'Jupiter Station',
      description: 'Swap & trade',
      icon: '🪐',
      link: 'https://developers.jup.ag/'
    },
    {
      name: 'Neurix',
      description: 'AI integration',
      icon: '🤖',
      link: 'https://www.neurix.co/'
    },
    {
      name: 'Pump.fun',
      description: 'Token launch',
      icon: '🚀',
      link: 'https://pump.fun/coin/DEG7sgkeqqKPYSru9NqJNtxZmJth2ZnnkKPtKCSspump'
    },
    {
      name: 'DexScreener',
      description: 'Trading charts',
      icon: '📊',
      link: 'https://dexscreener.com/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#e8f5f1] to-background text-foreground overflow-hidden relative">
      {/* Background image */}
      <div className="fixed inset-0 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20abr%202026%2C%2004_11_12%20p.m.-E5m6ruiwK6PACIucPDPgaJdKme2SeQ.png"
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      {/* Background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-border bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glim-B4P6A7S2wwc0fGmf8mM3BAx2cEbBrJ.png"
                alt="GLIM Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-lg text-foreground">GLIM</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded border border-green-300">
                ALPHA v0.1
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition ${activeSection === 'home' ? 'text-white' : 'text-muted-foreground hover:text-accent'}`}
              >
                HOME
              </button>
              <button 
                onClick={() => setActiveSection('features')}
                className={`text-sm font-medium transition flex items-center gap-1 ${activeSection === 'features' ? 'text-white' : 'text-muted-foreground hover:text-accent'}`}
              >
                FEATURES <ChevronDown size={14} />
              </button>
              <button 
                onClick={() => setActiveSection('ecosystem')}
                className={`text-sm font-medium transition flex items-center gap-1 ${activeSection === 'ecosystem' ? 'text-white' : 'text-muted-foreground hover:text-accent'}`}
              >
                ECOSYSTEM <ChevronDown size={14} />
              </button>
              <button 
                onClick={() => setActiveSection('explore')}
                className={`text-sm font-medium transition flex items-center gap-1 ${activeSection === 'explore' ? 'text-white' : 'text-muted-foreground hover:text-accent'}`}
              >
                EXPLORE <ChevronDown size={14} />
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a href="https://glim-bot/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">
                <span>💚</span> Talk to GLIM
              </a>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} className="block text-sm font-medium hover:text-accent transition py-2">HOME</button>
              <button onClick={() => { setActiveSection('features'); setIsMenuOpen(false); }} className="block text-sm font-medium hover:text-accent transition py-2">FEATURES</button>
              <button onClick={() => { setActiveSection('ecosystem'); setIsMenuOpen(false); }} className="block text-sm font-medium hover:text-accent transition py-2">ECOSYSTEM</button>
              <button onClick={() => { setActiveSection('explore'); setIsMenuOpen(false); }} className="block text-sm font-medium hover:text-accent transition py-2">EXPLORE</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 min-h-screen">
        {/* HOME Section */}
        {activeSection === 'home' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  <span className="text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-500 bg-clip-text text-transparent">GLIM.</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  Your AIlien Companion<br />Awaits.
                </h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                GLIM lives on Telegram, a friendly AI companion that remembers you, grows with you, and has personality all its own. Meet the future of AI agents, built for everyone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://t.me/Glimpse_AI_bot" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <span>💚</span> Talk to GLIM
                </a>
                <a href="https://github.com/search?q=glim+ai&type=code" target="_blank" rel="noopener noreferrer" className="border border-foreground text-foreground px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                  Read the Docs
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Free to start. <span className="text-accent font-semibold">Friend</span> and <span className="text-accent font-semibold">Best Friend</span> tiers in Telegram Stars. <a href="#" className="text-foreground hover:text-accent transition">See pricing</a>
              </p>
            </div>

            <div className="relative h-96 md:h-full min-h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/50 glow-effect"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glim-B4P6A7S2wwc0fGmf8mM3BAx2cEbBrJ.png"
                  alt="GLIM - Your AIlien Companion"
                  width={300}
                  height={300}
                  className="w-full max-w-xs h-auto drop-shadow-lg"
                  priority
                />
                <p className="text-gray-400 text-sm">GLIM</p>
                <p className="text-gray-500 text-xs max-w-xs">Your friendly AI companion powered by Blob</p>
              </div>
            </div>
          </div>
        )}

        {/* FEATURES Section */}
        {activeSection === 'features' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Features</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">Everything you need in an AI companion</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white hover:bg-green-50/50 transition shadow-sm">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ECOSYSTEM Section */}
        {activeSection === 'ecosystem' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Ecosystem</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">Integrated with leading Web3 platforms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecosystem.map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-6 bg-white hover:bg-green-50/50 transition text-center shadow-sm">
                  <div className="text-3xl mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="text-sm font-bold mb-1 text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* EXPLORE Section */}
        {activeSection === 'explore' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Explore</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">Discover more about Blob and the community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://github.com/search?q=glim+ai&type=code" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 bg-white hover:bg-green-50/50 transition shadow-sm block">
                <h3 className="text-xl font-bold mb-4 text-foreground">How Glim Works</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Blob is an AI agent that lives on Telegram. It uses advanced language models to understand and respond to your messages. Every interaction helps Blob learn and improve.
                </p>
                <span className="text-accent hover:text-green-700 transition text-sm font-medium">Learn More →</span>
              </a>

              <a href="https://x.com/GlimCompanion" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 bg-white hover:bg-green-50/50 transition shadow-sm block">
                <h3 className="text-xl font-bold mb-4 text-foreground">Community & Governance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Blob is owned by its community. Token holders can vote on new features, ecosystem decisions, and the direction of development.
                </p>
                <span className="text-accent hover:text-green-700 transition text-sm font-medium">Join Community →</span>
              </a>

              <a href="https://www.neurix.co/" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 bg-white hover:bg-green-50/50 transition shadow-sm block">
                <h3 className="text-xl font-bold mb-4 text-foreground">Security & Privacy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Your conversations with Blob are encrypted and private. We never sell your data. Your privacy is paramount.
                </p>
                <span className="text-accent hover:text-green-700 transition text-sm font-medium">Privacy Policy →</span>
              </a>

              <a href="https://github.com/search?q=glim+ai&type=code" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 bg-white hover:bg-green-50/50 transition shadow-sm block">
                <h3 className="text-xl font-bold mb-4 text-foreground">Build on Glim</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Developers can build integrations and plugins on top of Glim. Join our developer community and create the future.
                </p>
                <span className="text-accent hover:text-green-700 transition text-sm font-medium">Developer Docs →</span>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Footer Info */}
      <section className="relative z-10 border-t border-border bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold">PRICE</p>
              <p className="text-2xl font-bold text-foreground">$---</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold">MCAP</p>
              <p className="text-2xl font-bold text-foreground">$---</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold">HOLDERS</p>
              <p className="text-2xl font-bold text-foreground">---</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold">CA:</p>
              <div className="flex items-center gap-2">
                <p className="text-xs font-mono text-muted-foreground">...pump</p>
                <button 
                  onClick={copyToClipboard}
                  className="p-1 hover:bg-green-100 rounded transition"
                  title="Copy contract address"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">© GLIM 2026</p>
              <button 
                onClick={toggleMusic}
                className="p-1 hover:bg-green-100 rounded transition"
                title="Toggle Blob music"
              >
                <Music size={14} />
              </button>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground flex-wrap justify-center md:justify-end">
              <a href="https://github.com/search?q=glim+ai&type=code" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">PRIVACY</a>
              <a href="https://t.me/Glimpse_AI_bot" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition flex items-center gap-1">
                <span>✈️</span> TELEGRAM
              </a>
              <a href="https://x.com/GlimCompanion" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition flex items-center gap-1">
                <span>𝕏</span> X
              </a>
              <a href="https://github.com/solana-labs/solana/tree/master/programs/bpf_loader/gen-syscall-list" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">SOLANA</a>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">0G</a>
              <a href="https://developers.jup.ag/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">JUPITER STATION</a>
              <a href="https://www.neurix.co/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">NEURIX</a>
              <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">PUMP.FUN</a>
              <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">DEXSCREENER</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
