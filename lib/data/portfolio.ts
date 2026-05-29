export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  technologies: string[];
  featured: boolean;
  image?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "fintech-app",
    title: "Fintech Mobile Banking App",
    client: "FinanceFlow",
    industry: "Financial Services",
    service: "mobile",
    challenge: "FinanceFlow needed a secure, user-friendly mobile banking app that could handle real-time transactions while meeting strict security compliance requirements.",
    solution: "We built a React Native app with biometric authentication, end-to-end encryption, and real-time transaction processing using WebSocket connections.",
    results: [
      { metric: "User Growth", value: "300%" },
      { metric: "App Rating", value: "4.9 stars" },
      { metric: "Transaction Volume", value: "$2M+ monthly" },
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "AWS"],
    featured: true,
    image: "/portfolio-fintech.png",
  },
  {
    id: "2",
    slug: "ecommerce-platform",
    title: "Enterprise E-commerce Platform",
    client: "RetailMax",
    industry: "Retail",
    service: "software",
    challenge: "RetailMax struggled with a legacy system that couldn't handle Black Friday traffic spikes and lacked modern payment integrations.",
    solution: "We architected a cloud-native e-commerce platform using microservices, implemented CDN caching, and integrated multiple payment gateways.",
    results: [
      { metric: "Uptime", value: "99.99%" },
      { metric: "Page Load", value: "< 1 second" },
      { metric: "Revenue Increase", value: "150%" },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    featured: true,
    image: "/portfolio-ecommerce.png",
  },
  {
    id: "3",
    slug: "healthcare-ai",
    title: "AI-Powered Diagnostic Tool",
    client: "MedTech Solutions",
    industry: "Healthcare",
    service: "ai",
    challenge: "Medical professionals needed faster ways to analyze patient data and identify potential health risks early.",
    solution: "We developed an ML-powered diagnostic assistant that analyzes patient records and medical imaging to provide risk assessments.",
    results: [
      { metric: "Diagnosis Accuracy", value: "94%" },
      { metric: "Time Saved", value: "40 hours/week" },
      { metric: "Early Detection", value: "60% more cases" },
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "AWS SageMaker"],
    featured: true,
    image: "/portfolio-ai.png",
  },
  {
    id: "4",
    slug: "brand-campaign",
    title: "Global Brand Campaign",
    client: "TechCorp",
    industry: "Technology",
    service: "marketing",
    challenge: "TechCorp needed to increase brand awareness and generate qualified leads across multiple markets simultaneously.",
    solution: "We executed an integrated campaign combining SEO, content marketing, paid social, and influencer partnerships.",
    results: [
      { metric: "Lead Generation", value: "500% increase" },
      { metric: "Brand Mentions", value: "10K+" },
      { metric: "ROAS", value: "4.5x" },
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Semrush"],
    featured: false,
    image: "/portfolio-marketing.png",
  },
  {
    id: "5",
    slug: "video-series",
    title: "Product Launch Video Series",
    client: "GadgetPro",
    industry: "Consumer Electronics",
    service: "content",
    challenge: "GadgetPro needed engaging video content to showcase their new product line and drive pre-orders.",
    solution: "We produced a 6-part video series including product demos, customer testimonials, and behind-the-scenes content.",
    results: [
      { metric: "Video Views", value: "2M+" },
      { metric: "Pre-orders", value: "10K+ units" },
      { metric: "Engagement Rate", value: "12%" },
    ],
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    featured: false,
    image: "/portfolio-video.png",
  },
  {
    id: "6",
    slug: "saas-dashboard",
    title: "Analytics Dashboard Platform",
    client: "DataViz Inc",
    industry: "Software",
    service: "software",
    challenge: "DataViz needed a real-time analytics dashboard that could process millions of data points and present actionable insights.",
    solution: "We built a scalable dashboard with WebSocket-based real-time updates, interactive visualizations, and custom reporting.",
    results: [
      { metric: "Data Points/Day", value: "50M+" },
      { metric: "User Satisfaction", value: "92%" },
      { metric: "Query Speed", value: "< 100ms" },
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    image: "/portfolio-dashboard.png",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getPortfolioByService(serviceSlug: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.service === serviceSlug);
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}

export function getAllServices(): string[] {
  return Array.from(new Set(portfolioItems.map((item) => item.service)));
}