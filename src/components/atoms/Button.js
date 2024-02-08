import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from './Text';
import img from '../../assets/images/mafia_icon.svg';

/** @jsxImportSource @emotion/react */

function Button({
  children,
  className,
  variant,
  css,
  backgroundColor,
  onClick,
  width,
  height,
}) {
  const cssObject = emotionCss(
    {
      backgroundColor,
    },
    css,
  );

  const grayButtonCss = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
      border: 'none',
    },
    cssObject,
  );

  const plainButtonCss = emotionCss(
    {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0',
    },
    cssObject,
  );

  switch (variant) {
    case theme.buttonVariant.NORMAL:
      return (
        <button
          type="button"
          className={`btn-group ${className}`}
          css={grayButtonCss}
          onClick={onClick}
        >
          <Text color={theme.color.MAFIA_WHITE}>GG</Text>
        </button>
      );
    case theme.buttonVariant.REGIS:
      return (
        <button
          type="button"
          className={`btn-group ${className}`}
          css={grayButtonCss}
          onClick={onClick}
        >
          <Text color={theme.color.MAFIA_WHITE}>회원가입</Text>
        </button>
      );
    case theme.buttonVariant.IMG:
      return (
        <button
          type="button"
          className={className}
          onClick={onClick}
          css={plainButtonCss}
        >
          <img src={img} alt="asd" width={width} height={height} />
        </button>
      );
    default:
      return (
        <button
          type="button"
          className={className}
          css={plainButtonCss}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
}

Button.defaultProps = {
  children: 'Default',
  className: '',
  css: emotionCss({}),
  variant: undefined,
  backgroundColor: undefined,
  onClick: () => {},
  width: '100',
  height: '100',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.buttonVariant)),
  backgroundColor: PropTypes.oneOf(Object.values(theme.color)),
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
