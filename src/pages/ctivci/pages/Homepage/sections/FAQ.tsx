import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How Do I Get Started?",
    answer:
      "We are a team of independent and licensed professionals trained to practice the latest immigration law and regulations.",
  },
  {
    question:
      "Who Is Authorized Representative? How Can RightWay Canada Help Me?",
    answer:
      "Authorized representatives are licensed professionals who can provide legal immigration advice and help manage your application.",
  },
  {
    question: "How Many Years of Experience Do You Have?",
    answer:
      "We are a team of independent and licensed professionals, trained to practice the latest immigration law and regulations. We offer effective legal advice to individuals and their families to navigate through complex processes involved in immigrating to Canada.",
  },
  {
    question: "Are Government Application Fees Included in Your Prices?",
    answer:
      "Government application fees are usually separate from service charges depending on the immigration program.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(2);

  const toggle = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="section-space-y relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute left-0 top-1/3 opacity-10">
        <div className="w-60 h-60 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-5 lg:px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
          Frequently ask questions?
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm "
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  {open === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>

                {/* Text */}
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              {open === index && (
                <div className="px-16 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
