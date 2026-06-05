import React, { useState } from "react";
import profileImg from "./assets/nivs.jpeg";

export default function PortfolioDashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`[+] Message packet transmitted successfully: ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techLogos = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "NodeJS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
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

  const projects = [
    {
      title: "Bloomly Women Wellness Web App",
      description: "A comprehensive digital full-stack sanctuary engineered to optimize women's health through personalized metrics tracking, clean diagnostics visualization data, and highly interactive React layout interfaces.",
      tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      link: "https://github.com/Nibedita2003/Bloomly-Wemen-Wellness-Web-App"
    },
    {
      title: "Antigravity Secure Auto-Updater",
      description: "A low-level automated Linux deployment ecosystem focused on GPG sign validations, system-level source tracking, and background patch execution for isolated Ubuntu environments safely.",
      tags: ["Linux", "Bash", "Shell", "Security"],
      link: "https://github.com/Nibedita2003"
    },
    {
      title: "Core Music Player Interface",
      description: "A sleek custom terminal-inspired client layout built cleanly to process smooth continuous streaming audio pipelines, queue setups, and persistent client-side playback tracking natively.",
      tags: ["React", "JavaScript", "CSS Modules"],
      link: "https://github.com/Nibedita2003"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-mono p-4 md:p-12 lg:p-20 relative overflow-x-hidden selection:bg-emerald-500 selection:text-black ${
      darkMode ? "bg-[#07090e] text-[#a3b3c6]" : "bg-[#f8fafc] text-[#334155]"
    }`}>
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"
        style={{ "--grid-color": darkMode ? "#0f172a" : "#e2e8f0" }}
      ></div>

      {/* ================= CONSTANT FLOATING NAVIGATION BAR ================= */}
      <div className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        darkMode ? "border-slate-900/80 bg-[#07090e]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "border-slate-200 bg-[#f8fafc]/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="text-emerald-500 font-bold text-base tracking-tight">~/nibedita</span>
          </div>
          
          {/* Section Scroll Links */}
          <nav className="flex items-center flex-wrap justify-center gap-2 md:gap-4 text-[11px] font-bold">
            <button onClick={() => scrollToSection("home")} className="hover:text-emerald-500 transition-colors px-2 py-1 cursor-pointer">./home</button>
            <button onClick={() => scrollToSection("tech_stack")} className="hover:text-emerald-500 transition-colors px-2 py-1 cursor-pointer">./tech_stack</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-emerald-500 transition-colors px-2 py-1 cursor-pointer">./about</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-emerald-500 transition-colors px-2 py-1 cursor-pointer">./projects</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-emerald-500 transition-colors px-2 py-1 cursor-pointer">./contact</button>
          </nav>
          
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 px-2.5 rounded border transition-all duration-200 cursor-pointer text-[11px] font-medium ${
                darkMode 
                  ? "border-slate-800 bg-slate-950/40 text-amber-400 hover:bg-slate-900" 
                  : "border-slate-200 bg-white text-indigo-600 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <span className="text-[11px] text-emerald-500 flex items-center gap-1.5 font-medium tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> online
            </span>
          </div>
        </div>
      </div>

      {/* Outer Layout Matrix Container - Added pt-28 padding to balance the floating header */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-24 pt-28 sm:pt-24">
        
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="space-y-8 scroll-mt-36">
          {/* PROFILE CARD GRAPHIC */}
          <div className="space-y-6 pl-2">
            <div className={`h-36 w-36 rounded-full p-[1px] overflow-hidden shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-gradient-to-br ${
              darkMode ? "from-emerald-500/80 to-slate-900" : "from-emerald-500 to-slate-300"
            }`}>
              <img src={profileImg} alt="Nibedita" className="h-full w-full rounded-full object-cover" />
            </div>

            <div>
              <h1 className={`text-2xl md:text-3xl font-bold tracking-tight mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Hi, I'm Nibedita Maharana.
              </h1>
              <h2 className="text-emerald-500 text-lg md:text-xl font-semibold tracking-wide flex items-center gap-1">
                Full-Stack Developer<span className="animate-pulse font-light">|</span>
              </h2>
            </div>
            
            <p className={`text-xs md:text-sm leading-relaxed max-w-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              AI might take my job, but it'll choke on my spaghetti code first. Building robust systems, managing secure Linux auto-updaters, and engineering frontend wellness applications.
            </p>

            <div>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`border text-xs px-5 py-2.5 rounded font-bold transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? "border-emerald-500/40 text-emerald-400 bg-emerald-950/20 shadow-[0_4px_12px_rgba(16,185,129,0.05)] hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                    : "border-emerald-500 text-emerald-600 bg-emerald-50/50 shadow-sm hover:bg-emerald-500 hover:text-white"
                }`}
              >
                ./hire_me.sh
              </button>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK (INFINITE MARQUEE) ================= */}
        <section id="tech_stack" className="space-y-4 scroll-mt-36">
          <div className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>##</span> tech_stack
          </div>
          <p className={`text-xs pl-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Technologies I work with</p>
          
          <div className={`w-full overflow-hidden relative py-4 border-y [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)] ${
            darkMode ? "bg-slate-950/20 border-slate-900/60" : "bg-slate-100/40 border-slate-200"
          }`}>
            <div className="flex gap-12 w-max hover:[animation-play-state:paused]" style={{ animation: 'marquee 25s linear infinite' }}>
              {[...techLogos, ...techLogos].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-2 group cursor-pointer w-20">
                  <div className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-[10px] transition-colors duration-300 group-hover:text-emerald-500 ${
                    darkMode ? "text-slate-500" : "text-slate-600"
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="space-y-4 scroll-mt-36">
          <div className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>##</span> about
          </div>
          <div className={`text-xs md:text-sm pl-2 space-y-4 max-w-2xl leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            <p>
              I'm Nibedita — a B.Tech CSIT full-stack engineer and web application architect, currently shipping high-performance code pipelines, secure script architectures, and beautiful UI frameworks that actually survive their first deployment.
            </p>
            <p>
              Most days I'm found tweaking Linux server update configurations, routing front-end components, or staring at terminal log traces at 2 AM trying to solve why a div container won't center perfectly on smaller viewports. Safe execution under pressure is half the fun.
            </p>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="space-y-6 scroll-mt-36">
          <div className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
            <span className={darkMode ? "text-slate-600" : "text-slate-300"}>##</span> featured_projects
          </div>
          <p className={`text-xs pl-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Selected build pipelines and operational software repositories</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-2">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className={`border rounded-lg p-5 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_4px_20px_rgba(16,185,129,0.03)] ${
                  darkMode ? "bg-[#0b0f17]/40 border-slate-900" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className={`text-sm font-bold tracking-tight ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{proj.title}</h3>
                    <span className="text-emerald-500 text-xs font-bold shrink-0">📁</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{proj.description}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-[9px] px-2 py-0.5 rounded font-medium ${
                        darkMode ? "bg-slate-900/60 text-slate-400" : "bg-slate-100 text-slate-600"
                      }`}>{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 group hover:underline"
                  >
                    view_repository() <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="space-y-6 scroll-mt-36">
          <div className="space-y-2">
            <div className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
              <span className={darkMode ? "text-slate-600" : "text-slate-300"}>##</span> contact
            </div>
            <p className={`text-xs pl-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Whether you're offering a gig, a collab, or just want to say "Hey hacker woman!", I'm all ears. Drop your coordinates below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pl-2">
            {/* Input Form Fields */}
            <form onSubmit={handleFormSubmit} className="space-y-4 md:col-span-7">
              <div className="relative">
                <span className={`absolute left-4 top-3.5 text-xs ${darkMode ? "text-slate-600" : "text-slate-400"}`}>&gt;&gt;</span>
                <input 
                  type="text" required placeholder="your_name" value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full border rounded-lg py-3.5 pl-12 pr-4 text-xs outline-none focus:border-emerald-500/50 transition-all ${
                    darkMode ? "bg-[#0b0f17]/40 border-slate-900 text-slate-200 placeholder-slate-700" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 shadow-sm"
                  }`}
                />
              </div>

              <div className="relative">
                <span className={`absolute left-4 top-3.5 text-xs ${darkMode ? "text-slate-600" : "text-slate-400"}`}>&gt;&gt;</span>
                <input 
                  type="email" required placeholder="your_email" value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full border rounded-lg py-3.5 pl-12 pr-4 text-xs outline-none focus:border-emerald-500/50 transition-all ${
                    darkMode ? "bg-[#0b0f17]/40 border-slate-900 text-slate-200 placeholder-slate-700" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 shadow-sm"
                  }`}
                />
              </div>

              <div className="relative">
                <span className={`absolute left-4 top-3.5 text-xs ${darkMode ? "text-slate-600" : "text-slate-400"}`}>&gt;&gt;</span>
                <textarea 
                  required rows="4" placeholder="your_message" value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full border rounded-lg py-3.5 pl-12 pr-4 text-xs outline-none focus:border-emerald-500/50 transition-all resize-none ${
                    darkMode ? "bg-[#0b0f17]/40 border-slate-900 text-slate-200 placeholder-slate-700" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 shadow-sm"
                  }`}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full border text-xs py-3 rounded-lg font-bold tracking-widest transition-all duration-200 cursor-pointer ${
                  darkMode ? "border-emerald-500 text-emerald-400 bg-emerald-950/10 hover:bg-emerald-500 hover:text-black" : "border-emerald-500 text-emerald-600 bg-emerald-50 hover:bg-emerald-500 hover:text-white shadow-sm"
                }`}
              >
                [&gt;] send_message
              </button>
            </form>

            {/* Social Matrix Footprint Endpoint Modules */}
            <div className="md:col-span-5 flex flex-col justify-start space-y-4">
              <div className={`border rounded-lg p-4 text-[11px] space-y-3 ${
                darkMode ? "bg-slate-950/40 border-slate-900/60" : "bg-slate-50 border-slate-200 shadow-sm"
              }`}>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider border-b pb-1.5 border-slate-900/20">
                  // network_endpoints
                </div>
                
                <div className="flex flex-col gap-2.5 pt-1">
                  <div>
                    <span className="text-slate-500">github: </span>
                    <a href="https://github.com/Nibedita2003" target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline font-bold">@Nibedita2003</a>
                  </div>
                  <div>
                    <span className="text-slate-500">email: </span>
                    <a href="mailto:nibedita.maharana2003@gmail.com" className="text-emerald-500 hover:underline font-bold">nibedita.maharana2003@gmail.com</a>
                  </div>
                  <div>
                    <span className="text-slate-500">resume: </span>
                    <a href="#" className="text-emerald-500 hover:underline font-bold">./resume_v2.pdf</a>
                  </div>
                  <div>
                    <span className="text-slate-500">instagram: </span>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline font-bold">@nibedita_maharana</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}