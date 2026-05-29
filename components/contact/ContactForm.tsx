"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const projectTypes = [
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
    label: "Email",
    value: "hello@agency.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    sub: "Mon – Fri, 9AM – 6PM EST",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "350 Fifth Avenue, Suite 5100",
    sub: "New York, NY 10118",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri",
    sub: "9:00 AM – 6:00 PM EST",
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

    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      toast.error("Please fill in all required fields");
      return;
    }

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
        toast.success("Message sent! We'll be in touch soon.");
      } else {
        setSubmitStatus("error");
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch {
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
    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

      {/* ── LEFT: info + context ─────────────────────────────────── */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-[#0A1628] mb-3">Get in Touch</h2>
        <p className="text-slate-500 leading-relaxed mb-10">
          Whether you have a specific project in mind or just want to explore what&apos;s possible, we&apos;re happy to help.
        </p>

        <div className="space-y-7">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <info.icon className="w-4 h-4 text-[#0A1628]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                <p className="font-medium text-[#0A1628]">{info.value}</p>
                <p className="text-sm text-slate-400">{info.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: form ──────────────────────────────────────────── */}
      <div className="lg:col-span-3">
        {submitStatus === "success" ? (
          <div className="text-center py-16 px-8 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A1628] mb-2">Message Sent!</h3>
            <p className="text-slate-500 mb-8">
              Thank you for reaching out. We&apos;ll get back to you within one business day.
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="text-sm font-semibold text-[#0A1628] underline underline-offset-4 hover:text-slate-600 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm text-[#0A1628] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30 focus:border-[#00D4FF] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm text-[#0A1628] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30 focus:border-[#00D4FF] transition-colors"
                />
              </div>
            </div>

            {/* Company + Project Type */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm text-[#0A1628] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30 focus:border-[#00D4FF] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                  Service Needed
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleChange("projectType", value || "")}
                >
                  <SelectTrigger
                    id="projectType"
                    className="h-11 border-slate-200 text-sm focus:ring-2 focus:ring-[#00D4FF]/30 focus:border-[#00D4FF]"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your project — what you're building, your timeline, and any specific challenges..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-[#0A1628] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/30 focus:border-[#00D4FF] transition-colors resize-none"
              />
            </div>

            {/* Honeypot */}
            <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            {/* Error */}
            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Please fill in all required fields correctly.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-lg bg-[#0A1628] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#1E3A5F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-400">
              We respect your privacy and will never share your information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}