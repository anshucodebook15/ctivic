import { Send } from "lucide-react";
import { useAssets } from "../../../../../hooks/useAssets";
import PrimaryButton from "../../../components/Button";

const FormMigrate = () => {
  const { images } = useAssets();
  return (
    <section className="section-space-y">
      <div className="contain grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src={images.cagirl}
            className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          {/* RED DIVIDER */}
          <div className="hidden lg:block absolute -left-8 top-12 h-[260px] w-[4px] bg-primary rounded"></div>

          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2 font-heading">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Migrate
              </h3>

              <p className="text-gray-600 text-lg">
                Canada welcome your family
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6 font-heading">
              {/* Line 1 */}
              <div className="flex flex-wrap items-end gap-x-3 gap-y-4 text-[18px] text-gray-800 ">
                <span>I am</span>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex-1 min-w-[180px] border-b text-[16px] border-gray-400 focus:border-primary outline-none bg-transparent pb-1"
                />

                <span>from</span>

                <input
                  type="text"
                  placeholder="Select country"
                  className="flex-1 min-w-[180px] border-b text-[16px] border-gray-400 focus:border-primary outline-none bg-transparent pb-1"
                />

                <span>want to migrate canada.</span>
              </div>

              {/* Line 2 */}
              <div className="text-[18px] text-gray-800">
                You can connect me at
              </div>

              {/* Phone */}
              <div className=" text-[18px] flex flex-wrap items-end gap-x-4 gap-y-2 text-lg">
                <span className="font-semibold">IN +91</span>

                <input
                  type="text"
                  placeholder="Mobile number (WhatsApp number)"
                  className="flex-1 min-w-[220px] text-[16px] border-b border-gray-400 focus:border-primary outline-none bg-transparent pb-2"
                />
              </div>

              {/* Email */}
              <div className="flex flex-wrap items-end gap-x-3 gap-y-4 text-lg">
                <span className="font-semibold">Email</span>

                <input
                  type="email"
                  placeholder="Email Id"
                  className="flex-1 min-w-[220px] text-[16px] border-b border-gray-400 focus:border-primary outline-none bg-transparent pb-2"
                />
              </div>

              {/* Terms */}
              <p className="text-sm text-gray-500">
                I agree to the{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Terms and Conditions
                </span>
              </p>

              {/* CTA BUTTON */}
              {/* <button
                type="submit"
                className="flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-md shadow-lg hover:bg-red-700 transition border-b-4 border-red-800"
              >
                <Send size={18} />
                Get Free Consultation Now
              </button> */}

              <PrimaryButton type="submit" onClick={() => {}} icon={Send}>
                Get Free Consultation Now
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormMigrate;
