import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaWallet, FaTags, FaHistory, FaArrowRight, FaCheckCircle, FaBuilding, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const Landing = () => {
  return (
    <div className="bg-[#f8fafc] text-gray-800 min-h-screen font-sans selection:bg-[#7c3aed] selection:text-white overflow-x-hidden antialiased">
      
      {/* Background design pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_80%,transparent_100%)] pointer-events-none" />

      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#7c3aed] rounded-xl flex items-center justify-center shadow-md shadow-purple-200">
              <span className="text-white font-black text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Biz<span className="text-[#7c3aed]">Dashboard</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-500">
            <a href="#features" className="hover:text-gray-900 transition-colors">Core Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-gray-900 transition-colors">Why Choose Us</a>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-purple-100 hover:scale-[1.02]">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-1.5 rounded-full text-xs font-bold text-[#7c3aed] mb-6 shadow-sm">
          ✨ The Smartest Way to Monitor Smart Business Growth
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 max-w-4xl mx-auto leading-[1.15]">
          Track Your Sales, Income & Expenses in One <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">Beautiful App</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop guessing your profit margins. Get real-time summaries of your revenue, monitor recent transactions, and organize daily sales records with absolute ease.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="w-full sm:w-auto bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-200 hover:scale-[1.02] text-center flex items-center justify-center gap-2">
            Open Your Free Account <FaArrowRight className="text-xs" />
          </Link>
          <Link to="/login" className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold transition-all shadow-sm text-center">
            View Live Demo
          </Link>
        </div>
      </section>

      {/* 3. BUSINESS PERFORMANCE OVERVIEW (Matches your live snapshot metrics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 z-10 relative">
        <div className="text-center mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Built-in Metrics Preview</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
          <div className="text-center p-2">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">$24,560.00</h3>
            <p className="text-xs text-emerald-600 font-bold mt-1">↑ 12.5% Profit Growth</p>
          </div>
          <div className="text-center p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">152</h3>
            <p className="text-xs text-purple-600 font-bold mt-1">Orders Tracked This Month</p>
          </div>
          <div className="text-center p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">$161.58</h3>
            <p className="text-xs text-orange-600 font-bold mt-1">Average Order Value</p>
          </div>
          <div className="text-center p-2 border-l border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">89</h3>
            <p className="text-xs text-blue-600 font-bold mt-1">Happy Regular Customers</p>
          </div>
        </div>
      </section>

      {/* 4. EXPLAINED BUSINESS FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Everything you need to scale operations</h2>
          <p className="text-gray-500 mt-4 text-base">Perfect for modern retail shops, services, tailor shops, and growing companies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[#7c3aed]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center mb-6 group-hover:bg-[#7c3aed] group-hover:text-white transition-all shadow-inner">
              <FaWallet className="text-lg" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Easy Financial Tracking</h3>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Log every single business income and expense seamlessly. Know exactly where your money comes from and exactly where it goes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[#7c3aed]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center mb-6 group-hover:bg-[#7c3aed] group-hover:text-white transition-all shadow-inner">
              <FaChartBar className="text-lg" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Smart Sales Charts</h3>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Watch your business trends change. Our clear charts give you an instant breakdown of your top categories and monthly income flow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[#7c3aed]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center mb-6 group-hover:bg-[#7c3aed] group-hover:text-white transition-all shadow-inner">
              <FaTags className="text-lg" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Category Organization</h3>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Separate your activities cleanly by Services, Products, Consultations, or Sales. Group items to find out what brings in the most profit.
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="bg-white border-y border-gray-100 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Simple 4-Step Management</h2>
            <p className="text-gray-500 mt-3">From simple business actions straight into complete visual reports.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 mx-auto flex items-center justify-center text-[#7c3aed] text-lg font-black shadow-sm group-hover:bg-purple-50 transition-colors">1</div>
              <h4 className="text-lg font-bold text-gray-900 mt-4">Create Account</h4>
              <p className="text-gray-500 text-xs mt-2 px-4">Sign up in seconds with your store or business name safely.</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 mx-auto flex items-center justify-center text-[#7c3aed] text-lg font-black shadow-sm group-hover:bg-purple-50 transition-colors">2</div>
              <h4 className="text-lg font-bold text-gray-900 mt-4">Input Daily Records</h4>
              <p className="text-gray-500 text-xs mt-2 px-4">Type in your daily transactions, assigning amounts and specific dates.</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 mx-auto flex items-center justify-center text-[#7c3aed] text-lg font-black shadow-sm group-hover:bg-purple-50 transition-colors">3</div>
              <h4 className="text-lg font-bold text-gray-900 mt-4">Filter & Search</h4>
              <p className="text-gray-500 text-xs mt-2 px-4">Instantly filter your list by expenses or search specific customer orders.</p>
            </div>
            <div className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 mx-auto flex items-center justify-center text-[#7c3aed] text-lg font-black shadow-sm group-hover:bg-purple-50 transition-colors">4</div>
              <h4 className="text-lg font-bold text-gray-900 mt-4">Analyze Growth</h4>
              <p className="text-gray-500 text-xs mt-2 px-4">See automatically compiled dashboard totals update immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS BENEFITS SECTION */}
      <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Designed to eliminate manual error completely</h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
              Paper notebooks get lost, torn, or calculated incorrectly. BizDashboard keeps your records structured, backed up, and presented in premium interactive panels you can load up on any machine.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-emerald-500"><FaCheckCircle /></div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Secure Private Access</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Your financial records are strictly protected and locked behind secure personalized accounts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-emerald-500"><FaCheckCircle /></div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Responsive Mobile Controls</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Check your shop status while traveling or working on your desktop computer seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-tr from-purple-100 to-indigo-50 p-8 rounded-3xl border border-purple-200/40 relative">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaHistory className="text-[#7c3aed] text-sm" /> Live System Feed Simulation
            </h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center text-xs shadow-sm">
                <div>
                  <p className="font-bold text-gray-900">Premium Tailoring Delivery</p>
                  <p className="text-gray-400">Category: Products</p>
                </div>
                <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+$120.00</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center text-xs shadow-sm">
                <div>
                  <p className="font-bold text-gray-900">UI/UX Design Consultation</p>
                  <p className="text-gray-400">Category: Services</p>
                </div>
                <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+$250.00</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 flex justify-between items-center text-xs shadow-sm opacity-60">
                <div>
                  <p className="font-bold text-gray-900">Monthly Workspace Subscription</p>
                  <p className="text-gray-400">Category: Services</p>
                </div>
                <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+$150.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION ACTION PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-3xl p-8 md:p-16 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to take control of your financial growth?</h2>
            <p className="mt-4 text-purple-100 text-sm sm:text-base leading-relaxed">
              Unlock structural record tracking today. Get beautiful visual trends, instant category analysis, and modern reporting controls instantly.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/register" className="bg-white text-[#7c3aed] hover:bg-purple-50 px-8 py-4 rounded-xl font-bold transition-all text-center shadow-md">
              Get Started Completely Free
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm text-gray-500">
          <div>
            <div className="flex items-center space-x-2 text-gray-900 font-bold text-base mb-4">
              <div className="w-6 h-6 bg-[#7c3aed] rounded-lg flex items-center justify-center text-white text-xs font-black">B</div>
              <span>BizDashboard</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">A clean, high-performance platform engineered specifically to track income entries and manage retail operations metrics safely.</p>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Core Application</h5>
            <ul className="space-y-2 text-xs">
              <li>Sales Tracker</li>
              <li>Expense Logger</li>
              <li>Analytical Charts</li>
              <li>Category Filters</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Platform Security</h5>
            <ul className="space-y-2 text-xs">
              <li>Encrypted Login Sessions</li>
              <li>Isolated Accounts</li>
              <li>Data Protection Laws</li>
              <li>Verified Route Access</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Developed By</h5>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">Designed under premium production design guidelines for everyday businesses.</p>
            <span className="inline-block bg-gray-100 font-mono px-2 py-1 rounded text-gray-700 text-xs font-bold">Lead: Aliyu Bin</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div>&copy; {new Date().getFullYear()} BizDashboard Platforms. All rights reserved.</div>
          <div className="flex space-x-6">
            <span>System Status: Online</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;