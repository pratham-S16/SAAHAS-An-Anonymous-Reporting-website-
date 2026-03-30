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
          {/* <div>
            Register as lawyer
          </div> */}
          
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
              {/* <Link 
              href="/lawyer/register" 
              className="text-gray-900 font-bold bg-amber-300 py-2 px-4 rounded-full hover:bg-amber-400 transition-colors"
            >
              Register as Lawyer
            </Link> */}
            <Link 
              href="/" 
              className="text-gray-600 font-bold hover:text-[#060c8f] transition-colors"
            >
              Home
            </Link>
            <Link 
              href=""
               className="text-gray-600 font-bold hover:text-[#060c8f] transition-colors"
            >
              Help
            </Link>
            <Link 
              href="/report/track-token" 
              className="text-gray-600 font-bold hover:text-[#060c8f] transition-colors"
            >
              Track Report
            </Link>
            <Link 
              href="/lawyer/register" 
              className="text-gray-600 border-gray-600 border py-2 px-4 rounded-full hover:text-[#060c8f] 
              hover:border-gray-900 transition-colors"
            >
              Register as Lawyer
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
