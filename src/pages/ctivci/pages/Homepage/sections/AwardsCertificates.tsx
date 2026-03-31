import { useAssets } from "../../../../../hooks/useAssets";
import { useHomepage } from "../HomepageContext";

export default function AwardsCertificates() {
  const { awards_and_certificates }: any = useHomepage();
  const { icons } = useAssets();

  console.log("awards", awards_and_certificates);

  // ✅ Fallback (same structure as API)
  const fallback = [
    {
      image: "/assets/images/RCIC.webp",
      alt: "RCIC",
    },
    {
      image: "/assets/images/CAPIC.webp",
      alt: "CAPIC",
    },
    {
      image: "/assets/images/top3.webp",
      alt: "top3",
    },
    {
      image: "/assets/images/BBB.webp",
      alt: "bbb",
    },
  ];

  // ✅ Use API or fallback
  const awards =
    awards_and_certificates?.length > 0
      ? awards_and_certificates
      : fallback;

  return (
    <section className="section-space-y">
      <div className="contain">
        {/* Section Header */}

        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
            Awards & Certificates
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-32 bg-gray-300"></div>

            <span className="text-primary text-xl">
              <img src={icons.caleaf} alt="Award" className="w-6" />
            </span>

            <div className="h-[1px] w-32 bg-gray-300"></div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {awards.map((award: any, i: number) => (
            <div key={i} className="flex items-center justify-center group">
              <img
                src={award?.image}
                alt={award?.alt || "award"}
                className="max-h-[140px] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}