import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useAssets } from "../../../hooks/useAssets";
import { Link } from "react-router";
// import { useHomepage } from "../../../api/apiHooks";

const Header2 = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const { images } = useAssets();
    
    const menu = [
        {
            name: "Immigration",
            dropdown: [
                {
                    name: "Immigrate to Canada",
                    subMenu: [
                        { name: "USA to Canada Options" },
                        { name: "Immigrate from India" },
                        { name: "Immigrate from Nigeria" },
                    ],
                },
                {
                    name: "Provincial Nominee Programs",
                    subMenu: [
                        { name: "Alberta" },
                        { name: "British Columbia" },
                        { name: "Ontario" },
                    ],
                },
                {
                    name: "Other Federal Economic Programs",
                    subMenu: [
                        { name: "Atlantic Immigration Program" },
                        { name: "Start-Up Visa Program" },
                    ],
                },
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
        // <header className="relative z-30">

        <header
            className={`fixed left-0 w-full z-10 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2 top-0" : " py-4 top-10"
                }`}
        >
            {/* <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6"> */}
            {/* <div className="max-w-6xl md:max-w-6xl mx-auto flex items-center justify-between px-6 transition-all duration-300"> */}
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
                        {menu.map((item, i) => (
                            <li key={i} className=" group">
                                {/* Main link */}
                                <div className="flex items-center gap-1 cursor-pointer py-1 hover:text-primary transition">
                                    {item.name}

                                    {item.dropdown && (
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform duration-200 group-hover:rotate-180"
                                        />
                                    )}
                                </div>

                                {/* underline */}
                                <span className=" left-0 -bottom-2 h-[3px] w-0 bg-primary transition-all group-hover:w-full"></span>

                                {/* MEGA MENU */}
                                {item.dropdown && (
                                    <div className="contain absolute left-1/2 -translate-x-1/2 top-full w-full  bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="grid grid-cols-4 gap-8 p-4">
                                            {/* Columns from menu */}
                                            {item.dropdown.map((sub, j) => (
                                                <div key={j}>
                                                    {/* <h4 className="font-semibold mb-3 text-gray-900">
                            {sub.name}
                          </h4> */}
                                                    <h3 className="text-[16px] font-semibold text-gray-800 mb-2  transition">
                                                        {sub.name}
                                                    </h3>

                                                    {sub.subMenu && (
                                                        <ul className="space-y-1 text-[14px] font-body text-gray-600">
                                                            {sub.subMenu.map((child, k) => (
                                                                <li
                                                                    key={k}
                                                                    className="cursor-pointer hover:text-primary transition"
                                                                >
                                                                    {child.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}

                                            {/* CTA Column */}
                                            <div className="space-y-3">
                                                <img src={images.family} alt="CTA Image" />
                                                {/* <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium">
                          Free Assessment
                        </button>

                        <button className="w-full bg-green-600 text-white py-3 rounded-md font-medium">
                          Express Entry CRS Calculator
                        </button>

                        <button className="w-full bg-teal-600 text-white py-3 rounded-md font-medium">
                          Category-Based Express Entry
                        </button>

                        <button className="w-full bg-blue-700 text-white py-3 rounded-md font-medium">
                          PNP Finder
                        </button> */}
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
                className={`fixed top-0 right-0 h-full w-[320px] bg-white  shadow-2xl transform transition-transform duration-300 z-50 ${mobileOpen ? "translate-x-0" : "translate-x-full"
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
                                        className={`transition ${openMenu === i ? "rotate-180 text-primary" : ""
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
                                                        className={`transition ${openSubMenu === j ? "rotate-90 text-primary" : ""
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

export default Header2;
