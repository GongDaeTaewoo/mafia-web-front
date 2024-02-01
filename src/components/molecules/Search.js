import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function Search({ variant }) {
  switch (variant) {
    case 'long':
      return (
        <div style={{ display: 'flex' }}>
          <Input variant="long" />
          <Button variant="normal" />
        </div>
      );
    case 'forMyPage':
      return (
        <div style={{ display: 'flex' }}>
          <Input variant="forMyPage" />
          <Button variant="normal" />
        </div>
      );
    default:
      return (
        <div style={{ display: 'flex' }}>
          <Input variant="short" />
          <Button variant="normal" />
        </div>
      );
  }
}

Search.propTypes = {
  variant: PropTypes.string.isRequired,
};
export default Search;
