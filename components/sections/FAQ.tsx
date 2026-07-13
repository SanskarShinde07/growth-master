"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "How does the 'Zero Risk SEO' actually work?",
      answer: "We structure our SEO agreements based on performance milestones. We establish baseline metrics, and our payment is tied directly to the growth in high-intent traffic and leads we generate for your business.",
    },
    {
      question: "Is the business photography really free?",
      answer: "Yes! If you are a local business signing up for a custom website build, we include a professional photo shoot of your premises, team, and products at no extra cost to ensure your site looks world-class.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "A standard, high-performance website takes approximately 3 to 5 weeks from the initial kickoff to the final launch, depending on the complexity of the design.",
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex items-center justify-between p-6">
                <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                <div className={`text-[#A1A1AA] transition-transform ${openIndex === index ? "rotate-45" : ""}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </div>
              </div>
              <div className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#A1A1AA] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}