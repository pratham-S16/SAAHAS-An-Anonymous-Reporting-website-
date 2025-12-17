"use client";

import React from "react";

export default function WhyThisMatters() {
  return (
    <section className="w-full bg-indigo-100 py-16 px-6">
      {/* Centered container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Top label */}
        <div className="w-full x-auto text-center">
        <p className="text-md tracking-widest uppercase text-[#000452] mb-4">
          Why this matters
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1A2A] leading-tight mb-6">
          Break the silence. <br />
          Change the mindset.
        </h2>
        

        {/* Sub text */}
        <p className="text-lg text-center mx-auto text-[#475059] max-w-3xl mb-12">
          Empowering individuals with the knowledge and resources to stand up
          against harassment — practical guidance, real stories, and steps you
          can take today.
        </p>
        </div>

        {/* Cards */}
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-transparent">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#E6F7F6] flex items-center justify-center text-[#2AAFAF]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 3a6 6 0 00-4 10v1h8v-1a6 6 0 00-4-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0F1A2A]">Myths & Facts</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Debunk common myths and misconceptions about harassment.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-transparent">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EAF4F4] flex items-center justify-center text-[#2AAFAF]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 7h3v7H5v-2a3 3 0 013-3zM16 7h3v7h-5v-2a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0F1A2A]">Survivor Stories</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Read real stories shared by survivors in their own words.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-transparent">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FDF2E8] flex items-center justify-center text-[#F28A3B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12v6a4 4 0 004 4h0a4 4 0 004-4v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0F1A2A]">Do Your Part</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Learn how you can intervene safely and support others.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
