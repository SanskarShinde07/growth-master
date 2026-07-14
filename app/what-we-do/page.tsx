import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 container-custom max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-white tracking-tight">How We Get you more Customers</h1>
        
        <div className="space-y-12">
          
          {/* Step 01: Purple Styling Restored */}
          <div className="group relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-start glass-card p-8 md:p-14 rounded-3xl border border-white/10 hover:border-[#E879F9]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,121,249,0.1)]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E879F9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/30 transition-all duration-500 md:w-1/4 shrink-0">
              01
            </div>
            <div className="md:w-3/4 relative z-10 pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white group-hover:text-[#E879F9] transition-colors duration-300">Free Proffesional Photography</h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-medium">
                Before we build anything, we visit your business and take professional photos — your team, your office, your products. Real photos build trust faster than words ever can.
              </p>
            </div>
          </div>

          {/* Step 02: Green Styling Restored */}
          <div className="group relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-start glass-card p-8 md:p-14 rounded-3xl border border-white/10 hover:border-[#82E838]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(130,232,56,0.1)]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#82E838]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/30 transition-all duration-500 md:w-1/4 shrink-0">
              02
            </div>
            <div className="md:w-3/4 relative z-10 pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white group-hover:text-[#82E838] transition-colors duration-300">Making Your Website</h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-medium">
                We build you a aesthetic and Mobile-first website — made specifically for your ideal customer . Every part of it is designed to turn visitors into paying customers.
              </p>
            </div>
          </div>

          {/* Step 03: Orange Styling Restored */}
          <div className="group relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-start glass-card p-8 md:p-14 rounded-3xl border border-white/10 hover:border-[#F97316]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/30 transition-all duration-500 md:w-1/4 shrink-0">
              03
            </div>
            <div className="md:w-3/4 relative z-10 pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white group-hover:text-[#F97316] transition-colors duration-300">Ranking & Getting Customers</h2>
              <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-medium">
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