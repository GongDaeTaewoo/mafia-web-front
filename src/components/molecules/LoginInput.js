import React from 'react';
// import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/button';

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
      <div>
        <Text variant="small" color={theme.color.MAFIA_WHITE}>
          아이디
        </Text>

        <Input variant="short" />
      </div>

      <div>
        <Text variant="small" color={theme.color.MAFIA_WHITE}>
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
