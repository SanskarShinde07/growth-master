import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 container-custom max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white tracking-tight">How We Get You More Customers</h1>
        
        <div className="space-y-16">
          
          {/* Step 01: Purple Styling with Icon */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-[#E879F9] flex items-center justify-center text-2xl md:text-3xl font-bold text-black mt-2 shadow-[0_0_20px_rgba(232,121,249,0.3)]">
              01
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border-2 border-[#E879F9]/50 shadow-[0_0_25px_rgba(232,121,249,0.1)] w-full hover:shadow-[0_0_35px_rgba(232,121,249,0.25)] transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#E879F9] flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Free Professional Photography
              </h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
                Before we build anything, we visit your business and take professional photos — your team, your office, your products. Real photos build trust faster than words ever can.
              </p>
            </div>
          </div>

          {/* Step 02: Green Styling with Icon */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-[#82E838] flex items-center justify-center text-2xl md:text-3xl font-bold text-black mt-2 shadow-[0_0_20px_rgba(130,232,56,0.3)]">
              02
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border-2 border-[#82E838]/50 shadow-[0_0_25px_rgba(130,232,56,0.1)] w-full hover:shadow-[0_0_35px_rgba(130,232,56,0.25)] transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#82E838] flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Making Your Website
              </h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
                We build you an aesthetic and mobile-first website — made specifically for your ideal customer. Every part of it is designed to turn visitors into paying customers.
              </p>
            </div>
          </div>

          {/* Step 03: Orange Styling with Icon */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-[#F97316] flex items-center justify-center text-2xl md:text-3xl font-bold text-black mt-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              03
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border-2 border-[#F97316]/50 shadow-[0_0_25px_rgba(249,115,22,0.1)] w-full hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F97316] flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ranking & Getting Customers
              </h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
                We work on your Google presence so that when someone nearby searches for your service, your business is the first one they see — and the first one they call.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}