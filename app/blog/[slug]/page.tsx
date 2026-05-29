import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { ReadingProgress } from "./ReadingProgress";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Agency Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("");
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* ── READING PROGRESS BAR (client) ─────────────────────── */}
      <ReadingProgress />

      {/* ── TOP NAV BAR ───────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0A1628] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>
          <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-widest hidden sm:block">
            {post.category}
          </span>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#0A1628] hover:text-slate-500 transition-colors"
          >
            Work with us →
          </Link>
        </div>
      </div>

      {/* ── HERO — full-bleed cover image with overlay ─────────── */}
      <section className="relative h-[55vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Title block pinned to the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            {/* Category + tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00D4FF] text-[#0A1628] uppercase tracking-wide">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/15 text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            {/* Author + meta row */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#0A1628] font-bold text-sm flex-shrink-0">
                  {getInitials(post.author.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-white/60">{post.author.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">

            {/* ── Main article column ──────────────────────────── */}
            <article id="article-body">
              {/* Excerpt / lede */}
              <p className="text-xl text-slate-600 leading-relaxed font-medium border-l-4 border-[#00D4FF] pl-5 mb-10">
                {post.excerpt}
              </p>

              {/* Article HTML content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags row */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400 flex-shrink-0" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share row */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-500">Share this article</span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://agency.com/blog/${post.slug}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-[#0A1628] hover:text-[#0A1628] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://agency.com/blog/${post.slug}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-[#0A1628] hover:text-[#0A1628] transition-colors"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>
            </article>

            {/* ── Sticky sidebar ───────────────────────────────── */}
            <aside className="hidden lg:block sticky top-20 space-y-6">
              {/* Author card */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Written by</p>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#0A1628] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {getInitials(post.author.name)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1628] text-sm">{post.author.name}</p>
                    <p className="text-xs text-[#00D4FF] font-medium">{post.author.title}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{post.author.bio}</p>
              </div>

              {/* Reading meta */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Published</span>
                  <span className="font-medium text-[#0A1628]">{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Read time</span>
                  <span className="font-medium text-[#0A1628]">{post.readTime} min</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Category</span>
                  <span className="font-medium text-[#00D4FF]">{post.category}</span>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-[#0A1628] p-5 text-white">
                <p className="font-bold text-sm mb-1">Need help with this?</p>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Our team delivers exactly the kind of work discussed in this article.
                </p>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00D4FF] text-[#0A1628] text-sm font-bold hover:bg-[#00D4FF]/90 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── AUTHOR BIO (mobile + desktop below article) ────────── */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {getInitials(post.author.name)}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">About the author</p>
              <p className="text-lg font-bold text-[#0A1628]">{post.author.name}</p>
              <p className="text-sm text-[#00D4FF] font-medium mb-3">{post.author.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ─────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-2">Continue Reading</p>
              <h2 className="text-2xl font-bold text-[#0A1628]">Related Articles</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-widest block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0A1628] line-clamp-2 group-hover:text-slate-600 transition-colors mb-3">
                      {rel.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{rel.author.name}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {rel.readTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-alt/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Put This Into Practice?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Our team builds the kind of solutions discussed in this article. Let&apos;s talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-12 px-8"
            >
              Start a Project
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