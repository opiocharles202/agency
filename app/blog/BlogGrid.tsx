"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, getAllCategories } from "@/lib/data/blog";

type Post = (typeof blogPosts)[0];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ── Featured card (large) ─────────────────────────────────── */
function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
        {/* Image */}
        <div className="relative h-56 lg:h-auto overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-3">
            {post.category}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold text-[#0A1628] mb-3 line-clamp-3 group-hover:text-slate-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
            <span className="font-medium text-slate-600">{post.author.name}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A1628] group-hover:gap-3 transition-all">
            Read Article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Regular card (grid) ───────────────────────────────────── */
function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-2">
            {post.category}
          </span>
          <h3 className="text-base font-bold text-[#0A1628] mb-2 line-clamp-2 group-hover:text-slate-600 transition-colors flex-1">
            {post.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
            <span className="font-medium text-slate-500">{post.author.name}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Main exported component ───────────────────────────────── */
export function BlogGrid() {
  const categories = getAllCategories();
  const [active, setActive] = useState<string>("All");

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const allSorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const filtered =
    active === "All" ? allSorted : allSorted.filter((p) => p.category === active);

  return (
    <>
      {/* ── Featured ───────────────────────────────────────── */}
      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-2">
                Featured
              </p>
              <h2 className="text-2xl font-bold text-[#0A1628]">Editor&apos;s Picks</h2>
            </div>
            <div className="space-y-6">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All Posts ──────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-2">
                All Articles
              </p>
              <h2 className="text-2xl font-bold text-[#0A1628]">Latest Insights</h2>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              {["All", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    active === cat
                      ? "bg-[#0A1628] text-white"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-[#0A1628]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
