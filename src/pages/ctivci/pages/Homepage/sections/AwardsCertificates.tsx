import { useAssets } from "../../../../../hooks/useAssets";

const awards = [
  {
    title: "RCIC CRIC",
    image: "/assets/images/RCIC.webp",
  },
  {
    title: "Top Immigration Consultants Toronto",
    image: "/assets/images/CAPIC.webp",
  },
  {
    title: "BBB Accredited A+",
    image: "/assets/images/BBB.webp",
  },
  {
    title: "Top Choice Award 2024",
    image: "/assets/images/top3.webp",
  },
];

export default function AwardsCertificates() {
  const { icons } = useAssets();
  return (
    <section className="section-space-y">
      <div className="contain">
        {/* Section Header */}

        <div className="text-center mb-14">
          {/* <h2 className="section-title uppercase tracking-wide">
            Awards & Certificates
          </h2> */}

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
          {awards.map((award, i) => (
            <div key={i} className="flex items-center justify-center group">
              <img
                src={award.image}
                alt={award.title}
                className="max-h-[140px] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
