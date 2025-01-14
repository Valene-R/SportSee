/**
 * Display a 404 error page for unmatched routes
 * @returns {JSX.Element} The NotFound component with an error message and a link to return to the home page
 */
const NotFound = () => {
  return (
    <div className="flex h-3/4 flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page non trouvée</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <a href="/" className="mt-6 font-bold text-black hover:underline">
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;
