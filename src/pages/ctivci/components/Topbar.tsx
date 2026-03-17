import { PhoneCall } from "lucide-react";



const TopBar = () => {
  const links = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Forum", url: "#" },
    { name: "News", url: "#" },
    // { name: "Client Portal", url: "#" },
    { name: "Contact", url: "#" },
    // { name: "Advertise", url: "#" },
  ];

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 text-xs text-gray-600">
      <div className="contain px-10 flex items-center justify-between h-8 text-[13px] ">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 flex items-center"> <PhoneCall size={14} className="mr-2" />+1 (514) 937-9445</span>

          <span className="text-gray-400">or Toll-free (Canada & US)</span>

          <span className="font-medium text-gray-700">+1 (888) 947-9445</span>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center font-regular gap-4 font-body">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="hover:text-gray-900 transition font-regular font-body"
            >
              {link.name}
            </a>
          ))}

          {/* <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
            <Globe size={14} />
            <span>English</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
