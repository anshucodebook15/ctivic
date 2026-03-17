import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hushiar Canada",
    time: "1 week ago",
    text: "Experience was really good. Mannu dutta Sir guide me very well.",
  },
  {
    name: "Rudhar Singh",
    time: "1 week ago",
    text: "Experience was really good. Mannu dutta Sir guide me very well.",
  },
  {
    name: "Avinash Kumar",
    time: "1 week ago",
    text: "Experience was really good. Mannu dutta Sir guide me very well.",
  },
];

const Testimonial = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="bg-gray-50 section-space-y">
      <div className="contain">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          See What are Client Say’s?
        </h2>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[380px] lg:min-w-[420px] bg-white rounded-2xl p-6 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center font-semibold">
                      H
                    </div>

                    <div className="">
                      <p className="font-semibold text-gray-900 ">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-[-0.2rem]">
                        {item.time}
                      </p>
                    </div>
                  </div>

                  {/* Google Icon */}
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                  />
                </div>

                <div className="ml-15">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
