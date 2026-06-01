import React from "react";
import profileImg from "./assets/nivs.jpeg";

export default function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#a3b3c6] font-mono p-6 md:p-12 lg:p-20 relative flex items-center selection:bg-emerald-500 selection:text-black">
      {/* Cybersecurity Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Outer Layout Matrix */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Content pinned left via grid layout column */}
          <div className="lg:col-span-7 xl:col-span-6 w-full space-y-8">
            
            {/* NAV HEADER */}
            <header className="flex justify-between items-center border-b border-slate-900/80 pb-5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-base tracking-tight">~/nibedita</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded bg-emerald-950/10 hover:bg-emerald-500 hover:text-black transition-all duration-200 cursor-pointer font-medium">
                  ./resume.sh
                </button>
                <span className="text-[11px] text-emerald-500 flex items-center gap-1.5 font-medium tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> online
                </span>
              </div>
            </header>

            {/* PROFILE MODULE (No main box or background containers) */}
            <div className="space-y-6 pl-2">
              
              {/* Avatar Indicator with Image */}
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500/80 to-slate-900 p-[1px] shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden shrink-0">
                <img 
                  src={profileImg} 
                  alt="Nibedita" 
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Typography Structure */}
              <div>
                <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  Hi, I'm Nibedita Maharana.
                </h1>
                <h2 className="text-emerald-400 text-lg md:text-xl font-semibold tracking-wide flex items-center gap-1">
                  Full-Stack Developer<span className="animate-pulse font-light">|</span>
                </h2>
              </div>
              
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg">
                AI might take my job, but it'll choke on my spaghetti code first. Building robust systems, managing secure Linux auto-updaters, and engineering frontend wellness applications.
              </p>

              {/* Call to Action Node */}
              <div>
                <button className="border border-emerald-500/40 text-emerald-400 text-xs px-5 py-2.5 rounded font-bold bg-emerald-950/20 shadow-[0_4px_12px_rgba(16,185,129,0.05)] hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer">
                  ./hire_me.sh
                </button>
                <div className="text-[10px] text-slate-600 mt-3 tracking-widest uppercase font-bold">
                  [STATUS: AVAILABLE_FOR_ROLES]
                </div>
              </div>

              {/* SYSTEM GRID METRICS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-900/40">
                <div>
                  <div className="text-white text-lg font-bold tracking-tight">25+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 font-medium">Projects</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold tracking-tight">3</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 font-medium">Wins</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold tracking-tight">25+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 font-medium">PRs Open</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold tracking-tight">1500+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 font-medium">Commits</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}