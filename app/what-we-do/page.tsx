import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function WhatWeDoPage() {
  const steps = [
    {
      num: "01",
      title: "Business Photography",
      desc: "Before we write a single line of code, we capture the soul of your business. We shoot high-end, professional photos of your team, location, and products. Authenticity is what makes customers trust you.",
      color: "text-[#F97316]",
      bg: "bg-[#F97316]",
      glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    },
    {
      num: "02",
      title: "Making Your Website",
      desc: "Using the stunning photos we just took, we design and build a lightning-fast website. We don't use templates. We custom-code a digital storefront that looks incredibly premium and is designed to turn visitors into buyers.",
      color: "text-[#82E838]",
      bg: "bg-[#82E838]",
      glow: "shadow-[0_0_30px_rgba(130,232,56,0.3)]",
    },
    {
      num: "03",
      title: "Ranking & Getting Leads",
      desc: "A beautiful website is useless if no one sees it. We apply powerful Local SEO strategies to push your website to the top of search results. When people in your area search for your services, you will be the first business they see.",
      color: "text-[#7C3AED]",
      bg: "bg-[#7C3AED]",
      glow: "shadow-[0_0_30px_rgba(124,58,237,0.3)]",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full pt-32 pb-16 md:pt-48 md:pb-24">
        
        <div className="container-custom max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in-up">
            How We Grow <br/> Your Business.
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl animate-fade-in-up animate-delay-100">
            A simple, aggressive, three-step process to dominate your local market.
          </p>
        </div>

        <div className="container-custom max-w-3xl mx-auto relative">
          
          {/* Dynamic Vertical Connecting Line (Visible mainly on Desktop/Tablet, adjusted for mobile) */}
          <div className="absolute left-8 md:left-[3.25rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#F97316] via-[#82E838] to-[#7C3AED] opacity-30 hidden sm:block"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row gap-6 md:gap-10 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                
                {/* Step Number Circle */}
                <div className="flex-shrink-0 z-10 flex items-center justify-start sm:justify-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-heading font-bold text-2xl md:text-3xl text-black ${step.bg} ${step.glow}`}>
                    {step.num}
                  </div>
                </div>

                {/* Step Content */}
                <div className="glass-card p-6 md:p-10 flex-1 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-1 h-full ${step.bg}`}></div>
                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${step.color}`}>
                    {step.title}
                  </h2>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}