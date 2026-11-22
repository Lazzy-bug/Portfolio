import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Acropolis", href: "#acropolis" },
  { label: "Artifacts", href: "#artifacts" },
  { label: "Pillars", href: "#pillars" },
  { label: "Foundation", href: "#foundation" },
  { label: "Archives", href: "#archives" },
  { label: "Training", href: "#training" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.07)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#acropolis"
          className="font-['Playfair_Display'] text-gray-900 tracking-wide"
          style={{ fontSize: "1.05rem", fontWeight: 700 }}
        >
          <span className="text-teal-700">P</span>rithviraj
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-['Inter'] text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-teal-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-700 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:imprithvi2003@gmail.com"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-teal-700 text-white font-['Inter'] text-xs uppercase tracking-[0.12em] hover:bg-teal-800 transition-colors shadow-md hover:shadow-teal-700/20 hover:shadow-lg"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-900 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-['Inter'] text-xs uppercase tracking-[0.15em] text-gray-700 hover:text-teal-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:imprithvi2003@gmail.com"
                  className="inline-flex items-center px-5 py-2 bg-teal-700 text-white font-['Inter'] text-xs uppercase tracking-[0.12em]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
