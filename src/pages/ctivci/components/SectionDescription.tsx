import { Send } from "lucide-react";
import type { JSX } from "react";
import PrimaryButton from "./Button";

interface SectionDescriptionProps {
  label: string;
  title: string;
  highlight: string;
  description: JSX.Element;
  buttonText: string;
  onClick: () => void;
  showButton?: boolean;
}

const SectionDescription = ({
  label,
  title,
  highlight,
  description,
  buttonText,
  onClick,
  showButton = true,
}: SectionDescriptionProps) => {
  return (
    <div className="space-y-5 lg:space-y-2">
      {/* Label */}
      {label && (
        <p className="text-gray-700 font-semibold tracking-wide text-xl md:text-xl ml-1">
          {label}
        </p>
      )}

      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold leading-tight mb-4">
        {highlight && <span className="text-primary">{highlight}</span>} {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-gray-800 font-heading leading-relaxed text-[15px] md:text-[18px] max-w-xl mb-10">
          {description}
        </p>
      )}

      {/* Button */}
      {showButton && buttonText && (
        // <button
        //   onClick={onClick}
        //   className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-md shadow-lg hover:bg-primary-dark transition border-b-4 border-red-800 w-fit"
        // >
        //   <Send size={18} />
        //   {buttonText}
        // </button>

        <PrimaryButton onClick={onClick} icon={Send}>
          {buttonText}
        </PrimaryButton>
      )}
    </div>
  );
};

export default SectionDescription;
