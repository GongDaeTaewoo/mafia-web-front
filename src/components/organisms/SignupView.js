import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ImageView from '../atoms/ImageView';
import WantedImage from '../../assets/images/wanted.svg';
import WantedBackgroundImage from '../../assets/images/wanted_background.svg';
import SignupInput from '../molecules/SignupInput';
import theme from '../../styles/theme';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function SignupView({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5rem',
      zIndex: 1,
    },
    css,
  ); 

  const wantedCss = emotionCss(
    {
        width: '40rem',
        height: '10rem',
        zIndex: 1,
    }
  );

  const imageCss = emotionCss(
    {
        position: 'absolute',
        width: '60rem', 
        height: '80rem',
        zIndex: 0,
    }
  );

  const textCss = emotionCss(
    {
      marginTop: '3rem',
      zIndex: 1,
    },
    css,
  ); 

  return (
    <div css= {containerCss}>
      <ImageView src={WantedBackgroundImage} css={imageCss} />
      <ImageView src={WantedImage} alt="wanted" css={wantedCss} />
      <Text variant={theme.fontVariant.H4} color={theme.color.MAFIA_RED} css={textCss} > 
            마피아세계에 오신 걸 환영합니다.
      </Text>
      <SignupInput/>
    </div>
  );
}

SignupView.defaultProps = {
  css: emotionCss({}),
};

SignupView.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default SignupView;