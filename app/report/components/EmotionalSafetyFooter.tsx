"use client";
import React from 'react';
import { Heart } from 'lucide-react';

export function EmotionalSafetyFooter() {
  return (
    <footer className="w-full mt-8 md:mt-12 py-8 md:py-10 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border-t border-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
            <Heart className="w-7 h-7 text-[#565EEB]" strokeWidth={2} />
          </div>
          
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-900" style={{ fontWeight: 500 }}>
              You're not alone. Help is available when you're ready.
            </p>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              If you need immediate support, please contact a crisis helpline in your area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-4">
            <a 
              href="#" 
              className="text-[#565EEB] hover:text-[#4850d4] transition-colors underline underline-offset-4"
            >
              Crisis Resources
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a 
              href="#" 
              className="text-[#565EEB] hover:text-[#4850d4] transition-colors underline underline-offset-4"
            >
              Safety Planning
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a 
              href="#" 
              className="text-[#565EEB] hover:text-[#4850d4] transition-colors underline underline-offset-4"
            >
              Support Groups
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-indigo-200 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Saahas. A safe space for reporting and healing.
        </p>
      </div>
    </footer>
  );
}
