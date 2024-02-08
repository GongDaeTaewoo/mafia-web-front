import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Button from '../atoms/Button';
import ImageView from '../atoms/ImageView';

/** @jsxImportSource @emotion/react */

function Toggle({
  className,
  css,
  toggled,
  toggledSrc,
  untoggledSrc,
  iconSize,
  onToggle,
  onUntoggle,
}) {
  const cssObject = emotionCss(
    {
      width: iconSize,
      height: iconSize,
    },
    css,
  );
  const [toggleState, setToggleState] = useState(toggled);
  const onClick = toggleState ? onToggle : onUntoggle;
  const imageSrc = toggleState ? toggledSrc : untoggledSrc;
  return (
    <Button
      className={className}
      css={cssObject}
      onClick={() => {
        onClick();
        setToggleState(!toggleState);
      }}
    >
      <ImageView
        src={imageSrc}
        css={emotionCss({ width: '100%', height: '100%', fill: 'red' })}
      />
    </Button>
  );
}

Toggle.defaultProps = {
  className: '',
  css: emotionCss({}),
  toggled: false,
  iconSize: theme.iconVariant.SM,
  onToggle: () => {},
  onUntoggle: () => {},
};

Toggle.propTypes = {
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  toggled: PropTypes.bool,
  toggledSrc: PropTypes.string.isRequired,
  untoggledSrc: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf(Object.values(theme.iconVariant)),
  onToggle: PropTypes.func,
  onUntoggle: PropTypes.func,
};

export default Toggle;
