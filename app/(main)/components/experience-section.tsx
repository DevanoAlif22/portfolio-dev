"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

import experienceData from "@/data/experience.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleCardClick = (expId: string | number) => {
    router.push(`/experience/${expId}`);
  };

  const truncateDescription = (html: string, maxLength = 150) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-slate-950 text-white py-20 relative px-10 md:px-0"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My achievements and milestones in competitions and professional
            growth
          </p>
        </div>

        {/* Experience cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {experienceData.map((exp, index) => (
            <Card
              key={exp.id}
              onClick={() => handleCardClick(exp.id)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-purple-500/50 
                         transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 
                         cursor-pointer hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={exp.main_image || "/api/placeholder/400/300"}
                  alt={exp.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge overlay */}
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className="bg-black/70 text-white border-slate-600 backdrop-blur-sm"
                  >
                    {exp.kategori}
                  </Badge>
                </div>

                {/* Click indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {exp.nama}
                </h3>

                {/* Company/Detail */}
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  {exp.detail}
                </p>

                {/* Short description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {truncateDescription(exp.description)}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    <span>#{index + 1}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-purple-400 group-hover:text-purple-300">
                    <span>View Details</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/50 rounded-full border border-slate-800">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-400">
              Click any card to see full details
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
