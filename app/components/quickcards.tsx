// components/QuickAccessCards.tsx
"use client";
import React from "react";

type Card = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon?: React.ReactNode;
  badge?: string;
};

const cards: Card[] = [
  {
    title: "Anonymous Reporting",
    description: "Submit a safe report without signing up. Upload evidence and get a private tracking token.",
    ctaText: "Report Now",
    ctaHref: "/report",
    icon: (
      <svg className="w-11 h-11 p-2 rounded-full bg-[#E6F7F6] text-[#2AAFAF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2L3 6v6c0 5 3.7 9.8 9 12 5.3-2.2 9-7 9-12V6l-9-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Legal & Counseling",
    description: "Find verified lawyers, counselors, and helplines. Get guidance on filing FIRs and rights.",
    ctaText: "Find Help",
    ctaHref: "/legal-aid",
    icon: (
      <svg className="w-11 h-11 p-2 rounded-full bg-[#FFF4E6] text-[#FF8A4B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 9h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    badge: "Verified"
  },
  {
    title: "Awareness & Learning",
    description: "Read articles, take interactive quizzes, and learn how to intervene safely.",
    ctaText: "Explore",
    ctaHref: "/awareness",
    icon: (
      <svg className="w-11 h-11 p-2 rounded-full bg-[#EEF2FF] text-[#6C5CE7]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 19a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function QuickAccessCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <a
            key={idx}
            href={c.ctaHref}
            className="group block bg-white rounded-xl p-6 shadow-sm border border-transparent hover:shadow-lg hover:-translate-y-1 transform transition"
            aria-label={`${c.title} — ${c.ctaText}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{c.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#0F1A2A]">{c.title}</h3>
                  {c.badge && (
                    <div className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                      {c.badge}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm text-[#6B7280]">{c.description}</p>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-[#565eeb] text-white rounded-full text-sm font-semibold group-hover:bg-[#2730df] transition">
                    {c.ctaText}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
