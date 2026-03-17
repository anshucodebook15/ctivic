// import { Send } from "lucide-react";
import SectionDescription from "../../../components/SectionDescription";
import { useAssets } from "../../../../../hooks/useAssets";

const About = () => {
  const { images } = useAssets();
  return (
    <section className="section-space-y">
      <div className="contain grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <SectionDescription
          label="About"
          highlight="Canadian Title Immigration"
          title="& Visa"
          description={
            <>
              {" "}
              Looking for Licensed Canadian Immigration Consultants? RightWay
              Canada Immigration Services is a Top Rated Canadian immigration
              firm with an immigration office located in Toronto, Ontario. Our
              experienced team of{" "}
              <span className="text-primary underline decoration-red-300 underline-offset-4">
                immigration professionals
              </span>{" "}
              along with highly knowledgeable staff assist you with Express
              Entry & PR Applications, OINP & Business Immigration, Family &
              <span className="text-primary underline decoration-red-300 underline-offset-4">
                {" "}
                Spousal Sponsorship
              </span>
              , Work & Study Permits, Visitor & Super Visas, Canadian
              Citizenship & Status Extensions.
            </>
          }
          onClick={() => {}}
          buttonText="Download Guide"
        />

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] w-full max-w-[520px]">
            <img
              src={images.family}
              className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
            />
          </div>

          {/* Floating Side Image */}
          <div className="absolute right-[-20px] md:right-[-30px] lg:right-[-50px] top-8 md:top-10 rounded-xl overflow-hidden shadow-xl hidden sm:block">
            <img
              src={images.caflag}
              className="w-[120px] md:w-[160px] lg:w-[180px] h-[180px] md:h-[220px] lg:h-[260px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
