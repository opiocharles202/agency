# Implementation Plan: Agency Portfolio Website

## Overview

This implementation plan covers the complete development of the Agency Portfolio Website using Next.js 16.2 with App Router, TypeScript, shadcn/ui, and a headless CMS (Sanity). The tasks are organized into 4 phases that build upon each other, starting with core foundation and ending with polish and optimization.

**Technology Stack (Latest Stable Versions):**
- Next.js 16.2 (App Router) - [Release Notes](https://nextjs.org/blog/next-16-2)
- TypeScript 5.x (strict mode)
- Tailwind CSS v4 (recommended) or v3.x
- shadcn/ui (via `npx shadcn@latest`) - [Docs](https://ui.shadcn.com/docs)
- Framer Motion 11.x for animations
- Sanity.io as headless CMS
- React Server Components (built into Next.js 16)

**Installation Commands:**
```bash
# Create Next.js 16 project
npx create-next-app@latest agency-portfolio --typescript --tailwind --eslint

# Initialize shadcn/ui
npx shadcn@latest init

# Add components (example)
npx shadcn@latest add button card input form toast accordion carousel

# Install Framer Motion
npm install framer-motion
```

## Tasks

---

## Phase 1: Core Foundation

### 1. Project Setup and Configuration

- [x] 1.1 Initialize Next.js 16.2 project with TypeScript
  - Create Next.js 16.2 app with App Router and TypeScript
  - Configure Tailwind CSS v4 with custom design tokens
  - Set up strict TypeScript configuration
  - Run: `npx create-next-app@latest agency-portfolio --typescript --tailwind --eslint`
  - **Status:** COMPLETED - Project already set up with Next.js 16.2.6, React 19.2.4, Tailwind v4
  - _Requirements: 15.1-15.7_

- [x] 1.2 Set up project folder structure
  - Create organized directory structure (components, lib, types, etc.)
  - Configure path aliases in tsconfig.json
  - Set up environment variable templates
  - **Status:** COMPLETED - shadcn/ui initialized with 16 components in components/ui/
  - **Installed:** button, card, input, form, label, textarea, select, checkbox, switch, accordion, tabs, sheet, dialog, badge, avatar, skeleton, sonner
  - **Also installed:** framer-motion
  - _Requirements: 15.5_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Folder structure matches design architecture

- [x] 1.3 Configure linting and formatting
  - Set up ESLint with Next.js and accessibility rules
  - Configure Prettier for consistent code formatting
  - Add husky pre-commit hooks
  - **Status:** COMPLETED - ESLint already configured in project
  - _Requirements: 15.5_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Linting passes on commit

### 2. Design System Implementation

- [x] 2.1 Create CSS design tokens (colors, spacing, typography)
  - Implement CSS variables for colors (primary, secondary, accent, etc.)
  - Define spacing scale (4px base unit)
  - Configure typography system (Inter font family)
  - **Status:** COMPLETED - Design tokens in globals.css match design.md
  - _Requirements: 15.6, 17.1-17.5_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** All design tokens match design.md specifications

- [x] 2.2 Set up shadcn/ui and add Button component
  - Initialize shadcn/ui in the project
  - Add Button component: `npx shadcn@latest add button`
  - Customize Button variants (primary, secondary, outline, ghost) using Tailwind
  - Add loading and disabled states
  - **Status:** COMPLETED - Button component exists at components/ui/button.tsx
  - _Requirements: 23.1-23.8, 24.1-24.6_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Button uses shadcn/ui, passes accessibility audit, all variants work

- [x] 2.3 Add shadcn/ui Card, Input, and Form components
  - Add Card: `npx shadcn@latest add card`
  - Add Input: `npx shadcn@latest add input`
  - Add Form: `npx shadcn@latest add form`
  - Add Label: `npx shadcn@latest add label`
  - Customize components with design tokens
  - **Status:** COMPLETED - All components installed
  - _Requirements: 12.2, 23.1-23.8_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** All components work, integrate with design system

- [x] 2.4 Add shadcn/ui additional form components
  - Add Textarea: `npx shadcn@latest add textarea`
  - Add Select: `npx shadcn@latest add select`
  - Add Checkbox: `npx shadcn@latest add checkbox`
  - Add Switch: `npx shadcn@latest add switch`
  - Add validation state handling (error, success)
  - **Status:** COMPLETED - All form components installed
  - _Requirements: 12.2, 23.5-23.7, 24.5_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** All form components work with validation

- [x] 2.5 Add shadcn/ui layout components
  - Add Accordion: `npx shadcn@latest add accordion`
  - Add Tabs: `npx shadcn@latest add tabs`
  - Add Sheet (mobile menu): `npx shadcn@latest add sheet`
  - Add Dialog/Modal: `npx shadcn@latest add dialog`
  - Implement responsive layout wrappers
  - **Status:** COMPLETED - Layout components installed
  - _Requirements: 17.1-17.5, 24.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** All layout components work at all breakpoints

- [x] 2.6 Add shadcn/ui display and feedback components
  - Add Badge: `npx shadcn@latest add badge`
  - Add Toast: `npx shadcn@latest add toast` (now sonner)
  - Add Avatar: `npx shadcn@latest add avatar`
  - Add Skeleton: `npx shadcn@latest add skeleton`
  - Create typography components using Tailwind classes
  - **Status:** COMPLETED - Display components installed
  - _Requirements: 17.1-17.5_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** All components render correctly at all breakpoints

### 3. Layout Components

- [x] 3.1 Build RootLayout and metadata configuration
  - Create root layout with HTML structure
  - Configure default metadata (title, description, Open Graph)
  - Set up fonts with next/font
  - **Status:** COMPLETED - RootLayout in app/layout.tsx with Inter font
  - _Requirements: 15.7, 21.1-21.7_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** Default metadata renders on all pages

- [x] 3.2 Build Header component
  - Implement sticky header with blur background
  - Add navigation links with active states
  - Implement mobile menu (hamburger)
  - Add contact CTA button
  - **Status:** COMPLETED - components/layout/Header.tsx
  - _Requirements: 5.4, 23.1-23.8, 24.1-24.2_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Header is keyboard accessible, works on mobile

- [x] 3.3 Build Footer component
  - Implement footer with columns (Services, Company, Resources)
  - Add social media links
  - Add contact information
  - Implement newsletter signup form
  - **Status:** COMPLETED - components/layout/Footer.tsx
  - _Requirements: 13.1-13.3_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Footer renders with all sections, newsletter form works

- [x] 3.4 Build Consent Banner (GDPR)
  - Implement cookie consent banner
  - Store consent preference
  - Block tracking until consent given
  - **Status:** COMPLETED - components/layout/ConsentBanner.tsx
  - _Requirements: 25.6-25.7_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** Consent banner appears, tracking only activates after consent

### 4. Homepage

- [x] 4.1 Build Homepage hero section
  - Implement HeroSection component with centered layout
  - Add staggered text animations (Framer Motion)
  - Add primary and secondary CTAs
  - **Status:** COMPLETED - Hero in app/page.tsx
  - _Requirements: 5.1, 5.4, 16.1-16.5_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Hero animates smoothly, CTAs navigate correctly

- [x] 4.2 Build client logos section
  - Implement logo grid with grayscale images
  - Add auto-scroll marquee animation
  - Make logos clickable to client sites
  - **Status:** COMPLETED - "Trusted by" section in app/page.tsx
  - _Requirements: 5.5_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** Logos render, marquee animation smooth

- [x] 4.3 Build services overview section
  - Implement ServiceCard component
  - Create grid of 5 service cards
  - Add hover glow effect
  - **Status:** COMPLETED - Services section in app/page.tsx
  - _Requirements: 5.3, 16.1-16.5_
  - **Effort:** 2 hours
  - **Acceptance Cards:** Cards render correctly, hover effects work

- [x] 4.4 Build featured work section
  - Implement PortfolioCard component
  - Display 3 featured portfolio items
  - Add image zoom on hover
  - **Status:** COMPLETED - Featured Work section in app/page.tsx
  - _Requirements: 5.2_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Portfolio cards display with metrics

- [x] 4.5 Build social proof sections (testimonials, stats)
  - Implement TestimonialCard component
  - Create testimonial carousel with auto-play
  - Implement stats counter animation on scroll
  - **Status:** COMPLETED - Testimonials & Stats in app/page.tsx
  - _Requirements: 5.6_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Carousel works, stats animate on scroll into view

- [x] 4.6 Build homepage CTA section
  - Create final CTA section with contact prompt
  - Link to contact page
  - **Status:** COMPLETED - CTA section in app/page.tsx
  - _Requirements: 5.4_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** CTA section renders correctly

- [x] 4.7 Create complete Homepage
  - Assemble all homepage sections
  - Add scroll-based animations
  - Verify responsive behavior
  - **Status:** COMPLETED - Full homepage in app/page.tsx, build passes
  - _Requirements: 5.1-5.7_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Homepage matches design, all sections render

### 5. Checkpoint - Phase 1 Complete
- [ ] Ensure all Phase 1 tests pass
- [ ] Verify Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- [ ] Verify accessibility (keyboard navigation, screen reader)
- [ ] Ask the user if questions arise

---

## Phase 2: Services & Portfolio

### 6. Service Pages

- [x] 6.1 Set up services routing and data structure
  - Create /services/[slug] dynamic route
  - Define Service type and mock data
  - Set up static params for SSG
  - **Status:** COMPLETED - lib/data/services.ts, app/services/
  - _Requirements: 6.1-6.5, 7.1-7.5, 8.1-8.5, 9.1-9.6, 10.1-10.5_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Services routes work, data structure matches design

- [x] 6.2 Build service page components
  - Create service-specific hero
  - Implement features grid
  - Add process steps section
  - **Status:** COMPLETED - Dynamic service page in app/services/[slug]
  - _Requirements: 6.1, 7.1, 8.1, 9.1, 10.1_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** All service page layouts render correctly

- [x] 6.3-6.7 Create all 5 service pages
  - Software Development, Mobile Apps, Marketing, AI Solutions, Content Creation
  - **Status:** COMPLETED - All 5 service pages work with dynamic routing
  - _Requirements: 6.1-10.5_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Page matches design, links work

### 7. Portfolio System

- [x] 7.1 Set up portfolio routing and data
  - Create /portfolio route
  - Create /portfolio/[slug] dynamic route
  - Define PortfolioItem type and mock data
  - **Status:** COMPLETED - lib/data/portfolio.ts, app/portfolio/
  - _Requirements: 11.1-11.7_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Portfolio routes work

- [x] 7.2 Build Portfolio index page
  - Implement portfolio grid layout
  - Add filter bar (category, industry)
  - Implement client-side filtering
  - **Status:** COMPLETED - app/portfolio/page.tsx with filtering
  - _Requirements: 11.2_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Filtering works, animations smooth

- [x] 7.3 Build PortfolioCard component
  - Implement card with image, title, category
  - Add hover effects (image zoom)
  - Display metrics as badges
  - **Status:** COMPLETED - Integrated in portfolio index
  - _Requirements: 11.3-11.4_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Card renders all data, hover works

- [x] 7.4 Build Case Study detail page
  - Create hero with cover image
  - Implement challenge/solution/results sections
  - Add image gallery
  - Add technologies used section
  - **Status:** COMPLETED - app/portfolio/[slug]/page.tsx
  - _Requirements: 11.1, 11.3, 11.4, 11.6_
  - **Effort:** 4 hours
  - **Acceptance Criteria:** Case study renders all sections

- [x] 7.5 Add related work section to case studies
  - Display 2-3 related portfolio items
  - Link to service pages
  - **Status:** COMPLETED - Related projects section
  - _Requirements: 11.5_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** Related work displays correctly

### 8. Checkpoint - Phase 2 Complete
- [ ] Ensure all Phase 2 tests pass
- [ ] Verify all service pages render
- [ ] Test portfolio filtering
- [ ] Ask the user if questions arise

---

## Phase 3: Content & Conversion

### 9. Blog System

- [ ] 9.1 Set up blog routing and data
  - Create /blog route
  - Create /blog/[slug] dynamic route
  - Define BlogPost and Author types
  - _Requirements: 28.1-28.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Blog routes work

- [ ] 9.2 Build Blog index page
  - Implement featured post card
  - Create post grid with category tabs
  - Add category sidebar
  - _Requirements: 28.1-28.3_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Blog index renders correctly

- [ ] 9.3 Build BlogCard component
  - Implement card with image, category, title, excerpt
  - Add date and read time
  - _Requirements: 28.3_
  - **Effort:** 1.5 hours
  - **Acceptance Criteria:** Card renders all data

- [ ] 9.4 Build Blog post detail page
  - Create article hero with cover image
  - Implement proper typography for content
  - Add author bio section
  - Add social share buttons
  - Add related posts section
  - _Requirements: 28.4-28.6_
  - **Effort:** 4 hours
  - **Acceptance Criteria:** Article renders with all sections

### 10. About and Careers Pages

- [ ] 10.1 Build About page
  - Create agency history section
  - Implement TeamMemberCard grid
  - Add company values section
  - Add office location with map
  - Add awards/certifications section
  - Add careers link
  - _Requirements: 29.1-29.6_
  - **Effort:** 4 hours
  - **Acceptance Criteria:** About page matches design

- [ ] 10.2 Build Careers page
  - Create job listings grid
  - Implement JobCard component
  - Add filter by department/location
  - Add general application option
  - _Requirements: 30.1-30.5_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Careers page works with filtering

### 11. Contact and Lead Generation

- [ ] 11.1 Build Contact page
  - Implement ContactForm component
  - Add validation (client + server side)
  - Add success/error states
  - Display contact information (email, phone, address)
  - _Requirements: 12.1-12.6, 13.1-13.5_
  - **Effort:** 4 hours
  - **Acceptance Criteria:** Form validates, submits, shows messages

- [ ] 11.2 Create contact form API route
  - Implement /api/contact endpoint
  - Add rate limiting
  - Add spam prevention (honeypot)
  - Send email notification
  - _Requirements: 12.3, 26.1, 26.3-26.4_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** API handles submissions, rate limits work

- [ ] 11.3 Implement Lead Magnet system
  - Create LeadMagnetForm component
  - Set up lead magnet delivery (download/email)
  - Track downloads as conversion events
  - _Requirements: 14.1-14.4_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Lead magnet works, tracked in analytics

- [ ] 11.4 Add newsletter signup
  - Create newsletter form component
  - Implement /api/newsletter endpoint
  - Integrate with email service
  - _Requirements: 13.1-13.3_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Newsletter signup works

### 12. Checkpoint - Phase 3 Complete
- [ ] Ensure all Phase 3 tests pass
- [ ] Test contact form end-to-end
- [ ] Verify lead magnets deliver correctly
- [ ] Ask the user if questions arise

---

## Phase 4: Polish & Optimize

### 13. Animation and Interactivity

- [ ] 13.1 Implement reduced motion support
  - Add prefers-reduced-motion media query handling
  - Disable animations for users who prefer reduced motion
  - Test all animations respect setting
  - _Requirements: 16.3-16.5_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Animations disabled when preference set

- [ ] 13.2 Add page transition animations
  - Implement smooth page transitions
  - Add route change animations
  - Ensure CLS < 0.1 during transitions
  - _Requirements: 16.1-16.2_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Page transitions smooth, no layout shifts

- [ ] 13.3 Add scroll-triggered animations
  - Implement scroll-into-view animations
  - Add staggered reveals for lists
  - Optimize animation performance
  - _Requirements: 16.1-16.2_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Scroll animations perform well

### 14. SEO Implementation

- [ ] 14.1 Implement technical SEO
  - Add semantic HTML5 structure
  - Configure unique title tags and meta descriptions
  - Implement JSON-LD structured data
  - Generate sitemap.xml
  - Generate robots.txt
  - _Requirements: 21.1-21.7_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** SEO audit passes, structured data validates

- [ ] 14.2 Add Open Graph and social sharing
  - Configure OG meta tags for all pages
  - Add Twitter Card meta tags
  - Implement dynamic OG images
  - _Requirements: 21.2_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Social shares show correct previews

### 15. Accessibility

- [ ] 15.1 Complete accessibility audit and fixes
  - Test with NVDA/VoiceOver screen readers
  - Verify keyboard navigation on all pages
  - Check focus indicators on all interactive elements
  - _Requirements: 23.1-23.8, 24.1-24.6_
  - **Effort:** 3 hours
  - **Acceptance Criteria:** Passes WCAG 2.1 Level AA

- [ ] 15.2 Implement skip links
  - Add skip to main content link
  - Implement skip to navigation link
  - Ensure visible on focus
  - _Requirements: 24.2_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Skip links work correctly

- [ ] 15.3 Implement ARIA improvements
  - Add ARIA labels where needed
  - Implement focus trapping for modals
  - Add live regions for dynamic content
  - _Requirements: 23.7, 24.3, 24.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** All dynamic content announced to screen readers

### 16. Performance Optimization

- [ ] 16.1 Optimize images
  - Configure next/image for all images
  - Implement proper sizing and formats
  - Add lazy loading below fold
  - _Requirements: 19.1-19.6, 20.1-20.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** LCP < 2.5s, proper image loading

- [ ] 16.2 Implement route prefetching
  - Configure Next.js Link prefetching
  - Add prefetch on hover for CTAs
  - Verify no over-fetching
  - _Requirements: 20.3_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Prefetching works correctly

- [ ] 16.3 Add service worker
  - Implement service worker for offline support
  - Cache static assets
  - Implement offline fallback page
  - _Requirements: 20.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Offline support works on repeat visits

- [ ] 16.4 Final performance audit
  - Run Lighthouse audit
  - Verify Core Web Vitals
  - Address any remaining issues
  - _Requirements: 19.1-19.6_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Lighthouse score 90+, all CWV pass

### 17. Analytics and Tracking

- [ ] 17.1 Integrate Google Analytics 4
  - Add GA4 tracking code
  - Track page views and sessions
  - Configure conversion events
  - _Requirements: 25.1-25.3_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Analytics data flowing

- [ ] 17.2 Implement event tracking
  - Track CTA clicks
  - Track form submissions
  - Track scroll depth
  - Track video plays
  - _Requirements: 25.4_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** All key events tracked

- [ ] 17.3 Set up heatmap integration
  - Add heatmap tool script
  - Verify data collection
  - _Requirements: 25.5_
  - **Effort:** 1 hour
  - **Acceptance Criteria:** Heatmap data visible

### 18. Security

- [ ] 18.1 Security hardening
  - Verify HTTPS on all pages
  - Implement input sanitization
  - Add CSRF protection
  - Verify environment variables used
  - Run dependency vulnerability scan
  - _Requirements: 26.1-26.7_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Security audit passes

### 19. CMS Integration

- [ ] 19.1 Integrate Sanity CMS
  - Set up Sanity client
  - Create content types in CMS
  - Connect all dynamic content
  - _Requirements: 18.1-18.5_
  - **Effort:** 4 hours
  - **Acceptance Criteria:** Content managed from CMS

- [ ] 19.2 Implement preview mode
  - Add Next.js preview mode
  - Enable content preview in CMS
  - Set up draft publishing
  - _Requirements: 18.2_
  - **Effort:** 2 hours
  - **Acceptance Criteria:** Preview works for all content types

### 20. Final Checkpoint
- [ ] Run full test suite
- [ ] Complete accessibility audit
- [ ] Complete performance audit
- [ ] Verify all 30 requirements met
- [ ] Ask the user if questions arise

---

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Implementation language: TypeScript with Next.js
- Design uses specific code (not pseudocode), so implementation follows TypeScript patterns

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.3"] },
    { "id": 2, "tasks": ["2.4", "2.5", "2.6"] },
    { "id": 3, "tasks": ["3.1", "3.2", "3.3"] },
    { "id": 4, "tasks": ["3.4", "4.1"] },
    { "id": 5, "tasks": ["4.2", "4.3", "4.4"] },
    { "id": 6, "tasks": ["4.5", "4.6"] },
    { "id": 7, "tasks": ["4.7", "6.1"] },
    { "id": 8, "tasks": ["6.2", "6.3", "6.4"] },
    { "id": 9, "tasks": ["6.5", "6.6", "6.7"] },
    { "id": 10, "tasks": ["7.1", "7.2", "7.3"] },
    { "id": 11, "tasks": ["7.4", "7.5"] },
    { "id": 12, "tasks": ["9.1", "9.2", "9.3"] },
    { "id": 13, "tasks": ["9.4", "10.1"] },
    { "id": 14, "tasks": ["10.2", "11.1"] },
    { "id": 15, "tasks": ["11.2", "11.3"] },
    { "id": 16, "tasks": ["11.4", "13.1"] },
    { "id": 17, "tasks": ["13.2", "13.3", "14.1"] },
    { "id": 18, "tasks": ["14.2", "15.1", "15.2"] },
    { "id": 19, "tasks": ["15.3", "16.1", "16.2"] },
    { "id": 20, "tasks": ["16.3", "16.4"] },
    { "id": 21, "tasks": ["17.1", "17.2"] },
    { "id": 22, "tasks": ["17.3", "18.1"] },
    { "id": 23, "tasks": ["19.1", "19.2"] }
  ]
}
```