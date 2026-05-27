import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts, getAllCategories, getFeaturedBlogPosts } from "@/lib/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateMetadata() {
  return {
    title: "Blog - Insights & Updates",
    description: "Latest insights on software development, mobile apps, digital marketing, and AI from our expert team.",
  };
}

export default function BlogPage() {
  const categories = getAllCategories();
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 opacity-70" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm">
              Our Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              Insights & Ideas
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Expert perspectives on technology, marketing, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-[var(--accent)] rounded-full" />
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-64 lg:h-72 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4" />
                          {post.author.name}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs */}
      <section className="py-12 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Latest Posts
              </h2>
              <TabsList className="bg-white shadow-sm">
                <TabsTrigger value="all">All</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter((p) => p.category === category)
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-white/90 text-[var(--text-primary)] hover:bg-white/90 backdrop-blur-sm">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}