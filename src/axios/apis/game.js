import authInstance from '../utils/authInstance';

// eslint-disable-next-line import/prefer-default-export
export const getGameHistories = async (userId, page = 0, size = 10) =>
  authInstance.get(
    `/record/users/${userId}/histories?page=${page}&size=${size}`,
  );
