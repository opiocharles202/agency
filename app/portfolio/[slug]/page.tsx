import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { getPortfolioBySlug, portfolioItems, getPortfolioByService } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  
  return {
    title: project.title,
    description: project.challenge,
  };
}

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

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  const serviceInfo = services.find((s) => s.slug === project.service);
  const relatedProjects = getPortfolioByService(project.service)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

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
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="gap-2 -ml-3 mb-8 text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className={`${serviceColors[project.service]} text-sm`}>
                {serviceLabels[project.service] || project.service}
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 text-sm">
                {project.industry}
              </Badge>
              {project.featured && (
                <Badge className="bg-[var(--accent)] text-[var(--primary)] text-sm">
                  Featured Project
                </Badge>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl text-white/80 mb-8">
              Client: {project.client}
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 divide-x divide-[var(--surface-alt)]">
                {project.results.map((result, index) => (
                  <div key={index} className="p-6 text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-2">
                      {result.value}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {result.metric}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <span className="text-[var(--accent)] font-bold">?</span>
                </span>
                The Challenge
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                </span>
                Our Solution
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-2 border-[var(--surface-alt)]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Related Service */}
            {serviceInfo && (
              <Card className="border-none shadow-lg bg-[var(--surface)]">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--text-primary)]">
                    Interested in {serviceInfo.title}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--text-secondary)] mb-4">
                    {serviceInfo.shortDescription}
                  </p>
                  <Link href={`/services/${serviceInfo.slug}`}>
                    <Button className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedProjects.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.slug}`}>
                  <Card className="group h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/20">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-[var(--text-secondary)]">{item.client}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center text-[var(--accent)] text-sm font-medium">
                        View Project
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 lg:p-12 border-none bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Start Your Own Project
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Ready to achieve similar results? Let&apos;s discuss how we can help transform your business.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                  Get Started
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