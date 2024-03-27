import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import LoginView from '../organisms/LoginView';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function Login({ css }) {
  

    const loginCSS = emotionCss({
    display: "flex",
    justifyContent: "center",
    alignItems: 'flex-start',
    minHeight: '100vh',
    paddingTop: '5rem',
    marginBottom: '2rem',
    backgroundColor : theme.color.MAFIA_BACKGROUND,
    '@media (max-width: 768px)': {
      alignItems: 'flex-start',
    },
    },
    css,
  );

  return (
    <div css={loginCSS}>
        <LoginView />
    </div>
    

  );
}

Login.defaultProps = {
  css: emotionCss({}),
};

Login.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default Login;
