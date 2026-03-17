import { Users, Award, FileCheck, DollarSign } from "lucide-react";
import SectionDescription from "../../../components/SectionDescription";
import { useAssets } from "../../../../../hooks/useAssets";

const WhyChoose = () => {
  const { icons } = useAssets();
  const features = [
    {
      icon: Users,
      title: "Team Of Experts",
      figure: "people",
    },
    {
      icon: Award,
      title: "10+ Years of Experience",
      figure: "badge",
    },
    {
      icon: FileCheck,
      title: "Fast Visa Approvals",
      figure: "verify",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      figure: "pricing",
    },
  ];

  return (
    <section className="relative section-space-y overflow-hidden">
      {/* Decorative maple */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <div className="w-[420px] h-[420px] bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative contain grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        {/* <div className="space-y-6 max-w-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Why Choose <span className="text-primary">Ctivci?</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Experience matters when it comes to Immigration & Visa.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We are a team of independent and licensed professionals, trained to
            practice the latest immigration law and regulations. We offer
            effective legal advice to individuals and their families to navigate
            through complex processes involved in immigrating to Canada.
          </p>
        </div> */}

        <SectionDescription
          label="CTIVCI"
          highlight=""
          title="Why Choose CTIVCI?"
          description={
            <>
              Experience matters when it comes to Immigration & Visa.
              <br />
              We are a team of independent and licensed professionals, trained
              to practice the latest immigration law and regulations. We offer
              effective legal advice to individuals and their families to
              navigate through complex processes involved in immigrating to
              Canada.
            </>
          }
          showButton={false}
          onClick={() => {}}
          buttonText="Download Guide"
        />

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 gap-10 md:gap-12">
          {features.map((item, index) => {
            // const Icon = item.icon;

            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-20  flex items-center justify-center rounded-xl   transition">
                    {/* <Icon
                      size={28}
                      className="text-gray-800 group-hover:text-primary transition"
                    /> */}
                    <img src={icons[item.figure]} alt="" className="w-full" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 font-semibold text-[16px] md:text-lg">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
