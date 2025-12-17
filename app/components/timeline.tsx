"use client";
import React from "react";

const illustrationUrl = "/mnt/data/A_2D_digital_design_mockup_of_a_webpage_section_fe.png"; 
// <-- placeholder image from this session; replace with public URL or next/image as needed

type Step = {
  id: number;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Submit Report",
    body: "Quick anonymous form or brief report — no PII required.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18M7 3h10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8v6H8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Upload Evidence",
    body: "Optional photos, audio. Client-side SHA-256 hashes ensure integrity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Receive Token",
    body: "Get a secure tracking token — store it safely to check status later.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12h10v6H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Responder Triage",
    body: "Verified NGOs or legal liaisons review and advise while preserving anonymity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12a9 9 0 10-18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Support & Follow-up",
    body: "Legal help, counselling or escalation only with your consent.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3 7H9l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 22h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#ffffff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest uppercase text-[#000452] mb-3">How it works</p>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#0e0b3d]">A clear, safe process</h3>
          <p className="text-md text-[#475059] max-w-2xl mx-auto mt-3">
            We designed the flow to be simple, private and supportive — here’s what happens after you submit a report.
          </p>
        </div>

        {/* Timeline (desktop horizontal, mobile vertical) */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
            <div className="max-w-6xl mx-auto">
              <div className="h-0.5 bg-[rgba(15,26,42,0.08)] rounded"></div>
            </div>
          </div>

          {/* Steps */}
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch relative">
            {steps.map((s) => (
              <li key={s.id} className="flex flex-col items-center text-center md:text-left md:items-center">
                {/* Step circle */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#e4ffeb] flex items-center justify-center text-[#2aaf2c] shadow-sm">
                    {s.icon}
                  </div>
                </div>

                {/* Connector dot on mobile (small line) */}
                <div className="mt-4 md:mt-6 bg-white p-4 rounded-lg shadow-sm border border-transparent w-full">
                  <h4 className="text-sm font-semibold text-[#131149]">{s.title}</h4>
                  <p className="mt-2 text-sm text-[#6B7280]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Optional: small illustration under timeline for visual balance */}
        <div className="mt-12 hidden md:flex items-center justify-center">
          <img src={illustrationUrl} alt="" aria-hidden className="w-full max-w-[780px] rounded-lg opacity-80" />
        </div>
      </div>
    </section>
  );
}
