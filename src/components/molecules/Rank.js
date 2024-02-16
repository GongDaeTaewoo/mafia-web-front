import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function Rank({ children, variant, className, css, fontSize }) {
  const cssObject = emotionCss(
    {
      position: 'absolute',
      fontSize,
    },
    css,
  );

  switch (variant) {
    case '1st':
      return (
        <Text
          className="d-flex align-items-center align-self-center"
          variant={theme.fontVariant.SPAN}
          css={{ position: 'relative', fontSize }}
        >
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_GOLD }}
          >
            <Text variant={theme.fontVariant.SMALL} css={cssObject}>
              {children}
            </Text>
          </i>
        </Text>
      );
    case '2nd':
      return (
        <Text
          className="d-flex align-items-center align-self-center"
          variant={theme.fontVariant.SPAN}
          css={{ position: 'relative', fontSize }}
        >
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_SILVER }}
          >
            <Text variant={theme.fontVariant.SMALL} css={cssObject}>
              {children}
            </Text>
          </i>
        </Text>
      );
    case '3th':
      return (
        <Text
          className="d-flex align-items-center align-self-center"
          variant={theme.fontVariant.SPAN}
          css={{ position: 'relative', fontSize }}
        >
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_BRONZE }}
          >
            <Text variant={theme.fontVariant.SMALL} css={cssObject}>
              {children}
            </Text>
          </i>
        </Text>
      );
    default:
      return (
        <Text
          className="d-flex align-items-center align-self-center"
          variant={theme.fontVariant.SPAN}
          css={{ position: 'relative', fontSize }}
        >
          <i
            className={`${className} fa-lg fas fa-certificate`}
            css={{ color: theme.color.MAFIA_LIGHT_GRAY }}
          >
            <Text variant={theme.fontVariant.SMALL} css={cssObject}>
              {children}
            </Text>
          </i>
        </Text>
      );
  }
}

Rank.defaultProps = {
  className: '',
  css: emotionCss({
    color: theme.color.MAFIA_WHITE,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '2',
  }),
  variant: theme.rankVariant.DEFAULT,
  fontSize: '4rem',
};

Rank.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(theme.rankVariant)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  fontSize: PropTypes.string,
};

export default Rank;
