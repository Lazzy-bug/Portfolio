import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const archives = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Roman Technologies",
    period: "2024",
    description:
      "Spearheaded CI/CD pipelines and integrated AI-driven automation into development workflows, drastically improving deployment times and system reliability.",
    tags: ["CI/CD", "DevOps", "Automation"],
    icon: Briefcase,
    iconBg: "bg-teal-700",
    iconColor: "text-white",
    accent: "border-l-teal-700",
  },
  {
    type: "work",
    title: "Frontend Development Intern",
    organization: "EduTech Platform",
    period: "2023",
    description:
      "Contributed to front-end development, ensuring accessibility and responsive design standards were met across the learning platform. Built reusable component libraries.",
    tags: ["React", "Tailwind", "Accessibility"],
    icon: Briefcase,
    iconBg: "bg-rose-500",
    iconColor: "text-white",
    accent: "border-l-rose-500",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "K.C.T Engineering College",
    period: "2021 – 2025",
    description:
      "Formed the foundational bedrock of algorithmic thinking, software engineering principles, database management, and distributed systems architecture.",
    tags: ["CSE", "Data Structures", "DBMS", "Networks"],
    icon: GraduationCap,
    iconBg: "bg-yellow-400",
    iconColor: "text-gray-900",
    accent: "border-l-yellow-400",
  },
];

export function Timeline() {
  return (
    <section id="archives" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Decorative column lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-gray-900"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-700 mb-4 inline-flex items-center gap-3"
          >
            <span className="w-6 h-px bg-teal-700" />
            Experience & Education
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
            The Archives
          </motion.h2>
          <div
            className="w-16 h-[3px] mx-auto"
            style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-100 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-12">
            {archives.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-6 md:gap-0`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                      className={`bg-white border border-gray-100 p-7 border-l-4 ${item.accent} transition-all duration-300`}
                      style={{
                        borderRadius: "2px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Top row */}
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 mb-3">
                        <span
                          className="font-['Inter'] text-teal-700 uppercase tracking-[0.15em] block"
                          style={{ fontSize: "0.65rem", fontWeight: 600 }}
                        >
                          {item.organization}
                        </span>
                        <span
                          className="flex items-center gap-1 font-['Inter'] text-gray-400 flex-shrink-0"
                          style={{ fontSize: "0.68rem" }}
                        >
                          <Calendar size={10} />
                          {item.period}
                        </span>
                      </div>

                      <h3
                        className="font-['Playfair_Display'] text-gray-900 mb-3"
                        style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.25 }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="font-['Inter'] text-gray-500 mb-4"
                        style={{ fontSize: "0.82rem", lineHeight: 1.75 }}
                      >
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-gray-50 border border-gray-200 font-['Inter'] text-gray-600"
                            style={{ fontSize: "0.65rem", fontWeight: 500, borderRadius: "2px" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Corner flourish */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-pink-50/40 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                      className={`w-12 h-12 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={18} />
                    </motion.div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
