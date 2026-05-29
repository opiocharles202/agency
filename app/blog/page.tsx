import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogGrid } from "./BlogGrid";

export async function generateMetadata() {
  return {
    title: "Blog | Agency",
    description:
      "Expert perspectives on software development, mobile apps, digital marketing, and AI from our specialist team.",
  };
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Insights & Ideas
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Practical perspectives on technology, design, and growth — written by the specialists who build and ship these things every day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:gap-3 transition-all"
            >
              Have a topic in mind? Let us know
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GRID (client — handles featured + filter) ────────────── */}
      <BlogGrid />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-alt/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Turn these insights into action. Our team is ready to help you build something great.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-12 px-8"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}