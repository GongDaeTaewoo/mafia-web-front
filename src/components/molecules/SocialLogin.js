import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import kakaoImage from '../../assets/images/kakao_icon.svg';
import naverImage from '../../assets/images/naver_icon.svg';
import googleImage from '../../assets/images/google_icon.svg';
import Button from '../atoms/Button';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function SocialLogin({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '5rem',
      '@media (max-width: 768px)': {
        paddingTop: '3rem',
      }
  
    },
    css,
  );

  const btnCss = emotionCss({
    marginRight: '5rem',
    '@media (max-width: 768px)': {
      marginRight: '3rem',
    }
  });

  const handleKakaoLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=846957231662-otl2pvhe33nk273pnc5jbi1mo228mdig.apps.googleusercontent.com&redirect_uri=http://localhost:8081/member/oauth-types/google/validate-oauth2-code&response_type=code&scope=email';
  };

  const handleNaverLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=846957231662-otl2pvhe33nk273pnc5jbi1mo228mdig.apps.googleusercontent.com&redirect_uri=http://localhost:8081/member/oauth-types/google/validate-oauth2-code&response_type=code&scope=email';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=846957231662-otl2pvhe33nk273pnc5jbi1mo228mdig.apps.googleusercontent.com&redirect_uri=http://localhost:8081/member/oauth-types/google/validate-oauth2-code&response_type=code&scope=email';
  };
  


  return (
    <div css={containerCss}>
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={kakaoImage}
        alt="kakao"
        css={btnCss}
        width="60"
        height="60"
        onClick={handleKakaoLogin}
        
      />
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={naverImage}
        alt="naver"
        css={btnCss}
        width="60"
        height="60"
        onClick={handleNaverLogin}
      />
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={googleImage}
        alt="google"
        width="60"
        height="60"
        onClick={handleGoogleLogin}
      />
    </div>
  );
}

SocialLogin.defaultProps = {
  css: emotionCss({}),
};

SocialLogin.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default SocialLogin;
