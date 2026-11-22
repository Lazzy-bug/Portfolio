import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend & Design",
    icon: "✦",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "UI/UX Design", level: 87 },
    ],
    tagColor: "bg-pink-50 text-pink-700 border-pink-200",
    barColor: "bg-gradient-to-r from-teal-600 to-teal-400",
    accentColor: "text-pink-600",
  },
  {
    title: "Backend & Data",
    icon: "◈",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Python", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 72 },
      { name: "Django", level: 70 },
    ],
    tagColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    barColor: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    accentColor: "text-yellow-600",
  },
  {
    title: "Architecture & Tools",
    icon: "⬡",
    skills: [
      { name: "Docker", level: 68 },
      { name: "Git / GitHub", level: 88 },
      { name: "Linux", level: 75 },
      { name: "Kubernetes", level: 60 },
      { name: "Jenkins", level: 65 },
    ],
    tagColor: "bg-gray-100 text-gray-700 border-gray-200",
    barColor: "bg-gradient-to-r from-gray-600 to-gray-400",
    accentColor: "text-gray-500",
  },
];

export function Skills() {
  return (
    <section id="foundation" className="py-28 px-6 bg-[#fafafa] relative overflow-hidden">
      {/* Soft pink glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #fce7f3 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-700 mb-4 inline-flex items-center gap-3"
          >
            <span className="w-6 h-px bg-teal-700" />
            Technical Mastery
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
            The Foundation
          </motion.h2>
          <div
            className="w-16 h-[3px] mx-auto"
            style={{ background: "linear-gradient(90deg, #0f766e, #14b8a6)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
              className="bg-white p-8 border border-gray-100"
              style={{
                borderRadius: "2px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-7 pb-5 border-b border-gray-100">
                <span className={`text-xl ${group.accentColor}`}>{group.icon}</span>
                <h3
                  className="font-['Playfair_Display'] text-gray-900"
                  style={{ fontSize: "1.05rem", fontWeight: 600 }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIdx * 0.1 + skillIdx * 0.07 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span
                        className="font-['Inter'] text-gray-700"
                        style={{ fontSize: "0.8rem", fontWeight: 500 }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="font-['Inter'] text-gray-400"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: groupIdx * 0.1 + skillIdx * 0.08, ease: "easeOut" }}
                        className={`h-full rounded-full ${group.barColor}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-gray-50">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`px-3 py-1 border font-['Inter'] cursor-default transition-all ${group.tagColor}`}
                    style={{ fontSize: "0.68rem", fontWeight: 500, borderRadius: "2px" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
