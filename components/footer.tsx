"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 py-16 px-10 md:px-20 ">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PortfolioDev
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Full Stack Developer
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                Crafting exceptional digital experiences with modern
                technologies, focusing on performance and stunning visual
                design.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available for work</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {["About", "Services", "Skills", "Experience", "Work"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
              Let's Connect
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="h-4 w-4" />
                <span>devanorama123@gmail.com</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400">
                Based in Indonesia
              </div>
            </div>

            <div className="flex gap-3">
              {[
                ["https://github.com/DevanoAlif22", Github],
                [
                  "https://www.linkedin.com/in/devano-alif-ramadhan-9b7035258/",
                  Linkedin,
                ],
                ["https://twitter.com", Twitter],
                ["mailto:devanorama123@gmail.com", Mail],
              ].map(([url, Icon], index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <Link href={url as string} target="_blank">
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span>© {new Date().getFullYear()} Devano. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>in Indonesia</span>
            </div>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 gap-2 group"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent"></div>
    </footer>
  );
}
