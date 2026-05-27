export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  features: { title: string; description: string }[];
  process: { number: number; title: string; description: string }[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "software",
    title: "Software Development",
    shortDescription: "Custom software solutions built for scale",
    fullDescription: "We build robust, scalable software solutions tailored to your business needs. From enterprise applications to cloud-native systems, our team delivers high-quality code that grows with your business.",
    icon: "Code2",
    color: "blue",
    features: [
      {
        title: "Custom Development",
        description: "Bespoke software built from the ground up to match your exact requirements",
      },
      {
        title: "Enterprise Architecture",
        description: "Scalable systems designed for growth and maintainability",
      },
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs that power your applications",
      },
      {
        title: "Cloud Solutions",
        description: "AWS, Azure, and GCP infrastructure optimization",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description: "We analyze your requirements and create a detailed specification document",
      },
      {
        number: 2,
        title: "Design",
        description: "Our architects design the system architecture and technical approach",
      },
      {
        number: 3,
        title: "Development",
        description: "Agile development with regular sprints and demos",
      },
      {
        number: 4,
        title: "Testing",
        description: "Comprehensive QA including unit, integration, and E2E tests",
      },
      {
        number: 5,
        title: "Deployment",
        description: "CI/CD pipelines ensure smooth production releases",
      },
    ],
    technologies: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL"],
  },
  {
    id: "2",
    slug: "mobile",
    title: "Mobile Apps",
    shortDescription: "Native and cross-platform mobile experiences",
    fullDescription: "We create stunning mobile applications that engage users and drive business results. Whether you need iOS, Android, or cross-platform solutions, we deliver pixel-perfect experiences.",
    icon: "Smartphone",
    color: "green",
    features: [
      {
        title: "iOS Development",
        description: "Native Swift apps optimized for Apple devices",
      },
      {
        title: "Android Development",
        description: "Kotlin and Java apps for the Android ecosystem",
      },
      {
        title: "Cross-Platform",
        description: "React Native and Flutter for efficient multi-platform reach",
      },
      {
        title: "App Store Optimization",
        description: "ASO strategies to maximize visibility and downloads",
      },
    ],
    process: [
      {
        number: 1,
        title: "UX Research",
        description: "Understanding your users and their journey",
      },
      {
        number: 2,
        title: "Wireframing",
        description: "Creating intuitive user flows and interfaces",
      },
      {
        number: 3,
        title: "Development",
        description: "Agile build process with continuous integration",
      },
      {
        number: 4,
        title: "Testing",
        description: "Device testing across multiple platforms and versions",
      },
      {
        number: 5,
        title: "Launch",
        description: "App store submission and post-launch support",
      },
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Redux", "GraphQL"],
  },
  {
    id: "3",
    slug: "marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven marketing that delivers results",
    fullDescription: "Our digital marketing services combine creativity with analytics to drive measurable growth. We create comprehensive strategies that increase brand visibility, generate leads, and convert customers.",
    icon: "TrendingUp",
    color: "orange",
    features: [
      {
        title: "SEO Optimization",
        description: "Technical and content SEO for sustainable organic growth",
      },
      {
        title: "Paid Advertising",
        description: "Google Ads, social media ads, and retargeting campaigns",
      },
      {
        title: "Content Marketing",
        description: "Strategic content that builds authority and trust",
      },
      {
        title: "Analytics & Reporting",
        description: "Real-time dashboards and performance insights",
      },
    ],
    process: [
      {
        number: 1,
        title: "Audit",
        description: "Analyzing current marketing performance and gaps",
      },
      {
        number: 2,
        title: "Strategy",
        description: "Developing a customized marketing roadmap",
      },
      {
        number: 3,
        title: "Execution",
        description: "Implementing campaigns across channels",
      },
      {
        number: 4,
        title: "Optimization",
        description: "A/B testing and continuous improvement",
      },
      {
        number: 5,
        title: "Reporting",
        description: "Transparent results with actionable insights",
      },
    ],
    technologies: ["Google Analytics", "Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "Semrush", "Hotjar"],
  },
  {
    id: "4",
    slug: "ai",
    title: "AI Solutions",
    shortDescription: "Intelligent automation and machine learning",
    fullDescription: "Harness the power of artificial intelligence to transform your business. We build custom AI solutions that automate processes, extract insights from data, and create intelligent products.",
    icon: "Brain",
    color: "purple",
    features: [
      {
        title: "Machine Learning",
        description: "Custom ML models for prediction and classification",
      },
      {
        title: "Natural Language Processing",
        description: "Chatbots, sentiment analysis, and text processing",
      },
      {
        title: "Computer Vision",
        description: "Image recognition, object detection, and video analysis",
      },
      {
        title: "AI Consulting",
        description: "Strategic guidance on AI adoption and implementation",
      },
    ],
    process: [
      {
        number: 1,
        title: "Assessment",
        description: "Identifying AI opportunities in your business",
      },
      {
        number: 2,
        title: "Data Analysis",
        description: "Evaluating your data infrastructure and quality",
      },
      {
        number: 3,
        title: "Model Development",
        description: "Building and training custom AI models",
      },
      {
        number: 4,
        title: "Integration",
        description: "Deploying AI into your existing systems",
      },
      {
        number: 5,
        title: "Monitoring",
        description: "Ongoing performance tracking and optimization",
      },
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "AWS SageMaker", "Docker"],
  },
  {
    id: "5",
    slug: "content",
    title: "Content Creation",
    shortDescription: "Compelling content that connects and converts",
    fullDescription: "We create compelling content that tells your story and engages your audience. From copywriting to visual design, our creative team produces content that drives results across all channels.",
    icon: "PenTool",
    color: "rose",
    features: [
      {
        title: "Copywriting",
        description: "Persuasive copy for websites, ads, and campaigns",
      },
      {
        title: "Video Production",
        description: "Professional videos from concept to final edit",
      },
      {
        title: "Graphic Design",
        description: "Brand identity, illustrations, and visual assets",
      },
      {
        title: "Social Media",
        description: "Engaging content for all social platforms",
      },
    ],
    process: [
      {
        number: 1,
        title: "Brief",
        description: "Understanding your brand voice and goals",
      },
      {
        number: 2,
        title: "Concept",
        description: "Developing creative concepts and direction",
      },
      {
        number: 3,
        title: "Creation",
        description: "Producing the content with revisions",
      },
      {
        number: 4,
        title: "Review",
        description: "Quality assurance and brand alignment",
      },
      {
        number: 5,
        title: "Delivery",
        description: "Final files in all required formats",
      },
    ],
    technologies: ["Adobe Creative Suite", "Figma", "DaVinci Resolve", "Canva", "Premiere Pro", "After Effects"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}