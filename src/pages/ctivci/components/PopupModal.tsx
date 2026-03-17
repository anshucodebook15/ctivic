import { useEffect, useState } from "react";
import ConsultationForm from "./ConsultationForm";
import { useAssets } from "../../../hooks/useAssets";

const PopupModal = () => {
  const { images } = useAssets();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => setOpen(false)}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-[95%] md:w-full grid md:grid-cols-2 animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <img
            src={images.popupimg}
            alt="consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
