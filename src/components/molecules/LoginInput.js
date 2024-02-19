import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
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

  const inputCss = emotionCss(
    {
      width: "30rem",
      height: " 3rem",
      fontSize: "15px",
      '@media (max-width: 768px)': {
        width: "250px",
        height:"25px",
      }
    }
  )

  const divCss = emotionCss(
    {
      marginTop: "2rem",
    }
  )

  const buttonCss = emotionCss(
    {
      width: "30rem",
      height: " 3rem",
      marginTop: '2rem',
      fontSize: "1.5rem",
      '@media (max-width: 768px)': {
        width: "250px",
        height:"25px",
        fontSize: "1rem",
      }
    });
    
  return (
    <div css={containerCss}>
      <div>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          이메일
        </Text>

        <input className={`form-control `} css={inputCss}/>
      </div>

      <div css={divCss}>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          비밀번호
        </Text>
        <input className={`form-control `} type='password' css={inputCss}/>
      </div>


      <div css={buttonCss}>
      <button type="button" className="btn btn-secondary" 
        onClick={() => {
          setLogin(() => ({ id: 1, email: 'aaaaaa@gmail.com' }));
          navigate('/');
        }}
        css={buttonCss}><Text fontWeight={theme.fontWeight.BOLD} color={theme.color.MAFIA_WHITE}>
          로그인 </Text></button>
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
