import { motion } from "motion/react";
import { Link } from "react-router";
import { Github, Linkedin, Mail, ArrowUpRight, Figma, Twitter, FileText } from "lucide-react";
import resumeUrl from "./shared/Prithviraj_A_Bhori_Resume.pdf";

// Greek Meander SVG Pattern - full-width repeating
function MeanderBorder() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "20px" }}>
      <svg
        width="100%"
        height="20"
        viewBox="0 0 400 20"
        preserveAspectRatio="xMinYMid repeat"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="meander" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M0,10 L4,10 L4,4 L16,4 L16,16 L8,16 L8,8 L12,8 L12,12 L0,12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="square"
          />
          <line x1="16" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M20,10 L24,10 L24,4 L36,4 L36,16 L28,16 L28,8 L32,8 L32,12 L20,12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="square"
          />
          <line x1="36" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
        <rect width="100%" height="20" fill="url(#meander)" />
      </svg>
    </div>
  );
}

const navLinks = [
  { label: "The Acropolis", href: "#acropolis" },
  { label: "The Artifacts", href: "#artifacts" },
  { label: "The Pillars", href: "#pillars" },
  { label: "The Foundation", href: "#foundation" },
  { label: "The Archives", href: "#archives" },
  { label: "The Workshop", href: "#training" },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Lazzy-bug",
    color: "hover:text-yellow-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prithvi-bhori-b29124281/",
    color: "hover:text-teal-400",
  },
  {
    icon: Figma,
    label: "Prithvi Bhori — Figma",
    href: "https://www.figma.com/files/team/1611789258724820833/user/1611789254610951116?fuid=1611789254610951116",
    color: "hover:text-pink-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    color: "hover:text-blue-400",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle column guide lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white"
            style={{ left: `${(i + 1) * (100 / 6)}%` }}
          />
        ))}
      </div>

      {/* Soft pink + gold atmospheric glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #fce7f3 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #fef3c7 0%, transparent 60%)" }}
      />

      {/* ── Top Half: Grand CTA ── */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center relative z-10 border-b border-white/10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-400 mb-6 inline-flex items-center gap-3"
        >
          <span className="w-6 h-px bg-teal-400" />
          Open to Opportunities
          <span className="w-6 h-px bg-teal-400" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-['Playfair_Display'] text-white mt-4 mb-8"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Let's Build Something
          <br />
          <span className="text-teal-400">Enduring.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter'] text-gray-400 max-w-lg mx-auto mb-10"
          style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
        >
          From pixel-perfect interfaces to full-stack architecture —
          let's create something that stands the test of time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="mailto:imprithvi2003@gmail.com"
            whileHover={{ scale: 1.04, boxShadow: "0 16px 32px rgba(20,184,166,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal-600 text-white font-['Inter'] text-xs uppercase tracking-[0.18em] hover:bg-teal-500 transition-colors shadow-lg"
            style={{ borderRadius: "2px" }}
          >
            <Mail size={15} />
            Get in Touch
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prithvi-bhori-b29124281/"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-gray-300 font-['Inter'] text-xs uppercase tracking-[0.18em] hover:border-white/40 hover:text-white transition-colors"
            style={{ borderRadius: "2px" }}
          >
            LinkedIn Profile
            <ArrowUpRight size={13} />
          </motion.a>
        </motion.div>
      </div>

      {/* ── Bottom Half: Info Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="font-['Playfair_Display'] text-white mb-4"
              style={{ fontSize: "1.25rem", fontWeight: 700 }}
            >
              <span className="text-teal-400">P</span>rithviraj
              <br />A Bhori
            </h3>
            <p
              className="font-['Inter'] text-gray-500 mb-5"
              style={{ fontSize: "0.8rem", lineHeight: 1.8 }}
            >
              Frontend Engineer & UI/UX Designer crafting digital experiences with structural harmony.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:border-white/25 ${color}`}
                  style={{ borderRadius: "2px" }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4
              className="font-['Inter'] text-gray-200 uppercase tracking-[0.2em] mb-5"
              style={{ fontSize: "0.7rem", fontWeight: 600 }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-['Inter'] text-gray-500 hover:text-teal-400 transition-colors relative group flex items-center gap-2"
                    style={{ fontSize: "0.82rem" }}
                  >
                    <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/beyond-code"
                  className="relative group flex items-center gap-2 font-['Bebas_Neue'] text-lg tracking-[0.18em] text-yellow-300 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-yellow-300 transition-all duration-300 group-hover:w-4" />
                  BEYOND CODE
                  <span className="border border-yellow-300/40 px-1.5 py-0.5 font-['Inter'] text-[0.55rem] tracking-[0.1em] text-yellow-200/80">
                    NEW
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-['Inter'] text-gray-200 uppercase tracking-[0.2em] mb-5"
              style={{ fontSize: "0.7rem", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:imprithvi2003@gmail.com"
                  className="font-['Inter'] text-gray-500 hover:text-teal-400 transition-colors flex items-center gap-2"
                  style={{ fontSize: "0.82rem" }}
                >
                  <Mail size={13} className="text-teal-700 flex-shrink-0" />
                  imprithvi2003@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lazzy-bug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-gray-500 hover:text-yellow-300 transition-colors flex items-center gap-2"
                  style={{ fontSize: "0.82rem" }}
                >
                  <Github size={13} className="text-gray-400 flex-shrink-0" />
                  github.com/Lazzy-bug
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/prithvi-bhori-b29124281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-gray-500 hover:text-teal-400 transition-colors flex items-center gap-2"
                  style={{ fontSize: "0.82rem" }}
                >
                  <Linkedin size={13} className="text-teal-700 flex-shrink-0" />
                  linkedin.com/in/prithvi-bhori-b29124281/
                </a>
              </li>
              <li>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-gray-500 hover:text-yellow-300 transition-colors flex items-center gap-2"
                  style={{ fontSize: "0.82rem" }}
                >
                  <FileText size={13} className="text-gray-400 flex-shrink-0" />
                  View resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4
              className="font-['Inter'] text-gray-200 uppercase tracking-[0.2em] mb-5"
              style={{ fontSize: "0.7rem", fontWeight: 600 }}
            >
              Status
            </h4>
            <div
              className="border border-white/10 p-5"
              style={{ borderRadius: "2px" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className="font-['Inter'] text-gray-300"
                  style={{ fontSize: "0.8rem", fontWeight: 500 }}
                >
                  Available for Work
                </span>
              </div>
              <p
                className="font-['Inter'] text-gray-500 mb-4"
                style={{ fontSize: "0.75rem", lineHeight: 1.7 }}
              >
                Open to full-time roles and freelance projects in Frontend Engineering & UI/UX Design.
              </p>
              <a
                href="mailto:imprithvi2003@gmail.com"
                className="inline-flex items-center gap-1.5 font-['Inter'] text-teal-400 hover:text-teal-300 transition-colors"
                style={{ fontSize: "0.75rem", fontWeight: 600 }}
              >
                Send a message
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Meander pattern bottom strip ── */}
      <div className="border-t border-white/[0.06] relative z-10">
        <div className="text-white/10">
          <MeanderBorder />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="font-['Inter'] text-gray-600"
            style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            © {new Date().getFullYear()} Prithviraj A Bhori
          </p>
          <p
            className="font-['Inter'] text-gray-700"
            style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
