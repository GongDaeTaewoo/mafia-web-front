import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function LoginInput({ css }) {
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    css,
  );  

  const inputCss = emotionCss(
    {
      marginTop : "1rem",
    }

  );

  const buttonCss = emotionCss(
    {
      display: "flex",
      marginTop: "1rem",
      marginLeft: 'auto',
    }

  );
  return (
    <div css= {containerCss}>
      <div>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          아이디
        </Text>

        <Input variant="short" />
      </div>

      <div css={inputCss}>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          비밀번호
        </Text>
        <Input variant="short" />
      </div>

      <div css={buttonCss}>
        <Button variant='normal' />
      </div>
    </div>
  );
}

LoginInput.defaultProps = {
  css: emotionCss({}),
};

LoginInput.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default LoginInput;
