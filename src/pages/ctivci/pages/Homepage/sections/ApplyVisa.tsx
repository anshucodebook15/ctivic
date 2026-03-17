import { Send } from "lucide-react";
import SectionDescription from "../../../components/SectionDescription";
import PrimaryButton from "../../../components/Button";

const ApplyVisa = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Visa Type",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      bg: "bg-[#d7e7e8]",
    },
    {
      number: "02",
      title: "Fill Up Your Details",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      bg: "bg-[#e4dbe9]",
    },
    {
      number: "03",
      title: "Submit All Your Documents",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      bg: "bg-[#eadcc6]",
    },
  ];

  return (
    <section className="section-space-y">
      <div className="contain">
        {/* Heading */}



        <SectionDescription
          label="Apply Visa"
          highlight="Easy Steps to Apply for Your Visa"
          title=""
          description={
            <>
              Navigating the visa application process can be complex, but with
              Citiv.ca Immigration, it's simple and hassle-free. Our expert team
              ensures a smooth journey by guiding you through every step.
            </>
          }
          showButton={false}
          onClick={() => { }}
          buttonText="Download Guide"
        />

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`rounded-[30px] ${step.bg} p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition duration-300`}
            >
              {/* Number */}
              <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                {step.number}
              </h3>

              {/* Title */}
              {/* <h4 className="text-lg font-semibold text-gray-800 mb-3">
                {step.title}
              </h4> */}

              {/* Description */}
              {/* <p className="text-gray-600 text-sm leading-relaxed max-w-[220px] mx-auto">
                {step.desc}
              </p> */}

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-heading leading-relaxed  mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          {/* <button className="flex cursor-pointer items-center gap-3 bg-primary text-white px-7 py-3 rounded-md shadow-lg hover:bg-primary-dark transition border-b-4 border-red-800">
            <Send size={18} />
            Apply Now & Get Offers
          </button> */}

          <PrimaryButton onClick={() => { }} icon={Send}>
            Apply Now & Get Offers
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ApplyVisa;
