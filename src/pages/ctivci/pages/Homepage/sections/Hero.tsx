import { Send } from "lucide-react";
import { useAssets } from "../../../../../hooks/useAssets";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// const HeroForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     country: "",
//     phone: "",
//     agree: false,
//   });

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(form);
//   };
//   return (
//     <>
//       <div
//         className={`bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm w-[90%] md:w-2/3 lg:w-2/3 z-5 `}
//       >
//         <h3 className="text-xl font-semibold mb-4">
//           Get Your Imigration Passport Now
//         </h3>

//         {/* <p className="text-gray-600 text-sm mb-6 leading-5">
//           We at Nationwide Visas are determined to make your dream possible.
//         </p> */}

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="forminp"
//             onChange={handleChange}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="forminp"
//             onChange={handleChange}
//           />

//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             className="forminp"
//             onChange={handleChange}
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="IND (+91)"
//             className="forminp"
//             onChange={handleChange}
//           />

//           <label className="flex items-center gap-2 text-sm text-gray-600">
//             <input type="checkbox" name="agree" onChange={handleChange} />I
//             agree to <span className="underline">terms & conditions</span>
//           </label>

//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// const Hero = () => {
//   const { images } = useAssets();
//   return (
//     <section className="py-16 lg:py-20 mt-16 overflow-hidden">
//       <div className="contain grid lg:grid-cols-2 gap-12 ">
//         {/* LEFT CONTENT */}
//         <div className="space-y-6 pt-12 pl-4">
//           {/* <div className="p-2"></div> */}
//           <h1 id="hero-title" className="text-4xl lg:text-5xl md:text-5xl font-semibold leading-tight text-gray-900">
//             Expert Immigration & <br />
//             Citizenship <span className="text-primary">Consultation</span>
//           </h1>

//           <p className="text-gray-600 text-lg max-w-lg">
//             Trusted Immigration Consultant helped over
//             <span className="font-semibold"> 30,000 clients </span>
//             achieve their dreams in
//             <span className="font-semibold"> 18+ years.</span>
//           </p>

//           {/* CTA */}
//           <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition shadow-sm border-b-4 border-red-600 w-fit">
//             <Send size={18} />
//             Book Consultation
//           </button>

//           {/* TRUST BADGES */}
//           <div className="flex flex-wrap items-center gap-8 pt-4">
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
//                 className="h-6"
//               />

//               <div className="text-sm text-gray-700">
//                 <p className="font-semibold">4.8 Reviews</p>
//                 <p className="text-yellow-500 text-xs">★★★★★</p>
//               </div>
//             </div>

//             <div className="text-sm text-gray-700">
//               <p className="font-semibold">Trusted by 32k+ Clients</p>
//               <p className="text-xs text-gray-500">for 22 years</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:justify-end">
//           <HeroForm />
//         </div>
//         <img
//           src={images.torento}
//           className="absolute top-20 right-0 z-2 max-w-180 w-full object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// import { useState, useEffect } from "react";
// import { Send } from "lucide-react";
// import { useAssets } from "../../../hooks/useAssets";

// import { useState, useEffect, useRef } from "react";
// import { Send } from "lucide-react";
// import { gsap } from "gsap";
// import { useAssets } from "../../../hooks/useAssets";

const Hero = () => {
  const { images } = useAssets();

  const titles = [
    "Expert Immigration & Citizenship Consultation",
    "Start Your Journey To Canada Today",
    "Trusted Immigration Consultants Worldwide",
  ];

  const [index, _setIndex] = useState(0);
  const titleRef = useRef(null as any);

  useEffect(() => {
    const el = titleRef.current;

    // let i = 0;

    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      tl.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          el.innerHTML = title;
        },
      })
        .fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        )
        .to({}, { duration: 2 }); // pause between transitions
    });
  }, []);

  return (
    <section className="py-12 mt-16 overflow-hidden">
      <div className="contain grid lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div className="space-y-6 pt-12 pl-4">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-4xl md:text-4xl font-semibold leading-tight text-gray-900"
          >
            {/* {titles[index]} */}
            {titles[index].split("&")[0]}
            <span className="text-primary">
              {titles[index].includes("&") ? titles[index].split("&")[1] : ""}
            </span>
          </h1>

          {/* 
          <h1
          ref={titleRef}
            id="hero-title"
            className="text-4xl lg:text-5xl md:text-5xl font-semibold leading-tight text-gray-900 transition-all duration-500 transform"
          >
            {titles[index].split("&")[0]}
            <br />
            <span className="text-primary">
              {titles[index].includes("&")
                ? titles[index].split("&")[1]
                : ""}
            </span>
          </h1> */}

          <p className="text-gray-600 text-lg max-w-lg">
            Trusted Immigration Consultant helped over
            <span className="font-semibold"> 30,000 clients </span>
            achieve their dreams in
            <span className="font-semibold"> 18+ years.</span>
          </p>

          {/* CTA */}
          <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition shadow-sm border-b-4 border-red-600 w-fit">
            <Send size={18} />
            Book Consultation
          </button>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                className="h-6"
              />

              <div className="text-sm text-gray-700">
                <p className="font-semibold">4.8 Reviews</p>
                <p className="text-yellow-500 text-xs">★★★★★</p>
              </div>
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-semibold">Trusted by 32k+ Clients</p>
              <p className="text-xs text-gray-500">for 22 years</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* <HeroForm /> */}
          <img
            src={images.torento}
            className=" top-20 right-0 z-2 max-w-180 w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
