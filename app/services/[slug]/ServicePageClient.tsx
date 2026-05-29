"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

interface ServicePageClientProps {
  faqs: Faq[];
  accentClass: string;
  gradientClass: string;
}

export function ServicePageClient({ faqs, accentClass, gradientClass }: ServicePageClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border bg-white transition-all duration-300 ${
              isOpen ? "border-slate-300 shadow-md" : "border-slate-100 shadow-sm"
            }`}
          >
            <button
              id={`faq-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`font-semibold text-[#0A1628] text-sm sm:text-base ${isOpen ? accentClass : ""} transition-colors`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? `rotate-180 ${accentClass}` : "text-slate-400"
                }`}
              />
            </button>

            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-${i}`}
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
