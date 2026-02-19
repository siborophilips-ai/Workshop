
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Terminal, 
  Presentation, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Cpu, 
  Zap, 
  Users, 
  Globe,
  Monitor,
  Code2,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Rocket,
  BrainCircuit,
  ListChecks,
  History,
  Workflow,
  Wrench,
  Dna,
  HardHat,
  ArrowLeft,
  LayoutTemplate,
  FileText,
  UserCircle,
  Linkedin,
  Mail,
  Award,
  LayoutGrid,
  Maximize2,
  ZoomOut,
  ZoomIn,
  Play,
  X,
  Eye,
  EyeOff,
  Bot,
  ShieldCheck
} from 'lucide-react';
import { WORKSHOP_CONTENT, CONVENTIONAL_SDLC_SLIDES, DESIGN_TO_APP_SLIDES, DOCUMENTING_WITH_AI_SLIDES, VIBE_CODING_SLIDES, LLM_AGENTIC_AI_SLIDES, VIBE_ENGINEERING_SLIDES, AI_SDLC_SLIDES } from './constants';
import { Slide, AgendaItem } from './types';

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: 'overview', icon: <Globe size={20} />, label: 'Overview' },
    { id: 'trainer', icon: <UserCircle size={20} />, label: 'Trainer Profile' },
    { id: 'agenda', icon: <Calendar size={20} />, label: 'Agenda' },
    { id: 'syllabus', icon: <ListChecks size={20} />, label: 'Syllabus' },
    { id: 'slides', icon: <Presentation size={20} />, label: 'Slide Deck' }
  ];

  return (
    <div className="w-64 flex-shrink-0 bg-glass border-r border-white/5 h-screen sticky top-0 overflow-y-auto hidden md:flex flex-col">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-teal-400 to-purple-600 rounded-lg shadow-lg">
            <Terminal className="text-white" size={24} />
          </div>
          <h1 className="font-black text-2xl tracking-tighter">AI DEV</h1>
        </div>
        <p className="text-purple-400 text-[10px] uppercase font-black tracking-[0.3em]">Workshop 2026</p>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10' 
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
            }`}
          >
            <span className={activeTab === tab.id ? 'text-teal-400' : ''}>{tab.icon}</span>
            <span className="font-bold text-sm tracking-tight">{tab.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-6">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-5 border border-white/5">
          <div className="flex items-center gap-2 text-purple-200 font-bold text-xs mb-3">
            <Sparkles size={14} />
            <span>2026 Ready</span>
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed">
            Master the transition from manual writing to intent-based engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, onBack }: { title: string, subtitle: string, onBack?: () => void }) => (
  <div className="mb-12">
    {onBack && (
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={16} /> Back to Syllabus
      </button>
    )}
    <h2 className="text-5xl font-black mb-4 tracking-tighter text-white">{title}</h2>
    <p className="text-slate-400 text-xl font-medium max-w-2xl">{subtitle}</p>
    <div className="h-2 w-32 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 mt-6 rounded-full"></div>
  </div>
);

const TrainerProfile = () => (
  <div className="animate-in slide-in-from-bottom-8 duration-700 space-y-12">
    <SectionHeader 
      title="Trainer Profile" 
      subtitle="Meet Philips, your guide for this AI-driven development journey." 
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-600 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-glass rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 flex items-center justify-center">
            <UserCircle size={200} className="text-white/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#050505] to-transparent text-center">
               <h3 className="text-3xl font-black text-white">Philips</h3>
               <p className="text-teal-400 font-bold tracking-widest uppercase text-xs mt-2">AI Software Architect</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 transition-all text-blue-400">
            <Linkedin size={24} />
          </button>
          <button className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 transition-all text-pink-500">
            <Mail size={24} />
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-8">
        <div className="bg-glass p-8 rounded-[2.5rem] border border-white/5">
          <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <Award className="text-purple-400" />
            Expertise & Background
          </h4>
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            Philips is a senior software engineer and architect with over 12 years of experience in the tech industry. Specializing in high-performance cloud architectures and AI-native development workflows, he has helped dozens of organizations modernize their SDLC.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="block text-teal-400 font-black text-xl">150+</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Workshops Led</span>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="block text-purple-400 font-black text-xl">12+ Yrs</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Experience</span>
             </div>
          </div>
        </div>

        <div className="bg-glass p-8 rounded-[2.5rem] border border-white/5">
          <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <BrainCircuit className="text-teal-400" />
            Specializations
          </h4>
          <div className="flex flex-wrap gap-3">
            {['AI Thinking', 'Vibe Engineering', 'React Architecture', 'Cloud Native', 'CI/CD Automation', 'Prompt Engineering'].map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-glass p-8 rounded-[2.5rem] border border-white/5">
          <blockquote className="text-2xl font-black text-white italic leading-tight">
            "The future of development isn't just about writing code; it's about mastering the intent behind it. We are evolving from manual laborers to system conductors."
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

const SyllabusView = ({ onSelectItem }: { onSelectItem: (id: string) => void }) => {
  const items = [
    { id: "sdlc-conventional", title: "SDLC Fundamentals", icon: <History className="text-blue-400" />, color: "from-blue-500/20 to-blue-600/5", desc: "A comprehensive 18-slide guide to the structured software development lifecycle." },
    { id: "ai-sdlc", title: "AI SDLC", icon: <Workflow className="text-teal-400" />, color: "from-teal-500/20 to-teal-600/5", desc: "A modern lifecycle where AI supercharges every phase from PRD to QA." },
    { id: "llm-agentic", title: "LLM & Agentic AI", icon: <Bot className="text-purple-400" />, color: "from-purple-500/20 to-purple-600/5", desc: "Understanding the brains behind 2026: Reasoning models and autonomous swarms." },
    { id: "ai-tools", title: "AI Tools", icon: <Wrench className="text-amber-400" />, color: "from-amber-500/20 to-amber-600/5", desc: "Mastering the 2026 tech stack: Cursor, Claude, agents, and v0." },
    { id: "vibe-coding", title: "Vibe Coding", icon: <Dna className="text-pink-400" />, color: "from-pink-500/20 to-pink-600/5", desc: "The 'Just Make It Work' philosophy for rapid prototyping and ideation." },
    { id: "vibe-engineering", title: "Vibe Engineering", icon: <ShieldCheck className="text-emerald-400" />, color: "from-emerald-500/20 to-emerald-600/5", desc: "The professional standard: A disciplined lifecycle beyond conversational prompts." },
    { id: "design-to-app", title: "Design to Application", icon: <LayoutTemplate className="text-cyan-400" />, color: "from-cyan-500/20 to-cyan-600/5", desc: "Turning UI/UX designs into functional React code using AI vision models." },
    { id: "documenting-with-ai", title: "Documenting with AI", icon: <FileText className="text-slate-400" />, color: "from-slate-500/20 to-slate-600/5", desc: "Automating PRDs, JSDoc, and READMEs to maintain a living, breathing codebase." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <button 
          key={idx} 
          onClick={() => onSelectItem(item.id)}
          className="group relative text-left"
        >
          <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.color.replace('20', '40')} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`}></div>
          <div className={`relative bg-glass p-10 rounded-[2.5rem] border border-white/5 h-full flex flex-col items-center text-center hover:translate-y-[-8px] transition-all duration-300`}>
            <div className={`w-20 h-20 bg-gradient-to-br ${item.color.replace('5', '10')} rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-white/10 group-hover:scale-110 transition-transform`}>
              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h3>
            <p className="text-slate-400 text-base leading-relaxed font-medium">{item.desc}</p>
            <div className="mt-6 text-teal-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              View Deck <ChevronRight size={14} />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

const SlideViewer = ({ slides }: { slides: Slide[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [showNotesInShow, setShowNotesInShow] = useState(false);
  const slide = slides[currentIdx];

  const nextSlide = useCallback(() => {
    setCurrentIdx(prev => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIdx(prev => Math.max(prev - 1, 0));
  }, []);

  const toggleZoom = useCallback(() => {
    if (isSlideShow) return; // Disable zoom out in slide show
    setIsZoomedOut(prev => !prev);
  }, [isSlideShow]);

  const toggleSlideShow = useCallback(() => {
    setIsSlideShow(prev => !prev);
    setIsZoomedOut(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'g' || e.key === 'G') {
        toggleZoom();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleSlideShow();
      } else if (e.key === 'Escape') {
        setIsSlideShow(false);
        setIsZoomedOut(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleZoom, toggleSlideShow]);

  // Slide Show Overlay
  if (isSlideShow) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-12 overflow-hidden select-none">
        {/* Top Controls */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
           <div className="flex items-center gap-4 text-slate-500 font-black text-xs tracking-widest uppercase">
              <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">Slide {slide.number} / {slides.length}</span>
              <span className="bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full border border-teal-500/20">{slide.type}</span>
           </div>
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowNotesInShow(!showNotesInShow)}
                className={`p-4 rounded-full border transition-all ${showNotesInShow ? 'bg-purple-600 text-white border-purple-500' : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'}`}
                title="Toggle Speaker Notes"
              >
                {showNotesInShow ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
              <button 
                onClick={toggleSlideShow}
                className="p-4 bg-white/5 hover:bg-red-600 text-white rounded-full border border-white/5 transition-all group"
                title="Exit Slide Show (Esc)"
              >
                <X size={24} className="group-hover:scale-110" />
              </button>
           </div>
        </div>

        {/* Main Content */}
        <div className={`max-w-6xl w-full flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500 ${showNotesInShow ? 'mb-40' : ''}`}>
           <h2 className="text-7xl md:text-9xl font-black mb-16 text-white leading-none tracking-tighter text-center md:text-left">
              {slide.title}
           </h2>
           <ul className="space-y-8 max-w-4xl">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-6 text-3xl md:text-4xl text-slate-300 font-medium leading-tight">
                  <div className="mt-4 w-5 h-5 rounded-full bg-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.6)] flex-shrink-0"></div>
                  <span>{b}</span>
                </li>
              ))}
           </ul>
        </div>

        {/* Speaker Notes Floating Panel */}
        {showNotesInShow && (
          <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-[80vw] max-w-4xl bg-[#111] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-12 duration-500">
             <div className="flex items-center gap-2 mb-4 text-purple-400 text-xs font-black uppercase tracking-widest">
                <MessageSquare size={16} /> Speaker Notes
             </div>
             <p className="text-slate-200 text-xl leading-relaxed font-medium">
                {slide.speakerNotes}
             </p>
          </div>
        )}

        {/* Floating Navigation Overlay */}
        <div className="fixed bottom-12 right-12 flex gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
           <button 
             onClick={prevSlide}
             disabled={currentIdx === 0}
             className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center disabled:opacity-20 transition-all shadow-xl"
           >
             <ChevronLeft size={32} />
           </button>
           <button 
             onClick={nextSlide}
             disabled={currentIdx === slides.length - 1}
             className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center disabled:opacity-20 transition-all shadow-xl"
           >
             <ChevronRight size={32} />
           </button>
        </div>
      </div>
    );
  }

  if (isZoomedOut) {
    return (
      <div className="animate-in fade-in zoom-in-95 duration-500 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-white">Slide Sorter</h3>
          <button 
            onClick={toggleZoom}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-teal-400 font-bold transition-all border border-white/10"
          >
            <ZoomIn size={18} /> Back to Details
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIdx(idx);
                setIsZoomedOut(false);
              }}
              className={`relative aspect-video rounded-2xl border transition-all overflow-hidden flex flex-col text-left group ${
                idx === currentIdx 
                  ? 'border-teal-400 ring-2 ring-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.3)]' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="p-2 bg-black/60 border-b border-white/5 flex justify-between items-center text-[8px] font-black uppercase tracking-tighter text-slate-500">
                <span>SLIDE {s.number}</span>
                <span className="text-teal-500">{s.type}</span>
              </div>
              <div className="flex-1 p-4 bg-[#0a0a0f] flex flex-col justify-center">
                <h4 className="text-xs font-black text-white line-clamp-2 leading-tight mb-2">{s.title}</h4>
                <div className="space-y-1">
                  {s.bullets.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[8px] text-slate-400 line-clamp-1">
                      <div className="w-1 h-1 rounded-full bg-teal-500"></div>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/5 transition-colors"></div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-500">
      {/* Slide Preview */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-600 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative aspect-video bg-[#0a0a0f] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
          <div className="p-5 border-b border-white/5 flex justify-between items-center text-[10px] text-slate-500 font-black tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="ml-2">SLIDE {slide.number}</span>
            </div>
            <div className="flex items-center gap-4">
               <button 
                onClick={toggleSlideShow}
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-bold"
                title="Start Slide Show (F)"
               >
                 <Play size={14} />
                 <span>SLIDE SHOW (F)</span>
               </button>
               <div className="w-[1px] h-3 bg-white/10"></div>
               <button 
                onClick={toggleZoom}
                className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                title="Toggle Sorter (G)"
               >
                 <ZoomOut size={14} />
                 <span>SORTER (G)</span>
               </button>
               <span className="bg-white/5 px-3 py-1 rounded-full text-teal-400">{slide.type}</span>
            </div>
          </div>
          <div className="flex-1 p-16 flex flex-col justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent">
            <h3 className="text-5xl md:text-6xl font-black mb-10 text-white leading-tight tracking-tighter">
              {slide.title}
            </h3>
            <ul className="space-y-5">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-2xl text-slate-300 font-medium">
                  <div className="mt-2 w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Slide Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/[0.07] transition-colors">
          <h4 className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Monitor size={16} /> Scene Setup
          </h4>
          <p className="text-slate-300 text-lg leading-relaxed italic font-medium">{slide.visualDescription}</p>
        </div>
        <div className="bg-teal-500/5 p-8 rounded-3xl border border-teal-500/10 hover:bg-teal-500/10 transition-colors">
          <h4 className="text-teal-400 text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <MessageSquare size={16} /> Trainer's Voice
          </h4>
          <p className="text-slate-200 text-lg leading-relaxed font-medium">{slide.speakerNotes}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between bg-glass p-5 rounded-full border border-white/10">
        <button 
          onClick={prevSlide}
          disabled={currentIdx === 0}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white flex items-center justify-center transition-all"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-2 items-center">
           <span className="text-xs font-black text-slate-500 mr-2 uppercase tracking-widest">Progress</span>
           <div className="flex gap-1.5 overflow-hidden">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 flex-shrink-0 w-2 rounded-full transition-all duration-500 ${i === currentIdx ? 'bg-teal-400 scale-125 shadow-[0_0_10px_rgba(45,212,191,0.8)]' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
        <button 
          onClick={nextSlide}
          disabled={currentIdx === slides.length - 1}
          className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white flex items-center justify-center transition-all"
          title="Next Slide (Right Arrow)"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const AgendaView = ({ agenda }: { agenda: AgendaItem[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {agenda.map((item, idx) => (
      <div key={idx} className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
        <div className="relative bg-glass p-8 rounded-[2rem] border border-white/5 h-full flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-black text-gradient">{item.time}</span>
              <div className="flex gap-2">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.session.includes('Coffee') ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'}`}>
                  {item.duration}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.session}</h3>
            <p className="text-slate-400 text-base leading-relaxed font-medium mb-6">{item.description}</p>
          </div>
          <div className="flex items-center gap-2 pt-4 border-t border-white/5">
            <Zap size={14} className="text-purple-400" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.format}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSyllabusId, setSelectedSyllabusId] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000">
            {/* Hero Section */}
            <div className="relative pt-10">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]"></div>
              <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce">
                  <Rocket size={16} className="text-pink-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-pink-500">New Era of Development</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter text-white">
                  ADAPT. EVOLVE. <br/>
                  <span className="text-gradient">BUILD FASTER.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
                  Welcome to the definitive workshop for the 2026 AI Developer. 
                  Mastering the transition from "writing code" to "orchestrating intent".
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <button 
                    onClick={() => setActiveTab('agenda')}
                    className="bg-white text-black px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                  >
                    View Agenda <ChevronRight size={24} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('syllabus')}
                    className="bg-glass text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all border border-white/20 flex items-center gap-3"
                  >
                    Explore Syllabus <ListChecks size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
              <div className="bg-glass p-10 rounded-[2.5rem] border border-white/5 group hover:border-teal-500/50 transition-all duration-500 glow-card animate-float" style={{animationDelay: '0s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <BrainCircuit size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">AI Thinking</h3>
                <p className="text-slate-400 text-base leading-relaxed font-medium">Learn to frame problems, provide rich context, and iterate on AI outputs for architectural excellence.</p>
              </div>
              <div className="bg-glass p-10 rounded-[2.5rem] border border-white/5 group hover:border-purple-500/50 transition-all duration-500 glow-card animate-float" style={{animationDelay: '1s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <Code2 size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">Vibe Engineering</h3>
                <p className="text-slate-400 text-base leading-relaxed font-medium">Move beyond simple "vibing" to designing scalable systems using AI as a precision execution tool.</p>
              </div>
              <div className="bg-glass p-10 rounded-[2.5rem] border border-white/5 group hover:border-pink-500/50 transition-all duration-500 glow-card animate-float" style={{animationDelay: '2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">Full SDLC</h3>
                <p className="text-slate-400 text-base leading-relaxed font-medium">Integrate AI into every phase: from planning to deployment and legacy maintenance.</p>
              </div>
            </div>
          </div>
        );
      case 'trainer':
        return <TrainerProfile />;
      case 'agenda':
        return (
          <div className="animate-in slide-in-from-bottom-8 duration-700">
            <SectionHeader 
              title="Interactive Agenda" 
              subtitle="4 hours of high-intensity learning designed for the modern engineer." 
            />
            <AgendaView agenda={WORKSHOP_CONTENT.agenda} />
          </div>
        );
      case 'syllabus':
        if (selectedSyllabusId === 'sdlc-conventional') {
          return (
            <div className="animate-in fade-in duration-500">
              <SectionHeader 
                title="Syllabus: SDLC Fundamentals" 
                subtitle="A deep dive into the structured software development lifecycle based on industry-standard phases."
                onBack={() => setSelectedSyllabusId(null)}
              />
              <SlideViewer slides={CONVENTIONAL_SDLC_SLIDES} />
            </div>
          );
        }
        if (selectedSyllabusId === 'ai-sdlc') {
          return (
            <div className="animate-in fade-in duration-500">
              <SectionHeader 
                title="Syllabus: AI SDLC" 
                subtitle="A modern lifecycle where AI supercharges every phase from PRD to QA."
                onBack={() => setSelectedSyllabusId(null)}
              />
              <SlideViewer slides={AI_SDLC_SLIDES} />
            </div>
          );
        }
        if (selectedSyllabusId === 'llm-agentic') {
          return (
            <div className="animate-in fade-in duration-500">
              <SectionHeader 
                title="Syllabus: LLM & Agentic AI" 
                subtitle="Understanding the brain and hands of 2026 development workflows."
                onBack={() => setSelectedSyllabusId(null)}
              />
              <SlideViewer slides={LLM_AGENTIC_AI_SLIDES} />
            </div>
          );
        }
        if (selectedSyllabusId === 'vibe-coding') {
          return (
            <div className="animate-in fade-in duration-500">
              <SectionHeader 
                title="Syllabus: Vibe Coding Mastery" 
                subtitle="Mastering natural language as the new primary programming syntax for 2026."
                onBack={() => setSelectedSyllabusId(null)}
              />
              <SlideViewer slides={VIBE_CODING_SLIDES} />
            </div>
          );
        }
        if (selectedSyllabusId === 'vibe-engineering') {
          return (
            <div className="animate-in fade-in duration-500">
              <SectionHeader 
                title="Syllabus: Vibe Engineering" 
                subtitle="The professional standard for systematic, AI-accelerated systems engineering."
                onBack={() => setSelectedSyllabusId(null)}
              />
              <SlideViewer slides={VIBE_ENGINEERING_SLIDES} />
            </div>
          );
        }
        if (selectedSyllabusId === 'design-to-app') {
            return (
              <div className="animate-in fade-in duration-500">
                <SectionHeader 
                  title="Syllabus: Design to Application" 
                  subtitle="Bridge the gap between design and production with AI-native generators."
                  onBack={() => setSelectedSyllabusId(null)}
                />
                <SlideViewer slides={DESIGN_TO_APP_SLIDES} />
              </div>
            );
          }
        if (selectedSyllabusId === 'documenting-with-ai') {
            return (
              <div className="animate-in fade-in duration-500">
                <SectionHeader 
                  title="Syllabus: Documenting with AI" 
                  subtitle="Master the tools and workflows that make documentation a living asset."
                  onBack={() => setSelectedSyllabusId(null)}
                />
                <SlideViewer slides={DOCUMENTING_WITH_AI_SLIDES} />
              </div>
            );
          }
        return (
          <div className="animate-in slide-in-from-right-8 duration-700">
            <SectionHeader 
              title="Workshop Syllabus" 
              subtitle="Dive deep into the pillars of AI-native software development. Click a module to view its deck." 
            />
            <SyllabusView onSelectItem={(id) => setSelectedSyllabusId(id)} />
          </div>
        );
      case 'slides':
        return (
          <div className="animate-in zoom-in-95 duration-700">
            <SectionHeader 
              title="Full Workshop Deck" 
              subtitle="The complete visual guide used throughout the session." 
            />
            <SlideViewer slides={WORKSHOP_CONTENT.slides} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Sidebar activeTab={activeTab} setActiveTab={(t) => { setActiveTab(t); setSelectedSyllabusId(null); }} />
      
      <main className="flex-1 overflow-y-auto px-6 py-12 md:px-20 md:py-16">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Floating Action Button for Mobile navigation */}
      <div className="md:hidden fixed bottom-10 right-10 z-50">
        <button 
          className="bg-gradient-to-br from-teal-400 to-purple-600 text-white w-20 h-20 rounded-full shadow-[0_20px_50px_rgba(168,85,247,0.4)] flex items-center justify-center border-4 border-slate-950 scale-110 active:scale-95 transition-all"
          onClick={() => {
            const nextTab = activeTab === 'overview' ? 'trainer' :
                           activeTab === 'trainer' ? 'agenda' : 
                           activeTab === 'agenda' ? 'syllabus' : 
                           activeTab === 'syllabus' ? 'slides' : 'overview';
            setActiveTab(nextTab);
            setSelectedSyllabusId(null);
          }}
        >
          <Lightbulb size={32} />
        </button>
      </div>
    </div>
  );
}
