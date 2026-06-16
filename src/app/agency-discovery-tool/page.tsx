"use client";

import { useState, useEffect, useRef, type ReactNode, JSX } from "react";
import {
  Search,
  Zap,
  Cpu,
  Globe,
  Target,
  Layers,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Sparkles,
  BrainCircuit,
  BarChart3,
  Shield,
  DatabaseZap,
  Network,
  type LucideIcon,
} from "lucide-react";

type AccentColor = "gold" | "teal" | "violet" | "slate";
type Phase = "input" | "loading" | "output";

interface Opportunity {
  id: string;
  title: string;
  type: string;
  typeColor: AccentColor;
  icon: LucideIcon;
  stack: string[];
  description: string;
  impact: string;
  impactColor: AccentColor;
}

// ─── Hardcoded Result Data ────────────────────────────────────────────────────
const RESULT_DATA: {
  targetSite: string;
  icp: string;
  businessModel: string;
  tags: string[];
  opportunities: Opportunity[];
} = {
  targetSite: "qream.agency",
  icp: "Early-to-growth stage Tech Startups, Venture Capital portfolios, and Fintech / Web3 firms",
  businessModel:
    "High-end branding, UI/UX design, and premium Webflow / React frontend builds for funded technology companies",
  tags: ["Fintech", "Web3", "B2B SaaS", "VC-Backed", "Design-Led"],
  opportunities: [
    {
      id: "01",
      title: "Context-Aware Project Scoping Agent",
      type: "Internal Workflow / Intake Optimization",
      typeColor: "gold",
      icon: BrainCircuit,
      stack: ["Next.js", "Gemini Pro", "Vector DB"],
      description:
        "A smart, conversational intake engine embedded on the agency's site that interviews founders, parses their existing pitch decks and PRDs, maps out a complete feature matrix, and automatically drafts an accurate, technical project proposal for agency partners to review — within 5 minutes of the first message.",
      impact: "~12 hrs saved per proposal",
      impactColor: "gold",
    },
    {
      id: "02",
      title: "AI-Powered Knowledge Layer for Venture Portfolios",
      type: "Client Upsell Asset · VC / SaaS",
      typeColor: "teal",
      icon: DatabaseZap,
      stack: ["RAG Architecture", "Supabase Vector", "LLM Orchestration"],
      description:
        "A modular, white-label conversational intelligence component the agency can offer directly to VC clients. It aggregates entire startup portfolio data, whitepapers, and deal updates into a single unified knowledge base — letting limited partners query the portfolio like a senior analyst.",
      impact: "Retainer upsell: $8k–$20k/mo",
      impactColor: "teal",
    },
    {
      id: "03",
      title: "Dynamic Content & Localization Engine",
      type: "Conversion Optimization · Webflow",
      typeColor: "violet",
      icon: Network,
      stack: ["Edge Functions", "LLM Middleware", "Segment API"],
      description:
        "An automation pipeline that adapts landing page copy, case studies, and feature emphasis in real-time based on the visitor's company size, funding stage, and industry vertical — serving a Fintech founder a fundamentally different page than a Web3 protocol team, without touching the CMS.",
      impact: "+34% qualified lead lift (est.)",
      impactColor: "violet",
    },
  ],
};

const LOADING_STEPS: string[] = [
  "Resolving DNS endpoints...",
  "Scraping sitemap architecture...",
  "Extracting service taxonomy...",
  "Mapping Ideal Customer Profile...",
  "Running semantic embeddings...",
  "Generating AI Feature Vector...",
  "Scoring implementation ROI...",
  "Finalizing opportunity matrix...",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function GridOverlay(): JSX.Element {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(245,200,66,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,200,66,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

interface BadgeProps {
  children: ReactNode;
  color?: AccentColor;
}

function Badge({ children, color = "gold" }: BadgeProps): JSX.Element {
  const colors: Record<AccentColor, string> = {
    gold: "bg-amber-400/10 text-amber-400 border-amber-400/20",
    teal: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    violet: "bg-violet-400/10 text-violet-400 border-violet-400/20",
    slate: "bg-slate-400/10 text-slate-400 border-slate-400/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-widest border uppercase ${colors[color]}`}
    >
      {children}
    </span>
  );
}

interface StackPillProps {
  label: string;
}

function StackPill({ label }: StackPillProps): JSX.Element {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 tracking-wide">
      {label}
    </span>
  );
}

interface OpportunityCardProps {
  opp: Opportunity;
  delay: number;
}

function OpportunityCard({ opp, delay }: OpportunityCardProps): JSX.Element {
  const Icon = opp.icon;

  const glowColors: Record<string, string> = {
    gold: "hover:border-amber-400/40 hover:shadow-[0_0_32px_rgba(245,200,66,0.08)]",
    teal: "hover:border-teal-400/40 hover:shadow-[0_0_32px_rgba(45,212,191,0.08)]",
    violet: "hover:border-violet-400/40 hover:shadow-[0_0_32px_rgba(167,139,250,0.08)]",
  };

  const iconColors: Record<string, string> = {
    gold: "text-amber-400 bg-amber-400/10",
    teal: "text-teal-400 bg-teal-400/10",
    violet: "text-violet-400 bg-violet-400/10",
  };

  const impactColors: Record<string, string> = {
    gold: "text-amber-400",
    teal: "text-teal-400",
    violet: "text-violet-400",
  };

  const stripGradients: Record<string, string> = {
    gold: "bg-gradient-to-r from-transparent via-amber-400/40 to-transparent",
    teal: "bg-gradient-to-r from-transparent via-teal-400/40 to-transparent",
    violet: "bg-gradient-to-r from-transparent via-violet-400/40 to-transparent",
  };

  const badgeLabels: Record<string, string> = {
    gold: "Workflow",
    teal: "Upsell",
    violet: "ConvOpt",
  };

  return (
    <div
      className={`relative group rounded-xl border border-white/8 bg-[#111318] p-6 flex flex-col gap-5 transition-all duration-500 ${glowColors[opp.typeColor]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card inner glow strip */}
      <div className={`absolute top-0 left-6 right-6 h-px ${stripGradients[opp.typeColor]}`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${iconColors[opp.typeColor]}`}>
            <Icon size={18} />
          </div>
          <span className="font-mono text-xs text-slate-500 tracking-widest">
            OPP_{opp.id}
          </span>
        </div>
        <Badge color={opp.typeColor}>
          <Zap size={9} />
          {badgeLabels[opp.typeColor]}
        </Badge>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-white font-semibold text-base leading-snug tracking-tight mb-1.5">
          {opp.title}
        </h3>
        <p className="text-slate-500 text-[11px] font-mono tracking-wide">{opp.type}</p>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{opp.description}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {opp.stack.map((s) => (
          <StackPill key={s} label={s} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/6">
        <div className="flex items-center gap-2">
          <BarChart3 size={12} className={impactColors[opp.impactColor]} />
          <span className={`text-xs font-mono font-semibold ${impactColors[opp.impactColor]}`}>
            {opp.impact}
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-600 group-hover:text-slate-300 transition-colors duration-300 cursor-pointer">
          <span className="text-[11px] font-mono">View build spec</span>
          <ChevronRight size={12} />
        </div>
      </div>
    </div>
  );
}

interface ICPBlockProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

function ICPBlock({ label, value, icon: Icon }: ICPBlockProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/3 border border-white/8">
      <div className="flex items-center gap-2">
        <Icon size={12} className="text-amber-400" />
        <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
          {label}
        </span>
      </div>
      <p className="text-sm text-slate-200 leading-relaxed">{value}</p>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function AgencyDiscoveryAgent(): JSX.Element {
  const [url, setUrl] = useState<string>("");
  const [phase, setPhase] = useState<Phase>("input");
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animate results in
  useEffect(() => {
    if (phase === "output") {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleAnalyze = (): void => {
    if (phase !== "input") return;
    setPhase("loading");
    setLoadingStep(0);
    setProgress(0);

    let step = 0;
    let prog = 0;

    intervalRef.current = setInterval(() => {
      prog += 100 / (LOADING_STEPS.length * 4);
      setProgress(Math.min(prog, 98));

      if (prog % (100 / LOADING_STEPS.length) < 2) {
        step = Math.min(step + 1, LOADING_STEPS.length - 1);
        setLoadingStep(step);
      }

      if (prog >= 98) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(100);
        setTimeout(() => setPhase("output"), 400);
      }
    }, 60);
  };

  const handleReset = (): void => {
    setPhase("input");
    setUrl("");
    setProgress(0);
    setLoadingStep(0);
    setVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") handleAnalyze();
  };

  return (
    <div
      className="min-h-screen w-full font-sans antialiased relative overflow-x-hidden"
      style={{ backgroundColor: "#0A0A0A", color: "#E8E8E8" }}
    >
      <GridOverlay />

      {/* Top nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-md bg-amber-400/10 border border-amber-400/20">
            <Cpu size={14} className="text-amber-400" />
          </div>
          <span className="font-mono text-sm font-semibold tracking-widest text-white">
            AGENCY<span className="text-amber-400">.</span>DISCOVERY
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-slate-500 tracking-wider">
            SYSTEM ONLINE
          </span>
        </div>
      </nav>

      {/* ── INPUT STATE ─────────────────────────────────────────────────── */}
      {phase === "input" && (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[88vh] px-6 text-center">
          {/* Ambient glow blob */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(245,200,66,0.4) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="max-w-2xl w-full flex flex-col items-center gap-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/8 border border-amber-400/20">
              <Sparkles size={12} className="text-amber-400" />
              <span className="font-mono text-[11px] text-amber-300 tracking-widest uppercase">
                AI-Powered Agency Intelligence
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h1
                className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none"
                style={{ letterSpacing: "-0.03em" }}
              >
                Decode Any Agency.
                <br />
                <span className="text-amber-400">Propose the Future.</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Scan any agency or client website. Extract their ICP. Get three production-ready AI
                features they can build and sell — in under 60 seconds.
              </p>
            </div>

            {/* Input area */}
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Globe
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  value={url}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="enter agency or client URL..."
                  className="w-full h-13 pl-10 pr-4 rounded-lg bg-[#111318] border border-white/12 text-white placeholder-slate-600 text-sm font-mono tracking-wide outline-none focus:border-amber-400/40 focus:shadow-[0_0_0_1px_rgba(245,200,66,0.15)] transition-all duration-200"
                  style={{ height: "52px" }}
                />
                {/* Cursor blink */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-amber-400 animate-pulse opacity-60" />
              </div>
              <button
                onClick={handleAnalyze}
                className="flex items-center justify-center gap-2.5 px-6 rounded-lg bg-amber-400 text-black text-sm font-bold tracking-wide hover:bg-amber-300 active:scale-95 transition-all duration-150 whitespace-nowrap"
                style={{ height: "52px" }}
              >
                <Zap size={15} />
                Analyze Matrix
              </button>
            </div>

            {/* Hint row */}
            <div className="flex items-center gap-6">
              {["qream.agency", "embacy.io", "ueno.co"].map((hint) => (
                <button
                  key={hint}
                  onClick={() => setUrl(hint)}
                  className="font-mono text-[11px] text-slate-600 hover:text-amber-400 tracking-wider transition-colors duration-150"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ── LOADING STATE ────────────────────────────────────────────────── */}
      {phase === "loading" && (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[88vh] px-6">
          <div className="w-full max-w-md flex flex-col items-center gap-8">
            {/* Animated logo mark */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-ping" />
              <div
                className="absolute inset-2 rounded-full border border-amber-400/30 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center">
                <Cpu size={18} className="text-amber-400" />
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 text-center">
              <h2 className="text-white text-xl font-semibold tracking-tight">
                Analyzing Matrix
              </h2>
              <p className="font-mono text-xs text-amber-400 tracking-widest h-4 transition-all duration-300">
                {LOADING_STEPS[loadingStep]}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-1 rounded-full bg-white/6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 12px rgba(245,200,66,0.5)",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-slate-600">DISCOVERY ENGINE v2.4</span>
                <span className="font-mono text-[10px] text-amber-400">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Step indicators */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {LOADING_STEPS.slice(0, 8).map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    i <= loadingStep ? "bg-amber-400" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ── OUTPUT STATE ─────────────────────────────────────────────────── */}
      {phase === "output" && (
        <main
          className={`relative z-10 px-6 md:px-10 py-12 max-w-6xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Top row: site info + reset */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle size={16} className="text-emerald-400" />
              <span className="font-mono text-xs text-slate-400 tracking-widest">
                ANALYSIS COMPLETE —
              </span>
              <a
                href="#"
                className="font-mono text-xs text-amber-400 tracking-widest hover:underline"
              >
                {RESULT_DATA.targetSite}
              </a>
            </div>
            <button
              onClick={handleReset}
              className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-slate-400 text-xs font-mono hover:border-white/20 hover:text-white transition-all duration-150"
            >
              <Search size={12} />
              New Analysis
            </button>
          </div>

          {/* ICP Panel */}
          <section className="mb-10 p-6 rounded-xl border border-white/8 bg-[#111318] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            <div className="flex items-center gap-2 mb-5">
              <Target size={14} className="text-amber-400" />
              <span className="font-mono text-[11px] text-amber-400 tracking-widest uppercase">
                Extracted Intelligence Profile
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <ICPBlock label="Target Site" value={RESULT_DATA.targetSite} icon={Globe} />
              <ICPBlock
                label="Ideal Customer Profile"
                value={RESULT_DATA.icp}
                icon={Target}
              />
              <ICPBlock
                label="Core Business Model"
                value={RESULT_DATA.businessModel}
                icon={Layers}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {RESULT_DATA.tags.map((tag) => (
                <Badge key={tag} color="gold">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

          {/* Opportunities header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-amber-400" />
                <h2 className="text-white font-semibold text-lg tracking-tight">
                  Generated AI Implementation Opportunities
                </h2>
              </div>
              <span className="font-mono text-[10px] text-slate-600 border border-white/10 px-2 py-0.5 rounded">
                3 of 3
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
              <Shield size={11} />
              <span className="font-mono text-[10px] tracking-wider">Production-ready specs</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {RESULT_DATA.opportunities.map((opp, i) => (
              <OpportunityCard key={opp.id} opp={opp} delay={i * 120} />
            ))}
          </div>

          {/* CTA Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-xl border border-amber-400/15 bg-amber-400/4">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-white font-semibold text-sm">
                Ready to pitch these to your clients?
              </span>
              <span className="text-slate-400 text-xs">
                Export a branded PDF deck with all three specs and implementation timelines.
              </span>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-black text-sm font-bold hover:bg-amber-300 active:scale-95 transition-all duration-150 whitespace-nowrap">
              Export Proposal Deck
              <ArrowRight size={14} />
            </button>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/6 px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-slate-700 tracking-widest">
          AGENCY DISCOVERY AGENT · INTERNAL BUILD 0.9.4
        </span>
        <span className="font-mono text-[10px] text-slate-700 tracking-widest">
          POWERED BY SHAUN AND COFFEE
        </span>
      </footer>
    </div>
  );
}