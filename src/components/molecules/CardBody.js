import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import ImageView from '../atoms/ImageView';

/** @jsxImportSource @emotion/react */

function CardBody({
  children,
  title,
  content,
  imageSrc,
  imageWeight,
  className,
  css,
  fontCss,
}) {
  const cssObject = emotionCss({}, css);

  return (
    <div className={`card-body row ${className}`} css={cssObject}>
      {imageSrc && (
        <ImageView
          src={imageSrc}
          className={`col-${imageWeight} me-auto p-0 ps-1 pe-1`}
        />
      )}
      <div className="col">
        {title && (
          <Text
            variant={theme.fontVariant.H5}
            color={theme.color.MAFIA_WHITE}
            className="card-title"
            css={fontCss}
          >
            {title}
          </Text>
        )}
        {content && (
          <Text
            color={theme.color.MAFIA_WHITE}
            className="card-text"
            css={fontCss}
          >
            {content}
          </Text>
        )}
        {children}
      </div>
    </div>
  );
}

CardBody.defaultProps = {
  children: undefined,
  imageWeight: 2,
  imageSrc: undefined,
  title: undefined,
  content: undefined,
  className: '',
  css: emotionCss({}),
  fontCss: emotionCss({}),
};

CardBody.propTypes = {
  children: PropTypes.node,
  imageWeight: PropTypes.number,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  fontCss: PropTypes.objectOf(emotionCss),
};

export default CardBody;
