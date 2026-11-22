import { motion } from "motion/react";
import { GraduationCap, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";

export function Training() {
  return (
    <section id="training" className="py-28 px-6 bg-[#fafafa] relative overflow-hidden">
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
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-xs uppercase tracking-[0.35em] text-teal-700 mb-4 inline-flex items-center gap-3"
          >
            <span className="w-6 h-px bg-teal-700" />
            Training
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
            The Workshop
          </motion.h2>
          <div
            className="w-16 h-[3px] mx-auto"
            style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24)" }}
          />
        </div>

        {/* Training card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
          className="relative bg-white border border-gray-100 border-l-4 border-l-teal-700 p-8 md:p-10"
          style={{
            borderRadius: "2px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-7 md:gap-9">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-lg">
                <GraduationCap size={24} />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <span
                  className="font-['Inter'] text-teal-700 uppercase tracking-[0.15em]"
                  style={{ fontSize: "0.68rem", fontWeight: 600 }}
                >
                  Pentagon Space, BTM Layout, Bengaluru
                </span>
                <span
                  className="inline-flex items-center gap-1.5 font-['Inter'] text-gray-400 flex-shrink-0"
                  style={{ fontSize: "0.72rem" }}
                >
                  <CalendarDays size={12} />
                  November 2025 – May 2026 (6 months)
                </span>
              </div>

              <h3
                className="font-['Playfair_Display'] text-gray-900 mb-4"
                style={{ fontSize: "1.45rem", fontWeight: 700, lineHeight: 1.25 }}
              >
                MERN Stack Development
              </h3>

              <p
                className="font-['Inter'] text-gray-500 mb-5"
                style={{ fontSize: "0.85rem", lineHeight: 1.8 }}
              >
                Completed a 6-month training program focused on MERN Stack development.
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 border border-teal-200 font-['Inter'] text-teal-700"
                  style={{ fontSize: "0.65rem", fontWeight: 600, borderRadius: "2px" }}
                >
                  <CheckCircle2 size={11} />
                  Completed
                </span>
                <span
                  className="inline-flex items-center gap-1.5 font-['Inter'] text-gray-400"
                  style={{ fontSize: "0.72rem" }}
                >
                  <MapPin size={12} />
                  Bengaluru, India
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "Express.js", "React", "Node.js"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-gray-50 border border-gray-200 font-['Inter'] text-gray-600"
                    style={{ fontSize: "0.65rem", fontWeight: 500, borderRadius: "2px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corner flourish */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-50/50 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
