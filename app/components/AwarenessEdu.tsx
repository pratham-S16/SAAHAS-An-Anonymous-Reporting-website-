"use client";

import React from "react";

export default function AwarenessEducation() {
  return (
    <section className="w-full bg-[#565EEB] py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header */}
        <p className="text-sm tracking-widest uppercase text-[#E0E4FF] mb-4">
          Awareness & Education
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
          Learn. Understand. <br />
          Take Action.
        </h2>

        <p className="text-lg text-[#D6DAFF] max-w-2xl mx-auto mb-14">
          Knowledge is the first step toward safety, empathy, and prevention.
          Explore resources designed for everyone.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#3C34E3] mb-6">
              📘
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Articles & Guides
            </h3>
            <p className="text-[#475569] mb-6">
              Understand consent, laws, and real-world scenarios through simple,
              expert-written content.
            </p>
            <button className="text-[#3C34E3] font-semibold hover:underline">
              Read Articles →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EEF0FF] rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#3C34E3] mb-6">
              🧠
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Interactive Learning
            </h3>
            <p className="text-[#475569] mb-6">
              Quizzes, scenarios, and decision-based learning to help you respond
              safely.
            </p>
            <button className="text-[#3C34E3] font-semibold hover:underline">
              Start Learning →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-full bg-[#EEF0FF] flex items-center justify-center text-[#3C34E3] mb-6">
              🤝
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Bystander Action
            </h3>
            <p className="text-[#475569] mb-6">
              Learn how to intervene safely and support others without putting
              yourself at risk.
            </p>
            <button className="text-[#3C34E3] font-semibold hover:underline">
              Learn How →
            </button>
          </div>
        </div>

       

      </div>
    </section>
  );
}
