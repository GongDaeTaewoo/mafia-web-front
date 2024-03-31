import authInstance from '../utils/authInstance';

export const getProfileByUserId = async (userId) =>
  authInstance.get(`/member/users/${userId}/profile`);

export const getProfilesByPage = async (page) =>
  authInstance.get(`/member/${page}/`);

export const patchProfile = async (userId, data) =>
  authInstance.patch(`/member/users/${userId}/profile`, data);
