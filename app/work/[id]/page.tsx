import { notFound } from "next/navigation";
import webData from "@/data/web.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Globe, Github } from "lucide-react";
import Link from "next/link";

export default function WorkDetail({ params }: { params: { id: string } }) {
  const work = webData.find((item) => item.id.toString() === params.id);

  if (!work) {
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

  const links = extractLinks(work.description);
  const formattedDescription = formatDescription(work.description);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="py-20 px-10 md:px-0">
        <div className="container px-0 md:px-20 mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-slate-400 hover:text-white"
          >
            <Link href="/#work" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Works
            </Link>
          </Button>

          <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="bg-purple-600 hover:bg-purple-700">
                  {work.kategori}
                </Badge>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Project #{work.id}</span>
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {work.nama}
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                  {work.detail}
                </p>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={work.main_image}
                alt={work.nama}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Description */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">
                Project Overview
              </h2>
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
                  Project Links
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
            {work.sub_images && work.sub_images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-8 text-purple-400">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {work.sub_images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Image
                        src={image}
                        alt={`${work.nama} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="text-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link href="/#work" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
