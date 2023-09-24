const apiUrl = "http://localhost:3000";

import {UserInfosModel, DailyActivitiesModel, ActivityTypesModel, SessionsTimeModel} from "./modelApi";

/**
 * Get user infos from API
 * @param {number} id
 * @returns {Object}
 */
const getUserInfos = async (id) => {
  // API:  /user/:id
  const Response = await fetch(`${apiUrl}/user/${id}`);
  const res = await Response.json();
  return UserInfosModel(res.data);
};

/**
 * Get daily activity from API
 * @param {number} id
 * @returns {Object}
 */
const getDailyActivity = async (id) => {
  // API:  /user/:id/activity
  const Response = await fetch(`${apiUrl}/user/${id}/activity`);
  const res = await Response.json();
  return DailyActivitiesModel(res.data.sessions);
};

/**
 * Get average session from API
 * @param {number} id
 * @returns {Object}
 */
const getAverageSession = async (id) => {
  // API: /user/:id/average-sessions
  const response = await fetch(`${apiUrl}/user/${id}/average-sessions`);
  const res = await response.json();
  return SessionsTimeModel(res.data.sessions);
};

/**
 * Get activity types from API
 * @param {number} id
 * @returns {Object}
 */
const getActivityTypes = async (id) => {
  // API: /user/:id/performance
  const response = await fetch(`${apiUrl}/user/${id}/performance`);
  const res = await response.json();
  return ActivityTypesModel(res.data);
};


//export all functions
export { getUserInfos, getDailyActivity, getAverageSession, getActivityTypes };