"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Phone, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-10 md:px-20 pt-10 md:pt-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-black to-slate-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8" data-aos="fade-right">
          {/* Status indicator */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">Available for work</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, Im{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Devano
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            I craft exceptional digital experiences with modern technologies,
            focusing on performance, accessibility, and stunning visual design.
          </p>

          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="/file/cvdevano.pdf" download>
              <Button className="gap-2 bg-gradient-to-r cursor-pointer from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-semibold px-6 py-6 text-base">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </a>

            <Button
              variant="outline"
              className="gap-2 cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-6 text-base"
              onClick={() => {
                navigator.clipboard.writeText("devanorama123@gmail.com");
                alert("Email copied to clipboard!");
              }}
            >
              <Phone className="h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div
            className="flex gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://github.com/DevanoAlif22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/devano-alif-ramadhan-9b7035258/"
              target="_blank"
              rel="noopener noreferrer"
              title="Lihat LinkedIn saya"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center" data-aos="fade-left">
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl scale-110 animate-pulse"></div>

          {/* Profile image container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
            <Image
              src="/json/img/profil.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
