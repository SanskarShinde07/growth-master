export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Free Business Photography",
      description: "When you partner with us for web development, we provide a free, high-end commercial photo shoot for your business. Stock photos kill conversions; authentic photos build trust.",
      color: "text-[#E879F9]", glow: "group-hover:shadow-[0_0_30px_rgba(232,121,249,0.15)]", borderLine: "from-[#E879F9]/50 to-transparent"
    },
    {
      title: "Zero Risk SEO (Pay on ROI)",
      description: "Stop paying retainers for zero results. With our local SEO framework, our incentives are perfectly aligned. You don't pay us until you actually see the return on investment.",
      color: "text-[#82E838]", glow: "group-hover:shadow-[0_0_30px_rgba(130,232,56,0.15)]", borderLine: "from-[#82E838]/50 to-transparent"
    },
    {
      title: "Honest, Upfront Pricing",
      description: "No hidden fees, no complex tech jargon to confuse you. We provide clear deliverables and absolute transparency on pricing from day one.",
      color: "text-[#F97316]", glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]", borderLine: "from-[#F97316]/50 to-transparent"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
            Why Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className={`relative glass-card p-8 md:p-10 group overflow-hidden ${reason.glow}`}>
              {/* Mild white light way line at the top */}
              <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${reason.borderLine}`}></div>
              <div className={`absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b ${reason.borderLine} opacity-50`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 ${reason.color} transition-transform duration-300 group-hover:translate-x-1`}>
                  {reason.title}
                </h3>
                <p className="text-[#A1A1AA] text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}