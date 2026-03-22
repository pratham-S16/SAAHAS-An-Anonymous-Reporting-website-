"use client";
import React from 'react';
import { ShieldCheck, Lock, UserCheck } from 'lucide-react';

export function IntroSection() {
  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-6" style={{ fontWeight: 600 }}>
          Report Safely. Stay Anonymous.
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          You do not need to create an account or share personal details.
          Your safety and privacy come first.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#565EEB]" strokeWidth={2} />
            </div>
            <span className="text-sm md:text-base text-gray-700">Anonymous</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#565EEB]" strokeWidth={2} />
            </div>
            <span className="text-sm md:text-base text-gray-700">Encrypted</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-[#565EEB]" strokeWidth={2} />
            </div>
            <span className="text-sm md:text-base text-gray-700">Human-reviewed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
