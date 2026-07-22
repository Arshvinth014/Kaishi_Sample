import React from 'react';
import heroImage from '../../assets/images/homePage/HeroSection_Light.png';
import { Briefcase, Building2, GraduationCap, Landmark, Plane } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
      <section className="relative w-full overflow-hidden overflow-x-hidden bg-slate-900 font-sans antialiased selection:bg-pink-500 selection:text-white">
      {/* 1. Base Structural Background Image Layer */}
        <div className="relative mx-auto w-full lg:max-w-none flex flex-col overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50 py-8 px-4 sm:px-6 md:px-8 lg:bg-transparent lg:p-0 lg:aspect-[1920/820]">

        {/* Desktop Background Image */}
        <img
          src={heroImage}
          alt="Japan Journey Background"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* 2. Content Overlay Layer */}
        <div className="relative lg:absolute lg:inset-0 w-full h-full flex flex-col lg:grid lg:grid-cols-12 px-0 lg:px-[5%] lg:py-[4%] gap-8 lg:gap-0 z-10">

          {/* LEFT CONTENT COLUMN */}
          <div className="w-full lg:-ml-8 lg:-mt-12 lg:col-span-4 flex flex-col justify-center z-10 text-slate-800">
            {/* Primary Catchphrase */}
            <h1 className="text-3xl md:text-5xl lg:-mt-12 lg:text-6xl font-semibold tracking-tight leading-tight">
              Your Journey to <br />
              <span className="bg-gradient-to-r text-5xl lg:text-7xl font-bold from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Japan
              </span> <br />
              Starts Here <span className="inline-block text-pink-400 text-3xl md:text-4xl align-middle">🌸</span>
            </h1>

            {/* Sub-text descriptor */}
            <p className="mt-4 text-xs md:text-sm font-bold text-slate-900 tracking-wide max-w-sm">
              AI-Powered. All-in-One. Built for Your New Life in Japan.<br />
            </p>

            {/* Pill Tags Navigation */}
            <div className="flex gap-2 pt-3">
              {[
                { icon: GraduationCap, label: 'Study' },
                { icon: Briefcase, label: 'Work' },
                { icon: Plane, label: 'Travel' },
                { icon: Building2, label: 'Live' },
                { icon: Landmark, label: 'Invest' }
              ].map((item) => (
                <button key={item.label} className="flex text-xs sm:text-sm items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white/60 border border-gray-200/80 rounded-full hover:bg-white transition-colors">
                  <item.icon size={13} /> {item.label}
                </button>
              ))}
            </div>

            {/* Primary Call to Action Controls */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-sm rounded-full shadow-lg hover:opacity-95 transition-transform transform active:scale-95 flex items-center justify-center gap-2">
                Explore Japan <span>➔</span>
              </button>
              <button className="px-6 py-3 bg-white/80 backdrop-blur-md text-slate-800 font-bold text-sm rounded-full border border-slate-200/80 shadow-sm hover:bg-white transition-all flex items-center justify-center gap-2">
                Start Your Journey <span>➔</span>
              </button>
            </div>

            {/* Explainer Link */}
            <button className="mt-5 flex items-center gap-2 text-xs font-bold text-indigo-900 hover:text-indigo-700 transition-colors w-fit">
              <span className="flex items-center justify-center w-5 h-5 bg-indigo-500 text-white rounded-full text-[10px] pl-0.5">▶</span>
              Watch How It Works
            </button>

            {/* Kai & Shi Conversation Layout Mobile Fallback */}
            <div className="flex flex-col sm:flex-row gap-4 lg:hidden mt-6 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
              <div className="space-y-1">
                <h4 className="text-sm font-black text-cyan-700">Kai</h4>
                <p className="text-xs font-bold text-slate-900 leading-normal">
                  Hey! I'll help you plan your perfect journey to Japan.
                </p>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-slate-300/60 pt-3 sm:pt-0 sm:pl-4 space-y-1">
                <h4 className="text-sm font-black text-pink-600">Shi</h4>
                <p className="text-xs font-bold text-slate-900 leading-normal">
                  Need a place to stay or explore Japan? I got you!
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP EXCLUSIVE: Kai Speech Bubble */}
          <div className="hidden lg:flex absolute top-[9%] left-[32.7%] w-[10.5%] h-[15%] flex-col justify-center p-2 text-slate-900">
            <h4 className="text-[16px] font-bold text-cyan-700 leading-tight">Kai</h4>
            <p className="text-[12.5px] font-medium leading-normal mt-2.5 max-w-[95%]">
              Hey! I'll help you plan your perfect journey to Japan.
            </p>
          </div>

          {/* DESKTOP EXCLUSIVE: Shi Speech Bubble */}
          <div className="hidden lg:flex absolute top-[9.5%] right-[7.5%] w-[10.5%] h-[15%] flex-col justify-center p-2 text-slate-800">
            <h4 className="text-[16px] font-bold text-pink-600 leading-tight">Shi</h4>
            <p className="text-[12.5px] font-medium leading-normal mt-2.5 max-w-[95%]">
              Need a place to stay or explore Japan? I got you!
            </p>
          </div>

          {/* GRID DATA BOXES CONTAINER */}
          <div className="w-full sm:max-w-xl lg:max-w-none mx-auto lg:mx-0 lg:absolute lg:top-[7%] lg:left-[53%] lg:w-[24%] lg:h-[65%] grid grid-cols-2 lg:grid-rows-3 gap-3 sm:gap-4 lg:gap-x-4 lg:gap-y-3 p-0 lg:p-3 text-slate-900">

            {/* Box 1: Flights Data */}
            <div className="flex flex-col justify-between p-4 lg:p-0 lg:py-1.5 lg:pl-4 lg:pt-4 bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[110px] lg:min-h-0">
              <div>
                <span className="text-[9px] font-extrabold tracking-wide text-slate-900 uppercase block">Flights</span>
                <span className="text-[11px] font-semibold text-slate-900 block mt-2 lg:mt-4">Tokyo (NRT)</span>
                <span className="text-[9px] font-medium text-slate-600 block">From</span>
                <span className="text-[11px] font-semibold text-slate-900 block">New York (JFK)</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-semibold mt-2 lg:mt-0">
                <span className="text-slate-600">From EW00</span>
                <span className="text-emerald-600 font-bold">$758</span>
              </div>
            </div>

            {/* Box 2: Visa Status Data */}
            <div className="flex flex-col justify-between p-4 lg:p-0 lg:py-2 lg:pl-4 lg:pt-4 lg:pr-4 relative bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[110px] lg:min-h-0">
              <div>
                <span className="text-[9px] font-extrabold tracking-wide text-slate-900 uppercase block">
                  Visa Status
                </span>
                <span className="text-[11px] font-semibold text-slate-900 block mt-2 lg:mt-4">
                  Student Visa
                </span>
                <span className="text-[12px] font-semibold text-amber-600 block mt-1 lg:mt-2">
                  Processing
                </span>
              </div>

              {/* Small Pie / Donut Chart */}
              <div className="absolute right-4 bottom-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-10 h-10 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 36 36"
                >
                  {/* Background Ring */}
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="3" />

                  {/* Progress Ring (75%) */}
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="73 100" />
                </svg>

                {/* Percentage */}
                <span className="relative z-10 text-[9px] font-bold text-slate-800">
                  75%
                </span>
              </div>
            </div>

            {/* Box 3: Weather Data */}
            <div className="flex flex-col justify-center p-4 lg:p-0 lg:pl-4 lg:pt-3 bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[90px] lg:min-h-0">
              <span className="text-[9px] font-bold tracking-wide text-slate-900 uppercase block">Weather</span>
              <span className="text-[8px] font-medium text-slate-600 block mt-0.5">Tokyo, Japan</span>
              <span className="text-2xl font-black text-slate-900 tracking-tight mt-1">24°C</span>
              <span className="text-[8px] font-semibold text-slate-600 block">Sunny</span>
            </div>

            {/* Box 4: Jobs Data */}
            <div className="flex flex-col justify-center p-4 lg:p-0 lg:pl-4 bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[90px] lg:min-h-0">
              <span className="text-[9px] font-bold tracking-wide text-slate-900 uppercase block">Jobs in Japan</span>
              <span className="text-xl font-black text-slate-900 tracking-tight mt-1 lg:mt-2">1,250+</span>
              <span className="text-[8px] font-semibold text-slate-600 block">Active Jobs</span>
            </div>

            {/* Box 5: Hotels Data */}
            <div className="flex flex-col justify-center p-4 lg:p-0 lg:pl-4 bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[90px] lg:min-h-0">
              <span className="text-[9px] font-extrabold tracking-wide text-slate-900 uppercase block">Hotels</span>
              <span className="text-xl font-black text-slate-900 tracking-tight mt-1 lg:mt-2">2,350+</span>
              <span className="text-[8px] font-semibold text-slate-600 block">Best Hotels</span>
            </div>

            {/* Box 6: AI Assistant Interaction */}
            <div className="flex flex-col justify-center p-4 lg:p-0 lg:pl-3.5 bg-white/70 lg:bg-transparent rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-white/40 lg:border-none backdrop-blur-sm lg:backdrop-blur-none min-h-[90px] lg:min-h-0">
              <span className="text-[9px] font-extrabold tracking-wide text-slate-900 uppercase block">AI Assistant</span>
              <span className="text-[11px] font-bold text-indigo-600 block mt-1 lg:mt-1.5 cursor-pointer hover:underline">
                Ask Kai Anything
              </span>
              <span className="text-[8px] font-semibold text-slate-600 block mt-0.5">I'm here to help!</span>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full h-[3px] bg-sky-200/60" />
    </section>
  );
};

export default HeroSection;