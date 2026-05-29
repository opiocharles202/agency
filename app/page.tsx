"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Smartphone,
  TrendingUp,
  Sparkles,
  Video,
  ArrowRight,
  Rocket,
  Users,
  Award,
  Star,
  Quote,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies. From web apps to enterprise systems.",
    href: "/services/software",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "/services/mobile",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Data-driven marketing strategies that grow your audience and maximize ROI.",
    href: "/services/marketing",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Leverage artificial intelligence to automate processes and gain valuable insights.",
    href: "/services/ai",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Compelling content that tells your brand story and engages your target audience.",
    href: "/services/content",
  },
];

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Software Development",
    metric: "200% increase in sales",
    image: "/portfolio-ecommerce.png",
  },
  {
    title: "Health & Fitness App",
    category: "Mobile Apps",
    metric: "500K+ downloads",
    image: "/portfolio-fitness.png",
  },
  {
    title: "Brand Campaign",
    category: "Marketing",
    metric: "10M impressions",
    image: "/portfolio-marketing.png",
  },
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development process ensures quick time-to-market for your projects.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in their respective domains.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of delivering successful projects that drive real business value.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Commitment to excellence with rigorous quality assurance standards.",
  },
];

const testimonials = [
  {
    quote:
      "Working with this team transformed our digital presence. Their expertise in both strategy and execution is unmatched.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechStart Inc.",
  },
  {
    quote:
      "They delivered our project on time and exceeded our expectations. The results speak for themselves.",
    name: "Michael Chen",
    title: "Founder",
    company: "GrowthLabs",
  },
  {
    quote:
      "Outstanding communication and technical skills. They truly understand what it takes to build scalable products.",
    name: "Emily Rodriguez",
    title: "CTO",
    company: "InnovateCo",
  },
];

const clientLogos = [
  "TechCorp",
  "InnovateLabs",
  "GrowthHub",
  "DigitalFirst",
  "CloudNine",
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Hero background image */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,212,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,74,0.15),transparent_50%)]" />

        {/* Abstract shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Social proof badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Trusted by 50+ companies worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Turn your vision into a{" "}
              <span className="text-accent">product</span> your{" "}
              <span className="text-accent">users love</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              We partner with startups and enterprises to design, build, and grow
              world-class software — from idea to launch and beyond.
            </motion.p>

            {/* Problems we solve */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto py-2"
            >
              {[
                "⚡ Slow time-to-market",
                "🧱 Legacy tech debt",
                "📈 Poor user engagement",
                "🔧 Scale & performance limits",
              ].map((problem) => (
                <span
                  key={problem}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/5 text-slate-300 text-sm transition-all duration-300 cursor-default"
                >
                  {problem}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-12 px-8"
              >
                Start a Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8 gap-2"
              >
                See Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-8 pt-4 text-center"
            >
              {[
                { value: "50+", label: "Projects delivered" },
                { value: "98%", label: "Client satisfaction" },
                { value: "5×", label: "Avg. ROI for clients" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-slate-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 2. Client Logos Section */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-secondary text-sm font-medium mb-8 uppercase tracking-wider"
          >
            Trusted by
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {clientLogos.map((logo) => (
              <motion.div
                key={logo}
                variants={fadeInUp}
                className="text-text-secondary font-semibold text-lg opacity-50 hover:opacity-100 transition-opacity cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full border-surface-alt hover:border-accent/50 transition-colors group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-accent text-sm font-medium hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Work Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Featured Work
              </h2>
              <p className="text-text-secondary max-w-xl">
                A selection of our recent projects that showcase our expertise
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-accent font-medium hover:underline"
            >
              View All Work
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group rounded-2xl pt-0 pb-0 gap-0">
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="px-3.5 py-1 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-semibold rounded-full shadow-sm border border-slate-100">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors duration-300 mb-3">{item.title}</h3>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold bg-accent/5 px-3 py-1 rounded-full uppercase tracking-wider">
                        📈 {item.metric}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1">
                        View Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine expertise, speed, and quality to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from our satisfied clients
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card className="h-full border-surface-alt">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-accent/30 mb-4" />
                    <p className="text-text-secondary mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-text-secondary">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Stats Section */}
      <section className="py-12 bg-white border-y border-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {["50+ Projects", "98% Retention", "5+ Years"].map((stat, index) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-3xl sm:text-4xl font-bold text-primary">{stat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-alt/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life. Our team is ready
              to build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all duration-300 font-semibold h-12 px-8"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}