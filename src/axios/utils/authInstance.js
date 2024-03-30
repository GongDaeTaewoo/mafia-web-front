import axios from 'axios';

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

const registerToken = (setUserinfo, token) => {
  if (token) {
    localStorage.setItem('token', token);
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    authInstance
      .get(`${process.env.REACT_APP_SERVER}/member/userinfo`)
      .then((response) => {
        setUserinfo(response.data.body);
      });
  }
};

authInstance.registerToken = registerToken;

export default authInstance;
