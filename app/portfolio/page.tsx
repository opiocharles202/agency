"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioItems, getAllServices } from "@/lib/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const serviceLabels: Record<string, string> = {
  software: "Software Development",
  mobile: "Mobile Apps",
  marketing: "Digital Marketing",
  ai: "AI Solutions",
  content: "Content Creation",
};

const serviceColors: Record<string, string> = {
  software: "bg-blue-100 text-blue-700",
  mobile: "bg-green-100 text-green-700",
  marketing: "bg-orange-100 text-orange-700",
  ai: "bg-purple-100 text-purple-700",
  content: "bg-rose-100 text-rose-700",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const services = getAllServices();

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.service === activeFilter);

  // Sort: featured first, then by id
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-95" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)] opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent-alt)] opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Work
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[var(--surface)] border-b border-[var(--surface-alt)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90" : ""}
            >
              All Projects
            </Button>
            {services.map((service) => (
              <Button
                key={service}
                variant={activeFilter === service ? "default" : "outline"}
                onClick={() => setActiveFilter(service)}
                className={activeFilter === service ? "bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90" : ""}
              >
                {serviceLabels[service] || service}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Link href={`/portfolio/${item.slug}`}>
                  <Card className="group h-full border border-slate-100/90 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer pt-0 pb-0 gap-0 rounded-2xl overflow-hidden">
                    {/* Card Image */}
                    <div className="relative h-64 bg-slate-50 overflow-hidden">
                      <Image
                        src={item.image || "/portfolio-ecommerce.png"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, 33vw"
                      />
                      {item.featured && (
                        <Badge className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--primary)] font-bold shadow-sm z-10">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    <CardHeader className="pb-3 pt-6 px-6">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[var(--accent)] transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <ExternalLink className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300 shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-slate-500 mt-1">{item.client}</p>
                    </CardHeader>

                    <CardContent className="pt-0 pb-6 px-6">
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge className={`${serviceColors[item.service]} text-xs font-semibold px-2.5 py-0.5 shadow-none border-0`}>
                          {serviceLabels[item.service] || item.service}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-semibold px-2.5 py-0.5 text-slate-500 border-slate-200">
                          {item.industry}
                        </Badge>
                      </div>

                      {/* Results Preview */}
                      <div className="grid grid-cols-3 gap-2 pt-5 border-t border-slate-100">
                        {item.results.slice(0, 3).map((result, i) => (
                          <div key={i} className="text-center">
                            <p className="text-base font-extrabold text-[var(--accent)]">{result.value}</p>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1 truncate">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {sortedItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)] text-lg">
                No projects found in this category.
              </p>
              <Button
                variant="link"
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-[var(--accent)]"
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 lg:p-12 border-none bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Start Your Project
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Ready to create something amazing? Let&apos;s discuss your ideas and turn them into reality.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}