import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
/** @jsxImportSource @emotion/react */

function Search({ variant, className, css }) {
  const ButtonCSS = emotionCss(
    {
      position: 'relative',
      right: '40px',
      margin: '3px',
    },
    css,
  );

  switch (variant) {
    case 'long':
      return (
        <div className={className} style={{ display: 'flex' }} css={css}>
          <Input variant="long" />
          <Button variant="normal" css={ButtonCSS} />
        </div>
      );
    case 'forMyPage':
      return (
        <div className={className} style={{ display: 'flex' }} css={css}>
          <Input variant="forMyPage" />
          <Button variant="normal" css={ButtonCSS} />
        </div>
      );
    default:
      return (
        <div className={className} style={{ display: 'flex' }} css={css}>
          <Input variant="short" />
          <Button variant="normal" css={ButtonCSS} />
        </div>
      );
  }
}

Search.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};
Search.defaultProps = {
  className: '',
  css: emotionCss({}),
};
export default Search;
