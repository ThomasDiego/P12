const apiUrl = "http://localhost:3000";
import {useMock} from "./config";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "./mock/data"

import {ActivityTypesModel, DailyActivitiesModel, SessionsTimeModel, UserInfosModel} from "./modelApi";

/**
 * Get user infos from API
 * @param {number} id
 * @returns {Object}
 */
const getUserInfos = async (id) => {
  let Result;
  if(useMock){
    Result = USER_MAIN_DATA.find((userData) => userData.id === id);
  }else if (!useMock){
    const Response = await fetch(`${apiUrl}/user/${id}`);
    const responseData = await Response.json();
    Result = responseData.data;
  }
  return UserInfosModel(Result);
};

/**
 * Get daily activity from API
 * @param {number} id
 * @returns {Object}
 */
const getDailyActivity = async (id) => {
  let Result;
  if(useMock){
  Result = USER_ACTIVITY.find(user => user.userId === id)?.sessions || [];
  }else if (!useMock){
    const Response = await fetch(`${apiUrl}/user/${id}/activity`);
    const responseData = await Response.json();
    Result = responseData.data.sessions;
  }
  return DailyActivitiesModel(Result);
};

/**
 * Get average session from API
 * @param {number} id
 * @returns {Object}
 */
const getAverageSession = async (id) => {
  let Result;
  if(useMock){
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
    Result = userAverageSessions ? userAverageSessions.sessions : [];
  }else if (!useMock){
    const response = await fetch(`${apiUrl}/user/${id}/average-sessions`);
    const responseData = await response.json();
    Result = responseData.data.sessions;
  }
  return SessionsTimeModel(Result);
};

/**
 * Get activity types from API
 * @param {number} id
 * @returns {Object}
 */
const getActivityTypes = async (id) => {
  let Result;
  if(useMock){
    Result = USER_PERFORMANCE.find(user => user.userId === id);
  }else if (!useMock){
    const response = await fetch(`${apiUrl}/user/${id}/performance`);
    const responseData = await response.json();
    Result = responseData.data;
  }
  return ActivityTypesModel(Result);
};


//export all functions
export { getUserInfos, getDailyActivity, getAverageSession, getActivityTypes };