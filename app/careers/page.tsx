import Link from "next/link";
import { MapPin, Clock, ArrowRight, Briefcase, GraduationCap, Users, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description: "Build beautiful, performant web applications using React and Next.js.",
    requirements: [
      "5+ years of React experience",
      "Strong TypeScript skills",
      "Experience with modern CSS and animations",
    ],
    slug: "senior-frontend-developer",
  },
  {
    id: "2",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create engaging mobile experiences for iOS and Android platforms.",
    requirements: [
      "3+ years of mobile development",
      "Experience with React Native or Flutter",
      "Published apps in App Store or Play Store",
    ],
    slug: "mobile-app-developer",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    description: "Design user experiences that delight our clients' customers.",
    requirements: [
      "4+ years of UX design experience",
      "Proficiency in Figma",
      "Strong portfolio showcasing mobile and web projects",
    ],
    slug: "ux-designer",
  },
  {
    id: "4",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Lead marketing campaigns that drive measurable results for our clients.",
    requirements: [
      "5+ years of digital marketing experience",
      "Experience with paid advertising platforms",
      "Data-driven approach to campaign optimization",
    ],
    slug: "digital-marketing-manager",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness programs.",
  },
  {
    icon: Coffee,
    title: "Flexible Time Off",
    description: "Unlimited PTO with a minimum required vacation policy to prevent burnout.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Users,
    title: "Parental Leave",
    description: "16 weeks paid leave for new parents, plus flexible return-to-work options.",
  },
  {
    icon: Briefcase,
    title: "Remote Flexibility",
    description: "Work from home, office, or anywhere in the world with our hybrid policy.",
  },
  {
    icon: Heart,
    title: "401(k) Matching",
    description: "Competitive 401(k) plan with 4% company match to help you save.",
  },
];

const departments = ["All", "Engineering", "Design", "Marketing"];

export async function generateMetadata() {
  return {
    title: "Careers - Join Our Team",
    description: "Join our team of talented professionals and help shape the future of digital innovation.",
  };
}

export default function CareersPage() {
  const jobsByDepartment = departments.slice(1).map((dept) => ({
    department: dept,
    jobs: jobs.filter((job) => job.department === dept),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 opacity-70" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm">
              Careers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              Join Our Team
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              Build your career with a team that values innovation, collaboration, and work-life balance.
            </p>
            <Link href="#jobs">
              <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-[var(--text-secondary)]">
              We invest in our people because they are the foundation of our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Open Positions
            </h2>
            <p className="text-[var(--text-secondary)]">
              Find your next opportunity and help us shape the future of digital
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <TabsList className="bg-white shadow-sm">
                <TabsTrigger value="all">All</TabsTrigger>
                {departments.slice(1).map((dept) => (
                  <TabsTrigger key={dept} value={dept}>
                    {dept}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-4 max-w-4xl mx-auto">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>

            {jobsByDepartment.map(({ department, jobs: deptJobs }) => (
              <TabsContent key={department} value={department} className="mt-0">
                <div className="space-y-4 max-w-4xl mx-auto">
                  {deptJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center p-8 lg:p-12 border-none bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                  Submit General Application
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

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <CardTitle className="text-xl text-[var(--text-primary)] mb-1">
              {job.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {job.type}
              </div>
            </div>
          </div>
          <Badge className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90 self-start">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[var(--text-secondary)] mb-4">
          {job.description}
        </p>
        <div className="mb-4">
          <p className="text-sm font-medium text-[var(--text-primary)] mb-2">Requirements:</p>
          <ul className="text-sm text-[var(--text-secondary)] space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[var(--accent)]">•</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <Link href={`/contact?role=${job.slug}`}>
          <Button variant="outline" className="w-full sm:w-auto">
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}