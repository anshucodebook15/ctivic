import { PhoneCall } from "lucide-react";

const TopBar = () => {
  const links = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Forum", url: "#" },
    { name: "News", url: "#" },
    { name: "Contact", url: "#" },
  ];

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 text-gray-600 text-xs">

      <div className="contain px-4 md:px-8">

        {/* MOBILE */}
        <div className="grid grid-cols-2 md:hidden py-2 gap-2 text-[12px]">

          {/* Row 1 */}
          <div className="flex items-center justify-center gap-2">
            <PhoneCall size={14} />
            <span className="font-medium text-gray-700">
              +1 (514) 937-9445
            </span>
          </div>

          {/* <div className="flex items-center justify-center text-gray-500 text-[11px]">
            Toll-free
          </div> */}

          {/* Row 2 */}
          {/* <div className="flex items-center justify-center text-gray-500 text-[11px]">
            Canada & US
          </div> */}

          <div className="flex items-center justify-center font-medium text-gray-700">
            +1 (888) 947-9445
          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between h-8 text-[13px]">

          {/* Left */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700 flex items-center">
              <PhoneCall size={14} className="mr-2" />
              +1 (514) 937-9445
            </span>

            <span className="text-gray-400">
              or Toll-free (Canada & US)
            </span>

            <span className="font-medium text-gray-700">
              +1 (888) 947-9445
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 font-body">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:text-gray-900 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopBar;