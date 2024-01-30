import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from './Text';

/** @jsxImportSource @emotion/react */

function Rank({ children, variant, className, css }) {
  const cssObject = emotionCss({
    position: 'relative',
    fontSize: '5rem',
  });

  switch (variant) {
    case '1st':
      return (
        <Text variant={theme.fontVariant.SPAN} css={cssObject}>
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_GOLD }}
          />
          <Text variant={theme.fontVariant.SMALL} css={css}>
            {children}
          </Text>
        </Text>
      );
    case '2nd':
      return (
        <Text variant={theme.fontVariant.SPAN} css={cssObject}>
          <Text variant={theme.fontVariant.SMALL} css={css}>
            {children}
          </Text>
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_SILVER }}
          />
        </Text>
      );
    case '3th':
      return (
        <Text variant={theme.fontVariant.SPAN} css={cssObject}>
          <Text variant={theme.fontVariant.SMALL} css={css}>
            {children}
          </Text>
          <i
            className={`${className} fa-lg fas fa-star`}
            css={{ color: theme.color.MAFIA_BRONZE }}
          />
        </Text>
      );
    default:
      return (
        <Text variant={theme.fontVariant.SPAN} css={cssObject}>
          <Text variant={theme.fontVariant.SMALL} css={css}>
            {children}
          </Text>
          <i
            className={`${className} fa-lg fas fa-certificate`}
            css={{ color: theme.color.MAFIA_LIGHT_GRAY }}
          />
        </Text>
      );
  }
}

Rank.defaultProps = {
  className: '',
  css: emotionCss({
    color: theme.color.MAFIA_WHITE,
    fontSize: '2.5rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '2',
  }),
  variant: theme.rankVariant.DEFAULT,
};

Rank.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(theme.rankVariant)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default Rank;
