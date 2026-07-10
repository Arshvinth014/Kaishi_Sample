import React from 'react';
import heroImage from '../../assets/images/homePage/HeroSection_Light.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 font-sans antialiased selection:bg-pink-500 selection:text-white">
      {/* 1. Base Structural Background Image Layer */}
      <div className="relative mx-auto max-w-[1920px] aspect-[1920/820] w-full">
        <img 
          src={heroImage} 
          alt="Japan Journey Background" 
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* 2. Content Overlay Layer (Matches 1:1 with visual grid coordinates) */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-12 px-[5%] py-[4%]">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="col-span-4 flex flex-col justify-center z-10 text-slate-900">
            {/* Primary Catchphrase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Your Journey to <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Japan
              </span> <br />
              Starts Here <span className="inline-block text-pink-400 text-3xl md:text-4xl align-middle">🌸</span>
            </h1>

            {/* Sub-text descriptor */}
            <p className="mt-4 text-xs md:text-sm font-medium text-slate-600 tracking-wide max-w-sm">
              AI-Powered. All-in-One. Built for Your New Life in Japan.
            </p>

            {/* Pill Tags Navigation */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] md:text-xs font-semibold text-slate-700">
              {['Study 🎓', 'Work 💼', 'Travel ✈️', 'Live 🏠', 'Invest 📈'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Call to Action Controls */}
            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-sm rounded-full shadow-lg hover:opacity-95 transition-transform transform active:scale-95 flex items-center gap-2">
                Explore Japan <span>➔</span>
              </button>
              <button className="px-6 py-3 bg-white/80 backdrop-blur-md text-slate-800 font-bold text-sm rounded-full border border-slate-200/80 shadow-sm hover:bg-white transition-all flex items-center gap-2">
                Start Your Journey <span>➔</span>
              </button>
            </div>

            {/* Explainer Link */}
            <button className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors w-fit">
              <span className="flex items-center justify-center w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full text-[10px]">▶</span>
              Watch How It Works
            </button>
          </div>

          {/* ================= CHARACTER CHAT TEXT OVERLAYS ================= */}
          {/* Kai Speech Bubble (Left Character) */}
          <div className="absolute top-[11.5%] left-[32.7%] w-[10.5%] h-[15%] flex flex-col justify-center p-2 text-slate-800">
            <h4 className="text-[11px] font-bold text-cyan-600 leading-tight">Kai</h4>
            <p className="text-[9px] font-medium leading-normal mt-0.5 max-w-[95%]">
              Hey! I'll help you plan your perfect journey to Japan.
            </p>
          </div>

          {/* Shi Speech Bubble (Right Character) */}
          <div className="absolute top-[11.5%] right-[11.2%] w-[10.5%] h-[15%] flex flex-col justify-center p-2 text-slate-800">
            <h4 className="text-[11px] font-bold text-pink-600 leading-tight">Shi</h4>
            <p className="text-[9px] font-medium leading-normal mt-0.5 max-w-[95%]">
              Need a place to stay or explore Japan? I got you!
            </p>
          </div>

          {/* ================= DASHBOARD GLASS WIDGET OVERLAYS ================= */}
          {/* Grid bounds aligned explicitly over the center template container */}
          <div className="absolute top-[9.5%] left-[52.5%] w-[26.5%] h-[68%] grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-3 p-4 text-slate-800">
            
            {/* Box 1: Flights Data */}
            <div className="flex flex-col justify-between py-1.5 pl-2 pr-1">
              <div>
                <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">Flights</span>
                <span className="text-[11px] font-extrabold text-slate-900 block mt-1">Tokyo (NRT)</span>
                <span className="text-[9px] font-medium text-slate-400 block">From</span>
                <span className="text-[11px] font-extrabold text-slate-900 block">New York (JFK)</span>
              </div>
              <div className="flex justify-between items-center text-[9px] mt-1 font-semibold">
                <span className="text-slate-400">From EW00</span>
                <span className="text-emerald-600 font-bold">$758</span>
              </div>
            </div>

            {/* Box 2: Visa Status Data */}
            <div className="flex flex-col justify-between py-1.5 pl-2 pr-4 relative">
              <div>
                <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">Visa Status</span>
                <span className="text-[11px] font-extrabold text-slate-900 block mt-2">Student Visa</span>
                <span className="text-[9px] font-semibold text-amber-600 block mt-0.5">Processing</span>
              </div>
              {/* Radial placeholder offset layout matching the 75% ring position */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[10px] font-bold text-slate-800">
                75%
              </div>
            </div>

            {/* Box 3: Weather Data */}
            <div className="flex flex-col justify-center pl-2">
              <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">Weather</span>
              <span className="text-[8px] font-medium text-slate-400 block mt-0.5">Tokyo, Japan</span>
              <span className="text-2xl font-black text-slate-900 tracking-tight mt-1">24°C</span>
              <span className="text-[8px] font-semibold text-slate-500 block">Sunny</span>
            </div>

            {/* Box 4: Jobs Data */}
            <div className="flex flex-col justify-center pl-2">
              <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">Jobs in Japan</span>
              <span className="text-xl font-black text-slate-900 tracking-tight mt-2">1,250+</span>
              <span className="text-[8px] font-semibold text-slate-400 block">Active Jobs</span>
            </div>

            {/* Box 5: Hotels Data */}
            <div className="flex flex-col justify-center pl-2">
              <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">Hotels</span>
              <span className="text-xl font-black text-slate-900 tracking-tight mt-2">2,350+</span>
              <span className="text-[8px] font-semibold text-slate-400 block">Best Hotels</span>
            </div>

            {/* Box 6: AI Assistant Interaction */}
            <div className="flex flex-col justify-center pl-2">
              <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase block">AI Assistant</span>
              <span className="text-[11px] font-extrabold text-indigo-600 block mt-1.5 cursor-pointer hover:underline">
                Ask Kai Anything
              </span>
              <span className="text-[8px] font-semibold text-slate-400 block mt-0.5">I'm here to help!</span>
            </div>

          </div>

          {/* ================= TRUSTED PARTNERS LABEL OVERLAY ================= */}
          <div className="absolute bottom-[5.5%] left-[4.8%] w-[10%] h-[6%] flex items-center">
            <p className="text-[10px] md:text-xs font-bold text-slate-500 leading-tight tracking-wide">
              Trusted by Leading<br />Partners Worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;