import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
// import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function SignupInput({ css }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idIsValid, setIdIsValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const handleConfirmIdChange = (e) => {
    const newId = e.target.value;
    setId(newId);

    const isVaildId = newId.length >= 4 && newId.length <= 12;
    setIdIsValid(isVaildId);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setPasswordsMatch(
      newPassword === confirmPassword || confirmPassword === '',
    );

    const isValidPassword = newPassword.length >= 4 && newPassword.length <= 12;
    setPasswordIsValid(isValidPassword);

    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setPasswordsMatch(password === newConfirmPassword);
  };

  const bootstrapPwClass =
    passwordIsValid && passwordsMatch ? 'is-valid' : 'is-invalid';
  const bootstrapIdClass = idIsValid ? 'is-valid' : 'is-invalid';

  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    css,
  );

  const partCss = emotionCss({
    marginTop: '2rem',
  });

  const buttonCss = emotionCss({
    display: 'flex',
    marginTop: '2rem',
    marginLeft: 'auto',
  });
  return (
    <div css={containerCss}>
      <div css={partCss}>
        <Text
          variant={theme.fontVariant.SMALL}
          color={theme.color.MAFIA_BACKGROUND}
        >
          이메일
        </Text>

        <input
          className={`form-control ${bootstrapIdClass} bg-dark-subtle`}
          value={id}
          onChange={handleConfirmIdChange}
        />
      </div>

      {!idIsValid && (
        <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
          올바른 이메일 형식이 아닙니다.
        </Text>
      )}

      {idIsValid && (
        <Text variant={theme.fontVariant.SMALL}>
          <br />
        </Text>
      )}

      <div css={partCss}>
        <Text
          variant={theme.fontVariant.SMALL}
          color={theme.color.MAFIA_BACKGROUND}
        >
          비밀번호
        </Text>

        <input
          type="password"
          className={`form-control ${bootstrapPwClass} bg-dark-subtle`}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {!passwordIsValid && (
        <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
          올바른 비밀번호 형식이 아닙니다.
        </Text>
      )}

      {passwordIsValid && (
        <Text variant={theme.fontVariant.SMALL}>
          <br />
        </Text>
      )}

      <div css={partCss}>
        <Text
          variant={theme.fontVariant.SMALL}
          color={theme.color.MAFIA_BACKGROUND}
        >
          비밀번호 확인
        </Text>
        <input
          type="password"
          className={`form-control ${bootstrapPwClass} bg-dark-subtle`}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>

      {!passwordsMatch && (
        <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
          비밀번호가 일치하지 않습니다.
        </Text>
      )}

      {passwordsMatch && (
        <Text variant={theme.fontVariant.SMALL}>
          <br />
        </Text>
      )}

      <div css={buttonCss}>
        <Button variant={theme.buttonVariant.REGIS} />
      </div>
    </div>
  );
}

SignupInput.defaultProps = {
  css: emotionCss({}),
};

SignupInput.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default SignupInput;
