"use client";

import LawyerRegisterForm from "./LawyerRegisterForm";

export default function LawyerRegisterPage() {
  return (
    <div className="min-h-screen flex flex-col  md:flex-row bg-[#f4f3ff]">
      
      {/* Left Side - Illustration Section */}
      <div className="hidden md:flex w-1/2  bg-[#565eeb] text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="max-w-md">
          <h2 className="text-3xl text-center font-semibold mb-4">
            Join Saahas as a Legal Partner
          </h2>
          <p className="text-white/90 text-center leading-relaxed">
            Become a verified lawyer on Saahas and help individuals
            navigate sensitive legal challenges securely and ethically.
          </p>

          <div className="mt-8">
            <img
              src="/images/lawyer_reg.png"
              alt="Lawyer Illustration"
              className="w-full"
            />
          </div>
        </div>

        {/* Soft decorative gradient */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-[#000000] mb-6 text-center">
            Lawyer Registration
          </h1>

          <LawyerRegisterForm />
        </div>
      </div>
    </div>
  );
}
