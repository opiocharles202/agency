"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const projectTypes = [
  "Select project type",
  "Software Development",
  "Mobile App",
  "Digital Marketing",
  "AI Solutions",
  "Content Creation",
  "Other",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@agency.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon - Fri, 9AM - 6PM EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "350 Fifth Avenue, Suite 5100",
    address: "New York, NY 10118",
    description: "Visit by appointment",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Fri",
    description: "9:00 AM - 6:00 PM EST",
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
        toast.success("Message sent successfully! We'll be in touch soon.");
      } else {
        setSubmitStatus("error");
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, we&apos;re here to help.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    {info.title}
                  </p>
                  <p className="text-sm text-[var(--text-primary)]">
                    {info.value}
                  </p>
                  {"address" in info && (
                    <p className="text-sm text-[var(--text-primary)]">
                      {info.address}
                    </p>
                  )}
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {info.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-3">
        <Card className="border-none shadow-xl">
          <CardContent className="p-6 lg:p-8">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[var(--text-primary)]">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[var(--text-primary)]">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-[var(--text-primary)]">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-[var(--text-primary)]">
                    Project Type
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => handleChange("projectType", value || "")}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.slice(1).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[var(--text-primary)]">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="mt-1.5 min-h-[150px]"
                    required
                  />
                </div>

                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Please fill in all required fields correctly.
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[var(--accent)] text-[var(--primary)] hover:bg-[var(--accent)]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}