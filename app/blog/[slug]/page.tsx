import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, ArrowLeft, Globe, Link2, Mail } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }
  
  return {
    title: `${post.title} | Agency Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="py-6 bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Hero */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 opacity-50" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                {post.category}
              </Badge>
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="bg-[var(--accent)] text-[var(--primary)] text-sm">
                    {post.author.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{post.author.name}</p>
                  <p className="text-xs">{post.author.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--text-primary)]">Share this article</span>
                    <div className="flex gap-3">
                      <ShareButton 
                        icon={Link2} 
                        label="LinkedIn" 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/blog/${post.slug}`)}`}
                      />
                      <ShareButton 
                        icon={Mail} 
                        label="Twitter" 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`/blog/${post.slug}`)}`}
                      />
                      <ShareButton 
                        icon={Globe} 
                        label="Share" 
                        href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: /blog/${post.slug}`)}`}
                      />
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Author Bio */}
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      About the Author
                    </h3>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback className="bg-[var(--accent)] text-[var(--primary)] text-lg">
                          {post.author.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-[var(--text-primary)]">{post.author.name}</p>
                        <p className="text-sm text-[var(--accent)] mb-2">{post.author.title}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{post.author.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tags */}
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--surface)]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-2 text-xs bg-white/90 text-[var(--text-primary)]">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function ShareButton({ icon: Icon, label, href }: { icon: React.ComponentType<{ className?: string }>; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors text-[var(--text-secondary)]"
      aria-label={`Share on ${label}`}
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}