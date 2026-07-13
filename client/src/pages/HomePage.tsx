import React, { useState } from 'react';
import { Search, Send, Sparkles, MessageSquare } from 'lucide-react';
import { MOCK_TABS, POPULAR_SEARCHES, STATS_ITEMS, WHY_CHOOSE_POINTS } from '../mockdata/HomePage';
import HeroSection from '../components/home/HeroSection';
import BottomeSection from '../components/home/BottomSection';
import SuccessSection from '../components/home/SuccessSection';
import Fish from '../assets/images/homePage/Fish_Light.png';
import Mountain from '../assets/images/homePage/Mountain_Light.png';
import KaiShi from '../assets/images/homePage/Characters.png';
import Profile from '../assets/images/homePage/Profile.png';
import FlowerBranch from '../assets/images/homePage/Flowers_Light.png';
import JapanMap from '../assets/images/homePage/Map_Light.png';


import {
  CheckCircle2,
  CloudSun,
  TrendingUp,
  PlaneTakeoff,
  Briefcase,
  FileCheck
} from 'lucide-react';
import GlobeSection from '../components/home/GlobeSection';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [searchQuery, setSearchQuery] = useState('');
  const [chatInput, setChatInput] = useState('');

  return (
    <div>
      <HeroSection />
      <div className="w-full bg-slate-50/50 py-1 pt-[-300px] px-4 sm:px-6 lg:px-0 font-sans text-slate-800 antialiased">
        {/* SEARCH ANYTHING YOU NEED IN JAPAN */}
        <section className="w-full py-3 px-4 md:px-8 relative overflow-hidden flex items-center justify-center min-h-[320px]">

          {/* LEFT SIDE*/}
          <div className="absolute left-[25px] bottom-12 top-0 w-[15%] max-w-[210px] hidden md:block pointer-events-none z-10 select-none">
            <img
              src={Fish}
              alt="Japanese Koi Fish Illustration"
              className="w-full h-full object-contain object-left-bottom"
            />
          </div>

          {/* RIGHT SIDE ARTWORK GRAPHIc*/}
          <div className="absolute right-[5px] bottom-15 top-3 w-[55%] max-w-[400px] hidden md:block pointer-events-none z-10 select-none">
            <img
              src={Mountain}
              alt="Mount Fuji Neon Landscape Wireframe"
              className="w-full h-full object-contain object-right-bottom"
            />
          </div>

          {/* CENTRAL GLASS SEARCH SHELL CONTAINER */}
          <div className="w-full max-w-[1020px] bg-white/80 backdrop-blur-[42px] rounded-[28px] border border-slate-400/70 p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] relative z-20 mx-auto">

            {/* Floating Top Heading Capsule */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="bg-slate-300/95 border border-slate-300/70 rounded-full px-6 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-2 whitespace-nowrap">
                <h2 className="text-[16px] md:text-[18px] font-semibold text-slate-900 tracking-wide">
                  Search Anything You Need <span className="text-sky-500 font-extrabold">in Japan</span>
                  <span className="animate-pulse"> 🌸</span>
                </h2>
              </div>
            </div>

            {/* TABS CAROUSEL NAVIGATION ROW */}
            <div className="w-full overflow-x-auto no-scrollbar pt-7 mb-5">
              <div className="flex items-center justify-between min-w-max gap-1.5 px-1">
                {MOCK_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex flex-col items-center gap-2 group cursor-pointer transition-all focus:outline-none"
                      style={{ width: '80px' }}
                    >
                      {/* Distinct Light Frame Outline */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${isActive
                        ? 'bg-sky-100 border-[1.5px] border-sky-400 text-sky-600 shadow-[0_0_12px_rgba(56,189,248,0.18)]'
                        : 'bg-slate-300 border border-slate-400 text-slate-600 group-hover:text-slate-700 group-hover:border-slate-400'
                        }`}>
                        <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
                      </div>

                      {/* Text Description Segment */}
                      <span className={`text-[13px] font-semibold tracking-tight transition-colors duration-200 ${isActive ? 'text-sky-600' : 'text-slate-500 group-hover:text-slate-700'
                        }`}>
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* INTEGRATED SEARCH PILL GRID LAYER */}
            <div className="w-full bg-slate-300/70 rounded-full p-1 flex items-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] mb-4 border border-slate-300/50">
              <div className="flex items-center pl-4 flex-1 gap-2.5">
                <Search className="text-slate-400 shrink-0" size={15} strokeWidth={2.5} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for in Japan?"
                  className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 font-semibold text-xs md:text-sm"
                />
              </div>

              {/* Magenta Inline Right Execution Action Trigger */}
              <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-black text-xs md:text-sm px-6 py-2.5 rounded-full hover:opacity-95 transition-all flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer mr-0.5">
                <span><Search className="text-white text-slate-900 shrink-0" size={15} strokeWidth={2.5} /> </span> 
                Search
              </button>
            </div>

            {/* BOTTOM POPULAR DIRECT METADATA ROW */}
            <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-bold text-slate-500 flex-wrap px-2">
              <div className="flex items-center gap-1.5 text-slate-500 shrink-0">
                <span className="text-sky-500 text-xs">🔘</span>
                <span>Popular:</span>
              </div>
              <div className="flex items-center gap-x-2.5 gap-y-1 flex-wrap justify-center font-medium">
                {POPULAR_SEARCHES.map((tag, idx) => (
                  <React.Fragment key={idx}>
                    <button className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer">
                      {tag}
                    </button>
                    {idx < POPULAR_SEARCHES.length - 1 && (
                      <span className="text-slate-400 font-normal select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* MIDDLE SECTION: TWO-COLUMN LAYOUT (Meet Kai & Shi + AI Chat Assistant) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1 bg-slate-100 p-6 rounded-3xl font-sans">

          {/* LEFT PANEL: MEET KAI & SHI */}
          <div className="lg:col-span-7 bg-white border border-slate-300/80 rounded-[24px] p-6 shadow-md shadow-slate-300 flex flex-col justify-between">

            {/* Header Row */}
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">Meet Kai & Shi</h3>
              <span className="text-purple-600 text-xs">✨</span>
            </div>

            {/* Inner Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">

              {/* Profile Card & Action Button Area */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                <div className="bg-slate-200 border border-slate-300 p-4 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={Profile}
                      alt="Kai Profile"
                      className="w-12 h-12 rounded-xl object-cover border border-slate-300 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="text-sm md:text-base font-extrabold text-slate-900 leading-tight">Kai</h4>
                      <p className="text-[10px] md:text-xs font-bold text-pink-600 tracking-wide uppercase">
                        AI Migration Guide
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    Expert in Visas, Jobs, Schools and everything migration.
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-xs md:text-sm px-5 py-3 rounded-full hover:opacity-95 transition-opacity shadow-md shadow-purple-100 flex items-center justify-center gap-2 cursor-pointer">
                  <MessageSquare size={14} strokeWidth={2.5} />
                  Chat with Kai
                </button>
              </div>

              {/* Right Side Main Character Graphic Block */}
              <div className="md:col-span-7 rounded-2xl overflow-hidden bg-slate-300 border border-slate-300 shadow-inner relative min-h-[180px] md:min-h-full">
                <img
                  src={KaiShi}
                  alt="Kai and Shi Banner Guide"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: AI MIGRATION ASSISTANT */}
          <div className="lg:col-span-5 bg-white border border-slate-300/80 rounded-[24px] p-5 shadow-md shadow-slate-300 flex flex-col justify-between min-h-[320px]">

            {/* Header Row */}
            <div className="border-b border-slate-300 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                    AI Migration Assistant
                    <Sparkles size={14} className="text-pink-500" />
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-0.5">Powered by Advanced AI</p>
                </div>
              </div>
            </div>

            {/* Chat Content Stream */}
            <div className="flex-grow space-y-4 my-4 overflow-y-auto pr-1 no-scrollbar flex flex-col justify-end">

              {/* User Chat Message Bubble */}
              <div className="flex justify-end">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100/60 text-purple-950 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                  How can I move to Japan?
                </div>
              </div>

              {/* Assistant Response Layout Row */}
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <img
                    src={Profile}
                    alt="Shi Profile"
                    className="w-8 h-8 rounded-full object-cover border border-slate-300 shadow-sm"
                  />
                  <span className="text-[10px] font-bold text-slate-400 mt-1">Shi</span>
                </div>
                <div className="bg-slate-200 text-slate-700 text-xs md:text-sm font-medium px-4 py-2.5 rounded-2xl rounded-tl-none border border-slate-300 leading-relaxed max-w-[82%] shadow-sm">
                  Hi! I'm Kai AI 🤖 I can help you with visas, schools, jobs, housing, and everything you need to move to Japan.
                </div>
              </div>
            </div>

            {/* Action Bottom Chat Bar Input Field */}
            <div className="pt-1">
              <div className="bg-slate-200 border border-slate-300/80 rounded-full p-1 pl-4 flex items-center gap-2 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all shadow-inner">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-slate-800 placeholder-slate-400 font-semibold"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2.5 rounded-full hover:opacity-90 shadow-sm shrink-0 cursor-pointer">
                  <Send size={13} strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: PLATFORM DESCRIPTION & METRICS INFOGRAPHIC */}
        <div className="w-full bg-slate-50 p-6 rounded-3xl space-y-6 font-sans text-slate-800 antialiased selection:bg-indigo-100">

          {/* TOP HEADER HERO BANNER SECTION*/}
          <div className="w-full bg-white border border-slate-300/80 rounded-2xl p-6 relative overflow-hidden shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-h-[160px]">

            {/* Left Side Content Area: Globe & Core Platform Intros */}
            <div className="flex items-center gap-5 max-w-xl z-10">
              {/* Globe Image Slot Shell */}
              <div className="w-20 h-20 md:w-70 md:h-70 shrink-0 rounded-full bg-indigo-50/60 flex items-center justify-center p-1 border border-indigo-100 shadow-sm">
                <GlobeSection />
              </div>

              {/* Main Titles Descriptor */}
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  What is <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Kaishi Nihon?</span>
                </h2>
                <p className="text-xs font-bold text-indigo-600 tracking-wide uppercase">
                  Revolutionary Japan Migration Platform
                </p>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                  A one-stop platform that connects you to every <br />service you need to study, work, live, and thrive in Japan.
                </p>
                <button className="text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center gap-1 cursor-pointer pt-1">
                  Learn More <span className="text-[10px]">➔</span>
                </button>
              </div>
            </div>

            {/* Center-Right Side Content Block: Platform Vital Performance Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 xl:gap-12 z-10 lg:pr-40 xl:pr-48">
              {STATS_ITEMS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Icon size={20} className={stat.iconColor} strokeWidth={2.5} />
                      <span className="text-xl md:text-2xl font-black text-slate-1000 tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[12px] font-bold text-slate-700 tracking-tight whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Absolute Floating Right Decorative Asset Slot */}
            <div className="absolute right-0 top-0 bottom-0 w-150 md:w-220 pointer-events-none z-0 select-none opacity-90">
              <img
                src={FlowerBranch}
                alt="Sakura Branch Decoration Accent"
                className="w-full h-full object-contain object-right"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 90%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, white 80%)',
                }}
              />
            </div>
          </div>

          {/* BOTTOM CORE DATA PANELS GRID (WHY JAPAN vs LIVE INSIGHTS)*/}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT COLUMN PANEL: WHY CHOOSE JAPAN & GEOGRAPHIC MAP */}
            <div className="lg:col-span-4 bg-white border border-slate-300/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[350px]">
              <div className="space-y-5 z-10 max-w-[62%] lg:max-w-full">
                <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">
                  Why <span className="text-indigo-600">Choose Japan?</span>
                </h3>

                {/* Value Statement Checklist Array */}
                <ul className="space-y-3.5">
                  {WHY_CHOOSE_POINTS.map((point, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-slate-600">
                      <CheckCircle2 size={14} className="text-purple-500 shrink-0" strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Interactive Button */}
              <div className="pt-6 z-10">
                <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-black text-xs px-5 py-2.5 rounded-full shadow-md shadow-purple-100 hover:opacity-95 transition-opacity cursor-pointer">
                  Explore Japan Map
                </button>
              </div>

              {/* Floated Map Graphic Silhouette Layer Container */}
              <div className="absolute right-[15px] bottom-18 top-4 w-[58%] pointer-events-none z-0 select-none flex items-end">
                <img
                  src={JapanMap}
                  alt="Japan Geographical Grid Boundary Layout"
                  className="w-full h-[90%] object-contain object-right-bottom"
                />
              </div>
            </div>

            {/* RIGHT COLUMN PANEL: LIVE JAPAN REALTIME INSIGHTS */}
            <div className="lg:col-span-8 bg-white border border-slate-300/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4">

              {/* Header Component Live Status Bar */}
              <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight">
                  Live <span className="text-slate-500 font-bold">Japan Insights</span>
                </h3>
              </div>

              {/* Horizontal Grid Array of Metric Insight Sub-Cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 items-stretch h-full">

                {/* SUB-CARD 1: TOKYO WEATHER */}
                <div className="bg-slate-200/50 border border-slate-300/40 rounded-xl p-3.5 flex flex-col justify-between relative shadow-inner overflow-hidden min-h-[135px]">
                  <div className="space-y-1">
                    <p className="text-[14px] font-bold text-slate-400">Weather in Tokyo</p>
                    <p className="text-xl font-black text-slate-900">24°C</p>
                    <p className="text-[10px] font-bold text-emerald-600">Sunny</p>
                  </div>
                  <button className="text-[14px] font-bold text-indigo-600 hover:underline pt-8 text-left cursor-pointer mt-auto">
                    View More
                  </button>
                  <div className="absolute right-6 bottom-20 text-amber-1000 opacity-100">
                    <CloudSun size={60} strokeWidth={1.5} />
                  </div>

                </div>

                {/* SUB-CARD 2: FOREX EXCHANGE RATES */}
                <div className="bg-slate-200/50 border border-slate-300/40 rounded-xl p-3.5 flex flex-col justify-between relative shadow-inner min-h-[135px]">
                  <div className="space-y-1">
                    <p className="text-[14px] font-bold text-slate-400">USD / JPY</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight">¥156.24</p>
                    <p className="text-[14px] font-bold text-emerald-600 absolute right-6 bottom-20 text-amber-1000 opacity-100">
                      <TrendingUp size={40} /> +0.43%
                    </p>
                  </div>
                  <button className="text-[14px] font-bold text-indigo-600 hover:underline pt-4 text-left cursor-pointer mt-auto">
                    View More
                  </button>
                </div>

                {/* SUB-CARD 3: FLIGHT DEALS META */}
                <div className="bg-slate-200/50 border border-slate-300/40 rounded-xl p-3.5 flex flex-col justify-between relative shadow-inner min-h-[135px]">
                  <div className="space-y-1">
                    <p className="text-[14px] font-bold text-slate-400">Flight Deals</p>
                    <p className="text-lg font-black text-slate-900">From $680</p>
                    <p className="text-[10px] font-semibold text-slate-500 whitespace-nowrap">NYC ⇄ Tokyo</p>
                  </div>
                  <div className="absolute right-6 bottom-20 text-indigo-900 opacity-95">
                    <PlaneTakeoff size={50} />
                  </div>
                  <button className="text-[14px] font-bold text-indigo-600 hover:underline pt-4 text-left cursor-pointer mt-auto">
                    View More
                  </button>
                </div>

                {/* SUB-CARD 4: AVAILABILITY INDEX JOBS */}
                <div className="bg-slate-200/50 border border-slate-300/40 rounded-xl p-3.5 flex flex-col justify-between relative shadow-inner min-h-[135px]">
                  <div className="space-y-1">
                    <p className="text-[14px] font-bold text-slate-400">Job Openings</p>
                    <p className="text-xl font-black text-slate-900">1,250+</p>
                    <p className="text-[10px] font-bold text-purple-600">Active listings</p>
                  </div>
                  <div className="absolute right-6 bottom-20 text-purple-600 opacity-95">
                    <Briefcase size={50} />
                  </div>
                  <button className="text-[14px] font-bold text-indigo-600 hover:underline pt-4 text-left cursor-pointer mt-auto">
                    View More
                  </button>
                </div>

                {/* SUB-CARD 5: VISA METRICS */}
                <div className="bg-slate-200/50 border border-slate-300/40 rounded-xl p-3.5 flex flex-col justify-between col-span-2 md:col-span-1 relative shadow-inner min-h-[135px]">
                  <div className="space-y-1">
                    <p className="text-[14px] font-bold text-slate-400">Visa Processing</p>
                    <p className="text-xl font-black text-slate-900">75%</p>
                    <p className="text-[9px] font-semibold text-slate-500 leading-tight">Estimated 5-7 days</p>
                  </div>
                  <div className="absolute right-6 bottom-20 text-pink-600 opacity-95">
                    <FileCheck size={50} />
                  </div>
                  <button className="text-[14px] font-bold text-indigo-600 hover:underline pt-4 text-left cursor-pointer mt-auto">
                    View More
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      <BottomeSection/>
      <SuccessSection/>
      </div>
    </div>
  );  
};

export default HomePage;