"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Coffee, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-black text-white py-20 px-10 md:px-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-black to-slate-900/30"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Story */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Im a passionate{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                with 3+ years of experience building exceptional web
                applications. I specialize in creating responsive, user-friendly
                interfaces with cutting-edge technologies.
              </p>
              <p>
                My journey in web development started during college, where I
                discovered my love for creating digital solutions. Since then,
                I have worked on various projects ranging from elegant business
                websites to complex enterprise applications.
              </p>
              <p>
                When Im not immersed in code, you'll find me exploring emerging
                technologies, contributing to open source projects, or enjoying
                outdoor adventures that keep my creativity flowing.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div
                className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Code className="h-8 w-8 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Clean Code</div>
                  <div className="text-sm text-slate-400">Best Practices</div>
                </div>
              </div>
              <div
                className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Globe className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="font-semibold text-white">Modern Web</div>
                  <div className="text-sm text-slate-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6" data-aos="fade-left">
            {/* Personal info card */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-800">
                  <span className="font-medium text-slate-400">Name</span>
                  <span className="text-white">Devano Alif Ramadhan</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-800">
                  <span className="font-medium text-slate-400">Email</span>
                  <span className="text-white">devanorama123@gmail.com</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-800">
                  <span className="font-medium text-slate-400">Location</span>
                  <span className="text-white">Sidoarjo, Indonesia</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-slate-400">Experience</span>
                  <span className="text-white font-semibold">3+ Years</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  100%
                </div>
                <div className="text-slate-400 text-sm">
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div data-aos="zoom-in-up" data-aos-delay="300">
              <Button
                variant="outline"
                className="gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-6 text-base w-full"
              >
                <Coffee className="h-5 w-5" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
