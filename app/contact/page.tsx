import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const socials = [
    { 
      name: "WhatsApp Us", 
      url: "https://wa.me/918830614946", 
      baseClass: "bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]",
    },
    { 
      name: "Call Us", 
      url: "tel:+918830614946", 
      baseClass: "bg-[#F97316]/10 border-[#F97316]/30 text-[#F97316] hover:bg-[#F97316] hover:text-black hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
    },
    { 
      name: "Email Us", 
      url: "mailto:growthmaster88@gmail.com", 
      baseClass: "bg-[#E879F9]/10 border-[#E879F9]/30 text-[#E879F9] hover:bg-[#E879F9] hover:text-black hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Contact Links Grid */}
          <div className="glass-card p-6 md:p-12 order-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-[#A1A1AA] mb-8 text-sm md:text-base">Skip the slow contact forms. Reach out to us instantly on your preferred platform.</p>
            
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-between px-6 py-5 rounded-xl border font-bold text-lg transition-all duration-300 ${social.baseClass}`}
                >
                  {social.name}
                  <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-6 md:space-y-8 order-2 lg:pl-8">
            <span className="text-[#82E838] font-bold tracking-wide uppercase text-sm border border-[#82E838]/30 px-3 py-1 rounded-full bg-[#82E838]/10">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading">
              About <span className="lowercase">growth master</span>
            </h1>
            <div className="text-[#A1A1AA] text-base md:text-lg leading-relaxed space-y-6">
              <p>We saw businesses wasting thousands of dollars on beautiful websites that generated zero traffic, and SEO campaigns that promised the world but delivered nothing.</p>
              <p>We built growth master to be different. We only focus on what matters: high-speed web development, risk-free local SEO, and authentic brand photography that converts.</p>
              <p className="text-white font-medium border-l-2 border-[#82E838] pl-4">No forms to fill out. No automated ticketing systems. When you reach out to us, you speak directly to the experts building your business.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}