import { notFound } from "next/navigation";
import experienceData from "@/data/experience.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Globe,
  Github,
  Trophy,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function ExperienceDetail({
  params,
}: {
  params: { id: string };
}) {
  const experience = experienceData.find(
    (item) => item.id.toString() === params.id
  );

  if (!experience) {
    notFound();
  }

  const extractLinks = (description: string) => {
    const linkRegex = /<a\s+href=['"](.*?)['"].*?>(.*?)<\/a>/gi;
    const links = [];
    let match;

    while ((match = linkRegex.exec(description)) !== null) {
      links.push({
        url: match[1],
        text: match[2],
      });
    }

    return links;
  };

  const formatDescription = (description: string) => {
    return description
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]*>/g, "")
      .trim();
  };

  const getAchievementIcon = (title: string) => {
    if (
      title.toLowerCase().includes("juara 1") ||
      title.toLowerCase().includes("winner")
    ) {
      return <Trophy className="h-5 w-5 text-yellow-400" />;
    } else if (
      title.toLowerCase().includes("juara") ||
      title.toLowerCase().includes("finalist")
    ) {
      return <Award className="h-5 w-5 text-purple-400" />;
    }
    return <Award className="h-5 w-5 text-purple-400" />;
  };

  const getAchievementColor = (title: string) => {
    if (title.toLowerCase().includes("juara 1")) {
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    } else if (title.toLowerCase().includes("juara 2")) {
      return "bg-gradient-to-r from-gray-300 to-gray-500";
    } else if (title.toLowerCase().includes("juara 3")) {
      return "bg-gradient-to-r from-orange-400 to-orange-600";
    }
    return "bg-gradient-to-r from-purple-400 to-purple-600";
  };

  const links = extractLinks(experience.description);
  const formattedDescription = formatDescription(experience.description);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="py-20 px-10 md:px-0">
        <div className="container px-0 md:px-20 mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-slate-400 hover:text-white"
          >
            <Link href="/#experience" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Experience
            </Link>
          </Button>

          <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge
                  className={`${getAchievementColor(
                    experience.nama
                  )} text-white font-semibold`}
                >
                  {experience.kategori}
                </Badge>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Achievement #{experience.id}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-2">
                  {getAchievementIcon(experience.nama)}
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {experience.nama}
                  </h1>
                  <p className="text-xl text-slate-400 max-w-3xl">
                    {experience.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={experience.main_image}
                alt={experience.nama}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Achievement overlay */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  {getAchievementIcon(experience.nama)}
                  <span className="text-white font-semibold">Achievement</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                {getAchievementIcon(experience.nama)}
                <h2 className="text-2xl font-bold text-purple-400">
                  Achievement Details
                </h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-slate-300 leading-relaxed font-sans text-base">
                  {formattedDescription}
                </pre>
              </div>
            </div>

            {/* Links Section */}
            {links.length > 0 && (
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">
                  Related Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  {links.map((link, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {link.text.toLowerCase().includes("github") ? (
                          <Github className="h-4 w-4" />
                        ) : (
                          <Globe className="h-4 w-4" />
                        )}
                        {link.text}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {experience.sub_images && experience.sub_images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 text-purple-400">
                  Achievement Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.sub_images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Image
                        src={image}
                        alt={`${experience.nama} image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievement Stats */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-purple-400">
                  Achievement Summary
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    {experience.nama.includes("Juara 1")
                      ? "1st"
                      : experience.nama.includes("Juara 2")
                      ? "2nd"
                      : "Top 5"}
                  </div>
                  <div className="text-slate-400 text-sm">Position</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    National
                  </div>
                  <div className="text-slate-400 text-sm">Level</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    Web Dev
                  </div>
                  <div className="text-slate-400 text-sm">Category</div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link href="/#experience" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Experiences
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
