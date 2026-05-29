import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata = {
  title: "Our Services | Agency",
  description:
    "Software development, mobile apps, digital marketing, AI solutions, and content creation — built to drive real results.",
};

const iconSvgs: Record<string, React.ReactNode> = {
  Code2: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Smartphone: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  TrendingUp: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Brain: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  PenTool: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            End-to-end digital solutions delivered by specialist teams. We keep things simple, transparent, and focused on results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#00D4FF] text-[#0A1628] font-semibold hover:bg-[#00D4FF]/90 transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-100">
            {services.map((service, idx) => {
              const icon = iconSvgs[service.icon] || iconSvgs.Code2;
              const previewFeatures = service.features.slice(0, 3);
              return (
                <div
                  key={service.id}
                  className="py-12 grid lg:grid-cols-[1fr_auto] gap-8 items-start"
                >
                  {/* Left content */}
                  <div>
                    {/* Icon + title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                          Service {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h2 className="text-2xl font-bold text-[#0A1628]">{service.title}</h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 leading-relaxed mb-6 max-w-xl">
                      {service.shortDescription}. {service.tagline}.
                    </p>

                    {/* Key capabilities */}
                    <ul className="space-y-2">
                      {previewFeatures.map((f) => (
                        <li key={f.title} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00D4FF]" />
                          <span>{f.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: stat + CTA */}
                  <div className="flex flex-col items-start lg:items-end gap-4 lg:pt-2">
                    <div className="flex gap-6">
                      {service.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="text-center lg:text-right">
                          <div className="text-2xl font-bold text-[#0A1628]">{stat.value}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A1628] border border-slate-200 rounded-lg px-5 py-2.5 hover:border-[#0A1628] hover:bg-slate-50 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl font-bold text-[#0A1628]">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover",     desc: "We understand your goals, users, and constraints through a structured workshop." },
              { step: "02", title: "Plan",          desc: "A clear project plan, timeline, and milestones agreed before any work begins." },
              { step: "03", title: "Build",         desc: "Agile delivery with working demos every sprint — you see progress continuously." },
              { step: "04", title: "Launch & Grow", desc: "Smooth go-live, documentation handover, and ongoing support as you scale." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <p className="text-4xl font-bold text-slate-100 mb-3 select-none">{step}</p>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        {/* Same layered gradient as the home page CTA — distinct from the plain footer */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-alt/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll recommend the right approach and give you a realistic estimate — no commitment required.
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
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}