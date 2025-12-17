"use client";
import React, { useMemo, useState } from "react";

const illustrationUrl = "/images/legalaid.png";


export default function LegalAidSection() {
  const [query, setQuery] = useState("");
  const [filterVerified, setFilterVerified] = useState(false);

  

  return (
    <section className="w-full bg-indigo-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: content */}
        <div className="order-2 lg:order-1">
          <p className="text-sm tracking-widest uppercase text-[#3C34E3] mb-4">Legal Support</p>

          <h3 className="text-3xl md:text-4xl font-semibold text-[#0F1A2A] mb-4">
            Get help from experts in safety & law
          </h3>

          <p className="text-gray-600 mb-6 max-w-xl">
            Free, confidential consultations with vetted legal professionals and trauma-aware counselors.
            We connect you with support tailored to your needs — whether you want legal advice, counselling,
            or information on next steps.
          </p>

          {/* Helpline / quick contact strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-3 bg-[#F3F2FF] text-[#2D1ED8] px-4 py-3 rounded-lg shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" aria-hidden>
                <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.63-3.07A19 19 0 0 1 3.07 9.74 19 19 0 0 1 . 1 1 1.11V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="text-xs font-semibold">24/7 Confidential Helpline</div>
                <div className="text-sm">Call: <span className="font-medium">+91 90000 12345</span></div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button
                onClick={() => setFilterVerified((s) => !s)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-shadow ${
                  filterVerified ? "bg-[#E6F4FF] text-[#1E40AF] shadow" : "bg-white text-gray-700 border border-gray-200"
                }`}
                aria-pressed={filterVerified}
              >
                {filterVerified ? "Showing Verified" : "Show Verified Only"}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-3 items-center mb-8 max-w-xl">
            <label htmlFor="lawyer-search" className="sr-only">Search lawyers</label>
            <div className="flex-1">
              <input
                id="lawyer-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, specialty, or city (e.g., 'FIR', 'Mumbai')"
                className="w-full rounded-xl border border-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9C4FF]"
                type="search"
                aria-label="Search lawyers"
              />
            </div>

            <button
              className="px-4 py-3 rounded-xl bg-[#3C34E3] hover:bg-[#332DC7] text-white font-semibold"
              onClick={() => {
                // placeholder for "Find Lawyers" CTA — navigate or scroll to results
                const el = document.getElementById("lawyer-results");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Find Lawyers
            </button>
          </div>

          {/* Small trust badges / process */}
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="inline-flex items-center gap-2 bg-[#F7F8FF] px-3 py-2 rounded-full text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" className="text-[#3C34E3]" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-medium text-[#0F172A]">Vetted Professionals</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#F7F8FF] px-3 py-2 rounded-full text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#3C34E3]">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-medium text-[#0F172A]">Confidential by default</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
            <img
              src={illustrationUrl}
              alt="Illustration showing a legal professional"
              className="w-full  h-full object-cover block"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}
