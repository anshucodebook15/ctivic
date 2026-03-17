import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";
import { Link } from "react-router";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { images } = useAssets();

  const menu = [
    {
      name: "Immigration",
      dropdown: [
        { name: "Express Entry" },
        { name: "Startup Visa" },
        { name: "Self Employed" },
        {
          name: "PNP",
          subMenu: [
            { name: "Alberta Advantage Immigration Program" },
            { name: "British Columbia Provincial Nominee" },
            { name: "Ontario Immigrant Nominee Program" },
            { name: "Saskatchewan Provincial Nominee" },
          ],
        },
        { name: "Live In Caregiver" },
      ],
    },
    { name: "Visa" },
    { name: "Study" },
    { name: "Citizenship" },
    { name: "Sponsorship" },
    { name: "Blogs" },
    { name: "Business" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className="relative z-30">

    <header
      className={`fixed left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2 top-0" : " py-4 top-10"
      }`}
    >
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6"> */}
      {/* <div className="max-w-6xl md:max-w-6xl mx-auto flex items-center justify-between px-6 transition-all duration-300"> */}
      <div className="xl:max-w-7xl lg:max-w-6xl mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={images.CTIVCI_LOGO} className="w-45  lg:w-60 md:w-45 " />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex font-heading items-center text-[16px] gap-6 lg:gap-6 xl:gap-8 text-gray-700 font-medium">
            {menu.map((item, i) => (
              <li key={i} className="relative group ">
                {/* Main link */}
                <div className="flex items-center gap-1 cursor-pointer py-2 hover:text-primary transition">
                  {item.name}

                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </div>

                {/* underline */}
                <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-primary transition-all group-hover:w-full"></span>

                {/* Level 1 dropdown */}
                {item.dropdown && (
                  <ul className="absolute left-0 top-full mt-3 w-60 rounded-sm bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((sub, j) => (
                      <li key={j} className="relative group/sub">
                        <div className="flex justify-between items-center px-5 py-3 text-[16px] hover:bg-gray-50 cursor-pointer">
                          {sub.name}

                          {sub.subMenu && <ChevronRight size={14} />}
                        </div>

                        {/* Level 2 */}
                        {sub.subMenu && (
                          <ul className="absolute left-full top-0 ml-1 w-72 rounded-sm bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition">
                            {sub.subMenu.map((child, k) => (
                              <li
                                key={k}
                                className="px-5 py-3 text-[16px] hover:bg-gray-50 cursor-pointer"
                              >
                                {child.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white  shadow-2xl transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-b-gray-200">
          <span className="font-semibold text-gray-800">Menu</span>

          <X
            size={22}
            className="cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        <ul className="flex flex-col px-6 py-4 font-heading">
          {menu.map((item, i) => (
            <li key={i}>
              {/* Level 1 */}
              <div
                className="flex justify-between items-center py-3 text-gray-800 border-b border-b-gray-200 cursor-pointer hover:text-primary"
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      openMenu === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                )}
              </div>

              {/* Level 2 */}
              {openMenu === i && item.dropdown && (
                <ul className="pl-4 pt-2">
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <div
                        className="flex justify-between py-2 text-sm text-gray-700 cursor-pointer hover:text-primary"
                        onClick={() =>
                          setOpenSubMenu(openSubMenu === j ? null : j)
                        }
                      >
                        {sub.name}

                        {sub.subMenu && (
                          <ChevronRight
                            size={16}
                            className={`transition ${
                              openSubMenu === j ? "rotate-90 text-primary" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Level 3 */}
                      {openSubMenu === j && sub.subMenu && (
                        <ul className="pl-4 text-sm text-gray-600 space-y-2 py-2">
                          {sub.subMenu.map((child, k) => (
                            <li
                              key={k}
                              className="hover:text-primary cursor-pointer"
                            >
                              {child.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
