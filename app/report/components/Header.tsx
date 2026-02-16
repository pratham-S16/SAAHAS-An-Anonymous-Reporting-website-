"use client";
import React from 'react';
import { PanelBottom, Shield } from 'lucide-react';
import Link from 'next/link';


export function Header() {
  return (
    <header className="w-full border-b border-indigo-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Link href="/" >
            <img src="/images/logo-only.png" alt="Saahas Logo" className="h-12 w-auto " />
            </Link>
            {/* <Shield className="w-7 h-7 md:w-8 md:h-8 text-[#565EEB]" strokeWidth={2} />
            <span className="text-xl md:text-2xl text-gray-900" style={{ fontWeight: 600 }}>Saahas</span> */}
          </div>
          
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-[#565EEB] transition-colors"
            >
              Home
            </a>
            <a 
              href=""
               className="text-gray-600 hover:text-[#565EEB] transition-colors"
            >
              Help
            </a>
            <Link 
              href="/report/track-token" 
              className="text-gray-600 hover:text-[#565EEB] transition-colors"
            >
              Track Report
            </Link>
          </nav>

          {/* Mobile menu - simplified */}
          <button className="sm:hidden text-gray-600 hover:text-[#565EEB]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
