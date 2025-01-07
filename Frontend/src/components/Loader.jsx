/**
 * Display a loading spinner
 * @returns {JSX.Element} The loader component with a spinning SVG dumbbell and animated dots
 */
const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin"
      >
        <rect x="2" y="9" width="4" height="6" fill="#e60000" />
        <rect x="18" y="9" width="4" height="6" fill="#e60000" />
        <rect x="6" y="10" width="12" height="4" fill="#000" />
      </svg>
      {/* Text with animated dots */}
      <div className="mt-4 text-lg font-semibold text-gray-500">
        Chargement
        <span className="mx-1 inline-block animate-bounce">.</span>
        <span className="mx-1 inline-block animate-bounce [animation-delay:0.2s]">.</span>
        <span className="mx-1 inline-block animate-bounce [animation-delay:0.4s]">.</span>
      </div>
    </div>
  );
};

export default Loader;
