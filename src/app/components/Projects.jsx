import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./shared/ImageWithFallback.jsx";

const projects = [
  {
    id: "secure-print",
    title: "Secure Print",
    subtitle: "Real-time Document Security",
    description:
      "A real-time, secure document printing system built on Vite + React with Socket.IO-powered live status updates, ensuring end-to-end document integrity.",
    stack: [
      { label: "Vite", color: "gold" },
      { label: "React", color: "teal" },
      { label: "Socket.IO", color: "pink" },
      { label: "Node.js", color: "gold" },
    ],
    image:
      "https://images.unsplash.com/photo-1666101041092-468eb2818c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBkb2N1bWVudCUyMHByaW50aW5nJTIwb2ZmaWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Nzg1NDU5NjZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    accent: "#0F766E",
    category: "Full-Stack",
  },
  {
    id: "movie-db",
    title: "Movie Database",
    subtitle: "UI/UX Design Showcase",
    description:
      "A high-fidelity UI/UX design emphasising actor & director insights, visual storytelling, and pixel-perfect responsive layouts.",
    stack: [
      { label: "Wireframing", color: "pink" },
      { label: "UI/UX", color: "teal" },
      { label: "Prototyping", color: "gold" },
    ],
    image:
      "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRhdGFiYXNlJTIwY2luZW1hJTIwZmlsbSUyMFVJJTIwYXBwfGVufDF8fHx8MTc3ODU0NTk2Nnww&ixlib=rb-4.1.0&q=80&w=600",
    accent: "#DB2777",
    category: "Design",
  },
  {
    id: "voting",
    title: "Online Voting System",
    subtitle: "Secure Full-Stack Platform",
    description:
      "A robust Django full-stack voting platform with strict server-side validation, secure authentication, and tamper-proof ballot architecture.",
    stack: [
      { label: "Django", color: "teal" },
      { label: "Python", color: "gold" },
      { label: "SQL", color: "pink" },
      { label: "Auth", color: "coral" },
    ],
    image:
      "https://images.unsplash.com/photo-1722238451613-655732282ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2b3RpbmclMjBlbGVjdGlvbiUyMGRpZ2l0YWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODU0NTk2N3ww&ixlib=rb-4.1.0&q=80&w=600",
    accent: "#0F766E",
    category: "Full-Stack",
  },
  {
    id: "blood-bank",
    title: "Blood Bank Management",
    subtitle: "Healthcare UI Platform",
    description:
      "An intuitive healthcare management interface with real-time blood-type search, donor tracking, and a critical-resource dashboard built in React.",
    stack: [
      { label: "React", color: "teal" },
      { label: "Tailwind", color: "gold" },
      { label: "Node.js", color: "pink" },
      { label: "MongoDB", color: "coral" },
    ],
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGJhbmslMjBtZWRpY2FsJTIwaGVhbHRoJTIwZG9uYXRpb258ZW58MXx8fHwxNzc4NTQ1OTY2fDA&ixlib=rb-4.1.0&q=80&w=600",
    accent: "#E11D48",
    category: "Healthcare",
  },
];

const pillStyles = {
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  coral: "bg-red-50 text-red-500 border-red-100",
  pink: "bg-pink-50 text-pink-600 border-pink-200",
  gold: "bg-yellow-50 text-yellow-700 border-yellow-200",
  gray: "bg-gray-50 text-gray-600 border-gray-200",
};

export function Projects() {
  return (
    <section id="pillars" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Faint gold glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fef3c7 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-700 mb-4 inline-flex items-center gap-3"
          >
            <span className="w-6 h-px bg-teal-700" />
            Case Studies
            <span className="w-6 h-px bg-teal-700" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Playfair_Display'] text-gray-900 mt-3 mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            The Pillars of Work
          </motion.h2>
          <div
            className="w-16 h-[3px] mx-auto"
            style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24)" }}
          />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden cursor-pointer transition-all duration-350"
              style={{
                borderRadius: "2px",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)`;
                e.currentTarget.style.borderColor = "#F43F5E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgb(243,244,246)";
              }}
            >
              {/* Column fluting decoration at top */}
              <div className="flex justify-evenly px-4 pt-3 pb-2 bg-gray-50 border-b border-gray-100">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-3 bg-gray-200 rounded-full group-hover:bg-teal-100 transition-colors duration-300"
                  />
                ))}
              </div>

              {/* Thumbnail */}
              <div className="relative overflow-hidden h-44">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm font-['Inter'] text-gray-700"
                  style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "2px" }}
                >
                  {project.category}
                </div>
                {/* Hover action icons */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-teal-700 hover:bg-white transition-colors shadow-sm">
                    <Github size={14} />
                  </button>
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-teal-700 hover:bg-white transition-colors shadow-sm">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span
                  className="font-['Inter'] text-teal-600 uppercase tracking-[0.15em] mb-1.5 block"
                  style={{ fontSize: "0.65rem", fontWeight: 600 }}
                >
                  {project.subtitle}
                </span>
                <h3
                  className="font-['Playfair_Display'] text-gray-900 mb-3 group-hover:text-teal-800 transition-colors"
                  style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-['Inter'] text-gray-500 flex-1 mb-5"
                  style={{ fontSize: "0.8rem", lineHeight: 1.75 }}
                >
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.label}
                      className={`px-2.5 py-0.5 border font-['Inter'] ${pillStyles[tech.color]}`}
                      style={{ fontSize: "0.65rem", fontWeight: 500, borderRadius: "2px" }}
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>

                {/* View Case Study link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-['Inter'] text-teal-700 hover:text-teal-900 transition-colors group/link mt-auto"
                  style={{ fontSize: "0.78rem", fontWeight: 600 }}
                >
                  View Case Study
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              {/* Column base */}
              <div className="h-2 w-full bg-gray-100 border-t border-gray-100" />
              <div
                className="h-1 w-full transition-colors duration-300 group-hover:bg-rose-400"
                style={{ backgroundColor: "#e5e7eb" }}
              />
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-teal-700 text-teal-700 font-['Inter'] text-xs uppercase tracking-[0.18em] hover:bg-teal-700 hover:text-white transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            Explore All Projects
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
