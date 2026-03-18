import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer2 = () => {
  const social = [
    { icon: Facebook, link: "#" },
    { icon: Twitter, link: "#" },
    { icon: Instagram, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Youtube, link: "#" },
  ];

  const links = [
    "Privacy Policy",
    "Pricing Terms",
    "Terms of Use",
    "Partnership",
    "Careers",
    "Sitemap",
  ];

  return (
    <footer className="bg-black text-white">
      {/* SOCIAL SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <p className="text-md font-heading tracking-widest text-gray-200 mb-6">
          Connect With Us On Social Media
        </p>

        <div className="flex justify-center md:gap-4 gap-2">
          {social.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="md:w-16 md:h-16 w-14 h-14 flex items-center justify-center bg-white text-gray-700 rounded-full hover:bg-primary hover:text-white hover:scale-105 transition"
              >
                <Icon size={30} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="border-t border-slate-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center text-xs text-gray-200 gap-3">
          {links.map((link, index) => (
            <span key={index} className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition">
                {link}
              </a>

              {index !== links.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
