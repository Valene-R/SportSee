import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import clappingImage from "../assets/clapping-hands.png";
import { ROUTES } from "../router/routes";
import { fetchUserData, fetchUserActivityData, fetchUserSessionsData, fetchUserPerformanceData, fetchUserScoreData } from "../services/dataService";
import Loader from "../components/Loader";
import CaloriesIcon from "../components/nutritionCard/CaloriesIcon";
import ProteinsIcon from "../components/nutritionCard/ProteinsIcon";
import CarbsIcon from "../components/nutritionCard/CarbsIcon";
import FatsIcon from "../components/nutritionCard/FatsIcon";
import KeyDataCard from "../components/nutritionCard/KeyDataCard";
import ActivityChart from "../components/charts/ActivityChart";
import SessionsChart from "../components/charts/SessionsChart";
import PerformanceChart from "../components/charts/PerformanceChart";
import ScoreChart from "../components/charts/ScoreChart";

/**
 * Display the user's dashboard with personal data
 * @returns {JSX.Element} The user's dashboard
 */
const Dashboard = () => {
  const { userId } = useParams(); // Extract user ID from the route parameters
  const navigate = useNavigate();

  // State variables for storing API data
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [scoreData, setScoreData] = useState(null);
  const [hasError, setHasError] = useState(false); // Handle API errors

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchData = async () => {
      try {
        const user = await fetchUserData(Number(userId));
        const activity = await fetchUserActivityData(Number(userId));
        const sessions = await fetchUserSessionsData(Number(userId));
        const performance = await fetchUserPerformanceData(Number(userId));
        const score = await fetchUserScoreData(Number(userId));

        // Update state with fetched data
        setUserData(user);
        setActivityData(activity.sessions);
        setSessionData(sessions.getFormattedSessions());
        setPerformanceData(performance.getFormattedPerformance());
        setScoreData(score.percentage);
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
  if ((!userData && !hasError) || !activityData || !sessionData || !performanceData || !scoreData) {
    return <Loader />;
  }

  // Navigate to the other user's dashboard
  const handleNavigate = () => {
    const nextUserId = userId === "12" ? "18" : "12";
    navigate(ROUTES.dashboard(nextUserId));
  };

  return (
    <div className="flex flex-col text-start">
      <div className="mx-auto flex flex-col self-start lg:ml-2">
        <div className="mx-auto flex gap-5 lg:ml-2 xl:mx-0">
          <h1 className="flex text-5xl font-medium">
            <span className="mx-auto mr-3 text-black">Bonjour</span>
            <span
              className="cursor-pointer text-[#FF0000] transition-transform duration-300 hover:scale-110 hover:underline"
              onClick={handleNavigate}
              aria-label="Changer d'utilisateur"
            >
              {userData.firstName}
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-6 flex items-center lg:ml-2 xl:mx-0">
          <p className="text-black-700 items-center text-lg font-normal">Félicitations ! Vous avez explosé vos objectifs hier</p>
          <img src={clappingImage} alt="Applaudissements" className="ml-1 inline-block h-4 w-4" />
        </div>
      </div>

      <div className="mx-auto flex justify-between md:flex-col-reverse lg:flex-row lg:gap-x-2 xl:gap-x-8">
        {/* Charts Section */}
        <section className="mx-auto mt-10 flex flex-col gap-6 xl:mx-0">
          <div className="mt-[37px]">
            <ActivityChart data={activityData} />
          </div>
          <div className="mt-3 flex w-full flex-row gap-8">
            <SessionsChart data={sessionData} />
            <PerformanceChart data={performanceData} />
            <ScoreChart score={scoreData} />
          </div>
        </section>

        {/* Key Data Section */}
        <section className="mt-[77px] flex w-full items-end gap-10 md:flex-row lg:flex-col">
          <KeyDataCard icon={<CaloriesIcon />} value={userData.getFormattedKeyData().calorieCount} label="Calories" bgColor="#FFD1D1" />
          <KeyDataCard icon={<ProteinsIcon />} value={userData.getFormattedKeyData().proteinCount} label="Protéines" bgColor="#D1E8FF" />
          <KeyDataCard icon={<CarbsIcon />} value={userData.getFormattedKeyData().carbohydrateCount} label="Glucides" bgColor="#FFF5CC" />
          <KeyDataCard icon={<FatsIcon />} value={userData.getFormattedKeyData().lipidCount} label="Lipides" bgColor="#FFD6E1" />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
