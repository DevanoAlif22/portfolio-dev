"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Code2,
  Database,
  Palette,
  GitBranch,
  Globe,
  Layers,
  Wrench,
} from "lucide-react";

const skills = [
  {
    name: "PHP/Laravel",
    level: 90,
    icon: Code2,
    gradient: "from-purple-500 to-indigo-500",
    category: "Backend",
  },
  {
    name: "JavaScript/TypeScript",
    level: 85,
    icon: Globe,
    gradient: "from-yellow-500 to-orange-500",
    category: "Frontend",
  },
  {
    name: "React/Next.js",
    level: 80,
    icon: Layers,
    gradient: "from-cyan-500 to-blue-500",
    category: "Frontend",
  },
  {
    name: "HTML/CSS",
    level: 95,
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    category: "Frontend",
  },
  {
    name: "MySQL/Postgree",
    level: 85,
    icon: Database,
    gradient: "from-blue-500 to-purple-500",
    category: "Database",
  },
  {
    name: "Figma",
    level: 75,
    icon: Palette,
    gradient: "from-green-500 to-teal-500",
    category: "Design",
  },
  {
    name: "Git",
    level: 80,
    icon: GitBranch,
    gradient: "from-orange-500 to-red-500",
    category: "Tools",
  },
  {
    name: "Bootstap/Tailwind CSS",
    level: 90,
    icon: Wrench,
    gradient: "from-teal-500 to-cyan-500",
    category: "Frontend",
  },
];

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-black text-white py-20 relative overflow-hidden px-10 md:px-0"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-black to-slate-900/20"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to create exceptional digital
            experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 
                          rounded-2xl p-6 hover:border-slate-700 transition-all duration-500 
                          hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 space-y-4">
                  {/* Header with icon and category */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.gradient} 
                                  p-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold text-white group-hover:text-transparent 
                                     group-hover:bg-gradient-to-r group-hover:bg-clip-text 
                                     group-hover:from-white group-hover:to-slate-300 
                                     transition-all duration-300"
                        >
                          {skill.name}
                        </h3>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Percentage display */}
                    <div className="text-right">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} 
                                      bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full 
                                  transition-all duration-1000 ease-out relative overflow-hidden
                                  group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent 
                                      via-white/20 to-transparent -skew-x-12 animate-pulse"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-white/10 to-transparent 
                              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <div
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-white/5 to-transparent 
                              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats/info */}
        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-6 px-8 py-4 bg-slate-900/50 backdrop-blur-sm 
                        rounded-2xl border border-slate-800"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">8+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Technologies
              </div>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">3+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="w-px h-10 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">50+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
