import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { DESTINATIONS, LUXURY_HOTELS, BUDGET_PROPERTIES, SERVICES } from '../../mockdata/HomePage';
import CharacterImage from '../../assets/images/homePage/Characters_Light.png';
import Job from '../../assets/images/homePage/Job.png';
import School from '../../assets/images/homePage/School.png';

const BottomSection: React.FC = () => {
    return (
        <div className="w-full bg-slate-50/40 py-1 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* EXPLORE TOP DESTINATIONS SECTION */}
                <div className="p-[1px] bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 rounded-3xl shadow-md shadow-slate-100/80">
                    <div className="bg-white/90 backdrop-blur-md rounded-[23px] p-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
                            <h2 className="text-xl font-extrabold text-slate-950 tracking-tight">
                                Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Top Destinations</span> in Japan
                            </h2>
                            <button className="w-full sm:w-auto text-center text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-all">
                                View All Destinations
                            </button>
                        </div>

                        {/* Destinations Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {DESTINATIONS.map((dest) => (
                                <div key={dest.id} className="group relative rounded-2xl overflow-hidden h-44 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-3 text-white">
                                        <h3 className="font-bold text-sm leading-tight">{dest.name}</h3>
                                        <p className="text-[10px] text-slate-300 font-medium mb-1.5 opacity-90">{dest.tagline}</p>
                                        <div className="flex items-center justify-between text-[9px] text-slate-200 border-t border-white/10 pt-1.5 font-medium">
                                            <span>☀️ {dest.temp}</span>
                                            <span>🏢 {dest.hotelsCount}</span>
                                        </div>
                                    </div>
                                    <button className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                        <ArrowRight size={12} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* HOTELS & PROPERTIES ROW (WITH CHARACTER OVERLAY) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">

                    {/* Left Column: Top Luxury Hotels */}
                    <div className="lg:col-span-6 p-[1px] bg-gradient-to-b from-blue-400/20 to-purple-400/20 rounded-3xl shadow-md shadow-slate-100/80">
                        <div className="bg-white/95 rounded-[23px] p-5 h-full">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h2 className="text-base font-extrabold text-slate-950 tracking-tight">
                                    Top Luxury <span className="text-blue-600 font-black">5-star Hotels</span> in Japan
                                </h2>
                                <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 self-start sm:self-auto">
                                    View All <ArrowRight size={12} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {LUXURY_HOTELS.map((hotel) => (
                                    <div key={hotel.id} className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                                        <div className="relative h-24 bg-slate-200">
                                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-2.5 flex-grow flex flex-col justify-between space-y-1">
                                            <div>
                                                <h4 className="font-bold text-xs text-slate-950 truncate">{hotel.name}</h4>
                                                <span className="text-[10px] font-semibold text-slate-400">{hotel.location}</span>
                                            </div>
                                            <div className="pt-1 border-t border-slate-200/60 flex items-center justify-between">
                                                <div className="flex items-center text-[10px] text-amber-500 font-bold gap-0.5">
                                                    <Star size={10} fill="currentColor" /> {hotel.rating}
                                                </div>
                                                <span className="text-xs font-extrabold text-blue-600">{hotel.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Budget Properties */}
                    <div className="lg:col-span-6 p-[1px] bg-gradient-to-b from-cyan-400/20 to-blue-400/20 rounded-3xl shadow-md shadow-slate-100/80 relative overflow-visible">
                        <div className="bg-white/95 rounded-[23px] p-5 h-full pr-6 lg:pr-10 relative">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h2 className="text-base font-extrabold text-slate-950 tracking-tight">
                                    Budget-friendly Properties <span className="text-cyan-600 font-black">in Japan</span>
                                </h2>
                                <button className="text-xs font-bold text-cyan-600 hover:underline flex items-center gap-1 self-start sm:self-auto">
                                    View All <ArrowRight size={12} />
                                </button>
                            </div>

                            {/* Grid updated to 4 columns to match the 4 items shown in the image */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                                {BUDGET_PROPERTIES.slice(0, 4).map((prop) => (
                                    <div key={prop.id} className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                                        <div className="relative h-24 bg-slate-200">
                                            <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-2.5 flex-grow flex flex-col justify-between space-y-1">
                                            <div>
                                                <h4 className="font-bold text-xs text-slate-950 truncate">{prop.name}</h4>
                                                <span className="text-[10px] font-semibold text-slate-400">{prop.location}</span>
                                            </div>
                                            <div className="pt-1 border-t border-slate-200/60 flex items-center justify-between">
                                                <div className="flex items-center text-[10px] text-amber-500 font-bold gap-0.5">
                                                    <Star size={10} fill="currentColor" /> {prop.rating}
                                                </div>
                                                <span className="text-xs font-extrabold text-cyan-600">{prop.pricePerMonth}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mascot Character Image Overlay (Kai & Shi) */}
                            <div className="absolute bottom-[-310px] right-[-70px] z-30 pointer-events-none hidden sm:block w-[70px] h-[100px] xl:w-90 xl:h-110">
                                <img
                                    src={CharacterImage}
                                    alt="Kai and Shi Characters"
                                    className="w-full h-full object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM ROW: SCHOOLS, JOBS & SERVICES BLOCK */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 relative items-stretch">

                    {/* Card: Find Your School */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden relative shadow-md shadow-slate-300/80 min-h-[220px] group border border-slate-200/60">
                        <img
                            src={School}
                            alt="School BG"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/20 p-5 flex flex-col justify-between text-white z-10">
                            <div>
                                <h3 className="text-base font-extrabold tracking-tight flex items-center gap-1">
                                    🎓 Find <span className="text-blue-400">Your School</span>
                                </h3>
                                <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">
                                    Top universities & language schools in Japan.
                                </p>
                            </div>
                            <button className="w-35 mb-30 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all self-start">
                                Explore Schools
                            </button>
                        </div>
                    </div>

                    {/* Card: Find Your Job */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden relative shadow-md shadow-slate-100/80 min-h-[220px] group border border-slate-200/60">
                        <img
                            src={Job}
                            alt="Job BG"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/20 p-5 flex flex-col justify-between text-white z-10">
                            <div>
                                <h3 className="text-base font-extrabold tracking-tight flex items-center gap-1">
                                    💼 Find <span className="text-pink-400">Your Job</span>
                                </h3>
                                <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">
                                    Explore top companies hiring in Japan.
                                </p>
                            </div>
                            <button className="w-35 mb-30 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all self-start">
                                Explore Jobs
                            </button>
                        </div>
                    </div>

                    {/* Card: Our Services (With Lower Main Characters Overlay) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-5 p-[1px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl shadow-md shadow-slate-100/80 relative overflow-hidden lg:overflow-visible">
                        <div className="bg-white/95 rounded-[23px] p-5 h-full flex flex-col justify-between pr-6 lg:pr-40">

                            <div>
                                <h3 className="text-base font-extrabold text-slate-950 tracking-tight mb-4">
                                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                                </h3>

                                {/* Services Icon Grid Layout */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                                    {SERVICES.map((srv, idx) => {
                                        const Icon = srv.icon;
                                        return (
                                            <div key={idx} className="flex flex-col items-center text-center space-y-1 group">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-purple-600 flex items-center justify-center shadow-sm group-hover:bg-purple-50 group-hover:text-purple-700 transition-all">
                                                    <Icon size={16} />
                                                </div>
                                                <span className="text-[9px] font-bold text-slate-600 tracking-tight leading-tight max-w-[64px]">
                                                    {srv.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="pt-4 relative z-10">
                                <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all">
                                    View All Services
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BottomSection;