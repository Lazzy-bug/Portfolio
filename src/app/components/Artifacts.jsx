import { useState } from "react";
import { motion } from "motion/react";
import { Bell, Search, Heart, Star, Zap, Check } from "lucide-react";

// Material elevation shadow presets
const elev = {
  z1: "shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.08)]",
  z2: "shadow-[0_3px_6px_rgba(0,0,0,0.12),_0_2px_4px_rgba(0,0,0,0.08)]",
  z3: "shadow-[0_10px_20px_rgba(0,0,0,0.10),_0_4px_8px_rgba(0,0,0,0.07)]",
  z4: "shadow-[0_20px_40px_rgba(0,0,0,0.12),_0_8px_16px_rgba(0,0,0,0.06)]",
  z5: "shadow-[0_32px_64px_rgba(0,0,0,0.14),_0_12px_24px_rgba(0,0,0,0.08)]",
};

// Toggle component
function Toggle({ label, defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="font-['Inter'] text-gray-600" style={{ fontSize: "0.8rem" }}>{label}</span>
      <button
        onClick={() => setOn((v) => !v)}
        className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
          on ? "bg-teal-600" : "bg-gray-200"
        }`}
        aria-label={label}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            on ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

// Input field component
function FloatInput({ label, type = "text", icon }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <div
        className={`flex items-center gap-3 px-4 py-3 bg-white border transition-all duration-200 ${
          focused ? "border-teal-600 shadow-[0_0_0_3px_rgba(13,148,136,0.12)]" : "border-gray-200"
        }`}
        style={{ borderRadius: "2px" }}
      >
        <span className={`transition-colors ${focused ? "text-teal-600" : "text-gray-400"}`}>{icon}</span>
        <div className="relative flex-1">
          <label
            className={`absolute transition-all duration-200 pointer-events-none font-['Inter'] text-gray-400 ${
              active ? "-top-2.5 text-[0.65rem] text-teal-600" : "top-0 text-[0.82rem]"
            }`}
          >
            {label}
          </label>
          <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent outline-none font-['Inter'] text-gray-800 pt-1"
            style={{ fontSize: "0.82rem" }}
          />
        </div>
      </div>
    </div>
  );
}

// Chip / Badge
function Chip({ label, color, dot }) {
  const styles = {
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    coral: "bg-red-50 text-red-500 border-red-200",
    pink: "bg-pink-50 text-pink-600 border-pink-200",
    gold: "bg-yellow-50 text-yellow-700 border-yellow-200",
    gray: "bg-gray-50 text-gray-600 border-gray-200",
  };
  const dots = {
    teal: "bg-teal-500",
    coral: "bg-red-400",
    pink: "bg-pink-400",
    gold: "bg-yellow-400",
    gray: "bg-gray-400",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 border font-['Inter'] ${styles[color]}`}
      style={{ fontSize: "0.7rem", fontWeight: 500, borderRadius: "2px" }}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dots[color]}`} />}
      {label}
    </span>
  );
}

// Rating stars
function StarRating({ value }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={i <= value ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-100"}
        />
      ))}
    </div>
  );
}

export function Artifacts() {
  return (
    <section id="artifacts" className="py-28 px-6 bg-[#f8f8f9] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #ccfbf1 0%, transparent 70%)" }}
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
            Design System
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
            The Artifacts
          </motion.h2>
          <div className="w-16 h-[3px] mx-auto" style={{ background: "linear-gradient(90deg, #fde68a, #fbbf24)" }} />
          <p className="font-['Inter'] text-gray-500 max-w-md mx-auto mt-5" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            A curated mini-design-system showcasing tactile UI components with Material-depth elevation.
          </p>
        </div>

        {/* Masonry-style card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* ── Card 1: Toggles & Controls ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
            className={`bg-white p-7 ${elev.z3} transition-all duration-300`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Controls
              </h3>
              <Chip label="Interactive" color="teal" dot />
            </div>
            <div className="flex flex-col gap-5">
              <Toggle label="Dark Mode" defaultOn={false} />
              <Toggle label="Notifications" defaultOn={true} />
              <Toggle label="Auto-save" defaultOn={true} />
              <Toggle label="Analytics" defaultOn={false} />
            </div>
            <div className="mt-6 pt-5 border-t border-gray-50 flex gap-3">
              {["Checkbox", "Radio", "Switch"].map((t) => (
                <span key={t} className="font-['Inter'] text-gray-400" style={{ fontSize: "0.68rem" }}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* ── Card 2: Input Fields ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className={`bg-white p-7 ${elev.z3} transition-all duration-300`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Form Fields
              </h3>
              <Chip label="Focusable" color="pink" dot />
            </div>
            <div className="flex flex-col gap-4">
              <FloatInput label="Your Name" icon={<span className="text-base">𝔸</span>} />
              <FloatInput label="Search anything…" icon={<Search size={15} />} />
              <FloatInput label="Email address" type="email" icon={<Bell size={15} />} />
            </div>
            <button
              className="mt-5 w-full py-2.5 bg-teal-700 text-white font-['Inter'] text-xs uppercase tracking-[0.15em] hover:bg-teal-800 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Submit
            </button>
          </motion.div>

          {/* ── Card 3: Typography Scale ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className={`bg-white p-7 ${elev.z3} transition-all duration-300 md:col-span-2 xl:col-span-1`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Type Scale
              </h3>
              <Chip label="Playfair + Inter" color="gold" dot />
            </div>
            <div className="space-y-3">
              <p className="font-['Playfair_Display'] text-gray-900 border-b border-gray-50 pb-3" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>Display</p>
              <p className="font-['Playfair_Display'] text-gray-800 border-b border-gray-50 pb-3" style={{ fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.1 }}>Heading</p>
              <p className="font-['Playfair_Display'] italic text-teal-700 border-b border-gray-50 pb-3" style={{ fontSize: "1.1rem", fontWeight: 500 }}>Subheading italic</p>
              <p className="font-['Inter'] text-gray-600 border-b border-gray-50 pb-3" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>Body — Inter Regular · Highly readable & geometric</p>
              <p className="font-['Inter'] text-gray-400 uppercase tracking-[0.2em]" style={{ fontSize: "0.65rem" }}>Caption · Uppercase · Tracking wide</p>
            </div>
          </motion.div>

          {/* ── Card 4: Elevation Showcase ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className={`bg-[#fafafa] p-7 ${elev.z2} border border-gray-100 transition-all duration-300`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Elevation Depth
              </h3>
              <Chip label="Material Z-layers" color="gray" dot />
            </div>
            <div className="flex items-end justify-center gap-2 sm:gap-5 py-4">
              {[
                { z: elev.z1, label: "Z1", h: "h-10" },
                { z: elev.z2, label: "Z2", h: "h-14" },
                { z: elev.z3, label: "Z3", h: "h-20" },
                { z: elev.z4, label: "Z4", h: "h-28" },
                { z: elev.z5, label: "Z5", h: "h-36" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 sm:w-10 ${item.h} bg-white ${item.z} border border-gray-50 transition-transform hover:-translate-y-1 cursor-pointer`}
                    style={{ borderRadius: "2px" }}
                  />
                  <span className="font-['Inter'] text-gray-400" style={{ fontSize: "0.65rem" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 5: Color Palette ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -4 }}
            className={`bg-white p-7 ${elev.z3} transition-all duration-300`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Color System
              </h3>
              <Chip label="Brand Palette" color="coral" dot />
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Deep Teal", hex: "#0F766E", bg: "bg-teal-700", text: "text-white" },
                { name: "Coral Red", hex: "#F43F5E", bg: "bg-rose-500", text: "text-white" },
                { name: "Soft Pink", hex: "#FCE7F3", bg: "bg-pink-100", text: "text-pink-700" },
                { name: "Pale Gold", hex: "#FEF3C7", bg: "bg-yellow-100", text: "text-yellow-700" },
                { name: "Charcoal", hex: "#111827", bg: "bg-gray-900", text: "text-white" },
              ].map((color) => (
                <div key={color.name} className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${color.bg} flex-shrink-0`} style={{ borderRadius: "2px" }} />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-['Inter'] text-gray-700" style={{ fontSize: "0.78rem", fontWeight: 500 }}>{color.name}</span>
                    <span className="font-['Inter'] text-gray-400" style={{ fontSize: "0.68rem" }}>{color.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 6: Layered UI Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className={`bg-white p-7 ${elev.z3} transition-all duration-300`}
            style={{ borderRadius: "2px" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="font-['Playfair_Display'] text-gray-900" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                Component Card
              </h3>
              <Chip label="UI Component" color="teal" dot />
            </div>

            {/* Layered card demo */}
            <div className={`bg-[#f8f8f9] p-5 ${elev.z2} relative`} style={{ borderRadius: "2px" }}>
              {/* Notification badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white font-['Playfair_Display'] font-bold" style={{ fontSize: "0.9rem" }}>
                    P
                  </div>
                  <div>
                    <p className="font-['Inter'] text-gray-800" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Prithviraj A B.</p>
                    <p className="font-['Inter'] text-gray-400" style={{ fontSize: "0.68rem" }}>Frontend Engineer</p>
                  </div>
                </div>
                <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white" style={{ fontSize: "0.6rem", fontWeight: 700 }}>3</span>
              </div>
              <p className="font-['Inter'] text-gray-500 mb-4" style={{ fontSize: "0.78rem", lineHeight: 1.7 }}>
                "Crafting interfaces where structure meets soul."
              </p>
              <div className="flex items-center justify-between">
                <StarRating value={5} />
                <div className="flex gap-2">
                  <button className="w-7 h-7 border border-gray-200 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors text-gray-400">
                    <Heart size={13} />
                  </button>
                  <button className="w-7 h-7 bg-teal-700 flex items-center justify-center text-white hover:bg-teal-800 transition-colors">
                    <Check size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              <Chip label="React" color="teal" />
              <Chip label="Tailwind" color="gold" />
              <Chip label="UI Design" color="pink" />
              <Chip label="Motion" color="coral" />
            </div>

            {/* Button variants */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 bg-teal-700 text-white font-['Inter'] text-xs hover:bg-teal-800 transition-colors flex items-center justify-center gap-1.5" style={{ borderRadius: "2px" }}>
                <Zap size={12} /> Primary
              </button>
              <button className="flex-1 py-2 border border-gray-200 text-gray-600 font-['Inter'] text-xs hover:border-gray-400 transition-colors" style={{ borderRadius: "2px", fontSize: "0.75rem" }}>
                Secondary
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
