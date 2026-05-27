import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { portfolioItems } from '@/lib/data/portfolio';
import { blogPosts } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const servicePages = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const portfolioPages = portfolioItems.map(p => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const blogPages = blogPosts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages];
}