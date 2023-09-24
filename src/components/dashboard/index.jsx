import Statistiques from "../statistiques";
import "./style.css";
import DailyActivities from "../recharts/dailyActivities";
import AverageSessionTime from "../recharts/averageSessionTime";
import RadarChartComponent from "../recharts/radar";
import RadialObjective from "../recharts/radialObjective";
import {
  getUserInfos,
  getDailyActivity,
  getAverageSession,
  getActivityTypes,
} from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Dashboard = () => {
  //useState pour récupérer les infos de l'utilisateur
  const [userInfos, setUserInfos] = useState({});
  const [dailyActivities, setDailyActivities] = useState({});
  const [averageSessionTime, setAverageSessionTime] = useState({});
  const [activityTypes, setActivityTypes] = useState( {});

  //Récupération de l'id de l'utilisateur présent dans l'url
  const params = useParams();
  //Il faut être sûr que id est un chiffre: parseInt
  const id = parseInt(params.id);

  //Appel de l'api pour récupérer les infos de l'utilisateur
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfoResponse = await getUserInfos(id);
        if (userInfoResponse){
          setUserInfos(userInfoResponse);
        }

        const dailyActivityResponse = await getDailyActivity(id);
        if (dailyActivityResponse) {
          setDailyActivities(dailyActivityResponse);
        }

        const activityTypesResponse = await getActivityTypes(id);
        if (activityTypesResponse) {
            setActivityTypes(activityTypesResponse);
        }

        const averageSessionResponse = await getAverageSession(id);
        if (averageSessionResponse) {
            setAverageSessionTime(averageSessionResponse);
        }
      } catch (error) {
        window.location.href = "/404";
      }
    };

    fetchData().then(() => {console.log("Data fetched")});
  }, [id]);
  return (
    <div className="dashboard">
      {userInfos.firstName && (
        <>
          <h1>
            Bonjour{" "}
            <b className="dashboardTitleFirstname">
              {userInfos.firstName}
            </b>
          </h1>
          <h4 style={{ fontWeight: 400 }}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h4>

          <div className="statistiques">
            <div className="leftStatistiques">
              <div className="leftStatistiquesTop containerChart">
                <DailyActivities value={dailyActivities} />
              </div>
              <div className="leftStatistiquesDown">
                <div className="containerChart">
                  <AverageSessionTime value={averageSessionTime} />
                </div>
                <div className="containerChart">
                  <RadarChartComponent value={activityTypes} />
                </div>
                <div className="containerChart">
                  <RadialObjective value={userInfos.score} />
                </div>
              </div>
            </div>
            <div className="rightStatistiques">
              <Statistiques
                name={"Calories"}
                value={userInfos.calorieCount}
                unit={"kCal"}
              />
              <Statistiques
                name={"Proteines"}
                value={userInfos.proteinCount}
                unit={"g"}
              />
              <Statistiques
                name={"Glucides"}
                value={userInfos.carbohydrateCount}
                unit={"g"}
              />
              <Statistiques
                name={"Lipides"}
                value={userInfos.lipidCount}
                unit={"g"}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
