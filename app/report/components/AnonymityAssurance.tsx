"use client";
import React from 'react';
import { Eye, Key } from 'lucide-react';

export function AnonymityAssurance() {
  return (
    <section className="w-full py-4 md:py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border border-indigo-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6 text-[#565EEB]" strokeWidth={2} />
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <p className="text-gray-900" style={{ fontWeight: 500 }}>
                No name, email, or identity is collected.
              </p>
              <p className="text-gray-600">
                You'll receive a private tracking token to check your report status anytime.
              </p>
            </div>

            <div className="flex-shrink-0 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Key className="w-6 h-6 text-[#565EEB]" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
