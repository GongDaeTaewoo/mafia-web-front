import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import SignupView from '../organisms/SignupView';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function SignupTemplate({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      paddingTop:'5rem',
      alignItems: 'center',
      backgroundColor: theme.color.MAFIA_BACKGROUND,
      minHeight: '110vh',
      '@media (max-width: 768px)': {
        paddingTop:'0rem',
        paddingLeft: '1rem',
      }
    },
    css,
  ); 

  return (  
    <div css= {containerCss}>
      <SignupView/>
    </div>

  );
}

SignupTemplate.defaultProps = {
  css: emotionCss({}),
};

SignupTemplate.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default SignupTemplate;