"use client";

import React from "react";

export default function TrustTransparency() {
  return (
    <section className="w-full bg-[#F3F4FF] py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header */}
        <p className="text-sm tracking-widest uppercase text-[#565EEB] mb-4">
          Trust & Transparency
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-4">
          Your Safety Comes First
        </h2>

        <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-14">
          Built with privacy-by-design, ethical handling, and complete user control
          at every step.
        </p>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#565EEB] mb-5">
              🛡️
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              Anonymous by Default
            </h3>
            <p className="text-[#475569]">
              No login required. No personal details are collected unless you
              explicitly choose to share them.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#565EEB] mb-5">
              🔒
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              Secure & Encrypted
            </h3>
            <p className="text-[#475569]">
              Sensitive data is protected with encryption. Evidence is hashed to
              prevent tampering or misuse.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#565EEB] mb-5">
              ⚖️
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              Human-Reviewed Decisions
            </h3>
            <p className="text-[#475569]">
              No automated punishments. Every report is reviewed by trained and
              verified human partners.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#565EEB] mb-5">
              🧾
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              You Stay in Control
            </h3>
            <p className="text-[#475569]">
              Track reports using secure tokens. You decide if, when, and how
              anything is escalated.
            </p>
          </div>

        </div>

        {/* Trust Assurance Strip */}
        <div className="mt-16 bg-[#565EEB] rounded-xl py-8 px-6 text-center">
          <p className="text-white text-lg font-medium max-w-3xl mx-auto">
            We do not sell data. We do not profile users. We do not track identities.
          </p>

          <div className="mt-4 flex justify-center gap-6 text-white text-sm font-semibold">
            <span>✔ Privacy</span>
            <span>✔ Consent</span>
            <span>✔ Control</span>
          </div>
        </div>

      </div>
    </section>
  );
}
