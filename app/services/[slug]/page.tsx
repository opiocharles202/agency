import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", glow: "hover:shadow-blue-100" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", glow: "hover:shadow-green-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", glow: "hover:shadow-orange-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", glow: "hover:shadow-purple-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", glow: "hover:shadow-rose-100" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2: function Code2({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    );
  },
  Smartphone: function Smartphone({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  },
  TrendingUp: function TrendingUp({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    );
  },
  Brain: function Brain({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    );
  },
  PenTool: function PenTool({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    );
  },
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }
  
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }
  
  const colors = colorClasses[service.color] || colorClasses.blue;
  const IconComponent = iconMap[service.icon] || iconMap.Code2;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 opacity-30 ${colors.bg}`} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${colors.bg} border ${colors.border} mb-8`}>
              <IconComponent className={`w-10 h-10 ${colors.text}`} />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
              {service.fullDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
              {service.technologies.length > 4 && (
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  +{service.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4">
            What We Offer
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-lg transition-shadow duration-300 ${colors.glow}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${colors.text}`} />
                    <CardTitle className="text-xl font-semibold text-[var(--text-primary)]">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pl-8">
                  <p className="text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4">
            Our Process
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            A proven methodology for delivering exceptional results
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} ${colors.text} font-bold text-lg mb-3`}>
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4">
            Technologies We Use
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Modern tools and frameworks for optimal results
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className={`px-4 py-2 text-sm border-2 ${colors.border} ${colors.text} bg-white/50`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 lg:p-12 border-none bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Let&apos;s discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}