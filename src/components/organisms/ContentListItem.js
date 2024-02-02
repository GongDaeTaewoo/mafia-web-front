import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import ImageListItem from '../molecules/ImageListItem';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function ContentListItem({
  children,
  imageSrc,
  title,
  content,
  className,
  css,
}) {
  const cssObject = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_ITEM,
      borderColor: theme.color.MAFIA_CONTAINER,
    },
    css,
  );
  return (
    <ImageListItem src={imageSrc} className={className} css={cssObject}>
      <div className="row h-100">
        <div className="col">
          <div className="card-body">
            {title && (
              <Text
                variant={theme.fontVariant.H5}
                color={theme.color.MAFIA_WHITE}
                className="card-title"
              >
                {title}
              </Text>
            )}
            {content && (
              <Text color={theme.color.MAFIA_WHITE} className="card-text">
                {content}
              </Text>
            )}
          </div>
        </div>
        <div className="row col-2 ms-auto me-4">{children}</div>
      </div>
    </ImageListItem>
  );
}

ContentListItem.defaultProps = {
  title: undefined,
  content: undefined,
  className: '',
  css: emotionCss({}),
};

ContentListItem.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ContentListItem;
