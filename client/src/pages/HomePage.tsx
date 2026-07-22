import React, { useState } from 'react';
import { Search, Send, MessageSquare } from 'lucide-react';
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
import Meow from '../assets/images/homePage/Meow.png';


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

  // return (
  //   <div>
  //     <HeroSection />
  //     <div className="w-full bg-white py-1 pt-[-300px] px-4 sm:px-6 lg:px-0 font-sans text-slate-800 antialiased">
  //       {/* SEARCH ANYTHING YOU NEED IN JAPAN */}
  //      <section className="w-full py-3 px-4 md:px-8 lg:px-20 relative overflow-hidden flex items-center justify-center min-h-[320px]">

  //         {/* LEFT SIDE*/}
  //         <div className="absolute left-[25px] bottom-12 top-0 w-[15%] max-w-[210px] hidden md:block pointer-events-none z-10 select-none">
  //           <img
  //             src={Fish}
  //             alt="Japanese Koi Fish Illustration"
  //             className="w-full h-full object-contain object-left-bottom"
  //           />
  //         </div>

  //         {/* RIGHT SIDE ARTWORK GRAPHIc*/}
  //         <div className="absolute right-[5px] bottom-15 top-3 w-[55%] max-w-[400px] hidden md:block pointer-events-none z-10 select-none">
  //           <img
  //             src={Mountain}
  //             alt="Mount Fuji Neon Landscape Wireframe"
  //             className="w-full h-full object-contain object-right-bottom"
  //           />
  //         </div>

  //         {/* CENTRAL GLASS SEARCH SHELL CONTAINER */}
  //         <div className="w-full max-w-[1020px] bg-white/80 backdrop-blur-[42px] rounded-[28px] border border-slate-400/70 p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] relative z-20 mx-auto">

  //           {/* Floating Top Heading Capsule */}
  //           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
  //             <div className="bg-slate-300/95 border border-slate-300/70 rounded-full px-6 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-2 whitespace-nowrap">
  //               <h2 className="text-[16px] md:text-[18px] font-semibold text-slate-900 tracking-wide">
  //                 Search Anything You Need <span className="text-sky-500 font-extrabold">in Japan</span>
  //                 <span className="animate-pulse"> 🌸</span>
  //               </h2>
  //             </div>
  //           </div>

  //           {/* TABS CAROUSEL NAVIGATION ROW */}
  //           <div className="w-full overflow-x-auto no-scrollbar pt-7 mb-5">
  //             <div className="flex items-center justify-between min-w-max gap-1.5 px-1">
  //               {MOCK_TABS.map((tab) => {
  //                 const Icon = tab.icon;
  //                 const isActive = activeTab === tab.id;
  //                 return (
  //                   <button
  //                     key={tab.id}
  //                     onClick={() => setActiveTab(tab.id)}
  //                     className="flex flex-col items-center gap-2 group cursor-pointer transition-all focus:outline-none"
  //                     style={{ width: '80px' }}
  //                   >
  //                     {/* Distinct Light Frame Outline */}
  //                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${isActive
  //                       ? 'bg-sky-100 border-[1.5px] border-sky-400 text-sky-600 shadow-[0_0_12px_rgba(56,189,248,0.18)]'
  //                       : 'bg-slate-300 border border-slate-400 text-slate-600 group-hover:text-slate-700 group-hover:border-slate-400'
  //                       }`}>
  //                       <Icon size={16} strokeWidth={isActive ? 2.5 : 1.8} />
  //                     </div>

  //                     {/* Text Description Segment */}
  //                     <span className={`text-[13px] font-semibold tracking-tight transition-colors duration-200 ${isActive ? 'text-sky-600' : 'text-slate-500 group-hover:text-slate-700'
  //                       }`}>
  //                       {tab.label}
  //                     </span>
  //                   </button>
  //                 );
  //               })}
  //             </div>
  //           </div>

  //           {/* INTEGRATED SEARCH PILL GRID LAYER */}
  //           <div className="w-full bg-slate-300/70 rounded-full p-1 flex items-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] mb-4 border border-slate-300/50">
  //             <div className="flex items-center pl-4 flex-1 gap-2.5">
  //               <Search className="text-slate-400 shrink-0" size={15} strokeWidth={2.5} />
  //               <input
  //                 type="text"
  //                 value={searchQuery}
  //                 onChange={(e) => setSearchQuery(e.target.value)}
  //                 placeholder="What are you looking for in Japan?"
  //                 className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 font-semibold text-xs md:text-sm"
  //               />
  //             </div>

  //             {/* Magenta Inline Right Execution Action Trigger */}
  //             <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-black text-xs md:text-sm px-6 py-2.5 rounded-full hover:opacity-95 transition-all flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer mr-0.5">
  //               <span><Search className="text-white text-slate-900 shrink-0" size={15} strokeWidth={2.5} /> </span>
  //               Search
  //             </button>
  //           </div>

  //           {/* BOTTOM POPULAR DIRECT METADATA ROW */}
  //           <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-bold text-slate-500 flex-wrap px-2">
  //             <div className="flex items-center gap-1.5 text-slate-500 shrink-0">
  //               <span className="text-sky-500 text-xs">🔘</span>
  //               <span>Popular:</span>
  //             </div>
  //             <div className="flex items-center gap-x-2.5 gap-y-1 flex-wrap justify-center font-medium">
  //               {POPULAR_SEARCHES.map((tag, idx) => (
  //                 <React.Fragment key={idx}>
  //                   <button className="text-slate-600 hover:text-sky-600 transition-colors cursor-pointer">
  //                     {tag}
  //                   </button>
  //                   {idx < POPULAR_SEARCHES.length - 1 && (
  //                     <span className="text-slate-400 font-normal select-none">•</span>
  //                   )}
  //                 </React.Fragment>
  //               ))}
  //             </div>
  //           </div>

  //         </div>
  //       </section>

  //       {/* MIDDLE SECTION: TWO-COLUMN LAYOUT (Meet Kai & Shi + AI Chat Assistant) */}
  //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1 bg-white p-6 rounded-3xl font-sans">

  //         {/* LEFT PANEL: MEET KAI & SHI */}
  //         <div className="lg:col-span-7 bg-white border border-slate-300/80 rounded-[24px] p-6 shadow-md shadow-slate-300 flex flex-col justify-between">

  //           {/* Header Row */}
  //           <div className="flex items-center gap-2 mb-5">
  //             <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">Meet Kai & Shi</h3>
  //             <span className="text-purple-600 text-xs">✨</span>
  //           </div>

  //           {/* Inner Content Grid */}
  //           <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">

  //             {/* Profile Card & Action Button Area */}
  //             <div className="md:col-span-5 flex flex-col justify-between space-y-4">
  //               <div className="bg-white border border-slate-300 p-4 rounded-2xl h-full flex flex-col justify-center shadow-sm">
  //                 <div className="flex items-center gap-3 mb-3">
  //                   <img
  //                     src={Profile}
  //                     alt="Kai Profile"
  //                     className="w-20 h-20 rounded-xl object-cover border border-slate-300 shadow-sm shrink-0"
  //                   />
  //                   <div>
  //                     <h4 className="text-sm md:text-base font-extrabold text-slate-900 leading-tight">Kai</h4>
  //                     <p className="text-[10px] md:text-xs font-bold text-pink-600 tracking-wide uppercase">
  //                       AI Migration Guide
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-bold">
  //                   Expert in Visas, Jobs, Schools and everything migration.
  //                 </p>
  //               </div>

  //               <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-xs md:text-sm px-5 py-3 rounded-full hover:opacity-95 transition-opacity shadow-md shadow-purple-100 flex items-center justify-center gap-2 cursor-pointer">
  //                 <MessageSquare size={14} strokeWidth={2.5} />
  //                 Chat with Kai
  //               </button>
  //             </div>

  //             {/* Right Side Main Character Graphic Block */}
  //             <div className="md:col-span-7 rounded-2xl overflow-hidden bg-slate-300 border border-slate-300 shadow-inner relative min-h-[180px] md:min-h-full">
  //               <img
  //                 src={KaiShi}
  //                 alt="Kai and Shi Banner Guide"
  //                 className="w-full h-full object-cover object-center"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
  //             </div>
  //           </div>

  //         </div>

  //         {/* RIGHT PANEL: AI MIGRATION ASSISTANT */}
  //         <div className="lg:col-span-5 bg-white border border-slate-300/80 rounded-[24px] p-5 shadow-md shadow-slate-300 flex flex-col justify-between min-h-[320px]">

  //           {/* Header Row matched to Image */}
  //           <div className="border-b border-slate-200 pb-3">
  //             <div className="flex items-center justify-between">
  //               <div>
  //                 <h3 className="text-base md:text-lg font-extrabold text-[#855B9E] tracking-tight flex items-center gap-1.5">
  //                   Meow - Your Japan Guide 🐱
  //                   <span className="text-[#B392CD] text-sm">✨</span>
  //                 </h3>
  //                 <p className="text-[11px] text-slate-500 font-bold mt-0.5">Powered by Meow AI & Local Knowledge</p>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Chat Content Stream with Soft Tint Lavender Canvas */}
  //           <div className="flex-grow my-3 bg-[#F5F3F8]/70 rounded-2xl p-3 overflow-y-auto no-scrollbar flex flex-col justify-end space-y-3">

  //             {/* User Chat Message Bubble */}
  //             <div className="flex justify-end">
  //               <div className="bg-[#966FB3] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-2xl rounded-tr-none max-w-[95%] shadow-sm">
  //                 How can I move to Japan?
  //               </div>
  //             </div>

  //             {/* Character Illustration & Response Layout Side-by-Side */}
  //             <div className="flex items-end gap-1 relative pt-[-10]">
  //               {/* Waving Meow Character Asset */}
  //               <div className="w-[20%] shrink-0 select-none pointer-events-none">
  //                 <img
  //                   src={Meow}
  //                   alt="Meow AI Cat Assistant Illustration"
  //                   className="w-full h-auto object-contain transform translate-y-1"
  //                 />
  //               </div>

  //               {/* Meow Speech Bubble with Premium Soft Purple Outline shadow */}
  //               <div className="bg-white border border-[#E6E1ED] shadow-[0_4px_16px_rgba(150,111,179,0.12)] rounded-2xl rounded-bl-none p-3 text-[11px] md:text-xs text-slate-800 font-bold leading-relaxed relative">
  //                 <p className="mb-1">
  //                   Meow! Hi, I'm Meow. I'm based on Japan's luckiest maneki-neko! I can help you with visas, schools, jobs, housing, and move to Japan's priority?
  //                 </p>
  //                 <span className="text-slate-400 block text-right text-[10px]">🐾</span>
  //               </div>
  //             </div>

  //           </div>

  //           {/* Action Bottom Chat Bar Input Field */}
  //           <div className="pt-1">
  //             <div className="bg-white border border-slate-400 rounded-full p-1 pl-4 flex items-center gap-2 focus-within:border-[#966FB3]/60 focus-within:ring-2 focus-within:ring-[#966FB3]/10 transition-all shadow-sm">
  //               <input
  //                 type="text"
  //                 placeholder="Ask anything..."
  //                 value={chatInput}
  //                 onChange={(e) => setChatInput(e.target.value)}
  //                 className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-slate-700 placeholder-slate-400 font-medium"
  //               />

  //               {/* Action Tray Indicator Node Elements */}
  //               <div className="flex items-center gap-2 pr-1 shrink-0">
  //                 <span className="text-slate-300 text-sm select-none">🐾</span>

  //                 {/* Vibrant Matching Purple-Pink Radial Gradient Action Button */}
  //                 <button className="bg-gradient-to-r from-[#D434B1] to-[#9C27B0] text-white p-2 rounded-full hover:opacity-95 shadow-sm transition-opacity flex items-center justify-center cursor-pointer">
  //                   <Send size={13} strokeWidth={2.5} className="transform translate-x-[0.5px] -translate-y-[0.5px]" />
  //                 </button>
  //               </div>
  //             </div>
  //           </div>

  //         </div>
  //       </div>

  //       {/* BOTTOM SECTION: PLATFORM DESCRIPTION & METRICS INFOGRAPHIC */}
  //       <div className="w-full bg-white p-6 rounded-3xl space-y-6 font-sans text-slate-800 antialiased selection:bg-indigo-100">

  //         {/* TOP HEADER HERO BANNER SECTION */}
  //         <div className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-white p-5 md:p-7 shadow-sm min-h-[240px]">
  //           <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 relative z-10">

  //             {/* Left Side Content Area: Globe & Core Platform Intros */}
  //             <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 flex-1">

  //               {/* Globe Image Slot Shell */}
  //               <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 shrink-0 rounded-full bg-indigo-50/60 border border-indigo-100 shadow-sm flex items-center justify-center p-2">
  //                 <GlobeSection />
  //               </div>
  //               {/* Main Titles Descriptor */}
  //               <div className="flex-1 max-w-xl text-center sm:text-left space-y-3">

  //                 <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight">
  //                   What is{" "}
  //                   <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
  //                     Kaishi Nihon?
  //                   </span>
  //                 </h2>

  //                 <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
  //                   Revolutionary Japan Migration Platform
  //                 </p>

  //                 <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">
  //                   A one-stop platform that connects you to every service you need to
  //                   study, work, live, and thrive in Japan.
  //                 </p>

  //                 <button className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-purple-600 transition-colors hover:text-purple-700 cursor-pointer">
  //                   Learn More
  //                   <span>➜</span>
  //                 </button>

  //               </div>
  //             </div>

  //             {/* Center-Right Side Content Block: Platform Vital Performance Stats */}
  //             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 xl:pr-28">

  //               {STATS_ITEMS.map((stat, idx) => {
  //                 const Icon = stat.icon;

  //                 return (
  //                   <div
  //                     key={idx}
  //                     className="rounded-xl bg-white/70 backdrop-blur-sm p-3 transition-all hover:shadow-md"
  //                   >
  //                     <div className="flex items-center gap-2">
  //                       <Icon
  //                         size={22}
  //                         className={stat.iconColor}
  //                         strokeWidth={2.5}
  //                       />

  //                       <span className="text-2xl font-black tracking-tight text-slate-900">
  //                         {stat.value}
  //                       </span>
  //                     </div>

  //                     <p className="mt-2 text-xs font-bold tracking-wide text-slate-600">
  //                       {stat.label}
  //                     </p>
  //                   </div>
  //                 );
  //               })}

  //             </div>

  //           </div>

  //           {/* Absolute Floating Right Decorative Asset Slot */}
  //           <div className="absolute right-0 top-0 bottom-0 w-[260px] md:w-[380px] lg:w-[900px] pointer-events-none select-none opacity-90 z-0">
  //             <img
  //               src={FlowerBranch}
  //               alt="Sakura Branch Decoration Accent"
  //               className="w-full h-full object-contain object-right"
  //               style={{
  //                 WebkitMaskImage:
  //                   "linear-gradient(to right, transparent 0%, white 90%)",
  //                 maskImage:
  //                   "linear-gradient(to right, transparent 0%, white 80%)",
  //               }}
  //             />
  //           </div>
  //         </div>

  //         {/* BOTTOM CORE DATA PANELS GRID (WHY JAPAN vs LIVE INSIGHTS)*/}
  //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

  //           {/* LEFT COLUMN PANEL: WHY CHOOSE JAPAN & GEOGRAPHIC MAP */}
  //           <div className="lg:col-span-4 bg-white border border-slate-300/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[350px]">
  //             <div className="space-y-5 z-10 max-w-[62%] lg:max-w-full">
  //               <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">
  //                 Why <span className="text-indigo-600">Choose Japan?</span>
  //               </h3>

  //               {/* Value Statement Checklist Array */}
  //               <ul className="space-y-3.5">
  //                 {WHY_CHOOSE_POINTS.map((point, index) => (
  //                   <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-slate-600">
  //                     <CheckCircle2 size={14} className="text-purple-500 shrink-0" strokeWidth={2.5} />
  //                     <span>{point}</span>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>

  //             {/* Action Trigger Interactive Button */}
  //             <div className="pt-6 z-10">
  //               <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-black text-xs px-5 py-2.5 rounded-full shadow-md shadow-purple-100 hover:opacity-95 transition-opacity cursor-pointer">
  //                 Explore Japan Map
  //               </button>
  //             </div>

  //             {/* Floated Map Graphic Silhouette Layer Container */}
  //             <div className="absolute right-[15px] bottom-18 top-4 w-[58%] pointer-events-none z-0 select-none flex items-end">
  //               <img
  //                 src={JapanMap}
  //                 alt="Japan Geographical Grid Boundary Layout"
  //                 className="w-full h-[90%] object-contain object-right-bottom"
  //               />
  //             </div>
  //           </div>

  //           {/* RIGHT COLUMN PANEL: LIVE JAPAN REALTIME INSIGHTS */}
  //           <div className="lg:col-span-8 bg-white border border-slate-300/80 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-5">

  //             {/* Header Component Live Status Bar */}
  //             <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
  //               <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
  //               <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">
  //                 Live <span className="text-slate-500 font-bold">Japan Insights</span>
  //               </h3>
  //             </div>

  //             {/* Horizontal Grid Array of Metric Insight Sub-Cards */}
  //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

  //               {/* SUB-CARD 1: TOKYO WEATHER */}
  //               <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

  //                 <div>
  //                   <p className="text-sm font-bold text-slate-500">
  //                     Weather in Tokyo
  //                   </p>

  //                   <p className="mt-2 text-3xl font-black text-slate-900">
  //                     24°C
  //                   </p>

  //                   <p className="mt-1 text-sm font-bold text-emerald-600">
  //                     Sunny
  //                   </p>
  //                 </div>

  //                 {/* Fixed: Positioned relative to bottom instead of absolute pixel top */}
  //                 <div className="absolute bottom-4 right-4 text-amber-500 opacity-90">
  //                   <CloudSun size={48} strokeWidth={1.6} />
  //                 </div>

  //                 <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
  //                   View More
  //                 </button>

  //               </div>

  //               {/* SUB-CARD 2: FOREX */}
  //               <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

  //                 <div>
  //                   <p className="text-sm font-bold text-slate-500">
  //                     USD / JPY
  //                   </p>

  //                   <p className="mt-2 text-2xl font-black text-slate-900">
  //                     ¥156.24
  //                   </p>

  //                   <div className="flex items-center gap-1 mt-2 text-emerald-600 font-bold text-sm">
  //                     <TrendingUp size={18} />
  //                     +0.43%
  //                   </div>
  //                 </div>

  //                 <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left">
  //                   View More
  //                 </button>

  //               </div>

  //               {/* SUB-CARD 3: FLIGHTS */}
  //               <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

  //                 <div>
  //                   <p className="text-sm font-bold text-slate-500">
  //                     Flight Deals
  //                   </p>

  //                   <p className="mt-2 text-2xl font-black text-slate-900">
  //                     From $680
  //                   </p>

  //                   <p className="mt-1 text-sm text-slate-500">
  //                     NYC ⇄ Tokyo
  //                   </p>
  //                 </div>

  //                 {/* Fixed: Positioned relative to bottom instead of absolute pixel top */}
  //                 <div className="absolute bottom-4 right-4 text-indigo-600">
  //                   <PlaneTakeoff size={42} />
  //                 </div>

  //                 <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
  //                   View More
  //                 </button>

  //               </div>

  //               {/* SUB-CARD 4: JOBS */}
  //               <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[240px]">

  //                 <div>
  //                   <p className="text-sm font-bold text-slate-500">
  //                     Job Openings
  //                   </p>

  //                   <p className="mt-2 text-3xl font-black text-slate-900">
  //                     1,250+
  //                   </p>

  //                   <p className="mt-1 text-sm font-bold text-purple-600">
  //                     Active listings
  //                   </p>
  //                 </div>

  //                 {/* Fixed: Positioned relative to bottom instead of absolute pixel top */}
  //                 <div className="absolute bottom-4 right-4 text-purple-600">
  //                   <Briefcase size={42} />
  //                 </div>

  //                 <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
  //                   View More
  //                 </button>

  //               </div>

  //               {/* SUB-CARD 5: VISA */}
  //               <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

  //                 <div>
  //                   <p className="text-sm font-bold text-slate-500">
  //                     Visa Processing
  //                   </p>

  //                   <p className="mt-2 text-3xl font-black text-slate-900">
  //                     75%
  //                   </p>

  //                   <p className="mt-1 text-sm text-slate-500">
  //                     Estimated 5-7 days
  //                   </p>
  //                 </div>

  //                 {/* Fixed: Positioned relative to bottom instead of absolute pixel top */}
  //                 <div className="absolute bottom-4 right-4 text-pink-600">
  //                   <FileCheck size={42} />
  //                 </div>

  //                 <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
  //                   View More
  //                 </button>

  //               </div>

  //             </div>

  //           </div>

  //         </div>

  //       </div>
  //       <BottomeSection />
  //       <SuccessSection />
  //     </div>
  //   </div>
  // );

  return (
  <div>
    <HeroSection />
    <div className="w-full lg:max-w-[1440px] lg:mx-auto lg:px-8 xl:px-16 transition-all duration-300">
      
      <div className="w-full bg-white py-1 pt-[-300px] px-4 sm:px-6 lg:px-0 font-sans text-slate-800 antialiased">
        {/* SEARCH ANYTHING YOU NEED IN JAPAN */}
        <section className="w-full py-3 px-4 md:px-8 lg:px-20 relative overflow-hidden flex items-center justify-center min-h-[320px]">

          {/* LEFT SIDE*/}
          <div className="absolute left-[-15px] bottom-12 top-0 w-[15%] max-w-[210px] hidden md:block pointer-events-none z-10 select-none">
            <img
              src={Fish}
              alt="Japanese Koi Fish Illustration"
              className="w-full h-full object-contain object-left-bottom"
            />
          </div>

          {/* RIGHT SIDE ARTWORK GRAPHIC*/}
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
                <span><Search className="text-white shrink-0" size={15} strokeWidth={2.5} /> </span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1 bg-white p-6 rounded-3xl font-sans">

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
                <div className="bg-white border border-slate-300 p-4 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={Profile}
                      alt="Kai Profile"
                      className="w-20 h-20 rounded-xl object-cover border border-slate-300 shadow-sm shrink-0"
                    />
                    <div>
                      <h4 className="text-sm md:text-base font-extrabold text-slate-900 leading-tight">Kai</h4>
                      <p className="text-[10px] md:text-xs font-bold text-pink-600 tracking-wide uppercase">
                        AI Migration Guide
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-bold">
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

            {/* Header Row matched to Image */}
            <div className="border-b border-slate-200 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-extrabold text-[#855B9E] tracking-tight flex items-center gap-1.5">
                    Meow - Your Japan Guide 🐱
                    <span className="text-[#B392CD] text-sm">✨</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-bold mt-0.5">Powered by Meow AI & Local Knowledge</p>
                </div>
              </div>
            </div>

            {/* Chat Content Stream with Soft Tint Lavender Canvas */}
            <div className="flex-grow my-3 bg-[#F5F3F8]/70 rounded-2xl p-3 overflow-y-auto no-scrollbar flex flex-col justify-end space-y-3">

              {/* User Chat Message Bubble */}
              <div className="flex justify-end">
                <div className="bg-[#966FB3] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-2xl rounded-tr-none max-w-[95%] shadow-sm">
                  How can I move to Japan?
                </div>
              </div>

              {/* Character Illustration & Response Layout Side-by-Side */}
              <div className="flex items-end gap-1 relative pt-[-10]">
                {/* Waving Meow Character Asset */}
                <div className="w-[20%] shrink-0 select-none pointer-events-none">
                  <img
                    src={Meow}
                    alt="Meow AI Cat Assistant Illustration"
                    className="w-full h-auto object-contain transform translate-y-1"
                  />
                </div>

                {/* Meow Speech Bubble with Premium Soft Purple Outline shadow */}
                <div className="bg-white border border-[#E6E1ED] shadow-[0_4px_16px_rgba(150,111,179,0.12)] rounded-2xl rounded-bl-none p-3 text-[11px] md:text-xs text-slate-800 font-bold leading-relaxed relative">
                  <p className="mb-1">
                    Meow! Hi, I'm Meow. I'm based on Japan's luckiest maneki-neko! I can help you with visas, schools, jobs, housing, and move to Japan's priority?
                  </p>
                  <span className="text-slate-400 block text-right text-[10px]">🐾</span>
                </div>
              </div>

            </div>

            {/* Action Bottom Chat Bar Input Field */}
            <div className="pt-1">
              <div className="bg-white border border-slate-400 rounded-full p-1 pl-4 flex items-center gap-2 focus-within:border-[#966FB3]/60 focus-within:ring-2 focus-within:ring-[#966FB3]/10 transition-all shadow-sm">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-slate-700 placeholder-slate-400 font-medium"
                />

                {/* Action Tray Indicator Node Elements */}
                <div className="flex items-center gap-2 pr-1 shrink-0">
                  <span className="text-slate-300 text-sm select-none">🐾</span>

                  {/* Vibrant Matching Purple-Pink Radial Gradient Action Button */}
                  <button className="bg-gradient-to-r from-[#D434B1] to-[#9C27B0] text-white p-2 rounded-full hover:opacity-95 shadow-sm transition-opacity flex items-center justify-center cursor-pointer">
                    <Send size={13} strokeWidth={2.5} className="transform translate-x-[0.5px] -translate-y-[0.5px]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: PLATFORM DESCRIPTION & METRICS INFOGRAPHIC */}
        <div className="w-full bg-white p-6 rounded-3xl space-y-6 font-sans text-slate-800 antialiased selection:bg-indigo-100">

          {/* TOP HEADER HERO BANNER SECTION */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-white p-5 md:p-7 shadow-sm min-h-[240px]">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 relative z-10">

              {/* Left Side Content Area: Globe & Core Platform Intros */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 flex-1">

                {/* Globe Image Slot Shell */}
                <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-85 lg:h-80 lg:ml-[-15px] shrink-0 rounded-full bg-indigo-50/60 border border-indigo-100 shadow-sm flex items-center justify-center p-2">
                  <GlobeSection />
                </div>
                {/* Main Titles Descriptor */}
                <div className="flex-1 lg:w-50 max-w-xl text-center sm:text-left space-y-3">

                  <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                    What is{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Kaishi Nihon?
                    </span>
                  </h2>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                    Revolutionary Japan Migration Platform
                  </p>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">
                    A one-stop platform that connects you to every service you need to
                    study, work, live, and thrive in Japan.
                  </p>

                  <button className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-purple-600 transition-colors hover:text-purple-700 cursor-pointer">
                    Learn More
                    <span>➜</span>
                  </button>

                </div>
              </div>

              {/* Center-Right Side Content Block: Platform Vital Performance Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 xl:pr-28">

                {STATS_ITEMS.map((stat, idx) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl bg-white/70 lg:mr-[-35px] backdrop-blur-sm p-2 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-1">
                        <Icon
                          size={20}
                          className={stat.iconColor}
                          strokeWidth={2.5}
                        />

                        <span className="text-2xl font-black tracking-tight text-slate-900">
                          {stat.value}
                        </span>
                      </div>

                      <p className="mt-2 text-xs font-bold tracking-wide text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}

              </div>

            </div>

            {/* Absolute Floating Right Decorative Asset Slot */}
            <div className="absolute right-0 top-0 bottom-0 w-[260px] md:w-[380px] lg:w-[900px] pointer-events-none select-none opacity-90 z-0">
              <img
                src={FlowerBranch}
                alt="Sakura Branch Decoration Accent"
                className="w-full h-full object-contain object-right"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, white 90%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, white 80%)",
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
            <div className="lg:col-span-8 bg-white border border-slate-300/80 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-5">

              {/* Header Component Live Status Bar */}
              <div className="flex items-center gap-2 border-b border-slate-300 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight">
                  Live <span className="text-slate-500 font-bold">Japan Insights</span>
                </h3>
              </div>

              {/* Horizontal Grid Array of Metric Insight Sub-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                {/* SUB-CARD 1: TOKYO WEATHER */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Weather in Tokyo
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      24°C
                    </p>

                    <p className="mt-1 text-sm font-bold text-emerald-600">
                      Sunny
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 lg:mb-[20px] text-amber-500 opacity-90">
                    <CloudSun size={48} strokeWidth={1.6} />
                  </div>

                  <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
                    View More
                  </button>

                </div>

                {/* SUB-CARD 2: FOREX */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      USD / JPY
                    </p>

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      ¥156.24
                    </p>

                    <div className="flex items-center gap-1 mt-2 text-emerald-600 font-bold text-sm">
                      <TrendingUp size={18} />
                      +0.43%
                    </div>
                  </div>

                  <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left">
                    View More
                  </button>

                </div>

                {/* SUB-CARD 3: FLIGHTS */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Flight Deals
                    </p>

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      From $680
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      NYC ⇄ Tokyo
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 lg:mb-[20px] text-indigo-600">
                    <PlaneTakeoff size={42} />
                  </div>

                  <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
                    View More
                  </button>

                </div>

                {/* SUB-CARD 4: JOBS */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[240px]">

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Job Openings
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      1,250+
                    </p>

                    <p className="mt-1 text-sm font-bold text-purple-600">
                      Active listings
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 lg:mb-[20px] text-purple-600">
                    <Briefcase size={42} />
                  </div>

                  <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
                    View More
                  </button>

                </div>

                {/* SUB-CARD 5: VISA */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative shadow-sm min-h-[180px]">

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Visa Processing
                    </p>

                    <p className="mt-2 text-3xl font-black text-slate-900">
                      75%
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Estimated 5-7 days
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 lg:mb-[20px] text-pink-600">
                    <FileCheck size={42} />
                  </div>

                  <button className="mt-8 text-sm font-bold text-indigo-600 hover:underline text-left z-10">
                    View More
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
        <BottomeSection />
        <SuccessSection />
      </div>

    </div>
  </div>
);

};

export default HomePage;