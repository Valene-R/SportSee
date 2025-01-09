import { useState } from "react";
import { mockUsers } from "../mockData/mockUsers";
import clappingImage from "../assets/clapping-hands.png";

/**
 * Display the user's dashboard with personal data
 * @returns {JSX.Element} The dashboard component
 */
const Dashboard = () => {
  const [currentUserId, setCurrentUserId] = useState("12"); // Default to user "12"
  const userData = mockUsers[currentUserId]?.data; // Get the current user's data

  // Handle user switch
  const handleSwitchUser = () => {
    setCurrentUserId((prevUserId) => (prevUserId === "12" ? "18" : "12"));
  };

  // Handle invalid user ID
  if (!userData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold text-red-500">Erreur: Utilisateur non trouvé</p>
      </div>
    );
  }

  return (
    <div className="m-l text-start">
      <div className="flex items-center gap-5">
        <h1 className="flex text-5xl font-medium">
          <span className="mr-3 text-black">Bonjour</span>
          <span className="text-red-600">{userData.userInfos.firstName}</span>
        </h1>
        <button
          onClick={handleSwitchUser}
          className="h-9 rounded bg-gray-500 px-3 py-2 text-xs font-medium text-white shadow-md shadow-black hover:bg-red-600"
          aria-label="Changer d'utilisateur"
        >
          Basculer vers {currentUserId === "12" ? "Cecilia" : "Karl"}
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
