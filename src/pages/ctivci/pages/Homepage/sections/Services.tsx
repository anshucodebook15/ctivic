import { ArrowRight } from "lucide-react";
import { useHomepage } from "../HomepageContext";

const servicesFallback = [
  {
    title: "Study in Canada",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: "/assets/icons/plan.png",
    alt: "plan icon",
    button: { title: "Apply Now", uri: "#" },
  },
  {
    title: "Citizenship",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: "/assets/icons/stamp.png",
    alt: "stamp icon",
    button: { title: "Apply Now", uri: "#" },
  },
  {
    title: "Sponsorship",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: "/assets/icons/note.png",
    alt: "note icon",
    button: { title: "Apply Now", uri: "#" },
  },
  {
    title: "Work Visa",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: "/assets/icons/world.png",
    alt: "world icon",
    button: { title: "Apply Now", uri: "#" },
  },
];

const Services = () => {
  const { service }: any = useHomepage();

  // ✅ fallback logic
  const servicesData = service?.length ? service : servicesFallback;

  return (
    <section className="section-space-y">
      <div className="contain">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Explore our services.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-[30px] pt-12 pb-10 px-8 text-center transition duration-300 hover:-translate-y-2 shadow-[0_25px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.10)] cursor-pointer"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <div className="w-20 flex items-center justify-center rounded-xl text-primary">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className="w-full"
                    />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-heading leading-relaxed mx-auto">
                {item.description}
              </p>

              {/* Button */}
              {item.button?.title && (
                <button className="mt-4 text-[14px] font-heading text-primary cursor-pointer underline bg-gray-50 py-1 px-6 rounded-full font-medium hover:bg-gray-200 transition">
                  {item.button.title}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="flex justify-center mt-10">
          <button className="flex cursor-pointer underline font-heading items-center gap-2 text-gray-700 hover:text-primary font-medium transition">
            Checkout more
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
