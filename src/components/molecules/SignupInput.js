import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import axios from 'axios';
// import Input from '../atoms/Input';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import Button from '../atoms/Button';


/** @jsxImportSource @emotion/react */

function SignupInput({ css }) {
  const [email, setEmail] = useState('');
  const [emailIsDisabled, setEmailIsDisabled] = useState(false);
  const [emailBgColor,setEmailBgColor] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [showEmailButton, setShowEmailButton] = useState(true);

  const [showEmailCodeButton,setShowEmailCodeButton] = useState(false);
  const [showEmailCodeField,setShowEmailCodeField] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const [emailBtnIsDisabled,setEmailBtnIsDisabled] = useState(false);

  const [emailCode, setEmailCode] = useState('');
  const [emailCodeIsDisabled, setEmailCodeIsDisabled] = useState(false);
  const [emailCodeBgColor,setEmailCodeBgColor] = useState('');
  const [emailCodeIsValid, setEmailCodeIsValid] = useState(true);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();
  
  const handleConfirmEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/;
    const isVaildEmail= emailRegex.test(newEmail);
    setEmailIsValid(isVaildEmail);
  }
  

  const handleConfirmEmailCodeChange = (e) => {
    const newEmailCode = e.target.value;
    setEmailCode(newEmailCode);
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    const isValidPassword = passwordRegex.test(newPassword);
    setPasswordIsValid(isValidPassword);

    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setPasswordsMatch(password === newConfirmPassword);
  };

  const handleConfirmNicknameChange = (e) => {
    setNickname(e.target.value);
  
  };


  const handleSendEmail= () => {
    
    if(emailIsValid){
      setEmailBtnIsDisabled(true);

      const apiUrl ='http://localhost:8081/member/sendMail';
  
    axios.post(apiUrl, {
      email,
    })
      .then(response => {
        console.log('이메일 전송 API 호출 성공', response.data);
        setEmailBgColor('bg-secondary');
        setShowEmailButton(false);
        setEmailIsDisabled(true);
        setShowEmailCodeField(true);
        setShowEmailCodeButton(true);
      })
      .catch(error => {
        console.error('이메일 전송 API 호출 실패:', error);
        setEmailBtnIsDisabled(false);
      });
    }
  };

  const handleAdditionalFields= () => {
    const apiUrl ='http://localhost:8081/member/confirmMail';

    axios.post(apiUrl, {
      email,
      emailCode,
    })
      .then(response => {
        console.log('인증코드 API 호출 성공', response.data);

        if(response.data.body === true){ 
          console.log('인증코드 일치');
          setEmailCodeBgColor('bg-secondary');
          setEmailCodeIsDisabled(true);

          setEmailCodeIsValid(true);
          setShowAdditionalFields(true);
          setShowEmailCodeButton(false);
        }else{
          console.log('인증코드 불일치');
          setEmailCodeIsValid(false);
        }
      })
      .catch(error => {
        console.error('인증코드 API 호출 실패:', error);
      });
  };

  const handleSignup = () =>{
    const apiUrl='http://localhost:8081/member/signup';

    if((passwordIsValid&&passwordsMatch)&&nickname!==''){

      axios.post(apiUrl,{
        email,
        emailCode,
        password,
        nickname
      })
      .then(response => {
        console.log('회원가입 API 호출 성공:', response.data);

        navigate('/login');
        
      })
      .catch(error => {
        console.error('회원가입 API 호출 실패:', error);
      });
    }
    
  }
  
  const bootstrapEmailClass = (emailIsValid||email==='') ? '' : 'is-invalid'
  const bootstrapEmailCodeClass = (emailCodeIsValid) ? '' : 'is-invalid'
  const bootstrapPwClass = (passwordIsValid||password==='') ? '' : 'is-invalid'
  const bootstrapPwConfirmClass = (passwordsMatch||confirmPassword==='') ? '' : 'is-invalid'


  const containerCss = emotionCss(
    {
      display: 'flex',  
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.MAFIA_CONTAINER,
      padding: "6rem",
      '@media (max-width: 600px)': {
        padding: '3rem',
      }
    },
    css,
  );

  const inputCss = emotionCss(
    {
      width: "400px",
      height: "30px",
      fontSize: "15px",
      '@media (max-width: 600px)': {
        width: "200px",
        height:"20px",
      }
    }
  )

  const buttonCss = emotionCss(
    {
      width: "400px",
      height: "35px",
      marginTop: "25px",
      '@media (max-width: 600px)': {
        width: "200px",
        height:"25px",
      }
    }
  )

  const partCss = emotionCss(
    {
      marginTop: "1rem",
    }
  )

  return (
    <div css= {containerCss}>
        <Text variant={theme.fontVariant.H5} color={theme.color.MAFIA_WHITE}>
          회원가입
        </Text>
        <div css={partCss}>
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                이메일
            </Text>

            <input className={`form-control ${bootstrapEmailClass} ${emailBgColor}`} value={email} onChange={handleConfirmEmailChange} css={inputCss} style={{ borderWidth: '3.5px'}} disabled={emailIsDisabled}/>
        </div>

        {!emailIsValid&&email!=='' &&(
          <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
            올바른 이메일 형식이 아닙니다.
          </Text>
        )}

        {(emailIsValid||email==='') && (
          <Text variant={theme.fontVariant.SMALL}>
            <br/>
          </Text>
        )}


        {showEmailCodeField &&(
          <>
          <div css={partCss}>
              <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                  이메일 인증코드
              </Text>

              <input className={`form-control ${bootstrapEmailCodeClass} ${emailCodeBgColor}`} value={emailCode} onChange={handleConfirmEmailCodeChange} css={inputCss} style={{ borderWidth: '3.5px'}} disabled={emailCodeIsDisabled}/>
            
          </div>
          {(!emailCodeIsValid)  && (
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
              인증번호가 일치하지 않습니다.
            </Text>
          )}

          {(emailCodeIsValid)  && (
            <br/>
          )}
    
          </>
        
        )}

        {showAdditionalFields &&(
        <>

          <div css={partCss}>
              <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                  닉네임
              </Text>
              <input value={nickname} className={`form-control `} onChange={handleConfirmNicknameChange} css={inputCss} style={{ borderWidth: '3.5px'}}/>
              <br/>
          </div>
        
          <div css={partCss}>
              <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                  비밀번호
              </Text>

              <input type="password" className={`form-control ${bootstrapPwClass}`} value={password} onChange={handlePasswordChange} css={inputCss} style={{ borderWidth: '3.5px'}}/>
          </div>

          {(!passwordIsValid&&password!=='')   && (
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
              올바른 비밀번호 형식이 아닙니다.
            </Text>
          )}

          {(passwordIsValid||password==='') && (
            <Text variant={theme.fontVariant.SMALL}>
              <br />
            </Text>
          )}

          <div css={partCss}>
              <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_WHITE}>
                  비밀번호 확인
              </Text>
              <input type="password" className={`form-control ${bootstrapPwConfirmClass}`} value={confirmPassword} onChange={handleConfirmPasswordChange} css={inputCss} style={{ borderWidth: '3.5px'}}/>
          </div>

          {(!passwordsMatch&&confirmPassword!=='') && (
            <Text variant={theme.fontVariant.SMALL} color={theme.color.MAFIA_RED}>
              비밀번호가 일치하지 않습니다.
            </Text>
          )}

          {(passwordsMatch||confirmPassword==='') && (
            <Text variant={theme.fontVariant.SMALL}>
              <br />
            </Text>
          )}

      
        <Button type="button" variant={theme.buttonVariant.REGIS} className="btn btn-secondary" css={buttonCss} onClick={handleSignup}>회원가입</Button>
      </>)}

    {showEmailButton && (
        <Button type="button" variant={theme.buttonVariant.REGIS} className="btn btn-secondary" css={buttonCss} onClick={handleSendEmail} disabled={emailBtnIsDisabled}>
          이메일 전송
        </Button>
      )}

    {showEmailCodeButton && (
        <Button type="button" variant={theme.buttonVariant.REGIS} className="btn btn-secondary" css={buttonCss} onClick={handleAdditionalFields}>
          인증코드 확인
        </Button>
      )}
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
