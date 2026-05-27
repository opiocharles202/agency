import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Calendar, Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: "1",
    name: "James Mitchell",
    title: "CEO & Founder",
    bio: "Visionary leader with 20+ years in tech. Led digital transformations for Fortune 500 companies.",
    avatar: "JM",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    bio: "Architecture expert specializing in scalable systems. Previously at Google and Amazon.",
    avatar: "SC",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    title: "Head of Mobile",
    bio: "Mobile-first developer who shipped 100+ apps. Apple Design Award winner 2022.",
    avatar: "MJ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    title: "VP of Marketing",
    bio: "Data-driven marketer who generated $50M+ in pipeline for B2B clients.",
    avatar: "ER",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "David Park",
    title: "AI Research Lead",
    bio: "PhD in Machine Learning. Published 20+ papers on NLP and computer vision.",
    avatar: "DP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Rachel Kim",
    title: "Design Director",
    bio: "Award-winning designer. Led design systems at Airbnb and Spotify.",
    avatar: "RK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We treat every project as a partnership, investing in your success as if it were our own.",
    color: "rose",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions come from diverse perspectives working together.",
    color: "green",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve complex challenges.",
    color: "purple",
  },
];

const awards = [
  { year: "2024", title: "Clutch Top Digital Agency", category: "Marketing" },
  { year: "2024", title: "G2 Leader Award", category: "Software Development" },
  { year: "2023", title: "Clutch Top B2B Agency", category: "General" },
  { year: "2023", title: "DesignRush Excellence Award", category: "UI/UX" },
  { year: "2022", title: "Google Partner", category: "Digital Marketing" },
  { year: "2022", title: "AWS Advanced Partner", category: "Cloud Solutions" },
];

export async function generateMetadata() {
  return {
    title: "About Us - Our Story & Team",
    description: "Learn about our agency, our team, and the values that drive us to deliver exceptional results.",
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 opacity-70" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm">
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              Building Digital Excellence
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              We&apos;re a team of passionate technologists, designers, and strategists dedicated to transforming ideas into impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Founded in 2015, we started with a simple belief: technology should serve business goals, not the other way around. What began as a small consultancy has grown into a full-service digital agency.
                </p>
                <p>
                  Over the years, we&apos;ve helped over 200 businesses transform their digital presence. From startups to Fortune 500 companies, our team has delivered solutions that drive real business results.
                </p>
                <p>
                  Today, we continue to push the boundaries of what&apos;s possible with technology, while staying true to our founding principle: deliver exceptional value in every interaction.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--accent)]">200+</div>
                  <div className="text-sm text-[var(--text-secondary)]">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--accent)]">50+</div>
                  <div className="text-sm text-[var(--text-secondary)]">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--accent)]">98%</div>
                  <div className="text-sm text-[var(--text-secondary)]">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Our team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--primary)] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">Since 2015</div>
                <div className="text-white/80">Digital Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-[var(--text-secondary)]">
              Talented individuals who bring diverse expertise and shared vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--accent)] font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Our Values
            </h2>
            <p className="text-[var(--text-secondary)]">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                  value.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  value.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                  value.color === 'green' ? 'bg-green-50 text-green-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-[var(--accent)]" />
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-white/80">350 Fifth Avenue, Suite 5100<br />New York, NY 10118</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 text-[var(--accent)]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">hello@agency.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 text-[var(--accent)]" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 mt-0.5 text-[var(--accent)]" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-white/80">Mon - Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Based in New York
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Our headquarters is located in the heart of Manhattan, where innovation meets tradition. From here, we serve clients across the globe, bringing the energy and creativity of NYC to every project.
              </p>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                We also have remote team members and partner offices in San Francisco, London, and Singapore, allowing us to provide around-the-clock support to our international clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Awards & Certifications
            </h2>
            <p className="text-[var(--text-secondary)]">
              Recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      {award.title}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {award.category} • {award.year}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                Want to Work With Us?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                We&apos;re always looking for talented individuals and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                    Join Our Team
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