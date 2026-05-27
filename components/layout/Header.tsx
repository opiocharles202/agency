"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-surface-alt shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-primary font-bold text-sm">D</span>
            </div>
            <span className="hidden sm:inline">Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-accent"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-surface-alt hover:text-accent h-10 w-10">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-surface p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-surface-alt">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">D</span>
                    </div>
                    <span>Agency</span>
                  </Link>
                  <SheetClose>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="w-6 h-6" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                          pathname === link.href || pathname.startsWith(link.href + "/")
                            ? "bg-accent/10 text-accent"
                            : "text-text-secondary hover:bg-surface-alt hover:text-text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-surface-alt">
                  <Button className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}