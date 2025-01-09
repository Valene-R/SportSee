import { useParams, useNavigate } from "react-router-dom";
import { mockUsers } from "../mockData/mockUsers";
import clappingImage from "../assets/clapping-hands.png";
import { ROUTES } from "../router/routes";

/**
 * Display the user's dashboard with personal data
 * @returns {JSX.Element} The dashboard component
 */
const Dashboard = () => {
  const { userId } = useParams(); // Extract user ID from the route parameters
  const navigate = useNavigate();
  // Convert userId to number for comparison with mock data
  const userData = mockUsers.find((user) => user.data.id === Number(userId))?.data;

  // Display an error message if user ID is invalid
  if (!userData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold text-red-500">Erreur: Utilisateur non trouvé</p>
      </div>
    );
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
          <span className="text-red-600">{userData.userInfos.firstName}</span>
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
