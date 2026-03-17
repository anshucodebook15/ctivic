
import { useAssets } from "../../../hooks/useAssets";

const services = [
    "Child Sponsorship",
    "Parent Super Visa",
    "Citizenship Application",
    "Proof of Citizenship",
    "Study in Canada",
    "Hiring Foreign Worker",
    "LMIA",
    "Open Work Permit",
];

const SidebarWidget = () => {
    const { icons } = useAssets();
    return (
        <div className="bg-gray-100 p-4 rounded-md mb-6">

            <ul className="space-y-3 font-heading">
                {services.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 pb-3 border-b border-gray-300 last:border-none group cursor-pointer"
                    >
                        <img src={icons.caleaf} alt="Leaf" className="w-5 group-hover:rotate-12 transition-transform" />
                        {/* <Leaf
                            size={18}
                            className="text-red-600 group-hover:rotate-12 transition-transform"
                        /> */}

                        <span className="text-gray-800 text-md font-medium group-hover:text-red-600 transition">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default SidebarWidget;