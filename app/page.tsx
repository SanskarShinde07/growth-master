import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">Services For You</h2>
            <p className="text-[#A1A1AA] text-lg md:text-xl font-medium max-w-2xl mx-auto">Three simple things. All aimed at getting you more customers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Purple (Rich Style) */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#E879F9]/50 shadow-[0_0_25px_rgba(232,121,249,0.15)] hover:shadow-[0_0_35px_rgba(232,121,249,0.3)] hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-[#E879F9]">
                {/* Code / Website Icon */}
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Website Development
              </h3>
              <p className="text-[#A1A1AA] font-semibold mb-4">A website that actually gets you customers.</p>
              <ul className="list-disc list-inside text-[#A1A1AA] space-y-2">
                <li>Fast to load, simple to use</li>
                <li>Built to turn visitors into phone calls and messages</li>
              </ul>
            </div>

            {/* Box 2: Green (Rich Style) */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#82E838]/50 shadow-[0_0_25px_rgba(130,232,56,0.15)] hover:shadow-[0_0_35px_rgba(130,232,56,0.3)] hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-[#82E838]">
                {/* Location / SEO Icon */}
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Local SEO
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                When someone searches for your service in your area, we make sure your business shows up first — not your competitor's.
              </p>
            </div>

            {/* Box 3: Orange (Rich Style) */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#F97316]/50 shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-[#F97316]">
                {/* Camera / Photography Icon */}
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Professional Photography
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Real photos of your team, office and work — not stock images. People trust what they can actually see.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
              <span className="text-white">Why Work</span> <span className="text-[#888888]">With Us</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Box 1: Purple Bordered */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#E879F9]/50 shadow-[0_0_20px_rgba(232,121,249,0.1)] hover:shadow-[0_0_30px_rgba(232,121,249,0.25)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-[#E879F9]">
                  {/* Camera Icon */}
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Free Professional Photography
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">We photograph your business for free. No stock photos, no generic images — just real photos that make people trust you.</p>
              </div>

              {/* Box 2: Green Bordered */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#82E838]/50 shadow-[0_0_20px_rgba(130,232,56,0.1)] hover:shadow-[0_0_30px_rgba(130,232,56,0.25)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-[#82E838]">
                  {/* Stock Uprise / Trending Chart Icon */}
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Zero Risk Marketing (Pay on ROI)
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">Most agencies charge you every month, results or not. We're different — you don't pay for SEO until it's actually bringing in more customers.</p>
              </div>

              {/* Box 3: Orange Bordered */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border-2 border-[#F97316]/50 shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-[#F97316]">
                  {/* Shield Icon */}
                  <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Honest, Upfront Pricing
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">No confusion, No hidden charges. You'll know exactly what you're paying for and what you're getting, from day one.</p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-tight">Common Questions</h2>
          <div className="space-y-8">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">How does the "Zero Risk SEO" actually work?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">We agree on clear goals before we start. You only start paying once we've actually improved your search ranking and brought in more visitors and leads.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">Is the business photography really free?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">Yes. If you get your website built with us, the photo shoot is included at no extra cost.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">How long does it take to build a website?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">It depends on what you need, but most websites are ready within a few weeks. We'll give you a clear timeline before we start any work.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">You don't have many clients yet — why should I trust you?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">We're a new agency, which means you get more of our attention, not less. And because we're building our name, we take on more of the risk — SEO payment is tied to results, and photography is free either way.</p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 text-center container-custom">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Ready To</span> <span className="text-gradient-orange">Get More Customers?</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Let's talk about your business and how we can help more people find you — no pressure, no obligation.
          </p>
          <a href="https://wa.me/918830614946" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#E879F9] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300">
            Book a Discovery Call <span className="text-xl">➔</span>
          </a>
          <div className="flex justify-center gap-8 mt-8 text-[#A1A1AA] font-semibold tracking-wide">
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-[#82E838]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> No Commitment</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-[#82E838]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> Fast Response</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
