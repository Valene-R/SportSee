import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import clappingImage from "../assets/clapping-hands.png";
import { ROUTES } from "../router/routes";
import { fetchUserData } from "../services/dataService";
import Loader from "../components/Loader";

/**
 * Display the user's dashboard with personal data
 * @returns {JSX.Element} The user's dashboard
 */
const Dashboard = () => {
  const { userId } = useParams(); // Extract user ID from the route parameters
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchData = async () => {
      try {
        const user = await fetchUserData(Number(userId));
        setUserData(user);
      } catch (err) {
        console.error(`API Error: ${err.message}`);
        setHasError(true); // Trigger redirection on error
      }
    };

    fetchData();
  }, [userId]);

  // Redirect to the NotFound page if userId is invalid
  if (hasError) {
    return <Navigate to="*" replace />;
  }

  // Display loader while waiting for data
  if (!userData && !hasError) {
    return <Loader />;
  }

  // Navigate to the other user's dashboard
  const handleNavigate = () => {
    const nextUserId = userId === "12" ? "18" : "12";
    navigate(ROUTES.dashboard(nextUserId));
  };

  return (
    <div className="m-l text-start">
      <div className="flex items-center gap-5">
        <h1 className="flex text-5xl font-medium">
          <span className="mr-3 text-black">Bonjour</span>
          <span className="text-red-600">{userData.firstName}</span>
        </h1>
        <button
          onClick={handleNavigate}
          className="h-9 rounded bg-gray-500 px-3 py-2 text-xs font-medium text-white shadow-md shadow-black hover:bg-red-600"
          aria-label="Changer d'utilisateur"
        >
          Basculer vers {userId === "12" ? "Cecilia" : "Karl"}
        </button>
      </div>
      <div className="mt-6 flex items-center">
        <p className="text-black-700 items-center text-lg font-normal">Félicitations ! Vous avez explosé vos objectifs hier</p>
        <img src={clappingImage} alt="Applaudissements" className="ml-1 inline-block h-4 w-4" />
      </div>
    </div>
  );
};

export default Dashboard;
