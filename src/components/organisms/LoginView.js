import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ImageView from '../atoms/ImageView';
import loginImage from '../../assets/images/mafia_login.svg';
import LoginInput from '../molecules/LoginInput';
import logoImage from '../../assets/images/mafia_logo.svg';
import SocialLogin from '../molecules/SocialLogin';

/** @jsxImportSource @emotion/react */

function LoginView({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    css,
  );  

  return (
    <div css= {containerCss}>
      <ImageView src={loginImage} alt="login" />
      <ImageView src={logoImage} alt="logo" />
      <LoginInput/>
      <SocialLogin/>
    </div>
  );
}

LoginView.defaultProps = {
  css: emotionCss({}),
};

LoginView.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default LoginView;
