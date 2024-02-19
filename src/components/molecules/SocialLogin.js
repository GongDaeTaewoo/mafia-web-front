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


  return (
    <div css={containerCss}>
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={kakaoImage}
        alt="kakao"
        css={btnCss}
        width="60"
        height="60"
        
      />
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={naverImage}
        alt="naver"
        css={btnCss}
        width="60"
        height="60"
      />
      <Button
        variant={theme.buttonVariant.IMG}
        imageSrc={googleImage}
        alt="google"
        width="60"
        height="60"
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
