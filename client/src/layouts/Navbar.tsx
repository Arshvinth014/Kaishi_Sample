import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X } from 'lucide-react'; 

export function Navbar() {
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New mobile state
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return isActive(path)
      ? "text-[#0066FF] border-b-2 border-[#0066FF] lg:pb-1 font-semibold"
      : "text-slate-700 hover:text-slate-900";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCountriesOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 px-4 sm:px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="SeaHome Net" className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[200px]" />
        </div>

        {/* Desktop Links Matrix */}
        <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-slate-700">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/buy" className={getLinkClass("/buy")}>Buy</Link>
          <Link to="/invest" className={getLinkClass("/invest")}>Invest</Link>
          
          {/* Countries Dropdown (Desktop) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCountriesOpen((open) => !open)}
              className="flex items-center gap-1 hover:text-slate-900 transition-colors focus:outline-none"
              aria-expanded={countriesOpen}
              aria-controls="countries-dropdown"
            >
              <span>Countries</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>
            <div
              id="countries-dropdown"
              className={`absolute left-0 top-full mt-2 min-w-[160px] rounded-2xl border border-slate-200 bg-white py-2 shadow-lg ${countriesOpen ? 'block' : 'hidden'}`}
            >
              <Link to="/country/sri-lanka" onClick={() => setCountriesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Sri Lanka</Link>
              <Link to="/japan-rental" onClick={() => setCountriesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Japan</Link>

            </div>
          </div>

          <Link to="/#agencies" className="hover:text-slate-900 transition-colors">Agencies</Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
            <span>Resources</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900">
            <span>About Us</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
        </div>

        {/* Localized Interaction Elements Wrapper */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector - Hidden on very small screens, responsive layout */}
          <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-50">
            <Globe className="w-3.5 h-3.5 text-slate-400" /> <span>EN</span> <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          
          {/* Favorite Button */}
          <button className="text-slate-400 hover:text-rose-500 p-2 border border-slate-100 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          
          {/* Log In - Hidden on small mobile screens to save space, but added to mobile drawer */}
          <button className="hidden sm:block text-xs font-bold text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors">
            Log In
          </button>
          
          {/* Sign Up - Hidden on small mobile screens, added to mobile drawer */}
          <button className="hidden sm:block text-xs font-bold bg-[#0066FF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all">
            Sign Up
          </button>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu Matrix --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-4 text-[14px] font-semibold text-slate-700 animate-in fade-in duration-200">
          <Link to="/" onClick={closeMobileMenu} className={`${getLinkClass("/")} py-1`}>Home</Link>
          <Link to="/buy" onClick={closeMobileMenu} className={`${getLinkClass("/buy")} py-1`}>Buy</Link>
          <Link to="/invest" onClick={closeMobileMenu} className={`${getLinkClass("/invest")} py-1`}>Invest</Link>
          
          {/* Countries Sub-links inside mobile menu */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setCountriesOpen(!countriesOpen)} 
              className="flex items-center justify-between py-1 text-slate-700 font-semibold"
            >
              <span>Countries</span>
              <span className={`text-[10px] text-slate-400 transition-transform ${countriesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {countriesOpen && (
              <div className="pl-4 flex flex-col gap-3 border-l border-slate-100 ml-1">
                <Link to="/country/sri-lanka" onClick={closeMobileMenu} className="text-slate-600 hover:text-[#0066FF]">Sri Lanka</Link>
                <Link to="/japan-rental" onClick={closeMobileMenu} className="text-slate-600 hover:text-[#0066FF]">Japan</Link>
              </div>
            )}
          </div>

          <Link to="/#agencies" onClick={closeMobileMenu} className="py-1">Agencies</Link>
          <div className="py-1 cursor-pointer flex items-center justify-between">
            <span>Resources</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>
          <div className="py-1 cursor-pointer flex items-center justify-between">
            <span>About Us</span>
            <span className="text-[10px] text-slate-400">▼</span>
          </div>

          <hr className="border-slate-100 my-1" />

          {/* Mobile-only fallback links for ultra-small viewports */}
          <div className="flex sm:hidden flex-col gap-3 pt-2">
            <button className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg py-2.5 hover:bg-slate-50 w-full">
              <Globe className="w-3.5 h-3.5 text-slate-400" /> <span>EN</span> <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <button className="text-xs font-bold text-slate-700 border border-slate-200 py-2.5 rounded-lg transition-colors w-full">
              Log In
            </button>
            <button className="text-xs font-bold bg-[#0066FF] text-white py-2.5 rounded-lg shadow-sm transition-all w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
