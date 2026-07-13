"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mb-16 items-start">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="focus-ring rounded-lg w-fit group" aria-label="growth master home">
              <div className="relative w-52 h-14 md:w-64 md:h-16">
                <Image 
                  src="/logo.png" 
                  alt="growth master logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-sm max-w-sm text-[#A1A1AA] leading-relaxed">
              We are a premium digital agency engineering high-end websites, 
              scalable software, and local SEO solutions to drive exponential business growth.
            </p>
          </div>

          {/* Social Links Boxed with Official Brand Colors */}
          <div className="flex flex-col gap-6 md:items-end md:ml-auto">
            <h4 className="text-white font-semibold tracking-wide md:text-right lowercase">our socials</h4>
            
            <div className="flex flex-row flex-wrap gap-4 md:justify-end">
              {/* Instagram Box */}
              <a 
                href="https://www.instagram.com/growth_master.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d62976]/30 bg-[#d62976]/10 hover:bg-[#d62976] hover:border-[#d62976] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(214,41,118,0.4)] transition-all duration-300 text-[#d62976] hover:text-white group focus-ring lowercase font-medium"
              >
                <svg className="w-5 h-5 text-[#d62976] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                instagram
              </a>

              {/* Facebook Box */}
              <a 
                href="https://www.facebook.com/growthmaster.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Connect with us on Facebook" 
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1877F2]/30 bg-[#1877F2]/10 hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)] transition-all duration-300 text-[#1877F2] hover:text-white group focus-ring lowercase font-medium"
              >
                <svg className="w-5 h-5 text-[#1877F2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A1A1AA]">
            &copy; {new Date().getFullYear()} growth master. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors group focus-ring rounded-lg px-2 py-1 lowercase"
          >
            back to top
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}