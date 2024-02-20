import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Text from '../atoms/Text';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function RankCardBody({ children, title, content, css, fontCss }) {
  const cssObject = emotionCss({}, css);

  return (
    <div className="col d-flex flex-column align-items-center justify-content-center">
      {title && (
        <Text
          variant={theme.fontVariant.H5}
          color={theme.color.MAFIA_WHITE}
          className="card-title"
          css={(cssObject, fontCss)}
        >
          {title}
        </Text>
      )}
      {content && (
        <Text
          color={theme.color.MAFIA_WHITE}
          className="card-text"
          css={(cssObject, fontCss)}
        >
          {content}
        </Text>
      )}
      {children}
    </div>
  );
}

RankCardBody.defaultProps = {
  children: undefined,
  title: undefined,
  content: undefined,
  css: emotionCss({}),
  fontCss: emotionCss({}),
};

RankCardBody.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  fontCss: PropTypes.objectOf(emotionCss),
};

export default RankCardBody;
