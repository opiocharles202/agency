import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Our Services | Digital Agency",
  description: "Comprehensive digital solutions including software development, mobile apps, marketing, AI, and content creation.",
};

export default function ServicesIndexPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, we bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-xl bg-[var(--surface)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl font-bold text-[var(--accent)]">
                        {service.title.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--text-secondary)] mb-6">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-[var(--accent)] font-medium">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 lg:p-12 border-none bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Not Sure What You Need?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Let&apos;s discuss your project and find the perfect solution for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--primary)] hover:bg-[var(--accent)]/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}