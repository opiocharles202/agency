import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Mail, Phone, Calendar, Award, Target, Heart, Users } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "About Us | Agency",
    description:
      "We're a team of technologists, designers, and strategists building digital products that drive real business results.",
  };
}

const teamMembers = [
  {
    id: "1",
    name: "James Mitchell",
    title: "CEO & Founder",
    bio: "Visionary leader with 20+ years in tech. Led digital transformations for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    bio: "Architecture expert specialising in scalable systems. Previously at Google and Amazon.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    title: "Head of Mobile",
    bio: "Mobile-first developer who shipped 100+ apps. Apple Design Award winner 2022.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    title: "VP of Marketing",
    bio: "Data-driven marketer who generated $50M+ in pipeline for B2B clients.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "David Park",
    title: "AI Research Lead",
    bio: "PhD in Machine Learning. Published 20+ papers on NLP and computer vision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Rachel Kim",
    title: "Design Director",
    bio: "Award-winning designer. Led design systems at Airbnb and Spotify.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We hold every deliverable to the highest standard — from code quality to client communication.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We treat every project as a partnership, investing in your success as if it were our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "The best solutions come from diverse perspectives working together toward one goal.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace emerging technology and creative thinking to solve complex challenges.",
  },
];

const awards = [
  { year: "2024", title: "Clutch Top Digital Agency",      category: "Marketing" },
  { year: "2024", title: "G2 Leader Award",                category: "Software Development" },
  { year: "2023", title: "Clutch Top B2B Agency",          category: "General" },
  { year: "2023", title: "DesignRush Excellence Award",    category: "UI/UX" },
  { year: "2022", title: "Google Partner",                 category: "Digital Marketing" },
  { year: "2022", title: "AWS Advanced Partner",           category: "Cloud Solutions" },
];

const stats = [
  { value: "2015",  label: "Founded" },
  { value: "200+",  label: "Projects Delivered" },
  { value: "50+",   label: "Team Members" },
  { value: "98%",   label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We Build Digital Products
              <span className="block text-slate-400 font-normal mt-1">That People Actually Use</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              We&apos;re a team of technologists, designers, and strategists. Since 2015 we&apos;ve helped
              startups and enterprises turn ambitious ideas into products that drive real business results.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0A1628] px-8 py-6">
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-6">
                Started Small. Built for Scale.
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded in 2015 with a simple belief: technology should serve business goals, not the other
                  way around. What began as a small two-person consultancy has grown into a full-service digital
                  agency with 50+ specialists across engineering, design, and marketing.
                </p>
                <p>
                  Over the years we&apos;ve helped more than 200 businesses — from seed-stage startups to
                  Fortune 500 companies — transform their digital presence and build products their users love.
                </p>
                <p>
                  We&apos;re proud of what we&apos;ve built, but we&apos;re more proud of what our clients have
                  built with us. Every project is a collaboration, and our clients&apos; wins are our wins.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our team collaborating in the office"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#0A1628] text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Since 2015</div>
                <div className="text-slate-400 text-sm">9+ Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">What We Stand For</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4 text-[#0A1628]">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">Meet Our Leadership</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-0.5">{member.name}</h3>
                <p className="text-[#00D4FF] text-sm font-medium mb-2">{member.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">Awards & Certifications</h2>
          </div>

          <div className="divide-y divide-slate-200">
            {awards.map((award, i) => (
              <div key={i} className="flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">{award.title}</p>
                    <p className="text-sm text-slate-400">{award.category}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-400 flex-shrink-0 ml-4">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-4">Location</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">Based in New York</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Our headquarters is in the heart of Manhattan — where innovation meets ambition. From here we
                serve clients globally, bringing the energy of NYC to every project.
              </p>
              <p className="text-slate-500 leading-relaxed">
                We also have remote specialists and partner offices in San Francisco, London, and Singapore,
                giving us around-the-clock coverage for international clients.
              </p>
            </div>

            <div className="bg-[#0A1628] text-white rounded-2xl p-8 space-y-6">
              {[
                { icon: MapPin,   label: "Address", value: "350 Fifth Avenue, Suite 5100\nNew York, NY 10118" },
                { icon: Mail,     label: "Email",   value: "hello@agency.com" },
                { icon: Phone,    label: "Phone",   value: "+1 (555) 123-4567" },
                { icon: Calendar, label: "Hours",   value: "Mon – Fri: 9AM – 6PM EST" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white/90 text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-alt/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, we&apos;d love to hear from you.
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
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold h-12 px-8"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}