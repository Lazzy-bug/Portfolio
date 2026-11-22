import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./shared/ImageWithFallback.jsx";
import portraitUrl from "./shared/hero-portrait.png";

// Greek Meander / Key SVG pattern
function MeanderPattern({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,10 L4,10 L4,4 L16,4 L16,16 L8,16 L8,8 L12,8 L12,12 L4,12 
           M20,10 L24,10 L24,4 L36,4 L36,16 L28,16 L28,8 L32,8 L32,12 L24,12 
           M40,10 L44,10 L44,4 L56,4 L56,16 L48,16 L48,8 L52,8 L52,12 L44,12
           M60,10 L64,10 L64,4 L76,4 L76,16 L68,16 L68,8 L72,8 L72,12 L64,12
           M80,10 L84,10 L84,4 L96,4 L96,16 L88,16 L88,8 L92,8 L92,12 L84,12
           M100,10 L104,10 L104,4 L116,4 L116,16 L108,16 L108,8 L112,8 L112,12 L104,12
           M120,10 L124,10 L124,4 L136,4 L136,16 L128,16 L128,8 L132,8 L132,12 L124,12
           M140,10 L144,10 L144,4 L156,4 L156,16 L148,16 L148,8 L152,8 L152,12 L144,12
           M160,10 L164,10 L164,4 L176,4 L176,16 L168,16 L168,8 L172,8 L172,12 L164,12
           M180,10 L184,10 L184,4 L196,4 L196,16 L188,16 L188,8 L192,8 L192,12 L184,12"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="acropolis"
      className="min-h-screen flex flex-col justify-center pt-20 pb-0 relative overflow-hidden bg-white"
    >
      {/* Background atmospheric glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-pink-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-[100px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-50 rounded-full blur-[80px] opacity-30" />
      </div>

      {/* Main two-column grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16">
        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-700 mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-teal-700 inline-block" />
            Portfolio · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Playfair_Display'] text-gray-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.08 }}
          >
            PRITHVIRAJ
            <br />
            <span className="text-teal-700">A BHORI</span>
          </motion.h1>

          {/* Gold divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-28 h-[3px] origin-left mb-5"
            style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24, transparent)" }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-['Playfair_Display'] italic text-teal-700 mb-6"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500 }}
          >
            Frontend Engineer &amp; UI/UX Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-['Inter'] text-gray-500 max-w-[440px] mb-10"
            style={{ fontSize: "1rem", lineHeight: 1.8, fontWeight: 400 }}
          >
            Dedicated to translating complex design requirements into clean,
            maintainable code — where ancient symmetry meets modern precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.a
              href="#pillars"
              whileHover={{ scale: 1.04, boxShadow: "0 16px 32px rgba(15,118,110,0.28)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-teal-700 text-white font-['Inter'] text-xs uppercase tracking-[0.18em] shadow-md hover:bg-teal-800 transition-colors"
            >
              View My Work
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="#archives"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 text-gray-700 font-['Inter'] text-xs uppercase tracking-[0.18em] hover:border-teal-700 hover:text-teal-700 transition-colors bg-white"
            >
              <Download size={14} />
              Resume
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap gap-x-6 gap-y-7 sm:gap-x-10 mt-12 sm:mt-14 pt-8 border-t border-gray-100"
          >
            {[
              { value: "4+", label: "Projects Shipped" },
              { value: "2+", label: "Internships" },
              { value: "∞", label: "Design Passion" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-['Playfair_Display'] text-gray-900 mb-0.5"
                  style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-['Inter'] text-gray-400 uppercase tracking-wider"
                  style={{ fontSize: "0.65rem" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Architectural arch frame background */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <div
              className="w-[340px] h-[400px] opacity-10"
              style={{
                background:
                  "radial-gradient(ellipse at center bottom, #fbbf24 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Soft pink glow blob */}
          <div
            className="absolute -top-6 -right-6 w-48 h-48 rounded-full opacity-40 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #fce7f3 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full opacity-40 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #fef9c3 0%, transparent 70%)" }}
          />

          {/* Arch SVG frame */}
          <div className="relative">
            {/* Decorative corner ornaments */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-yellow-300/60 z-20" />
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-yellow-300/60 z-20" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-yellow-300/60 z-20" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-yellow-300/60 z-20" />

            {/* Portrait image with Material elevation */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(260px, 28vw, 380px)",
                height: "clamp(320px, 35vw, 480px)",
                boxShadow:
                  "0 24px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",
                borderRadius: "2px 2px 120px 120px / 2px 2px 80px 80px",
              }}
            >
              <ImageWithFallback
                src={portraitUrl}
                alt="Prithviraj A Bhori – Frontend Engineer & UI/UX Designer"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle teal overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,148,136,0.2) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating badge – Available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute right-0 top-12 bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 sm:-right-6"
              style={{ borderRadius: "2px" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-['Inter'] text-gray-800" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                Available for work
              </span>
            </motion.div>

            {/* Floating badge – Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute left-0 bottom-16 bg-teal-700 text-white px-4 py-3 shadow-[0_8px_24px_rgba(13,148,136,0.4)] sm:-left-8"
              style={{ borderRadius: "2px" }}
            >
              <p className="font-['Playfair_Display'] italic" style={{ fontSize: "0.85rem", fontWeight: 400 }}>
                "Code with Soul"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
