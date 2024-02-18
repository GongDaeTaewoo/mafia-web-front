import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import Text from '../atoms/Text';
import firstImg from '../../assets/images/star_gold.svg';
import secImg from '../../assets/images/star_silver.svg';
import thirdImg from '../../assets/images/star_bronze.svg';
import defaultImg from '../../assets/images/certificate.svg';
import ImageView from '../atoms/ImageView';

/** @jsxImportSource @emotion/react */

function Rank({ children, variant, className, css }) {
  const cssObject = emotionCss(
    {
      color: theme.color.MAFIA_WHITE,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
      fontWeight: theme.fontWeight.BOLDER,
      fontSize: '10px',
      '@media (min-width: 1028px)': {
        fontSize: '16px',
      },
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
      className={className}
      css={emotionCss({
        position: 'relative',
      })}
    >
      <ImageView src={getImg(variant)} alt="no img" css={cssObject} />
      <Text css={cssObject}>{children}</Text>
    </div>
  );
}

Rank.defaultProps = {
  className: '',
  css: emotionCss({}),
  variant: theme.rankVariant.DEFAULT,
};

Rank.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(theme.rankVariant)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default Rank;
