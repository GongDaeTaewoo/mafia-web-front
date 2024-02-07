import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ImageView from '../atoms/ImageView';
import kakaoImage from '../../assets/images/kakao_icon.svg';
import naverImage from '../../assets/images/naver_icon.svg';
import googleImage from '../../assets/images/google_icon.svg';

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
  
  const imageCss = emotionCss(
    {
        marginRight: '5rem',
    }
  )


  return (
    <div css= {containerCss}>
      <ImageView src={kakaoImage} alt="kakao" css={imageCss} />
      <ImageView src={naverImage} alt="naver" css={imageCss} />
      <ImageView src={googleImage} alt="google"/>
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
