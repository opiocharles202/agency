export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  tagline: string;
  stats: { value: string; label: string }[];
  keyBenefits: string[];
  features: { title: string; description: string; icon?: string }[];
  process: { number: number; title: string; description: string; duration?: string }[];
  technologies: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // slugs
}

export const services: Service[] = [
  {
    id: "1",
    slug: "software",
    title: "Software Development",
    shortDescription: "Custom software solutions built for scale",
    tagline: "From concept to production-ready systems",
    fullDescription:
      "We build robust, scalable software solutions tailored to your business needs. From enterprise applications to cloud-native systems, our team delivers high-quality code that grows with your business. We follow modern engineering practices — test-driven development, clean architecture, and continuous deployment — to ensure you get software that is reliable, maintainable, and future-proof.",
    icon: "Code2",
    color: "blue",
    stats: [
      { value: "50+", label: "Projects Delivered" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "3×", label: "Faster Time-to-Market" },
      { value: "100%", label: "Client Retention" },
    ],
    keyBenefits: [
      "Custom-built to your exact specifications — no off-the-shelf compromises",
      "Built to scale from day one with cloud-native architecture",
      "Full source code ownership and documentation handed over to you",
      "Ongoing support and maintenance plans available post-launch",
    ],
    features: [
      {
        title: "Custom Development",
        description:
          "Bespoke software built from the ground up to match your exact business logic and workflows. We don't use generic templates — every line of code is crafted for your unique requirements.",
      },
      {
        title: "Enterprise Architecture",
        description:
          "Scalable, modular systems designed for long-term growth and maintainability. We architect solutions that can handle millions of users and complex business processes.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs that power your applications and integrate seamlessly with third-party tools, payment gateways, CRMs, and more.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "AWS, Azure, and GCP infrastructure setup, optimization, and management. We handle DevOps so your team can focus on building features.",
      },
      {
        title: "Quality Assurance",
        description:
          "Comprehensive automated testing strategy including unit, integration, and end-to-end tests. We ship confident, thoroughly-validated code.",
      },
      {
        title: "Security & Compliance",
        description:
          "Security-first development with code audits, penetration testing, and compliance support for GDPR, HIPAA, SOC 2, and industry-specific standards.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "Deep dive into your business goals, technical requirements, and constraints. We produce a detailed specification document that becomes the project's source of truth.",
        duration: "Week 1–2",
      },
      {
        number: 2,
        title: "Architecture Design",
        description:
          "Our architects design the system blueprint — choosing the right technologies, data models, and infrastructure for your use case.",
        duration: "Week 2–3",
      },
      {
        number: 3,
        title: "Agile Development",
        description:
          "Two-week sprints with working software demos after every sprint. You stay in the loop and provide feedback throughout — no surprises at launch.",
        duration: "Week 4–12+",
      },
      {
        number: 4,
        title: "Testing & QA",
        description:
          "Rigorous QA including automated test suites, manual exploratory testing, performance benchmarking, and security reviews.",
        duration: "Ongoing",
      },
      {
        number: 5,
        title: "Launch & Handover",
        description:
          "CI/CD pipeline deployment to production, full documentation handover, team training, and a 30-day stabilization support window.",
        duration: "Final Week",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Terraform",
    ],
    deliverables: [
      "Full source code with Git history",
      "Technical architecture documentation",
      "Automated test suite (80%+ coverage)",
      "Deployment runbooks & CI/CD pipelines",
      "API documentation (OpenAPI/Swagger)",
      "30-day post-launch support",
    ],
    faqs: [
      {
        question: "How long does a typical software project take?",
        answer:
          "Timeline depends on scope, but most MVP projects run 8–16 weeks. We'll give you a detailed estimate after the discovery phase where we fully understand your requirements.",
      },
      {
        question: "Do you work with our existing codebase?",
        answer:
          "Absolutely. We regularly take over legacy codebases, perform audits, and modernize them incrementally. We won't force a full rewrite unless it's genuinely the best path.",
      },
      {
        question: "Who owns the code when the project is done?",
        answer:
          "You do — always. Full IP transfer is included in every project. We hand over all source code, documentation, and infrastructure configurations.",
      },
      {
        question: "Can you build an MVP quickly?",
        answer:
          "Yes. We have a fast-track MVP programme that gets you to a deployable product in 4–6 weeks, focusing on core value and learning-loop speed.",
      },
    ],
    relatedServices: ["mobile", "ai"],
  },
  {
    id: "2",
    slug: "mobile",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile experiences",
    tagline: "Apps your users will love to open every day",
    fullDescription:
      "We create stunning mobile applications that engage users and drive business results. Whether you need iOS, Android, or cross-platform solutions, we deliver pixel-perfect experiences that feel native on every device. From consumer apps to complex enterprise tools, our mobile team brings together UX research, design, and engineering to build apps that people actually use.",
    icon: "Smartphone",
    color: "green",
    stats: [
      { value: "30+", label: "Apps Launched" },
      { value: "4.8★", label: "Avg. App Store Rating" },
      { value: "2M+", label: "Total User Downloads" },
      { value: "6 wks", label: "Avg. MVP Timeline" },
    ],
    keyBenefits: [
      "Native performance on iOS and Android without sacrificing code reuse",
      "UX-first approach — research, test, iterate before a single line of code",
      "App Store and Google Play submission handled end-to-end by our team",
      "Post-launch analytics and crash monitoring set up from day one",
    ],
    features: [
      {
        title: "iOS Development",
        description:
          "Native Swift apps built with Apple's latest frameworks — SwiftUI, Combine, and ARKit. Optimised for performance, battery life, and App Store guidelines.",
      },
      {
        title: "Android Development",
        description:
          "Modern Kotlin apps using Jetpack Compose for beautiful, responsive UIs. Tested across the diverse Android ecosystem from flagship to budget devices.",
      },
      {
        title: "Cross-Platform (React Native / Flutter)",
        description:
          "One codebase, two platforms. React Native and Flutter deliver near-native performance while dramatically reducing development time and maintenance cost.",
      },
      {
        title: "UX Research & Prototyping",
        description:
          "User interviews, journey mapping, and interactive prototypes validated before development begins — so we build the right thing the first time.",
      },
      {
        title: "Backend & API Integration",
        description:
          "We build the mobile app and the backend it talks to. Seamless integration with REST/GraphQL APIs, push notifications, analytics, and third-party SDKs.",
      },
      {
        title: "App Store Optimisation (ASO)",
        description:
          "Keyword research, compelling store listings, A/B tested screenshots, and review management strategies to maximise organic downloads.",
      },
    ],
    process: [
      {
        number: 1,
        title: "UX Research",
        description:
          "We interview your target users, analyse competing apps, and map the ideal user journey before touching a design tool.",
        duration: "Week 1",
      },
      {
        number: 2,
        title: "Design & Prototyping",
        description:
          "High-fidelity Figma designs and interactive prototypes. Usability tested with real users before development starts.",
        duration: "Week 2–3",
      },
      {
        number: 3,
        title: "Development",
        description:
          "Agile sprints with a working build delivered to your device every two weeks. Continuous integration and automated testing from day one.",
        duration: "Week 4–10",
      },
      {
        number: 4,
        title: "Device & Platform Testing",
        description:
          "Tested across 20+ real devices and OS versions. Performance profiling, accessibility audits, and security scanning.",
        duration: "Week 10–11",
      },
      {
        number: 5,
        title: "Launch & Growth",
        description:
          "App Store submission, staged rollout, launch marketing support, and a 30-day monitoring window with rapid hotfix SLA.",
        duration: "Week 12",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "React Native",
      "Flutter",
      "Firebase",
      "Redux",
      "GraphQL",
      "Fastlane",
      "TestFlight",
    ],
    deliverables: [
      "iOS & Android apps (or cross-platform codebase)",
      "Figma design system & all design assets",
      "App Store & Google Play submissions",
      "Backend API and database setup",
      "Analytics dashboard (Firebase / Mixpanel)",
      "30-day post-launch support",
    ],
    faqs: [
      {
        question: "Should I build natively or cross-platform?",
        answer:
          "For most consumer apps with standard features, cross-platform (React Native or Flutter) is the right call — faster to build and maintain. For apps requiring deep OS integration (AR, custom hardware, complex animations), native is worth the extra investment. We'll advise you during discovery.",
      },
      {
        question: "How do I get started if I only have an idea?",
        answer:
          "Perfect — we love early-stage projects. We'll run a product discovery workshop to turn your idea into a scoped, prioritised feature list and an MVP roadmap.",
      },
      {
        question: "Do you handle App Store submissions?",
        answer:
          "Yes. We manage the entire submission process for both App Store and Google Play, including compliance, privacy policy requirements, and responding to reviewer feedback.",
      },
      {
        question: "Can you add features to an existing app?",
        answer:
          "Definitely. We regularly take over and extend existing codebases. We'll start with a code audit to understand the current state before proposing a roadmap.",
      },
    ],
    relatedServices: ["software", "content"],
  },
  {
    id: "3",
    slug: "marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven marketing that delivers results",
    tagline: "More visibility, more leads, more revenue",
    fullDescription:
      "Our digital marketing services combine creativity with rigorous analytics to drive measurable, sustainable growth. We don't run campaigns and hope for the best — every decision is data-backed. We create comprehensive multi-channel strategies that increase brand visibility, generate qualified leads, and convert prospects into loyal customers with a clear, trackable ROI.",
    icon: "TrendingUp",
    color: "orange",
    stats: [
      { value: "5×", label: "Average ROI" },
      { value: "300%", label: "Avg. Organic Traffic Increase" },
      { value: "40%", label: "Lower Cost Per Lead" },
      { value: "48h", label: "Campaign Go-Live" },
    ],
    keyBenefits: [
      "Transparent reporting with real-time dashboards — no black-box metrics",
      "Full-funnel strategy from awareness through to retention and advocacy",
      "A/B testing built into every campaign for continuous improvement",
      "Dedicated account manager with weekly performance reviews",
    ],
    features: [
      {
        title: "SEO & Organic Growth",
        description:
          "Technical SEO audits, content strategy, keyword research, and link building. We build sustainable organic traffic that doesn't disappear when you stop paying for ads.",
      },
      {
        title: "Paid Advertising (PPC)",
        description:
          "Google Ads, Meta Ads, LinkedIn, and programmatic display campaigns managed by certified specialists. We optimise every penny of your ad budget for maximum return.",
      },
      {
        title: "Content Marketing",
        description:
          "Strategic content — blog posts, whitepapers, case studies, email sequences — that builds topical authority, earns backlinks, and nurtures leads through the funnel.",
      },
      {
        title: "Social Media Management",
        description:
          "Consistent, on-brand social presence across LinkedIn, Instagram, X, and TikTok. Community management, content calendars, and influencer partnerships.",
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Segmented email campaigns, drip sequences, and lifecycle automations that convert subscribers into customers and customers into repeat buyers.",
      },
      {
        title: "Analytics & Conversion Optimisation",
        description:
          "GA4 setup, custom dashboards, heatmaps, session recordings, and CRO experiments. We find and fix the leaks in your funnel.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Marketing Audit",
        description:
          "Comprehensive review of your current channels, competitors, audience, and positioning. We identify quick wins and long-term opportunities.",
        duration: "Week 1",
      },
      {
        number: 2,
        title: "Strategy Development",
        description:
          "A customised, channel-specific marketing roadmap aligned to your revenue goals, seasonality, and budget.",
        duration: "Week 1–2",
      },
      {
        number: 3,
        title: "Campaign Execution",
        description:
          "Creative production, campaign setup, tracking implementation, and launch across all agreed channels.",
        duration: "Week 2–4",
      },
      {
        number: 4,
        title: "Test & Optimise",
        description:
          "Systematic A/B testing, bid optimisation, audience refinement, and content updates driven by performance data.",
        duration: "Ongoing",
      },
      {
        number: 5,
        title: "Review & Report",
        description:
          "Weekly performance reports, monthly strategic reviews, and quarterly planning sessions to keep strategy aligned with your evolving goals.",
        duration: "Ongoing",
      },
    ],
    technologies: [
      "Google Analytics 4",
      "Google Ads",
      "Meta Ads Manager",
      "HubSpot",
      "Mailchimp",
      "Klaviyo",
      "Semrush",
      "Ahrefs",
      "Hotjar",
      "Looker Studio",
    ],
    deliverables: [
      "Full marketing audit & competitor analysis",
      "12-month content & campaign calendar",
      "Real-time performance dashboard",
      "Monthly executive reports",
      "Ad creative assets (copy, imagery)",
      "SEO & analytics setup documentation",
    ],
    faqs: [
      {
        question: "How quickly will I see results?",
        answer:
          "Paid campaigns can show results within 48–72 hours. SEO is a longer game — expect meaningful organic growth in 3–6 months. We'll set realistic expectations and track leading indicators from week one.",
      },
      {
        question: "What's the minimum budget I need?",
        answer:
          "For paid advertising we recommend a minimum ad spend of $1,500/month to gather enough data to optimise effectively. Our management fee is separate. For SEO-focused retainers, we can start from $1,000/month.",
      },
      {
        question: "Do you work with B2B or B2C companies?",
        answer:
          "Both. Our team has deep experience across e-commerce, SaaS, professional services, and consumer brands. The channels and tactics differ, but our data-driven approach applies universally.",
      },
      {
        question: "Can you take over campaigns already running?",
        answer:
          "Yes. We'll audit existing campaigns, document what's working, pause what isn't, and build on a solid foundation rather than starting from scratch.",
      },
    ],
    relatedServices: ["content", "ai"],
  },
  {
    id: "4",
    slug: "ai",
    title: "AI Solutions",
    shortDescription: "Intelligent automation and machine learning",
    tagline: "Put AI to work where it matters most in your business",
    fullDescription:
      "Harness the power of artificial intelligence to transform your business operations, products, and decision-making. We build custom AI solutions — from predictive models to generative AI products — that solve real business problems, not just technology experiments. Our team combines deep ML expertise with practical engineering to deliver AI that actually works in production at scale.",
    icon: "Brain",
    color: "purple",
    stats: [
      { value: "60%", label: "Avg. Process Time Reduction" },
      { value: "10×", label: "Data Processing Speed" },
      { value: "40+", label: "AI Models in Production" },
      { value: "$2M+", label: "Cost Saved for Clients" },
    ],
    keyBenefits: [
      "Production-grade AI — not just demos or proof-of-concepts left to gather dust",
      "Explainable AI with model transparency and bias auditing built in",
      "Seamless integration into your existing software stack and workflows",
      "Ongoing model monitoring, retraining, and performance optimisation",
    ],
    features: [
      {
        title: "Machine Learning & Predictive Analytics",
        description:
          "Custom ML models for demand forecasting, churn prediction, fraud detection, recommendation engines, and pricing optimisation trained on your own data.",
      },
      {
        title: "Generative AI & LLM Integration",
        description:
          "Build AI copilots, chatbots, document processing systems, and custom assistants powered by GPT-4, Claude, Gemini, or open-source LLMs fine-tuned for your domain.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Intelligent document understanding, sentiment analysis, entity extraction, automated summarisation, and multi-language support for your text-heavy workflows.",
      },
      {
        title: "Computer Vision",
        description:
          "Image classification, object detection, OCR, quality control automation, and video analytics for manufacturing, retail, healthcare, and logistics.",
      },
      {
        title: "AI-Powered Automation",
        description:
          "Intelligent process automation (IPA) that goes beyond simple RPA — AI agents that handle exceptions, learn from feedback, and improve over time.",
      },
      {
        title: "AI Strategy & Consulting",
        description:
          "Executive workshops, AI readiness assessments, use-case prioritisation, and build-vs-buy analysis to help you invest in the right AI initiatives.",
      },
    ],
    process: [
      {
        number: 1,
        title: "AI Assessment",
        description:
          "Identify the highest-value AI opportunities in your business, assess data readiness, and quantify the potential ROI of each use case.",
        duration: "Week 1–2",
      },
      {
        number: 2,
        title: "Data Analysis",
        description:
          "Deep dive into your data — quality, volume, labelling needs, and infrastructure. We define the data pipeline required to train and serve models reliably.",
        duration: "Week 2–3",
      },
      {
        number: 3,
        title: "Model Development",
        description:
          "Rapid prototyping, model selection, training, and evaluation. We benchmark multiple approaches and pick the one that performs best on your data.",
        duration: "Week 3–8",
      },
      {
        number: 4,
        title: "Integration & Deployment",
        description:
          "Deploying models as APIs into your existing systems with monitoring, A/B testing, and gradual rollout strategies.",
        duration: "Week 8–10",
      },
      {
        number: 5,
        title: "Monitor & Improve",
        description:
          "Ongoing model performance monitoring, data drift detection, scheduled retraining, and continuous improvement as your data grows.",
        duration: "Ongoing",
      },
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI GPT-4",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "AWS SageMaker",
      "Vertex AI",
      "MLflow",
      "Docker",
    ],
    deliverables: [
      "Trained & deployed ML/AI models",
      "Model documentation & performance benchmarks",
      "Data pipeline & feature engineering code",
      "REST API / SDK for model consumption",
      "Monitoring dashboard (accuracy, drift, latency)",
      "Model retraining runbooks",
    ],
    faqs: [
      {
        question: "Do I need a large dataset to get started with AI?",
        answer:
          "Not always. The data requirement depends on the use case. For LLM-based features (chatbots, summarisation), we can start immediately. For custom ML models, we'll assess your data during discovery and let you know what's needed.",
      },
      {
        question: "How do you ensure AI models are fair and unbiased?",
        answer:
          "We run bias audits on training data and model outputs, use fairness-aware training techniques, and document model limitations clearly. Explainability (SHAP/LIME) is built into our standard deliverables.",
      },
      {
        question: "Can you integrate AI into our existing software?",
        answer:
          "Yes — this is our preferred approach. We deploy AI as microservices or APIs that slot into your existing architecture, minimising disruption and maximising adoption.",
      },
      {
        question: "What happens if the model's accuracy degrades over time?",
        answer:
          "We set up automated data drift monitoring that alerts when model performance drops. Our support plans include scheduled retraining and a rapid response SLA for critical models.",
      },
    ],
    relatedServices: ["software", "marketing"],
  },
  {
    id: "5",
    slug: "content",
    title: "Content Creation",
    shortDescription: "Compelling content that connects and converts",
    tagline: "Storytelling that drives clicks, trust, and sales",
    fullDescription:
      "We create compelling content that tells your story, builds your brand, and engages the audience who matters most to your business. From strategy through to production and distribution, our creative team delivers content that performs — not just content that looks good. Every piece is built with a clear purpose: to drive awareness, nurture leads, or convert customers.",
    icon: "PenTool",
    color: "rose",
    stats: [
      { value: "200%", label: "Avg. Engagement Increase" },
      { value: "500+", label: "Content Pieces Monthly" },
      { value: "48h", label: "Turnaround on Standard Pieces" },
      { value: "98%", label: "Client Approval Rate" },
    ],
    keyBenefits: [
      "Strategy-led content with clear KPIs — not just pretty deliverables",
      "Brand-consistent voice and visual style maintained across every channel",
      "SEO-optimised by default — every article written to rank and convert",
      "Scalable content operations — from one blog post to 100 pieces per month",
    ],
    features: [
      {
        title: "Copywriting & Content Strategy",
        description:
          "Website copy, landing pages, email sequences, product descriptions, and long-form content written by experienced copywriters who understand conversion psychology.",
      },
      {
        title: "Video Production",
        description:
          "Professional explainer videos, brand films, social video content, and product demos — from scripting and storyboarding through to final edit and distribution-ready exports.",
      },
      {
        title: "Graphic Design & Brand Identity",
        description:
          "Brand identity systems, marketing collateral, social media templates, infographics, and digital ad creatives that make your brand instantly recognisable.",
      },
      {
        title: "Social Media Content",
        description:
          "Platform-native content for LinkedIn, Instagram, X, and TikTok. Content calendars, scheduling, community management, and performance reporting.",
      },
      {
        title: "SEO Content & Blogging",
        description:
          "Research-backed articles targeting high-intent keywords. Written by subject-matter experts, optimised for search, and designed to earn backlinks and drive qualified traffic.",
      },
      {
        title: "Podcast & Audio Production",
        description:
          "Podcast strategy, recording support, editing, show notes, and distribution setup. A growing format that builds deep audience loyalty and positions you as an industry voice.",
      },
    ],
    process: [
      {
        number: 1,
        title: "Brand & Audience Brief",
        description:
          "We deep dive into your brand voice, target audience personas, content goals, and competitive positioning to build a content strategy that's uniquely yours.",
        duration: "Week 1",
      },
      {
        number: 2,
        title: "Content Planning",
        description:
          "A detailed content calendar with topics, formats, channels, and SEO targets mapped to your marketing funnel and business objectives.",
        duration: "Week 1–2",
      },
      {
        number: 3,
        title: "Production",
        description:
          "Content created by skilled writers, designers, and video producers with two rounds of revisions included as standard on every piece.",
        duration: "Week 2–4",
      },
      {
        number: 4,
        title: "Review & Approval",
        description:
          "Structured review process with a dedicated client portal. Feedback is tracked and version-controlled so nothing gets lost.",
        duration: "Week 4",
      },
      {
        number: 5,
        title: "Publish & Measure",
        description:
          "Content published across agreed channels with UTM tracking, performance monitoring, and monthly reporting on views, engagement, and conversions.",
        duration: "Ongoing",
      },
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "DaVinci Resolve",
      "Premiere Pro",
      "After Effects",
      "Canva Pro",
      "Notion",
      "Airtable",
      "Surfer SEO",
      "Grammarly Business",
    ],
    deliverables: [
      "Brand voice & style guide",
      "Monthly content calendar",
      "All content files (editable source files)",
      "Published & distributed content",
      "Monthly performance report",
      "SEO keyword tracking spreadsheet",
    ],
    faqs: [
      {
        question: "Do you write content for technical industries?",
        answer:
          "Yes. We have specialist writers with backgrounds in SaaS, fintech, healthcare, legal, and engineering. We match your content to writers with relevant domain expertise.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "All projects include two rounds of revisions as standard. Additional revision rounds are available at a fixed per-round rate, though they're rarely needed.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Absolutely. We start by auditing your existing content and creating or refining a brand voice document. New content is reviewed against this guide before delivery.",
      },
      {
        question: "Do you help with content distribution?",
        answer:
          "Yes — production without distribution is wasted effort. We offer managed distribution across social media, email newsletters, and SEO publication as part of our content retainer packages.",
      },
    ],
    relatedServices: ["marketing", "mobile"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}