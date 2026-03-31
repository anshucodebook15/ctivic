import SectionDescription from "../../../components/SectionDescription";
import { useHomepage } from "../HomepageContext";

const WhyChoose = () => {
  const { whychooseus }: any = useHomepage();

  console.log("whychoose", whychooseus);

  // ✅ MOCK / FALLBACK DATA (same structure as API)
  const fallback = [
    {
      title: "Why Choose CTIVCI?",
      description:
        "Experience matters when it comes to Immigration & Visa.\nWe are a team of independent and licensed professionals, trained to practice the latest immigration law and regulations.",
      caption: "CTIVCI",
      button: {
        uri: "#",
        title: "Download Guide",
      },
      image: null,
      alt: "",
    },
    {
      title: "Team Of Experts",
      image: "/images/experts.png",
      alt: "experts",
    },
    {
      title: "10+ Years of Experience",
      image: "/images/exp.png",
      alt: "exp",
    },
    {
      title: "Fast Visa Approvals",
      image: "/images/approvals.png",
      alt: "approvals",
    },
    {
      title: "Transparent Pricing",
      image: "/images/pricing.png",
      alt: "pricing",
    },
  ];

  // ✅ Use API or fallback
  const data = whychooseus?.length ? whychooseus : fallback;

  // ✅ Split structure
  const section = data[0];
  const cards = data.slice(1);

  return (
    <section className="relative section-space-y overflow-hidden">
      {/* Decorative maple */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <div className="w-[420px] h-[420px] bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative contain grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <SectionDescription
          label={section?.caption || "CTIVCI"}
          highlight=""
          title={section?.title || ""}
          description={
            <>
              {(section?.description || "").split("\n").map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </>
          }
          showButton={false}
          onClick={() => { }}
          buttonText="Download Guide"
        />

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 gap-10 md:gap-12">
          {cards.map((item: any, index: number) => {
            return (
              <div key={index} className="text-center group">
                {/* Icon / Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 flex items-center justify-center rounded-xl transition">
                    <img
                      src={item?.image}
                      alt={item?.alt || ""}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-800 font-semibold text-[16px] md:text-lg">
                  {item?.title}
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