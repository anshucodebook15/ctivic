import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";
import { Link } from "react-router";
import { useHomepage } from "../../../api/apiHooks";

const Header3 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { images } = useAssets();

  // const { data, isLoading, error } = useHomepage();
  const { data } = useHomepage();

  console.log("Client Data", data);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2 top-0" : " py-4 top-10"
      }`}
    >
      <div className="contain flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={images.CTIVCI_LOGO} className="w-45  lg:w-60 md:w-45 " />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex font-heading items-center text-[16px] gap-6 lg:gap-6 xl:gap-8 text-gray-700 font-medium">
            {data?.map((item: any, i: number) => (
              <li key={i} className=" group">
                {/* Main link */}
                <div className="flex items-center gap-1 cursor-pointer py-1 hover:text-primary transition">
                  {item.title}

                  {item?.below && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </div>

                {/* underline */}
                <span className=" left-0 -bottom-2 h-[3px] w-0 bg-primary transition-all group-hover:w-full"></span>

                {/* MEGA MENU */}

                {item?.below && (
                  <div className="contain absolute left-1/2 -translate-x-1/2 top-full w-full bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="grid grid-cols-4 gap-8 p-6">
                      {/* Menu Columns */}
                      <div className="col-span-3 grid grid-cols-3 gap-8">
                        {item?.below.map((sub: any, j: number) => (
                          <div key={j}>
                            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                              {sub.title}
                            </h3>

                            {sub?.below && (
                              <ul className="space-y-1 text-[14px] font-body text-gray-600">
                                {sub?.below.map((child: any, k: number) => (
                                  <li
                                    key={k}
                                    className="cursor-pointer hover:text-primary transition"
                                  >
                                    {child.title}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Image Column */}
                      <div className="col-span-1">
                        <img
                          src={images.family}
                          alt="CTA Image"
                          className="w-full h-auto rounded-sm"
                        />
                      </div>
                    </div>
                  </div>
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
          {data?.map((item: any, i: number) => (
            <li key={i}>
              {/* Level 1 */}
              <div
                className="flex justify-between items-center py-3 text-gray-800 border-b border-b-gray-200 cursor-pointer hover:text-primary"
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
              >
                {item.title}

                {item.below && (
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      openMenu === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                )}
              </div>

              {/* Level 2 */}
              {openMenu === i && item.below && (
                <ul className="pl-4 pt-2">
                  {item.below.map((sub: any, j: number) => (
                    <li key={j}>
                      <div
                        className="flex justify-between py-2 text-sm text-gray-700 cursor-pointer hover:text-primary"
                        onClick={() =>
                          setOpenSubMenu(openSubMenu === j ? null : j)
                        }
                      >
                        {sub.title}

                        {sub.below && (
                          <ChevronRight
                            size={16}
                            className={`transition ${
                              openSubMenu === j ? "rotate-90 text-primary" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Level 3 */}
                      {openSubMenu === j && sub.below && (
                        <ul className="pl-4 text-sm text-gray-600 space-y-2 py-2">
                          {sub.below.map((child: any, k: number) => (
                            <li
                              key={k}
                              className="hover:text-primary cursor-pointer"
                            >
                              {child.title}
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

export default Header3;
