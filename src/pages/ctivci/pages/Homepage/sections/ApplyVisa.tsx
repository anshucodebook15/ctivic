import { Send } from "lucide-react";
import SectionDescription from "../../../components/SectionDescription";
import PrimaryButton from "../../../components/Button";
import { useHomepage } from "../HomepageContext";

const ApplyVisa = () => {
  const { apply_visa }: any = useHomepage();

  console.log("apply_visa", apply_visa);

  // ✅ Fallback (same structure as API)
  const fallback = [
    {
      title: "Easy Steps to Apply for Your Visa",
      description:
        "Navigating the visa application process can be complex, but with Citiv.ca Immigration, it's simple and hassle-free.",
      caption: "Apply Visa",
      button: {
        uri: "#",
        title: "Apply Now & Get Offers",
      },
    },
    {
      title: "Choose Your Visa Type",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      title: "Fill Up Your Details",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      title: "Submit All Your Documents",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
  ];

  // ✅ Use API or fallback
  const data = apply_visa?.length ? apply_visa : fallback;

  // ✅ Split
  const section = data[0];
  const cards = data.slice(1);

  // ✅ BG colors (FIXED from mock)
  const bgColors = ["bg-[#d7e7e8]", "bg-[#e4dbe9]", "bg-[#eadcc6]"];

  return (
    <section className="section-space-y">
      <div className="contain">
        {/* Heading */}
        <SectionDescription
          label={section?.caption || "Apply Visa"}
          highlight={section?.title || ""}
          title=""
          description={<>{section?.description}</>}
          showButton={false}
          onClick={() => {}}
          buttonText="Download Guide"
        />

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((step: any, i: number) => (
            <div
              key={i}
              className={`rounded-[30px] ${
                bgColors[i % bgColors.length]
              } p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition duration-300`}
            >
              {/* Number */}
              <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                {String(i + 1).padStart(2, "0")}
              </h3>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                {step?.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-heading leading-relaxed mx-auto">
                {step?.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <PrimaryButton
            onClick={() => {
              const link =
                section?.button?.uri?.replace("internal:", "") || "#";
              if (link !== "#") window.open(link, "_blank");
            }}
            icon={Send}
          >
            {section?.button?.title || "Apply Now & Get Offers"}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ApplyVisa;
