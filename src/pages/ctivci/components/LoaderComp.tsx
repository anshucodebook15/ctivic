const LoaderComp = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin" />

        {/* Optional Text */}
        <p className="text-sm text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoaderComp;
