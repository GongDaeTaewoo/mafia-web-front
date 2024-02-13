import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import ListView from '../atoms/ListView';
import ListItem from '../atoms/ListItem';
import theme from '../../styles/theme';
import ImageView from '../atoms/ImageView';
import searchPageImage from '../../assets/images/searchPageImage.svg';
/** @jsxImportSource @emotion/react */

function UserListItem({ data }) {
  const ListViewCSS = css`
    background-color: ${theme.color.MAFIA_LIGHT_GRAY};
    height: 100px;
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    margin: 30px auto;
  `;
  const ListItemCSS = css`
    margin: 20px;
    list-style: none;
  `;
  const ListImageCSS = css`
    list-style: none;
  `;
  return (
    <ListView className="" css={ListViewCSS}>
      <ListItem className="" css={ListImageCSS}>
        <ImageView src={searchPageImage} />
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {data.name}
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {data.odds}
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        {data.title}
      </ListItem>
    </ListView>
  );
}

UserListItem.propTypes = {
  data: PropTypes.isRequired,
};
export default UserListItem;
