import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function BeyondCode() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Beyond Code — Prithvi's Portfolio";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Cinematic letterbox bars */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[9vh] border-b border-white/10 bg-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[9vh] border-t border-white/10 bg-black" />

      {/* Vignette + spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(20,184,166,0.12) 0%, rgba(0,0,0,0) 45%), radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[-25%] h-[140%] w-[55vw] -translate-x-1/2 rotate-[8deg] bg-gradient-to-b from-teal-200/[0.07] via-transparent to-transparent blur-3xl" />

      {/* Film grain */}
      <div className="cinema-grain pointer-events-none absolute -inset-1/4 z-10" />
      <div className="cinema-sweep pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

      {/* Top status strip */}
      <div className="absolute left-0 right-0 top-[12vh] z-20 flex items-center justify-between px-8 font-['Inter'] text-[0.6rem] uppercase tracking-[0.35em] text-white/50 md:px-16">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          Stand by
        </span>
        <span className="hidden sm:inline">Feature Presentation · 2026</span>
      </div>

      {/* Main title card */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl font-['Bebas_Neue']"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 font-['Inter'] text-[0.65rem] uppercase tracking-[0.5em] text-teal-300/80"
          >
            A Portfolio Interlude
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="cinema-flicker text-[clamp(2.5rem,13vw,12rem)] leading-[0.9] tracking-[0.04em] text-white"
            style={{ textShadow: "0 0 55px rgba(20,184,166,0.28)" }}
          >
            BEYOND CODE
          </motion.h1>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 font-['Inter'] text-xs uppercase tracking-[0.4em] text-yellow-200 sm:text-sm"
          >
            Page is in progress
            <span className="cinema-blink">_</span>
          </motion.p>

          <div className="mx-auto mt-8 h-[3px] w-64 overflow-hidden bg-white/10">
            <div className="cinema-progress h-full bg-gradient-to-r from-teal-400 via-yellow-300 to-teal-400" />
          </div>

          <p className="mt-4 font-['Inter'] text-[0.6rem] uppercase tracking-[0.3em] text-white/35">
            Reel 01 · Coming soon
          </p>
        </motion.div>
      </div>

      {/* Back to portfolio */}
      <Link
        to="/"
        className="absolute bottom-[13vh] left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-2 font-['Inter'] text-[0.65rem] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-teal-300"
      >
        <ArrowLeft size={13} />
        Back to portfolio
      </Link>
    </main>
  );
}
