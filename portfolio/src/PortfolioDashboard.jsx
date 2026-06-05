import React, { useState } from "react";
import profileImg from "./assets/nivs.jpeg";

export default function PortfolioDashboard() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`[+] Message packet transmitted successfully: ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  // Tech icons updated to use vibrant, colorful default vectors
  const techLogos = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" }, // Fixed Express visibility
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-[#a3b3c6] font-mono p-6 md:p-12 lg:p-20 relative overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Cybersecurity Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Outer Layout Matrix Container */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="space-y-8">
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

          {/* PROFILE MODULE */}
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
        </section>

        {/* ================= TECH STACK (INFINITE MARQUEE) ================= */}
        <section className="space-y-4">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-slate-600">##</span> tech_stack
          </div>
          <p className="text-xs text-slate-500 pl-2">Technologies I work with</p>
          
          {/* Continuous Infinite Slider Track */}
          <div className="w-full overflow-hidden relative py-4 bg-slate-950/20 border-y border-slate-900/60 [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
            <div 
              className="flex gap-12 w-max hover:[animation-play-state:paused]"
              style={{ animation: 'marquee 25s linear infinite' }}
            >
              {/* Double mapping arrays ensures smooth seamless looping visual flow */}
              {[...techLogos, ...techLogos].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-2 group cursor-pointer w-20">
                  {/* Removed grayscale filter entirely - icons are now natively vibrant */}
                  <div className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] text-slate-500 group-hover:text-emerald-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="space-y-4">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-slate-600">##</span> about
          </div>
          <div className="text-xs md:text-sm text-slate-400 pl-2 space-y-4 max-w-2xl leading-relaxed">
            <p>
              I'm Nibedita — a B.Tech CSIT full-stack engineer and web application architect, currently shipping high-performance code pipelines, secure script architectures, and beautiful UI frameworks that actually survive their first deployment.
            </p>
            <p>
              Most days I'm found tweaking Linux server update configurations, routing front-end components, or staring at terminal log traces at 2 AM trying to solve why a div container won't center perfectly on smaller viewports. Safe execution under pressure is half the fun.
            </p>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-slate-600">##</span> contact
            </div>
            <p className="text-xs text-slate-400 pl-2">
              Whether you're offering a gig, a collab, or just want to say "Hey hacker woman!", I'm all ears. Drop your coordinates below.
            </p>
          </div>

          {/* Terminal Command Input Boxes */}
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl pl-2">
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-600 text-xs">&gt;&gt;</span>
              <input 
                type="text" 
                required
                placeholder="your_name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#0b0f17]/40 border border-slate-900 rounded-lg py-3.5 pl-12 pr-4 text-xs text-slate-200 placeholder-slate-700 outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-600 text-xs">&gt;&gt;</span>
              <input 
                type="email" 
                required
                placeholder="your_email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#0b0f17]/40 border border-slate-900 rounded-lg py-3.5 pl-12 pr-4 text-xs text-slate-200 placeholder-slate-700 outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-600 text-xs">&gt;&gt;</span>
              <textarea 
                required
                rows="5"
                placeholder="your_message" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#0b0f17]/40 border border-slate-900 rounded-lg py-3.5 pl-12 pr-4 text-xs text-slate-200 placeholder-slate-700 outline-none focus:border-emerald-500/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full border border-emerald-500 text-emerald-400 text-xs py-3 rounded-lg bg-emerald-950/10 hover:bg-emerald-500 hover:text-black font-bold tracking-widest transition-all duration-200 cursor-pointer"
            >
              [&gt;] send_message
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}