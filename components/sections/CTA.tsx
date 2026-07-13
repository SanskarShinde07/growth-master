import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="relative glass-card p-10 md:p-16 lg:p-24 text-center overflow-hidden border-white/10">
          
          {/* Intense Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#F97316]/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
              Let's Build Something <br />
              <span className="text-gradient-orange">Amazing Together.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-[#A1A1AA] mb-10 leading-relaxed">
              Stop settling for average. Partner with an elite agency to elevate your brand, automate your processes, and multiply your revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#F97316]/20 transition-all duration-300 hover:shadow-[#F97316]/40 hover:-translate-y-1"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 backdrop-blur-md"
              >
                Book Discovery Call
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Commitment
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fast Response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}