"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000452] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Emergency Strip */}
        <div className="bg-[#565EEB] rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-between mb-14">
          <p className="text-white text-lg font-medium text-center md:text-left">
            If you are in immediate danger, contact local emergency services or a trusted helpline.
          </p>

          <a
            href="tel:112"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-[#565EEB] rounded-full font-semibold hover:bg-gray-100 transition"
          >
            📞 Emergency: 112
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <a href="">
              <img src="images/logo-bg.png" alt="Saahas Logo" className="h-20 ml-5 w-auto mb-4" />
            </a>
            <p className="text-sm leading-relaxed">
              A secure, anonymous platform built to help individuals report harassment,
              access legal aid, and learn their rights — safely and without fear.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Report Anonymously</a></li>
              <li><a href="#" className="hover:text-white">Legal Aid</a></li>
              <li><a href="#" className="hover:text-white">Awareness & Education</a></li>
              <li><a href="#" className="hover:text-white">Track Report</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="text-white font-semibold mb-4">Trust & Safety</h4>
            <ul className="space-y-3 text-sm">
              <li>✔ Anonymous by default</li>
              <li>✔ No data selling</li>
              <li>✔ Human-reviewed reports</li>
              <li>✔ Privacy-first design</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Saahas.rights reserved.
          </p>

          <p className="text-gray-400 mt-4 md:mt-0">
            Built with care for privacy, safety, and dignity.
          </p>
        </div>

      </div>
    </footer>
  );
}
