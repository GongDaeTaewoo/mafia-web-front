import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from '../atoms/ListItem';
import ImageView from '../atoms/ImageView';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function ImageListItem({ children, src, className, css }) {
  const cssObject = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_ITEM,
    },
    css,
  );
  return (
    <ListItem className={`${className} list-group-item`} css={cssObject}>
      <div className="row p-0">
        <ImageView
          src={src}
          className="col-2 p-0 me-auto img-fluid ms-2"
          css={emotionCss({ maxWidth: '8rem' })}
        />
        <div className="col">{children}</div>
      </div>
    </ListItem>
  );
}

ImageListItem.defaultProps = {
  className: '',
  css: emotionCss({}),
};

ImageListItem.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ImageListItem;
