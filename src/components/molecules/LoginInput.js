import React from 'react';
// import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/button';
import ImageView from '../atoms/ImageView';
import loginImage from '../../assets/images/login.svg';

/** @jsxImportSource @emotion/react */

function LoginInput() {
  return (
    <div
      css={emotionCss`
    background-color: ${theme.color.MAFIA_BACKGROUND};
    padding: 10px;
    width: 520px; 
  `}
    >
      <ImageView src={loginImage} alt="login" />
      <div>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          아이디
        </Text>

        <Input variant="short" />
      </div>

      <div css={emotionCss`margin-top: 20px;`}>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          비밀번호
        </Text>
        <Input variant="short" />
      </div>

      <div
        css={emotionCss`
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        `}
      >
        <Button variant="login" />
      </div>
    </div>
  );
}

LoginInput.defaultProps = {
  className: '',
  css: emotionCss({}),
};

LoginInput.propTypes = {};

export default LoginInput;
