import { Send } from "lucide-react";
import { useAssets } from "../../../../../hooks/useAssets";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero2 = () => {
  const { images } = useAssets();

  const slides = [
    {
      title: "Expert Immigration & Citizenship Consultation",
      image: images.torento5,
    },
    {
      title: "Start Your Journey To Canada Today",
      image: images.peopleca,
    },
    {
      title: "Trusted Immigration Consultants Worldwide",
      image: images.canadaheart,
    },
  ];

  const titleRef = useRef<any>(null);
  const imageRef = useRef<any>(null);

  useEffect(() => {
    let index = 0;

    const animateSlide = () => {
      const nextIndex = (index + 1) % slides.length;

      gsap.to([titleRef.current, imageRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          titleRef.current.innerHTML = slides[nextIndex].title;
          imageRef.current.src = slides[nextIndex].image;

          gsap.fromTo(
            [titleRef.current, imageRef.current],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
          );

          index = nextIndex;
        },
      });
    };

    const interval = setInterval(animateSlide, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 mt-16 overflow-hidden">
      <div className="contain grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6 pt-12 pl-4">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-4xl md:text-4xl font-semibold leading-tight text-gray-900"
          >
            {slides[0].title}
          </h1>

          <p className="text-gray-600 text-lg max-w-lg">
            Trusted Immigration Consultant helped over
            <span className="font-semibold"> 30,000 clients </span>
            achieve their dreams in
            <span className="font-semibold"> 18+ years.</span>
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
            src={slides[0].image}
            className="max-w-[520px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
