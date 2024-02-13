import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import ListView from '../atoms/ListView';
import ListItem from '../atoms/ListItem';
import theme from '../../styles/theme';
/** @jsxImportSource @emotion/react */

function UserListItem({ c1, c2, c3, c4 }) {
  const ListViewCSS = css`
    background-color: ${theme.color.MAFIA_LIGHT_GRAY};
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
  `;
  const ListItemCSS = css`
    margin: 20px;
    list-style: none;
  `;
  return (
    <ListView className="" css={ListViewCSS}>
      <ListItem className="" css={ListItemCSS}>
        {c1}
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {c2}
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {c3}
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {c4}
      </ListItem>
    </ListView>
  );
}

UserListItem.propTypes = {
  c1: PropTypes.isRequired,
  c2: PropTypes.isRequired,
  c3: PropTypes.isRequired,
  c4: PropTypes.isRequired,
};
export default UserListItem;
