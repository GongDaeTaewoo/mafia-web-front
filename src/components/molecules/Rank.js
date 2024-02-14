import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from '../atoms/Text';
import firstImg from '../../assets/images/star_gold.svg';
import secImg from '../../assets/images/star_silver.svg';
import thirdImg from '../../assets/images/star_bronze.svg';
import defaultImg from '../../assets/images/certificate.svg';

/** @jsxImportSource @emotion/react */

function Rank({ children, variant, className, css, fontSize }) {
  const cssObject = emotionCss(
    {
      color: theme.color.MAFIA_WHITE,
      fontSize: '2rem',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
    },
    css,
  );
  const getImg = (e) => {
    switch (e) {
      case '1st':
        return firstImg;
      case '2nd':
        return secImg;
      case '3th':
        return thirdImg;
      default:
        return defaultImg;
    }
  };
  return (
    <div
      css={emotionCss({
        position: 'relative',
      })}
    >
      <img
        src={getImg(variant)}
        alt="no img"
        className={className}
        css={emotionCss(
          {
            height: fontSize,
            width: fontSize,
          },
          css,
        )}
      />
      <Text variant={theme.fontVariant.SMALL} css={cssObject}>
        {children}
      </Text>
    </div>
  );
}

Rank.defaultProps = {
  className: '',
  css: emotionCss({}),
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
