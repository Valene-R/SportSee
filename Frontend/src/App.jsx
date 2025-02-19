import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Router from "./router/Router";

/**
 * Main application component
 * @returns {JSX.Element} The application layout including the router
 */
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Clean timer on unmount
  }, []);

  if (loading) return <Loader />; // Show loader while loading

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
