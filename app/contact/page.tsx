import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata() {
  return {
    title: "Contact Us - Get in Touch",
    description: "Ready to start your project? Contact us today for a free consultation.",
  };
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-70" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}