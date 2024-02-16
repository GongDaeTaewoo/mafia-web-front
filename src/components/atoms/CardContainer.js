import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function CardContainer({ children, className, css }) {
  const cssObject = emotionCss(
    { backgroundColor: theme.color.MAFIA_CONTAINER, border: 'none' },
    css,
  );

  return (
    <div className={`card ${className}`} css={cssObject}>
      {children}
    </div>
  );
}

CardContainer.defaultProps = {
  className: '',
  css: emotionCss({}),
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default CardContainer;
