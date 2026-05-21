import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans selection:bg-[#7c3aed] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#7c3aed] to-[#a78bfa] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <span className="text-white font-black text-lg">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">BizDashboard</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.45)]">
            Get Started Free
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 text-center z-10">
        {/* Glow Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#7c3aed]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-[#1e293b]/60 border border-gray-800 px-4 py-1.5 rounded-full text-xs font-medium text-[#a78bfa] mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Next-Gen Business Analytics Live
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-[1.15]">
          Take Control of Your Engine Financial <span className="bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#c084fc] bg-clip-text text-transparent">Data Streams</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
          A high-performance command center built for modern businesses. Track transactions, analyze revenue shifts, and monitor real-time distribution operations securely.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="w-full sm:w-auto bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-[1.02] text-center">
            Deploy Your Dashboard
          </Link>
          <Link to="/login" className="w-full sm:w-auto bg-[#111827] border border-gray-800 hover:border-gray-700 text-gray-300 px-8 py-3.5 rounded-xl font-semibold transition-all text-center">
            Live Preview
          </Link>
        </div>
      </section>

      {/* Metrics Spotlight Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#111827]/40 border border-gray-800/60 p-8 rounded-3xl backdrop-blur-md">
          <div className="text-center p-4">
            <h3 className="text-3xl font-black text-white">$24.5K+</h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Processed Revenue</p>
          </div>
          <div className="text-center p-4 border-l border-gray-800/60">
            <h3 className="text-3xl font-black text-white">100%</h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Neon DB Uptime</p>
          </div>
          <div className="text-center p-4 border-l border-gray-800/60">
            <h3 className="text-3xl font-black text-white">&lt; 150ms</h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">API Response Latency</p>
          </div>
          <div className="text-center p-4 border-l border-gray-800/60">
            <h3 className="text-3xl font-black text-white">Encrypted</h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">JWT Security Protocol</p>
          </div>
        </div>
      </section>

      {/* Features Blueprint Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 z-10 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineered for absolute operational clarity</h2>
          <p className="text-gray-400 mt-3 text-sm">Everything you need to step away from manual bookkeeping chaos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#111827]/30 border border-gray-800 p-6 rounded-2xl hover:border-[#7c3aed]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-[#a78bfa] mb-4 font-bold group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white">Automated Logs</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Every sales entry and core operation tracking points synchronize straight into secure Neon Cloud relational models automatically.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827]/30 border border-gray-800 p-6 rounded-2xl hover:border-[#7c3aed]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-[#a78bfa] mb-4 font-bold group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
              📊
            </div>
            <h3 className="text-lg font-bold text-white">Visual Breakdown</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Beautiful interactive categorical distribution layouts and revenue wave timelines mapping precise business analytics trends.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827]/30 border border-gray-800 p-6 rounded-2xl hover:border-[#7c3aed]/40 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-[#a78bfa] mb-4 font-bold group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-white">Terminal Grade Security</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Protected by rigorous industry standard JWT Access token layers blocking all external cross-origin interference vectors.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-[#070a12] py-8 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} BizDashboard System Terminal. All rights reserved. Developed by Aliyu Bin.
      </footer>

    </div>
  );
};

export default Landing;