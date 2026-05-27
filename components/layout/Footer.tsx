"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Link2, GitBranch } from "lucide-react";

const servicesLinks = [
  { href: "/services/software", label: "Software Development" },
  { href: "/services/mobile", label: "Mobile Apps" },
  { href: "/services/marketing", label: "Marketing" },
  { href: "/services/ai", label: "AI Solutions" },
  { href: "/services/content", label: "Content Creation" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const resourcesLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://twitter.com", icon: Send, label: "Twitter" },
  { href: "https://linkedin.com", icon: GitBranch, label: "LinkedIn" },
  { href: "https://github.com", icon: Link2, label: "GitHub" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-sm">D</span>
              </div>
              <span>Agency</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-sm">
              We build scalable digital products that help businesses grow. From software
              development to AI solutions, we bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@agency.com"
                className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>hello@agency.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3 text-white">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  required
                />
                <Button type="submit" className="w-full" variant="secondary">
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}