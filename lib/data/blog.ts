export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Lead Software Engineer",
    bio: "Sarah is a full-stack developer with 10+ years of experience building scalable web applications. She specializes in React, Node.js, and cloud architecture.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Mobile Development Lead",
    bio: "Marcus has shipped over 50 mobile apps across iOS and Android. He's passionate about creating seamless user experiences and mentoring junior developers.",
    avatar: "/avatars/marcus.jpg",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Digital Marketing Director",
    bio: "Elena leads our marketing team with data-driven strategies that deliver real results. She has helped 100+ clients increase their online presence.",
    avatar: "/avatars/elena.jpg",
  },
  {
    id: "4",
    name: "David Park",
    title: "AI/ML Engineer",
    bio: "David specializes in machine learning and natural language processing. He has built AI systems for healthcare, finance, and e-commerce applications.",
    avatar: "/avatars/david.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications in 2024",
    excerpt: "Learn the best practices for architecting large-scale React applications that are maintainable, performant, and easy to test.",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications requires more than just good component design. It demands a comprehensive approach to state management, code organization, and performance optimization.</p>
      
      <h2>Key Principles</h2>
      <p>When architecting React applications, consider these fundamental principles:</p>
      <ul>
        <li><strong>Component Composition</strong> - Build small, focused components that can be composed into complex UIs</li>
        <li><strong>State Management</strong> - Choose the right state management solution based on your needs</li>
        <li><strong>Code Splitting</strong> - Lazy load components to reduce initial bundle size</li>
        <li><strong>Testing</strong> - Write tests that give you confidence in your code</li>
      </ul>
      
      <h2>State Management Strategies</h2>
      <p>For smaller applications, React's built-in state management may be sufficient. For larger applications, consider:</p>
      <ul>
        <li>Zustand for simple, lightweight state</li>
        <li>Redux Toolkit for complex enterprise applications</li>
        <li>React Query for server state management</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Key optimizations include:</p>
      <ul>
        <li>Using React.memo() strategically</li>
        <li>Implementing proper useMemo and useCallback usage</li>
        <li>Leveraging the React Compiler (when stable)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications is an ongoing process. Continuously monitor performance, gather user feedback, and iterate on your architecture as your application grows.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    category: "Software",
    tags: ["React", "JavaScript", "Performance", "Architecture"],
    author: authors[0],
    publishedAt: "2024-01-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "react-native-vs-flutter-2024",
    title: "React Native vs Flutter: Which to Choose in 2024?",
    excerpt: "A comprehensive comparison of the two most popular cross-platform frameworks to help you make the right choice for your next project.",
    content: `
      <h2>The Cross-Platform Dilemma</h2>
      <p>When building mobile apps in 2024, developers face a key decision: React Native or Flutter? Both have their strengths and weaknesses.</p>
      
      <h2>React Native</h2>
      <p>React Native uses JavaScript and React, making it familiar to web developers. Key advantages include:</p>
      <ul>
        <li>Large ecosystem and community</li>
        <li>Easier learning curve for web developers</li>
        <li>Native performance with minimal bridge</li>
        <li>Flexibility in choosing navigation libraries</li>
      </ul>
      
      <h2>Flutter</h2>
      <p>Flutter uses Dart and provides a rich set of pre-built widgets. Its strengths include:</p>
      <ul>
        <li>Consistent UI across platforms</li>
        <li>Excellent performance</li>
        <li>Rich animation capabilities</li>
        <li>Single codebase for multiple platforms</li>
      </ul>
      
      <h2>When to Choose React Native</h2>
      <p>React Native is ideal when:</p>
      <ul>
        <li>Your team knows JavaScript/React</li>
        <li>You need to integrate with existing native code</li>
        <li>Rapid prototyping is priority</li>
      </ul>
      
      <h2>When to Choose Flutter</h2>
      <p>Flutter shines when:</p>
      <ul>
        <li>Pixel-perfect UI is crucial</li>
        <li>Complex animations are needed</li>
        <li>You're building from scratch</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both frameworks are mature and capable. The best choice depends on your team, project requirements, and long-term goals.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    category: "Mobile",
    tags: ["React Native", "Flutter", "Mobile Development", "Cross-Platform"],
    author: authors[1],
    publishedAt: "2024-01-10",
    readTime: 6,
    featured: true,
  },
  {
    id: "3",
    slug: "seo-strategies-that-work",
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise with proven SEO tactics that drive organic traffic and improve your search rankings.",
    content: `
      <h2>The Evolution of SEO</h2>
      <p>SEO has evolved dramatically over the years. What worked in 2020 no longer works in 2024. Here's what you need to focus on.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals are now ranking factors:</p>
      <ul>
        <li><strong>LCP</strong> - Largest Contentful Paint under 2.5 seconds</li>
        <li><strong>INP</strong> - Interaction to Next Paint under 200ms</li>
        <li><strong>CLS</strong> - Cumulative Layout Shift under 0.1</li>
      </ul>
      
      <h2>Content Quality</h2>
      <p>Google's AI algorithms are better at understanding content quality. Focus on:</p>
      <ul>
        <li>Comprehensive, well-researched articles</li>
        <li>Original insights and unique perspectives</li>
        <li>Natural language that matches user intent</li>
        <li>Regular content updates</li>
      </ul>
      
      <h2>Technical SEO</h2>
      <p>Don't neglect the technical foundations:</p>
      <ul>
        <li>Proper site structure and internal linking</li>
        <li>XML sitemap optimization</li>
        <li>Structured data markup</li>
        <li>Mobile-first indexing</li>
      </ul>
      
      <h2>Link Building</h2>
      <p>Earn quality backlinks through:</p>
      <ul>
        <li>Creating linkable assets</li>
        <li>Guest posting on relevant sites</li>
        <li>Digital PR and brand building</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Successful SEO requires a holistic approach. Focus on providing value to users, and the rankings will follow.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
    category: "Marketing",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Analytics"],
    author: authors[2],
    publishedAt: "2024-01-08",
    readTime: 7,
    featured: false,
  },
  {
    id: "4",
    slug: "introduction-to-llm-applications",
    title: "Building Production LLM Applications: A Practical Guide",
    excerpt: "Everything you need to know about building, deploying, and scaling large language model applications in production.",
    content: `
      <h2>Understanding LLM Applications</h2>
      <p>Large Language Models have moved from research labs to production applications. Here's how to build them effectively.</p>
      
      <h2>Architecture Overview</h2>
      <p>A production LLM application typically includes:</p>
      <ul>
        <li><strong>Prompt Engineering</strong> - Crafting effective prompts</li>
        <li><strong>Retrieval Augmentation</strong> - Enhancing responses with context</li>
        <li><strong>Guardrails</strong> - Ensuring safe outputs</li>
        <li><strong>Evaluation</strong> - Measuring performance</li>
      </ul>
      
      <h2>Prompt Engineering</h2>
      <p>Effective prompts include:</p>
      <ul>
        <li>Clear instructions and constraints</li>
        <li>Examples (few-shot learning)</li>
        <li>System context and persona</li>
        <li>Output format specifications</li>
      </ul>
      
      <h2>Retrieval-Augmented Generation</h2>
      <p>RAG improves accuracy by:</p>
      <ul>
        <li>Fetching relevant documents</li>
        <li>Including context in the prompt</li>
        <li>Grounding responses in facts</li>
        <li>Reducing hallucinations</li>
      </ul>
      
      <h2>Cost Optimization</h2>
      <p>Production LLM costs can add up. Optimize by:</p>
      <ul>
        <li>Using smaller models for simple tasks</li>
        <li>Caching frequent queries</li>
        <li>Implementing smart routing</li>
        <li>Monitoring token usage</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building LLM applications requires careful consideration of architecture, cost, and user experience. Start simple and iterate.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    category: "AI",
    tags: ["AI", "LLM", "Machine Learning", "Production"],
    author: authors[3],
    publishedAt: "2024-01-05",
    readTime: 10,
    featured: true,
  },
  {
    id: "5",
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt: "Level up your TypeScript skills with these battle-tested patterns used in large-scale production applications.",
    content: `
      <h2>Why TypeScript Matters</h2>
      <p>TypeScript has become the standard for building enterprise applications. Here's how to use it effectively.</p>
      
      <h2>Type Definitions</h2>
      <p>Strong typing provides better DX:</p>
      <ul>
        <li>Use strict mode always</li>
        <li>Leverage utility types</li>
        <li>Avoid 'any' - use 'unknown' instead</li>
        <li>Define precise return types</li>
      </ul>
      
      <h2>Generic Patterns</h2>
      <p>Generics make code reusable:</p>
      <ul>
        <li>Create flexible utility functions</li>
        <li>Build type-safe APIs</li>
        <li>Implement constraint patterns</li>
      </ul>
      
      <h2>Module Organization</h2>
      <p>Structure your codebase for maintainability:</p>
      <ul>
        <li>Barrel exports for clean imports</li>
        <li>Feature-based folder structure</li>
        <li>Shared types in a central location</li>
      </ul>
      
      <h2>Error Handling</h2>
      <p>Handle errors gracefully:</p>
      <ul>
        <li>Use Result types for error handling</li>
        <li>Create custom error classes</li>
        <li>Log appropriately in production</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>TypeScript is an investment that pays dividends in maintainability. Follow these patterns to build robust applications.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    category: "Software",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Enterprise"],
    author: authors[0],
    publishedAt: "2024-01-03",
    readTime: 7,
    featured: false,
  },
  {
    id: "6",
    slug: "app-store-optimization-guide",
    title: "The Complete App Store Optimization Guide",
    excerpt: "Maximize your app's visibility and downloads with proven ASO strategies used by top-performing apps.",
    content: `
      <h2>Why ASO Matters</h2>
      <p>With over 5 million apps in major stores, ASO is crucial for discovery. Let's explore proven strategies.</p>
      
      <h2>Keyword Research</h2>
      <p>The foundation of ASO:</p>
      <ul>
        <li>Identify high-volume, low-competition keywords</li>
        <li>Use keyword tools for data-driven decisions</li>
        <li>Focus on long-tail keywords</li>
        <li>Monitor competitor keywords</li>
      </ul>
      
      <h2>App Listing Optimization</h2>
      <p>Your listing should convert:</p>
      <ul>
        <li>Compelling app name with keywords</li>
        <li>Descriptive subtitle and description</li>
        <li>High-quality screenshots and preview videos</li>
        <li>Regular updates with changelogs</li>
      </ul>
      
      <h2>Visual Assets</h2>
      <p>First impressions matter:</p>
      <ul>
        <li>Create multiple screenshot variations</li>
        <li>Highlight key features and benefits</li>
        <li>Use consistent branding</li>
        <li>A/B test visual elements</li>
      </ul>
      
      <h2>Reviews and Ratings</h2>
      <p>Social proof drives conversions:</p>
      <ul>
        <li>Encourage satisfied users to review</li>
        <li>Respond to reviews professionally</li>
        <li>Address negative feedback quickly</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>ASO is an ongoing process. Continuously monitor performance and iterate on your optimization strategies.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    category: "Mobile",
    tags: ["Mobile", "ASO", "App Store", "Growth"],
    author: authors[1],
    publishedAt: "2024-01-01",
    readTime: 6,
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getRecentBlogPosts(limit: number = 4): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
}