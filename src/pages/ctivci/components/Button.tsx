import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  icon?: React.ComponentType<{ size: number }>;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const PrimaryButton = ({
  children,
  icon: Icon,
  onClick,
  type = "button",
  className = "",
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex font-heading cursor-pointer font-semibold items-center gap-3 bg-primary text-white px-6 py-3 rounded-sm shadow-lg hover:bg-primary-dark transition border-b-4 border-red-800 w-fit ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default PrimaryButton;
