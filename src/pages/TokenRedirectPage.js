import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userinfoState from '../recoils/userinfoState';
import authInstance from '../axios/utils/authInstance';

function TokenRedirectPage() {
  const [userinfo, setUserinfo] = useRecoilState(userinfoState);
  const searchParams = useSearchParams()[0];
  const token = searchParams.get('token');
  const navigate = useNavigate();
  useEffect(() => {
    authInstance.registerToken(setUserinfo, token);
  }, []);
  if (userinfo && userinfo.id) {
    navigate('/');
  }
  return <div />;
}

export default TokenRedirectPage;
