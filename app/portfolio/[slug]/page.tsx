import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getPortfolioBySlug, portfolioItems, getPortfolioByService } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
          {project.image && (
            <div className="absolute inset-0 opacity-10 blur-2xl scale-110">
              <Image src={project.image} alt="" fill className="object-cover" />
            </div>
          )}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/portfolio">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-sm font-semibold transition-all mb-8 cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </span>
            </Link>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className={`${serviceColors[project.service]} text-xs font-semibold px-3 py-1 shadow-none border-0`}>
                {serviceLabels[project.service] || project.service}
              </Badge>
              <Badge variant="outline" className="text-white border-white/20 text-xs font-semibold px-3 py-1">
                {project.industry}
              </Badge>
              {project.featured && (
                <Badge className="bg-accent text-primary text-xs font-bold px-3 py-1">
                  Featured Case Study
                </Badge>
              )}
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-slate-300">
              Transforming <span className="font-semibold text-white">{project.client}</span>&apos;s digital capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping Showcase Image */}
      {project.image && (
        <section className="relative z-20 -mt-24 px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-slate-900/60 backdrop-blur-md p-2">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-slate-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Results Overview */}
      <section className="py-16 mt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs font-bold text-accent uppercase tracking-widest text-center mb-8">
              Key Metrics & Business Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
                  <p className="text-4xl lg:text-5xl font-extrabold text-accent mb-3">
                    {result.value}
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {result.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">?</span>
                </span>
                The Challenge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </span>
                Our Solution
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border border-slate-200 text-slate-600 font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Related Service Box */}
            {serviceInfo && (
              <Card className="border border-slate-100 bg-slate-50 shadow-sm rounded-2xl p-4 mt-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Interested in {serviceInfo.title}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {serviceInfo.shortDescription}
                  </p>
                  <Link href={`/services/${serviceInfo.slug}`}>
                    <span className="inline-flex items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-11 px-6 cursor-pointer gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
              Related Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.slug}`}>
                  <Card className="group h-full border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-2xl overflow-hidden pt-0 pb-0 gap-0 cursor-pointer">
                    <div className="relative h-44 bg-slate-50 overflow-hidden">
                      <Image
                        src={item.image || "/portfolio-ecommerce.png"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <CardHeader className="pb-3 pt-5 px-5">
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                        {item.title}
                      </CardTitle>
                      <p className="text-xs text-slate-500 mt-1">{item.client}</p>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5 px-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-accent transition-all duration-300 flex items-center gap-1">
                        Read Case Study <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Personalized Conversion CTA Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Free Strategy Assessment
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready to achieve similar results for your business?
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Let&apos;s co-create a high-performing digital product that drives massive growth. Book a free 30-minute discovery call to discuss your scope and tech stack.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-12 px-8 cursor-pointer">
                  Schedule Free Consultation
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8 gap-2 cursor-pointer">
                  View More Cases
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}