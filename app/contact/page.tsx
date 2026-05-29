import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata() {
  return {
    title: "Contact Us | Agency",
    description: "Ready to start your project? Get in touch for a free consultation — we respond within 24 hours.",
  };
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Have something in mind? Fill in the form and we&apos;ll come back to you within one business day — no sales pressure, just a straight conversation.
            </p>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-400">
            {[
              "✓ Free initial consultation",
              "✓ Response within 24 hours",
              "✓ No commitment required",
            ].map((t) => (
              <span key={t} className="font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}