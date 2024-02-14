import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/Button';
import loginState from '../../recoils/loginState';

/** @jsxImportSource @emotion/react */

function LoginInput({ css }) {
  const navigate = useNavigate();
  const setLogin = useRecoilState(loginState)[1];
  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    css,
  );

  const inputCss = emotionCss({
    marginTop: '1rem',
  });

  const buttonCss = emotionCss({
    display: 'flex',
    marginTop: '1rem',
    marginLeft: 'auto',
  });
  return (
    <div css={containerCss}>
      <div>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          이메일
        </Text>

        <Input variant="short" />
      </div>

      <div css={inputCss}>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          비밀번호
        </Text>
        <Input variant="short" inputType="password" />
      </div>

      <div css={buttonCss}>
        <Button
          variant="normal"
          onClick={() => {
            setLogin(() => ({ id: 1, email: 'aaaaaa@gmail.com' }));
            navigate('/');
          }}
        />
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
