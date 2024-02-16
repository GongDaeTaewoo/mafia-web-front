import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import SignupView from '../organisms/SignupView';
import theme from '../../styles/theme';
import HeaderNav from '../molecules/HeaderNav'

/** @jsxImportSource @emotion/react */

function SignupTemplate({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      paddingTop:'5rem',
      alignItems: 'center',
      backgroundColor: theme.color.MAFIA_BACKGROUND,
      minHeight: '135vh',
      zIndex: 0,
    },
    css,
  ); 

  return (
    <div>
      <div>
      <HeaderNav/>
      </div>
      <div css= {containerCss}>
        <SignupView/>
      </div>
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