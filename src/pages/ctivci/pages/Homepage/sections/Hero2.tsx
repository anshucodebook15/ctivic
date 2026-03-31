import { Send } from "lucide-react";
import { useAssets } from "../../../../../hooks/useAssets";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useHomepage } from "../HomepageContext";

const Hero2 = () => {
  const { images } = useAssets();
  const { hero_section }: any = useHomepage();

  // ✅ Fallback (same structure as API)
  const fallback = [
    {
      title: "Expert Immigration & Citizenship Consultation",
      description:
        "Trusted Immigration Consultant helped over 30,000 clients achieve their dreams in 18+ years.",
      image: images.torento5,
      alt: "hero",
    },
    {
      title: "Start Your Journey To Canada Today",
      description:
        "Trusted Immigration Consultant helped over 30,000 clients achieve their dreams in 18+ years.",
      image: images.peopleca,
      alt: "hero",
    },
    {
      title: "Trusted Immigration Consultants Worldwide",
      description: "Trusted experts helping you globally.",
      image: images.canadaheart,
      alt: "hero",
    },
  ];

  // ✅ Use API or fallback
  const slides =
    hero_section?.length > 0
      ? hero_section.map((item: any) => ({
          title: item?.title,
          description: item?.description,
          image: item?.image,
          alt: item?.alt,
        }))
      : fallback;

  const titleRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const descRef = useRef<any>(null);

  useEffect(() => {
    if (!slides.length) return;

    let index = 0;

    const animateSlide = () => {
      const nextIndex = (index + 1) % slides.length;

      gsap.to([titleRef.current, imageRef.current, descRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          titleRef.current.innerHTML = slides[nextIndex].title;
          imageRef.current.src = slides[nextIndex].image;

          if (descRef.current) {
            descRef.current.innerHTML = slides[nextIndex].description;
          }

          gsap.fromTo(
            [titleRef.current, imageRef.current, descRef.current],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            }
          );

          index = nextIndex;
        },
      });
    };

    const interval = setInterval(animateSlide, 3500);
    return () => clearInterval(interval);
  }, [slides]);

  console.log("hero_section", hero_section);

  return (
    <section className="py-12 mt-16 overflow-hidden">
      <div className="contain grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6 pt-12 pl-4">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-4xl md:text-4xl font-semibold leading-tight text-gray-900"
          >
            {slides[0]?.title}
          </h1>

          <p
            ref={descRef}
            className="text-gray-600 text-lg max-w-lg"
          >
            {slides[0]?.description}
          </p>

          <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition shadow-sm border-b-4 border-red-600 w-fit">
            <Send size={18} />
            Book Consultation
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            ref={imageRef}
            src={slides[0]?.image}
            alt={slides[0]?.alt || "hero"}
            className="max-w-[520px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;