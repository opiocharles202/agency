import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Package } from "lucide-react";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";
import { ServicePageClient } from "./ServicePageClient";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Agency`,
    description: service.fullDescription,
  };
}

const colorMap: Record<string, { gradient: string; accent: string; badge: string; number: string; border: string; icon: string }> = {
  blue: {
    gradient: "from-blue-600 to-cyan-500",
    accent: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    number: "bg-blue-600 text-white",
    border: "border-blue-200",
    icon: "bg-blue-50 text-blue-600",
  },
  green: {
    gradient: "from-emerald-600 to-teal-500",
    accent: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    number: "bg-emerald-600 text-white",
    border: "border-emerald-200",
    icon: "bg-emerald-50 text-emerald-600",
  },
  orange: {
    gradient: "from-orange-500 to-amber-400",
    accent: "text-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    number: "bg-orange-500 text-white",
    border: "border-orange-200",
    icon: "bg-orange-50 text-orange-600",
  },
  purple: {
    gradient: "from-purple-600 to-violet-500",
    accent: "text-purple-600",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    number: "bg-purple-600 text-white",
    border: "border-purple-200",
    icon: "bg-purple-50 text-purple-600",
  },
  rose: {
    gradient: "from-rose-500 to-pink-500",
    accent: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    number: "bg-rose-500 text-white",
    border: "border-rose-200",
    icon: "bg-rose-50 text-rose-600",
  },
};

const iconSvgs: Record<string, React.ReactNode> = {
  Code2: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Smartphone: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  TrendingUp: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Brain: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  PenTool: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const c = colorMap[service.color] || colorMap.blue;
  const icon = iconSvgs[service.icon] || iconSvgs.Code2;
  const related = getRelatedServices(service.relatedServices);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A1628] py-24 lg:py-32">
        {/* Gradient orbs */}
        <div className={`absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br ${c.gradient} opacity-10 blur-3xl`} />
        <div className={`absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tl ${c.gradient} opacity-10 blur-3xl`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              {/* Icon + badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${c.gradient} shadow-lg`}>
                  <span className="text-white">{icon}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.badge}`}>
                  Professional Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className={`text-lg font-medium mb-6 bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>
                {service.tagline}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${c.gradient} text-white font-semibold shadow-lg hover:opacity-90 transition-opacity`}
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-semibold"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {service.keyBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.accent}`} />
                <p className="text-slate-700 font-medium leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border mb-4 ${c.badge}`}>
              What&apos;s Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">What We Offer</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A comprehensive suite of capabilities designed to deliver end-to-end results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${c.icon}`}>
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-opacity-80">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1628] relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[${c.gradient}]/5 pointer-events-none`} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border mb-4 ${c.badge}`}>
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A proven, transparent methodology — you&apos;ll always know exactly where your project stands.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-8 left-[7%] right-[7%] h-0.5 bg-white/10" />

            <div className="grid lg:grid-cols-5 gap-6">
              {service.process.map((step, i) => (
                <div key={i} className="relative text-center">
                  {/* Step number circle */}
                  <div className={`relative z-10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg shadow-lg bg-gradient-to-br ${c.gradient} text-white`}>
                    {step.number}
                  </div>
                  {/* Duration badge */}
                  {step.duration && (
                    <span className="text-xs text-slate-500 font-medium block mb-2">{step.duration}</span>
                  )}
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES + TECH STACK ─────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Deliverables */}
            <div>
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border mb-6 ${c.badge}`}>
                Deliverables
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-4">
                What You Walk Away With
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Concrete, tangible outputs — no vague promises. Here&apos;s exactly what every engagement includes.
              </p>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <Package className={`w-5 h-5 flex-shrink-0 mt-0.5 ${c.accent}`} />
                    <span className="text-slate-700 font-medium">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border mb-6 ${c.badge}`}>
                Tech Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-4">
                Technologies We Use
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We pick the best tool for the job — not just whatever is trendy. Every technology listed is production-tested.
              </p>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium border ${c.border} ${c.accent} bg-white hover:bg-white/80 transition-colors`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border mb-4 ${c.badge}`}>
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              Common Questions
            </h2>
            <p className="text-slate-500">
              Everything you need to know before we get started.
            </p>
          </div>

          <ServicePageClient faqs={service.faqs} accentClass={c.accent} gradientClass={c.gradient} />
        </div>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-3">
                Related Services
              </h2>
              <p className="text-slate-500">Often paired together for greater impact.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {related.map((rel) => {
                const rc = colorMap[rel.color] || colorMap.blue;
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${rc.gradient} text-white shadow-md`}>
                      {iconSvgs[rel.icon] || iconSvgs.Code2}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-opacity-80">
                      {rel.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">{rel.shortDescription}</p>
                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${rc.accent}`}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gradient-to-r ${c.gradient} opacity-10 blur-3xl pointer-events-none`} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${c.gradient} mb-8 shadow-xl`}>
            <span className="text-white">{icon}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about your project. Our first consultation is free — no commitment, no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${c.gradient} text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity`}
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              See Our Work
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            {["Free first consultation", "No long-term lock-in", "Response within 24 hours"].map((trust) => (
              <div key={trust} className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {trust}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}