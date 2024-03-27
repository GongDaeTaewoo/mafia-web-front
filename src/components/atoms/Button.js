import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from './Text';

/** @jsxImportSource @emotion/react */

function Button({
  children,
  className,
  variant,
  css,
  backgroundColor,
  buttonType,
  name,
  imageSrc,
  onClick,
  width,
  height,
  disabled,
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
          // eslint-disable-next-line react/button-has-type
          type={buttonType}
          name={name}
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
          // eslint-disable-next-line react/button-has-type
          type={buttonType}
          name={name}
          className={className}
          onClick={onClick}
          disabled={disabled}
        >
          <Text color={theme.color.MAFIA_WHITE}>{children}</Text>
        </button>
      );
    case theme.buttonVariant.IMG:
      return (
        <button
          // eslint-disable-next-line react/button-has-type
          type={buttonType}
          name={name}
          className={className}
          onClick={onClick}
          css={plainButtonCss}
        >
          <img src={imageSrc} alt="asd" width={width} height={height} />
        </button>
      );
    default:
      return (
        <button
          // eslint-disable-next-line react/button-has-type
          type={buttonType}
          name={name}
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
  buttonType: theme.buttonType.BUTTON,
  name: undefined,
  imageSrc: undefined,
  onClick: () => {},
  width: '100',
  height: '100',
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  variant: PropTypes.oneOf(Object.values(theme.buttonVariant)),
  backgroundColor: PropTypes.oneOf(Object.values(theme.color)),
  buttonType: PropTypes.oneOf(Object.values(theme.buttonType)),
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
