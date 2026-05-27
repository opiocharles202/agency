# Design Document: Agency Portfolio Website

## Overview

The Agency Portfolio Website is a high-performance marketing website built with Next.js that showcases the agency's service offerings across five verticals and serves as the primary digital storefront for lead generation. The design balances technical excellence with conversion-focused UX, targeting three distinct personas: startup founders, enterprise decision makers, and SMB owners.

### Design Principles

1. **Tech-forward aesthetic** - Clean, modern design that communicates technical expertise
2. **Conversion-first** - Every page guides visitors toward actionable conversion points
3. **Performance-native** - Core Web Vitals optimization built into every component
4. **Accessible by default** - WCAG 2.1 Level AA compliance as a baseline
5. **Content-managed** - All marketing content editable via headless CMS

---

## Architecture

### High-Level System Architecture

```mermaid
flowDiagram
    Client["Web Client\n(Next.js App Router)"]
    CDN["Edge Network\n(Vercel/CDN)"]
    CMS["Headless CMS\n(Sanity)"]
    Analytics["Analytics\n(GA4)"]
    Email["Email Service\n(Resend/SendGrid)"]
    Forms["Form Handler\n(API Route)"]
    
    Client --> CDN
    CDN --> Client
    Client --> Forms
    Forms --> Email
    CDN --> CMS
    Client --> Analytics
    
    note right of Client
      React Server Components
      Static Generation (SSG)
      Server-Side Rendering (SSR)
    end note
```

### Page Structure

```mermaid
flowDiagram
    Homepage --> Services["Service Pages (5)"]
    Homepage --> Portfolio["Portfolio Index"]
    Homepage --> Blog["Blog Index"]
    Homepage --> About["About Page"]
    Homepage --> Careers["Careers Page"]
    Homepage --> Contact["Contact Page"]
    
    Services --> ServiceDetail["Individual Service Page"]
    Portfolio --> CaseStudy["Individual Case Study"]
    Blog --> BlogPost["Individual Blog Post"]
    Careers --> JobDetail["Job Detail/Apply"]
    
    note right of Homepage
      - Hero section
      - Featured work
      - Services overview
      - Social proof
      - CTAs
    end note
```

### Route Structure

```
/                           # Homepage (SSG)
/services                   # Services overview (SSG)
/services/software          # Software Development (SSG)
/services/mobile            # Mobile App Development (SSG)
/services/marketing         # Marketing Services (SSG)
/services/ai                # AI Services (SSG)
/services/content           # Content Creation (SSG)
/portfolio                  # Portfolio index (SSG)
/portfolio/[slug]           # Case study (SSG)
/blog                       # Blog index (SSG)
/blog/[slug]                # Blog post (SSG)
/about                      # About page (SSG)
/careers                    # Careers page (SSG)
/careers/[slug]             # Job detail (SSG)
/contact                    # Contact page (SSG)
/api/contact                # Form submission (API route)
/api/newsletter             # Newsletter signup (API route)
```

---

## Visual Design System

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Deep Navy | `#0A1628` | Headers, primary backgrounds, footers |
| Secondary | Slate Blue | `#1E3A5F` | Secondary backgrounds, cards |
| Accent | Electric Cyan | `#00D4FF` | CTAs, links, highlights, gradients |
| Accent Alt | Vivid Coral | `#FF6B4A` | Secondary CTAs, alerts, emphasis |
| Surface | Off-White | `#F8FAFC` | Page backgrounds |
| Surface Alt | Light Gray | `#E2E8F0` | Card backgrounds, borders |
| Text Primary | Charcoal | `#1A202C` | Body text, headings (dark mode) |
| Text Secondary | Gray | `#64748B` | Captions, secondary text |
| Success | Green | `#10B981` | Success states |
| Error | Red | `#EF4444` | Error states, validation |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 | Inter | 700 | 56px | 36px |
| H2 | Inter | 600 | 40px | 28px |
| H3 | Inter | 600 | 28px | 22px |
| H4 | Inter | 500 | 20px | 18px |
| Body | Inter | 400 | 16px | 16px |
| Body Small | Inter | 400 | 14px | 14px |
| Caption | Inter | 500 | 12px | 12px |
| Button | Inter | 600 | 16px | 16px |
| Code | JetBrains Mono | 400 | 14px | 14px |

### Spacing System

Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Inline elements |
| `--space-3` | 12px | Component internal |
| `--space-4` | 16px | Default spacing |
| `--space-6` | 24px | Section padding (mobile) |
| `--space-8` | 32px | Card padding, gaps |
| `--space-12` | 48px | Section spacing |
| `--space-16` | 64px | Large section spacing |
| `--space-24` | 96px | Hero section spacing |
| `--space-32` | 128px | Footer top padding |

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| xs | 320px | Small phones |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |
| 3xl | 1920px | Extra-large screens |
| 4xl | 2560px | Wide displays |

### Animation Specifications

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Fade In | 200ms | ease-out | Element entry |
| Slide Up | 300ms | ease-out | Section reveals |
| Slide Down | 250ms | ease-in | Dropdown close |
| Scale | 200ms | ease-out | Button hover |
| Page Transition | 300ms | ease-in-out | Route changes |
| Skeleton Pulse | 1.5s | ease-in-out | Loading states |

**Reduced Motion:**
- All animations disabled when `prefers-reduced-motion: reduce`
- Use static transitions or instant changes instead

---

## Components and Interfaces

### Core UI Component Contracts

#### Button Component

```typescript
interface ButtonProps {
  /** Button visual variant */
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether to show loading spinner */
  loading?: boolean;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Full width button */
  fullWidth?: boolean;
  /** Icon element to display before text */
  iconLeft?: React.ReactNode;
  /** Icon element to display after text */
  iconRight?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}
```

**Contract:**
- Displays loading spinner when `loading` is true and disables interaction
- Disabled state prevents all interactions and applies visual disabled styling
- `onClick` is only callable when not disabled and not loading
- Icon elements are centered vertically with text

#### Card Component

```typescript
interface CardProps {
  /** Card visual variant */
  variant: 'default' | 'elevated' | 'bordered';
  /** Card content slots */
  children: React.ReactNode;
  /** Optional header slot */
  header?: React.ReactNode;
  /** Optional footer slot */
  footer?: React.ReactNode;
  /** Click handler for entire card */
  onClick?: () => void;
  /** Whether card is interactive (shows hover state) */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render as */
  as?: 'div' | 'article' | 'section';
}
```

**Contract:**
- Header and footer slots are rendered in designated areas
- Interactive cards show hover state and cursor pointer
- Elevated variant adds shadow styling
- Bordered variant adds border styling

#### Input Component

```typescript
interface InputProps {
  /** Input type */
  type: 'text' | 'email' | 'textarea' | 'select';
  /** Input label */
  label: string;
  /** Input name attribute */
  name: string;
  /** Current value */
  value: string;
  /** Value change handler */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Error message to display */
  error?: string;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Whether input is required */
  required?: boolean;
  /** Help text displayed below input */
  helpText?: string;
  /** Select options (when type is select) */
  options?: { value: string; label: string }[];
  /** Additional CSS classes */
  className?: string;
}
```

**Contract:**
- Displays error message below input when `error` is provided
- Applies error styling to input when error exists
- Label is associated with input via htmlFor/id
- Help text is only shown when no error exists
- onChange is called with the new value on every change

#### Section Component

```typescript
interface SectionProps {
  /** Section size variant */
  size: 'sm' | 'md' | 'lg' | 'xl';
  /** Background type */
  background: 'solid' | 'gradient' | 'image' | 'pattern';
  /** Background color or gradient value */
  backgroundValue?: string;
  /** Section content */
  children: React.ReactNode;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to constrain max-width */
  constrain?: 'default' | 'full-width' | 'contained';
}
```

#### Container Component

```typescript
interface ContainerProps {
  /** Container max-width variant */
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Padding variant */
  padding: 'default' | 'compact' | 'loose';
  /** Container content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}
```

### Feature Component Interfaces

#### HeroSection Component

```typescript
interface HeroSectionProps {
  /** Hero layout type */
  type: 'centered' | 'left-aligned' | 'split' | 'video-background';
  /** Main headline text */
  headline: string;
  /** Subheadline text */
  subheadline?: string;
  /** Primary CTA configuration */
  primaryCta: {
    text: string;
    href: string;
    variant?: ButtonProps['variant'];
  };
  /** Secondary CTA configuration */
  secondaryCta?: {
    text: string;
    href: string;
  };
  /** Optional badge/label */
  badge?: string;
  /** Whether to show scroll indicator */
  showScrollIndicator?: boolean;
  /** Background image or video URL */
  backgroundMedia?: string;
  /** Overlay opacity for media backgrounds */
  overlayOpacity?: number;
}
```

**Contract:**
- CTAs navigate to specified hrefs
- Video backgrounds auto-play silently with loop
- Scroll indicator links to first content section

#### ServiceCard Component

```typescript
interface ServiceCardProps {
  /** Service data */
  service: {
    slug: string;
    title: string;
    shortDescription: string;
    icon: string;
    color: string;
  };
  /** Whether this is a featured card */
  variant?: 'default' | 'featured' | 'compact';
  /** Click handler */
  onClick?: () => void;
}
```

**Contract:**
- Featured cards have larger size and prominent styling
- Clicking card navigates to service detail page
- Icon uses the specified color from service data

#### PortfolioCard Component

```typescript
interface PortfolioCardProps {
  /** Portfolio item data */
  item: {
    slug: string;
    title: string;
    client: string;
    industry: string;
    coverImage: ImageAsset;
    metrics?: { label: string; value: string }[];
  };
  /** Card variant */
  variant?: 'default' | 'featured' | 'list-item';
  /** Click handler */
  onClick?: () => void;
}
```

**Contract:**
- Hover state shows image zoom effect
- Metrics are displayed as small badges
- Click navigates to case study detail

#### ContactForm Component

```typescript
interface ContactFormProps {
  /** Form submission handler */
  onSubmit: (data: ContactSubmission) => Promise<void>;
  /** Source page for analytics */
  sourcePage: string;
  /** Custom labels or overrides */
  labels?: {
    name?: string;
    email?: string;
    company?: string;
    projectType?: string;
    message?: string;
    submit?: string;
  };
}

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
  consent: boolean;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errors: Record<string, string>;
}
```

**Contract:**
- Validates all fields before submission
- Shows field-level errors below each field
- Shows success message and resets form on successful submission
- Shows generic error with retry option on failure

### Component Interaction Patterns

#### Parent-Child Communication

| Pattern | Usage | Example |
|---------|-------|---------|
| Props | One-way data flow | `Button` receives `variant`, `children` |
| Callbacks | Child notifies parent | `onSubmit` callback in `ContactForm` |
| Context | Shared state access | Theme, auth state via React Context |
| Render Props | Flexible composition | `Children` slot in `Card` component |

#### Form Handling Pattern

```
Form Component
├── Uses controlled inputs
├── Maintains validation state
├── Calls onSubmit with validated data
├── Handles loading/success/error states
└── Displays field-level and form-level errors
```

#### Navigation Pattern

```
Link Components (Next.js Link)
├── Internal navigation uses <Link>
├── External links use <a> with target="_blank"
├── Active states determined by current route
└── Mobile menu handled separately with overlay
```

### Component Composition Examples

#### Section with Container and Card

```tsx
<Section size="lg" background="gradient" backgroundValue="primary">
  <Container size="lg">
    <Grid columns={3} gap="md">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </Grid>
  </Container>
</Section>
```

#### Page Layout Pattern

```tsx
<RootLayout>
  <HeroSection type="centered" headline="..." primaryCta={{...}} />
  <Container size="lg">
    <Grid columns={2} gap="lg">
      <Card>
        <CardHeader>Feature 1</CardHeader>
        <CardContent>...</CardContent>
      </Card>
      <Card>
        <CardHeader>Feature 2</CardHeader>
        <CardContent>...</CardContent>
      </Card>
    </Grid>
  </Container>
</RootLayout>
```

---

## Component Hierarchy

### Layout Components

```
RootLayout
├── Header (sticky)
│   ├── Logo
│   ├── Navigation
│   │   ├── NavLink (Services dropdown)
│   │   ├── NavLink (Portfolio)
│   │   ├── NavLink (Blog)
│   │   ├── NavLink (About)
│   │   └── NavLink (Careers)
│   ├── MobileMenu (hamburger)
│   └── CTA Button (Contact)
├── MainContent (page-specific)
├── Footer
│   ├── FooterLogo
│   ├── FooterLinks (columns)
│   │   ├── Services
│   │   ├── Company
│   │   └── Resources
│   ├── SocialLinks
│   ├── ContactInfo
│   └── NewsletterSignup
└── ConsentBanner (GDPR)
```

### Shared Components

```
Button
├── variants: primary, secondary, outline, ghost
├── sizes: sm, md, lg
└── states: default, hover, active, disabled, loading

Card
├── variants: default, elevated, bordered
└── slots: header, content, footer

Section
├── sizes: sm, md, lg, xl
├── backgrounds: solid, gradient, image, pattern
└── constraints: default, full-width, contained

Container
├── sizes: sm (640px), md (768px), lg (1024px), xl (1280px), full
└── padding: default, compact, loose

Grid
├── columns: 1-12
├── gap: sm, md, lg
└── responsive: responsive object

Input
├── types: text, email, textarea, select
├── states: default, focus, error, disabled
└── variants: default, filled

Badge
├── variants: default, success, warning, error, info
└── sizes: sm, md

Modal
├── sizes: sm, md, lg, full
├── animations: fade, slide, scale
└── a11y: focus-trap, escape-to-close

Accordion
├── variants: default, bordered, ghost
└── animations: smooth

Tabs
├── variants: default, pills, underline
└── animations: indicator-slide

Toast
├── types: success, error, warning, info
├── positions: top-right, bottom-right
└── auto-dismiss: 5s default
```

### Feature Components

```
HeroSection
├── types: centered, left-aligned, split, video-background
├── elements: headline, subheadline, cta-group, badge, scroll-indicator
└── animations: staggered text reveal, parallax background

ServiceCard
├── elements: icon, title, description, link, hover-glow
└── variants: default, featured, compact

PortfolioCard
├── elements: image, title, category, excerpt, metrics, link
└── variants: default, featured, list-item

TestimonialCard
├── elements: quote, author-photo, author-name, author-title, company-logo
└── variants: default, featured, compact

TeamMemberCard
├── elements: photo, name, title, bio, social-links
└── variants: default, featured, minimal

BlogCard
├── elements: image, category, title, excerpt, date, read-time, author
└── variants: default, featured, compact

JobCard
├── elements: title, department, location, type, link
└── variants: default, compact

ContactForm
├── fields: name, email, company, project-type, message, consent
├── validation: client-side + server-side
└── states: default, submitting, success, error

LeadMagnetForm
├── fields: email, name (optional), interest (optional)
└── delivery: instant-download, email-delivery

SearchBar
├── types: header-search, modal-search, page-search
├── features: suggestions, filters, recent-searches

FilterBar
├── filters: category, industry, date, tags
└── UI: dropdowns, pills, checkboxes

Pagination
├── types: numbered, load-more, infinite-scroll
└── a11y: aria-labels, keyboard navigation

Breadcrumb
├── separator: chevron, slash
└── a11y: aria-current for current page
```

---

## Data Models

### Service

```typescript
interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: IconName;
  color: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  technologies: string[];
  portfolioItems: string[]; // Portfolio item IDs
  ctaText: string;
  ctaLink: string;
  order: number;
  meta: SEOFields;
}

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
```

### Portfolio Item / Case Study

```typescript
interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string; // Service slug
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  challenge: string;
  solution: string;
  results: ProjectResult[];
  technologies: string[];
  testimonial?: Testimonial;
  featured: boolean;
  publishedAt: string;
  meta: SEOFields;
}

interface ProjectResult {
  metric: string;
  value: string;
  change?: string; // e.g., "+200%"
}
```

### Blog Post

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PortableTextBlock[];
  coverImage: ImageAsset;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  relatedPosts: string[]; // Post IDs
  featured: boolean;
  meta: SEOFields;
}

interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: ImageAsset;
  social: SocialLinks;
}
```

### Team Member

```typescript
interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: ImageAsset;
  department: string;
  order: number;
  social: SocialLinks;
  email?: string;
}
```

### Job Opening

```typescript
interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  description: string;
  requirements: string[];
  benefits: string[];
  applicationLink: string;
  publishedAt: string;
  expiresAt?: string;
}
```

### Contact Form Submission

```typescript
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
  sourcePage: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}
```

### Image Asset

```typescript
interface ImageAsset {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  lqip?: string; // Low-quality placeholder
}
```

### SEO Fields

```typescript
interface SEOFields {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: ImageAsset;
  canonical?: string;
  noIndex?: boolean;
}
```

---

## Page-by-Page Design Specifications

### 1. Homepage

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER (sticky, blur background)            │
├─────────────────────────────────────────────┤
│ HERO SECTION                                │
│ ┌─────────────────────────────────────────┐ │
│ │ "We build digital products that scale"  │ │
│ │ Subheadline: Agency tagline             │ │
│ │ [Get Started] [View Our Work]           │ │
│ │ Animated gradient or video background   │ │
│ └─────────────────────────────────────────┘ │
├─────────────────────────────────────────────┤
│ SOCIAL PROOF BAR                            │
│ "Trusted by" + client logos (grayscale)     │
├─────────────────────────────────────────────┤
│ SERVICES OVERVIEW                           │
│ 5 cards: Software | Mobile | Marketing |    │
│          AI | Content                       │
├─────────────────────────────────────────────┤
│ FEATURED WORK                               │
│ 3 portfolio items with metrics              │
│ [View All Work →]                           │
├─────────────────────────────────────────────┤
│ WHY CHOOSE US                               │
│ 3-4 value propositions with icons           │
├─────────────────────────────────────────────┤
│ TESTIMONIALS                                │
│ Carousel of client quotes                   │
├─────────────────────────────────────────────┤
│ METRICS/STATISTICS                          │
│ "50+ Projects | 98% Retention | 5yr Exp"    │
├─────────────────────────────────────────────┤
│ CTA SECTION                                 │
│ "Ready to start?" + contact form/button     │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

**Key Components:**
- Hero with staggered text animation (Framer Motion)
- Client logos marquee (auto-scroll)
- Service cards with hover glow effect
- Portfolio cards with image zoom on hover
- Testimonial carousel (auto-play, pause on hover)
- Stats counter animation on scroll into view

### 2. Service Pages (5 total)

**Layout:**
```
┌───────────────────────────────────��─────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ Service title + breadcrumb                  │
│ Short description + primary CTA             │
├─────────────────────────────────────────────┤
│ OVERVIEW                                    │
│ Full description, key benefits              │
├─────────────────────────────────────────────┤
│ FEATURES/SERVICES                           │
│ Grid of feature cards (2-3 columns)         │
├─────────────────────────────────────────────┤
│ PROCESS                                     │
│ Numbered steps (discovery → delivery)       │
├─────────────────────────────────────────────┤
│ TECHNOLOGIES                                │
│ Logo grid of tech stack                     │
├─────────────────────────────────────────────┤
│ CASE STUDIES                                │
│ 2-3 relevant portfolio items                │
│ [View All →]                                │
├─────────────────────────────────────────────┤
│ TESTIMONIALS                               │
│ Relevant client quotes                      │
├─────────────────────────────────────────────┤
│ CTA                                        │
│ Consultation booking                        │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

**Variations by Service:**

| Service | Accent Color | Icon | Special Section |
|---------|--------------|------|-----------------|
| Software Development | Cyan (#00D4FF) | Code | Tech stack logos |
| Mobile Apps | Coral (#FF6B4A) | Smartphone | Platform badges |
| Marketing | Purple (#8B5CF6) | TrendingUp | Results metrics |
| AI/ML | Violet (#7C3AED) | Sparkles | AI ethics statement |
| Content Creation | Amber (#F59E0B) | Video | Portfolio gallery |

### 3. Portfolio Index

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ PAGE HERO                                   │
│ "Our Work" + filter description             │
├─────────────────────────────────────────────┤
│ FILTER BAR                                  │
│ [All] [Software] [Mobile] [Marketing] ...   │
│ Industry dropdown, search                   │
├─────────────────────────────────────────────┤
│ PORTFOLIO GRID                              │
│ Masonry or grid layout                      │
│ Cards: image, title, category, brief metric │
│ 9 items per page                            │
├─────────────────────────────────────────────┤
│ PAGINATION                                  │
│ [1] [2] [3] ... or [Load More]             │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

**Filtering:**
- Client-side filtering for < 50 items
- URL-based filter state (`?category=software`)
- Animated filter transitions (Framer Motion layout)

### 4. Case Study Detail

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ Full-width cover image                      │
│ Project title + client name                 │
│ Services + duration + team size             │
├─────────────────────────────────────────────┤
│ OVERVIEW                                    │
│ Challenge / Solution / Results summary      │
├─────────────────────────────────────────────┤
│ THE CHALLENGE                               │
│ Problem description + context               │
├─────────────────────────────────────────────┤
│ THE SOLUTION                                │
│ Approach, process, implementation           │
│ Image gallery, technical details            │
├─────────────────────────────────────────────┤
│ RESULTS                                     │
│ Metrics cards: Before/After, KPIs           │
│ Charts/graphs where applicable              │
├─────────────────────────────────────────────┤
│ TECHNOLOGIES USED                           │
│ Tech badges/logos                           │
├─────────────────────────────────────────────┤
│ TESTIMONIAL                                │
│ Client quote + photo + attribution          │
├─────────────────────────────────────────────┤
│ RELATED WORK                                │
│ 2-3 similar projects                        │
├─────────────────────────────────────────────┤
│ CTA                                         │
│ "Start your project"                        │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 5. Blog Index

**Layout:**
```
┌─────────────────────────���───────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ PAGE HERO                                   │
│ "Insights & News" + category tabs           │
├─────────────────────────────────────────────┤
│ FEATURED POST                               │
│ Large card with prominent image             │
├─────────────────────────────────────────────┤
│ POST GRID                                   │
│ Latest posts (3x2 grid)                     │
│ Card: image, category, title, excerpt       │
├─────────────────────────────────────────────┤
│ CATEGORY SIDEBAR                            │
│ Categories list, popular posts              │
├─────────────────────────────────────────────┤
│ PAGINATION                                  │
├─────────────────────────────────────────────┤
│ NEWSLETTER SIGNUP                           │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 6. Blog Post Detail

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ ARTICLE HERO                                │
│ Cover image + title + meta (date, read-time)│
├─────────────────────────────────────────────┤
│ ARTICLE CONTENT                             │
│ Narrow column (720px max)                   │
│ Proper typography for readability           │
│ Code blocks with syntax highlighting        │
│ Embedded images with captions               │
│ Blockquotes                                 │
│ H2, H3 hierarchy                            │
├─────────────────────────────────────────────┤
│ AUTHOR BIO                                  │
│ Avatar + name + title + social links        │
├─────────────────────────────────────────────┤
│ SHARE BUTTONS                               │
│ Copy link, Twitter, LinkedIn, Facebook      │
├─────────────────────────────────────────────┤
│ RELATED POSTS                               │
│ 3 related articles                          │
├─────────────────────────────────────────────┤
│ COMMENTS (optional)                         │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 7. About Page

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ "Building the future of [Industry]"         │
│ Agency photo or team photo                  │
├─────────────────────────────────────────────┤
│ OUR STORY                                   │
│ Founding story, timeline, milestones        │
├─────────────────────────────────────────────┤
│ MISSION & VALUES                            │
│ Mission statement + value cards             │
├─────────────────────────────────────────────┤
│ TEAM                                        │
│ Grid of team member cards                   │
│ Photo, name, title, brief bio               │
├─────────────────────────────────────────────┤
│ OFFICES                                     │
│ Location(s) + embedded map                  │
├─────────────────────────────────────────────┤
│ AWARDS & RECOGNITION                        │
│ Certifications, awards, partner status      │
├─────────────────────────────────────────────┤
│ CAREERS CTA                                 │
│ "Join our team" + link to careers           │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 8. Careers Page

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ "Join our team" + culture tagline           │
├─────────────────────────────────────────────┤
│ WHY JOIN US                                 │
│ Benefits, culture, growth opportunities     │
├─────────────────────────────────────────────┤
│ OPEN POSITIONS                              │
│ Filter: Department, Location, Type          │
│ Job cards: title, dept, location, type      │
├─────────────────────────────────────────────┤
│ NO POSITIONS STATE                          │
│ "We're always looking for talent"           │
│ General application link                    │
├───────────────────────────���─────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

### 9. Contact Page

**Layout:**
```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│ SPLIT HERO                                  │
│ Left: Contact info + map                   │
│ Right: Contact form                        │
├─────────────────────────────────────────────┤
│ CONTACT INFO                                │
│ Email, phone, address, hours                │
├─────────────────────────────────────────────┤
│ SCHEDULING                                  │
│ Calendar booking integration                │
├─────────────────────────────────────────────┤
│ SOCIAL LINKS                                │
│ LinkedIn, Twitter, Instagram, GitHub        │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

---

## API Structures

### Contact Form Submission

```
POST /api/contact
Content-Type: application/json

{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "company": "string (optional, max 100 chars)",
  "projectType": "string (required, enum: software|mobile|marketing|ai|content|other)",
  "message": "string (required, 10-2000 chars)",
  "consent": "boolean (required, must be true)",
  "sourcePage": "string (URL of page)"
}

Response 200:
{
  "success": true,
  "message": "Thank you for your message! We'll be in touch within 24 hours.",
  "submissionId": "uuid"
}

Response 400:
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Please enter a valid email address" }
  ]
}
```

### Newsletter Signup

```
POST /api/newsletter
Content-Type: application/json

{
  "email": "string (required, valid email)",
  "source": "string (footer|popup|blog|lead-magnet)"
}

Response 200:
{
  "success": true,
  "message": "You're subscribed!"
}
```

### Portfolio Filtering (Internal API)

```
GET /api/portfolio?category=software&industry=fintech

Response 200:
{
  "items": [...],
  "total": 15,
  "page": 1,
  "pageSize": 9
}
```

---

## Error Handling

### Form Validation

| Field | Rules | Error Message |
|-------|-------|---------------|
| Name | Required, 2-100 chars | "Please enter your name" |
| Email | Required, valid format | "Please enter a valid email" |
| Company | Max 100 chars | - |
| Project Type | Required, valid option | "Please select a project type" |
| Message | Required, 10-2000 chars | "Please provide more details (min 10 characters)" |
| Consent | Must be true | "Please agree to our privacy policy" |

### Error States

- **Form submission failure**: Show toast with retry option
- **Page not found (404)**: Custom 404 page with search and navigation
- **Server error (500)**: Custom error page with contact option
- **CMS unavailable**: Show cached content or graceful degradation

### Error Boundaries

- Wrap major sections in error boundaries
- Show fallback UI for failed component loads
- Log errors to monitoring service (Sentry)

---

## Testing Strategy

### Why Property-Based Testing Does Not Apply

This feature is a marketing website with primarily UI rendering, CMS content delivery, and form submissions. The core functionality involves:

- **UI rendering** - React component display, not pure functions
- **Static content** - CMS-driven pages with pre-rendered content
- **Form handling** - Submission and validation workflows
- **Configuration** - Static page generation from CMS data

Property-based testing is inappropriate for this use case. Instead, the following testing approach provides comprehensive coverage:

### Testing Approach

#### Unit Tests (Jest + React Testing Library)

**Components to test:**
- Button variants and states
- Form input validation
- Card rendering variants
- Navigation behavior
- Filter logic

**Test focus:**
- Specific component behaviors
- Interaction handlers
- Conditional rendering
- Edge cases (empty states, error states)

Example:
```typescript
describe('ContactForm', () => {
  it('shows error for invalid email', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });
});
```

#### Integration Tests (Playwright)

**Critical flows to test:**
- Complete contact form submission
- Navigation between all pages
- Portfolio filtering and pagination
- Mobile responsive behavior
- Form validation end-to-end

Example:
```typescript
test('contact form submission flow', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="email"]', 'test@example.com');
  // ... complete form
  await page.click('[type="submit"]');
  await expect(page.locator('[data-testid="success"]')).toBeVisible();
});
```

#### Visual Regression Tests (Chromatic/Screenshot)

**Pages to capture:**
- Homepage (desktop, tablet, mobile)
- All service pages
- Portfolio index and detail
- Blog index and post
- Contact page
- Error states (404, 500)

#### Accessibility Tests (axe-core)

**Automated checks:**
- WCAG 2.1 Level A/AA violations
- ARIA attribute correctness
- Color contrast ratios
- Keyboard navigation
- Focus management

Run in CI pipeline and locally:
```bash
npx playwright test --project=a11y
```

#### Performance Tests

- Lighthouse CI integration
- Core Web Vitals thresholds in CI
- Bundle size monitoring
- First Contentful Paint < 1.8s
- Time to Interactive < 3.8s

### Test Coverage Targets

| Category | Target | Tool |
|----------|--------|------|
| Unit tests | 70%+ coverage | Jest |
| Integration tests | Critical paths | Playwright |
| Visual regression | Key pages | Chromatic |
| Accessibility | Zero critical violations | axe-core |
| Performance | Lighthouse 90+ | Lighthouse CI |

---

## Implementation Priorities

### Phase 1: Core Foundation
1. Project setup (Next.js, TypeScript, Tailwind)
2. Design system implementation
3. Layout components (Header, Footer, Container)
4. Basic pages (Home, About, Contact)

### Phase 2: Services & Portfolio
5. Service pages (5 pages)
6. Portfolio system
7. CMS integration for portfolio items

### Phase 3: Content & Conversion
8. Blog system
9. Careers page
10. Contact form with validation
11. Lead magnets

### Phase 4: Polish & Optimize
12. Animations (Framer Motion)
13. SEO implementation
14. Accessibility audit & fixes
15. Performance optimization
16. Analytics integration

---

**Property-Based Testing: Not Applicable**

This feature consists of UI rendering and static content delivery rather than pure functions with testable input/output properties. As documented in the **Testing Strategy** section, the appropriate testing approaches are unit tests, integration tests, visual regression tests, and accessibility tests.

---

## Correctness Properties

*Property-based testing is not applicable to this feature.*

This marketing website primarily involves:
- UI component rendering
- Static content from CMS
- Form validation and submission

The Testing Strategy section above documents the appropriate testing methods (unit tests, integration tests, visual regression, accessibility).

**Property 1:** Not applicable
*No properties are defined because this feature consists of UI rendering and static content delivery rather than pure functions with testable input/output properties.*

**Validates: Testing Strategy Section**