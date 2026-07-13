export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Lightning-fast, highly converting websites that turn casual visitors into paying customers. Built for speed and scale.",
      color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10", border: "border-[#7C3AED]/50",
    },
    {
      title: "Local SEO",
      description: "Dominate your local market. We rank your business at the top of search results so customers find you before your competitors.",
      color: "text-[#82E838]", bg: "bg-[#82E838]/10", border: "border-[#82E838]/50",
    },
    {
      title: "Business Photography",
      description: "Premium visual storytelling. High-end photos of your business, products, and team that instantly build trust and authority.",
      color: "text-[#F97316]", bg: "bg-[#F97316]/10", border: "border-[#F97316]/50",
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 relative scroll-mt-24">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="mb-4 md:mb-6 font-heading text-4xl md:text-5xl">Our Core <span className="text-[#A1A1AA]">Expertise.</span></h2>
          <p className="text-lg text-[#A1A1AA]">We stripped away the fluff to focus on the three things that actually drive revenue.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className={`glass-card p-8 md:p-10 group cursor-default border-t-2 ${service.border} hover:-translate-y-2 transition-transform duration-500`}>
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}