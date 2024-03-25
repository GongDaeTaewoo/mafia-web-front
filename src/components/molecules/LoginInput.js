import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import axios from 'axios';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function LoginInput({ css }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
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

    const handleLogin= () => {
      
      const apiUrl ='http://localhost:8081/member/authenticate';
    
      axios.post(apiUrl, {
        email,
        password
      })
        .then(response => {
          console.log('로그인 성공:', response.data);
          navigate('/'); 
        })
        .catch(error => {
          console.error('로그인 실패:', error);
        });
      
    };
    
  return (
    <div css={containerCss}>
      <div>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          이메일
        </Text>

        <input className={`form-control `} css={inputCss} value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div css={divCss}>
        <Text variant="h5" color={theme.color.MAFIA_WHITE}>
          비밀번호
        </Text>
        <input className={`form-control `} type='password' css={inputCss} value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>


      <div css={buttonCss}>
      <Button type="button" variant={theme.buttonVariant.REGIS} className="btn btn-secondary" 
        onClick={handleLogin}
        css={buttonCss}><Text fontWeight={theme.fontWeight.BOLD} color={theme.color.MAFIA_WHITE}>
          로그인 </Text></Button>
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
