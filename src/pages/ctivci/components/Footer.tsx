import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";

const footerLinks = [
  {
    title: "IMMIGRATION",
    links: [
      "Our process",
      "Express Entry",
      "PR Cards & Renewals",
      "Federal Skilled Workers Program",
      "Skilled Trades Program",
      "Canadian Experience Class",
    ],
  },
  {
    title: "VISA TO CANADA & UK",
    links: [
      "Student Visa",
      "Family Visas",
      "Business Visas",
      "Investor Visas",
      "Visitor Visas",
      "Work Visa",
      "How to get started?",
    ],
  },
  {
    title: "STUDY IN CANADA OR UK",
    links: [
      "Canada Internships and Co-op Programms",
      "Get admission to a Canadian University or College",
      "Study News Articles",
      "Study to Immigrate",
      "Work & Study in Canada",
    ],
  },
  {
    title: "IMMIGRATION CONSULTANTS IN NORTH YORK TORONTO",
    links: [
      "Same Sex Sponsorship",
      "Children Sponsorship",
      "Inland Spousal Sponsorship",
      "Spousal Sponsorship",
      "Spousal Sponsorship Outside Canada",
      "Family Class Sponsorship",
    ],
  },
];

const Footer = () => {
  const { images } = useAssets();

  return (
    <footer className="bg-gray-50 pt-12 ">
      {/* TOP FOOTER */}
      <div className="contain">
        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-[18px] font-heading text-gray-900 mb-4">
                {column.title}
              </h4>

              <ul className="space-y-1 font-heading text-gray-600">
                {column.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-primary cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Footer */}
        <div className="border-t border-gray-200 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <img src={images.CTIVCI_LOGO} className="w-45 lg:w-55 md:w-45" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white">
              <Facebook size={18} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-pink-500 text-white">
              <Instagram size={18} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-red-600 text-white">
              <Youtube size={18} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-400 text-white">
              <Twitter size={18} />
            </a>
          </div>

          {/* Contact */}
          <div className="text-gray-700 text-center lg:text-right">
            <p>+918058868555</p>
            <p>parashar@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-700 text-white text-center py-3 text-sm">
        All rights reserved@CITVCI.co
      </div>
    </footer>
  );
};

export default Footer;
