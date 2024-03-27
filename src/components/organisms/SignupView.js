import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import SignupInput from '../molecules/SignupInput'
import theme from '../../styles/theme';
import Text from '../atoms/Text';
/** @jsxImportSource @emotion/react */

function SignupView({ css }) {
  const welcomeText = '마피아 세계에 오신 것을 환영합니다.';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentCharIndex = -1;
  
    const typingAnimation = setInterval(() => {
      if (currentCharIndex < welcomeText.length -1) {
        currentCharIndex += 1;
        setDisplayedText((prevText) => prevText + welcomeText[currentCharIndex]);
        
      } else {
        setDisplayedText((prevText) =>
        prevText.endsWith('.')
        ? `${prevText.slice(0, -1)} `
        : `${prevText.slice(0, -1)}.`
        );
      }
    }, 200);
  
    return () => clearInterval(typingAnimation);
  }, []);

  const containerCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'flex-start',
      width: '80%',
      '@media (max-width: 1300px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:'2rem',
      }
    },
    css,
  );

  const containerContentCss = emotionCss(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop:'10rem',
      '@media (max-width: 1300px)': {
        marginBottom:'2rem',
      }
    },
    css,
  );

  const isMobile = () => window.innerWidth <= 600;


  return (
    <div css= {containerCss}>
      <div css={containerContentCss}>
        <Text variant={isMobile() ? theme.fontVariant.H4 : theme.fontVariant.H2} fontWeight={theme.fontWeight.BOLD} color={theme.color.MAFIA_RED}  > 
            {displayedText}
        </Text>
        <Text variant={isMobile() ? theme.fontVariant.H6 : theme.fontVariant.H4} fontWeight={theme.fontWeight.BOLD} color={theme.color.MAFIA_LIGHT_GRAY}  > 
              MAFIA.GG 계정 생성을 위해 이메일을 등록하고 인증하세요.
        </Text>
      </div>

      
      
      <SignupInput/>
    </div>
  );
}

SignupView.defaultProps = {
  css: emotionCss({}),
};

SignupView.propTypes = {
  css: PropTypes.objectOf(emotionCss),
};

export default SignupView;