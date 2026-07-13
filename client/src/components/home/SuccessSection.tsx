import React from 'react';
import { ArrowRight, Play, Star, Check } from 'lucide-react';
import { SUCCESS_STORIES, USER_REVIEWS, CHAT_EXCHANGES } from '../../mockdata/HomePage';
import Building from '../../assets/images/homePage/Buildings.png';
import FlowerFall from '../../assets/images/homePage/FlowerFall.png';
import Kai from '../../assets/images/homePage/Profile.png';
import Shi from '../../assets/images/homePage/Shii.png';

const SuccessSection: React.FC = () => {
    const profileImages = [Kai, Shi, Kai];


    return (
        <div className="w-full bg-slate-50/40 py-4 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 antialiased">
            <div className="max-w-8xl mx-auto space-y-6">

                {/* TOP ROW: SIDE-BY-SIDE PANELS (Success Stories + User Video Reviews) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Panel: Success Stories */}
                    <div className="lg:col-span-7 p-[1px] bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-3xl shadow-sm shadow-slate-300">
                        <div className="bg-white rounded-[23px] p-6 h-full flex flex-col justify-between">
                            <div className="mb-6">
                                <h2 className="text-xl font-extrabold text-slate-950 tracking-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Success</span> Stories
                                </h2>
                                <p className="text-xs font-semibold text-slate-400 mt-0.5">Real people. Real journeys.</p>
                            </div>

                            {/* Profiles Row Mapping */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start relative">
                                {SUCCESS_STORIES.map((story, index) => {
                                    // Dynamically split achievement text to recreate the exact 2-line image hierarchy
                                    let line1 = story.achievement;
                                    let line2 = "";

                                    if (story.achievement.includes(" in ")) {
                                        const splitIdx = story.achievement.indexOf(" in ");
                                        line1 = story.achievement.substring(0, splitIdx);
                                        line2 = story.achievement.substring(splitIdx + 1);
                                    } else if (story.achievement.includes(" University")) {
                                        line1 = story.achievement.replace(" University", "");
                                        line2 = "University";
                                    }

                                    return (
                                        <div key={story.id} className="flex flex-col items-center text-center group relative">

                                            {/* Circle Avatar Frame with Audio Visualizer Simulation */}
                                            <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 shadow-sm group-hover:scale-105 transition-transform duration-300 z-10 relative">
                                                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-white">
                                                        <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
                                                    </div>
                                                </div>

                                                {/* Decorative Audio/Video Node Accent Badge */}
                                                <div className="absolute top-0 -right-2 bg-slate-50/90 border border-slate-200 shadow-sm rounded-full px-1 py-0.5 flex items-center gap-0.5 z-20 scale-90">
                                                    <span className="w-1 h-1 rounded-full bg-pink-500 animate-pulse" />
                                                    <div className="flex gap-[1px] items-center h-2 px-[1px]">
                                                        <span className="w-[1.5px] h-1.5 bg-purple-500 rounded-full" />
                                                        <span className="w-[1.5px] h-2.5 bg-pink-500 rounded-full" />
                                                        <span className="w-[1.5px] h-1 bg-blue-500 rounded-full" />
                                                    </div>
                                                    <span className="text-[7px] font-black text-slate-500 uppercase tracking-tighter">Vlog</span>
                                                </div>

                                                {/* Audio Visualizer Connecting Nodes Track */}
                                                {index < SUCCESS_STORIES.length - 1 && (
                                                    <div className="hidden sm:flex absolute top-1/2 left-12 w-20 items-center justify-center z-0 pointer-events-none">
                                                        <div className="w-full h-[1.5px] bg-gradient-to-r from-pink-400/70 via-purple-400/40 to-slate-200/40 relative flex items-center justify-center">
                                                            <div className="absolute flex items-center gap-[2px]">
                                                                <span className="w-[2px] h-1.5 bg-pink-400 rounded-full" />
                                                                <span className="w-[3px] h-3 bg-purple-500 rounded-full shadow-sm shadow-purple-200" />
                                                                <span className="w-[2px] h-1.5 bg-blue-400 rounded-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <h4 className="font-extrabold text-xs text-slate-900 tracking-tight">
                                                {story.name} <span className="text-slate-400 font-medium text-[10px]">from {story.country}</span>
                                            </h4>

                                            {/* Inside Content Layout */}
                                            <div className="text-[11px] text-slate-500 font-semibold mt-1 leading-tight px-1 max-w-[130px]">
                                                <p className="block text-slate-700">{line1}</p>
                                                {line2 && <p className="block text-indigo-600/90 font-bold mt-0.5">{line2}</p>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: What Our Users Say */}
                    <div className="lg:col-span-5 p-[1px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl shadow-sm shadow-slate-300">
                        <div className="bg-white rounded-[23px] p-6 h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-950 tracking-tight">
                                        What <span className="text-blue-600">Our Users</span> Say
                                    </h2>
                                    <p className="text-xs font-semibold text-slate-400 mt-0.5">See why thousands trust Kaishi Nihon.</p>
                                </div>
                                <button className="p-2 rounded-xl bg-slate-300 hover:bg-slate-300 border border-slate-300/60 text-slate-600 transition-colors">
                                    <ArrowRight size={14} />
                                </button>
                            </div>

                            {/* Video Grid Feed */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {USER_REVIEWS.map((rev) => (
                                    <div key={rev.id} className="space-y-1.5 group">
                                        <div className="relative h-28 rounded-xl overflow-hidden bg-slate-300 border border-slate-300/40 shadow-sm">
                                            <img src={rev.thumbnail} alt={rev.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px] transition-opacity group-hover:opacity-40" />

                                            {/* Translucent Play Button Trigger */}
                                            <button className="absolute inset-0 m-auto w-7 h-7 bg-white/90 backdrop-blur-md rounded-full shadow flex items-center justify-center text-slate-900 transform scale-90 group-hover:scale-100 transition-transform">
                                                <Play size={10} fill="currentColor" className="ml-0.5" />
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between px-0.5">
                                            <span className="text-[10px] font-bold text-slate-400">From {rev.country}</span>
                                            <div className="flex items-center text-[10px] text-amber-500 font-bold gap-0.5">
                                                <Star size={9} fill="currentColor" /> {rev.rating}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM SECTION: CHAT LAYOUT FRAME OVER SINGLE BACKGROUND */}
                <div className="relative w-full min-h-[220px] flex flex-col justify-between font-sans antialiased overflow-visible">

                    {/* BACKGROUND GRAPHIC ASSETS LAYERS (Positioned behind content) */}
                    <div className="absolute left-[-40px] bottom-1 w-60 md:w-52 pointer-events-none z-0 select-none opacity-90">
                        <img
                            src={FlowerFall}
                            alt="Left Decorative Background Accent"
                            className="w-full h-full object-contain object-left"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, white 10%)',
                                maskImage: 'linear-gradient(to left, transparent 0%, white 10%)',
                            }}
                        />
                    </div>

                    {/* Right Corner Background Asset Slot */}
                    <div className="absolute right-[-30px] top-0 bottom-2 w-44 md:w-100 pointer-events-none z-0 select-none opacity-90">
                        <img
                            src={Building}
                            alt="Right Decorative Background Accent"
                            className="w-full h-full object-contain object-right"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 90%)',
                                maskImage: 'linear-gradient(to right, transparent 0%, white 80%)',
                            }}
                        />
                    </div>

                    {/* CONVERSATIONAL DIALOGUES GRID (Brought forward with z-10) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 items-center w-full relative z-10 my-auto py-2">
                        {CHAT_EXCHANGES.map((chat, idx) => (
                            <div key={chat.id} className="flex items-start gap-2 w-full max-w-md mx-auto lg:max-w-none">

                                {/* Left Column Unit: Large Avatar + Sub-positioned Character Name */}
                                <div className="flex flex-col items-center shrink-0 space-y-2 min-w-[50px]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-md">
                                        <img
                                            src={profileImages[idx % profileImages.length]}
                                            alt={chat.character}
                                            className="w-full h-full object-cover rounded-full bg-white p-0.5"
                                        />
                                    </div>
                                    <span className="text-xs font-black tracking-wide bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {chat.character}
                                    </span>
                                </div>

                                {/* Right Column Unit: Stacked Dialogues */}
                                <div className="flex-1 space-y-2.5 pt-1">

                                    {/* Question Pill Bubble Layout */}
                                    <div className="bg-white border border-slate-300/80 shadow-sm rounded-full px-4 py-2 text-xs md:text-sm font-bold text-slate-800 inline-block tracking-tight">
                                        {chat.question}
                                    </div>

                                    {/* Premium Contrast Response Block */}
                                    <div className="bg-slate-900 border border-slate-800 text-slate-300 rounded-2xl rounded-tl-sm px-4 py-3 shadow-md text-xs font-medium leading-relaxed relative pr-8">
                                        <p className="tracking-tight">{chat.answer}</p>

                                        {/* Success Verification Delivery Checkmark Accent */}
                                        <div className="absolute bottom-2.5 right-3 w-4 h-4 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shadow-inner">
                                            <Check size={9} strokeWidth={3.5} />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                    {/* INTERACTIVE ACTION TRIGGER BUTTON */}
                    <div className="w-full flex justify-center pt-6 relative z-10">
                        <button className="bg-white hover:bg-slate-300 border border-slate-400/90 text-blue-800 font-extrabold text-xs px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer tracking-tight">
                            Ask Another Question
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SuccessSection;