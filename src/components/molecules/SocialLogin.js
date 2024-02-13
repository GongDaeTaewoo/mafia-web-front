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
    },
    css,
  );
  
  const btnCss = emotionCss(
    {
        marginRight: '5rem',
    }
  )


  return (
    <div css= {containerCss}>
      <Button variant={theme.buttonVariant.IMG} img={kakaoImage} alt="kakao" css={btnCss} width="70" height="70"/>
      <Button variant={theme.buttonVariant.IMG} img={naverImage} alt="naver" css={btnCss} width="70" height="70"/>
      <Button variant={theme.buttonVariant.IMG} img={googleImage} alt="google" width="70" height="70"/>
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
