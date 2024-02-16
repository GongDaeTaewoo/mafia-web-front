import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
// import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function SignupInput({ css }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idIsValid, setIdIsValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const handleConfirmIdChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
    const isVaildEmail= emailRegex.test(newEmail);
    setIdIsValid(isVaildEmail);
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setPasswordsMatch(
      newPassword === confirmPassword || confirmPassword === '',
    );

    const passwordRegex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;
    const isValidPassword = passwordRegex.test(newPassword);
    setPasswordIsValid(isValidPassword);

    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setPasswordsMatch(password === newConfirmPassword);
  };

 
  const bootstrapPwClass = (passwordIsValid && passwordsMatch) ? '' : 'is-invalid'
  const bootstrapIdClass = idIsValid ? '' : 'is-invalid'


  const containerCss = emotionCss(
    {
      display: 'flex',  
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.MAFIA_CONTAINER,
      padding: "6rem",
    },
    css,
  );

  const inputCss = emotionCss(
    {
      width: "400px",
      height: "50px",
      fontSize: "15px",
    }
  )

  const buttonCss = emotionCss(
    {
      width: "400px",
      height: "50px",
      marginTop: "15px",
    }
  )

  return (
    <div css= {containerCss}>
        <Text variant={theme.fontVariant.H1} color={theme.color.MAFIA_WHITE}>
          회원가입
        </Text>
        <div>
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                이메일
            </Text>

            <input className={`form-control ${bootstrapIdClass}`} value={email} onChange={handleConfirmIdChange} css={inputCss}/>
        </div>

        {!idIsValid && (
          <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
            올바른 이메일 형식이 아닙니다.
          </Text>
        )}

        {idIsValid && (
          <Text variant={theme.fontVariant.SMALL}>
            <br/>
          </Text>
        )}
        
        <div>
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                비밀번호
            </Text>

            <input type="password" className={`form-control ${bootstrapPwClass}`} value={password} onChange={handlePasswordChange} css={inputCss}/>
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

        <div>
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                비밀번호 확인
            </Text>
            <input type="password" className={`form-control ${bootstrapPwClass}`} value={confirmPassword} onChange={handleConfirmPasswordChange} css={inputCss}/>
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

    
    <button type="button" className="btn btn-secondary" css={buttonCss}>회원가입</button>
      
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
