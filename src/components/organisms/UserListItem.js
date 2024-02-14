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
    height: 65px;
    width: 1000px;
    display: flex;
    margin: 2px auto;
  `;
  const ListItemCSS = css`
    margin: 20px;
    margin-right: 50px;
    list-style: none;
    color: ${theme.color.MAFIA_WHITE};
  `;
  const ListItemNameCSS = css`
    margin: 20px;
    margin-right: 100px;
    list-style: none;
    width: 500px;
    color: ${theme.color.MAFIA_WHITE};
  `;
  const ListImageCSS = css`
    list-style: none;
  `;
  const ImageCSS = css`
    width: 65px;
    height: 65px;
  `;
  return (
    <ListView className="" css={ListViewCSS}>
      <ListItem className="" css={ListImageCSS}>
        <ImageView src={searchPageImage} css={ImageCSS} />
      </ListItem>
      <ListItem className="" css={ListItemNameCSS}>
        {data.name} (★{data.title})
      </ListItem>
      <ListItem className="" css={ListItemCSS}>
        승률:{data.odds}%
      </ListItem>
    </ListView>
  );
}

UserListItem.propTypes = {
  data: PropTypes.isRequired,
};
export default UserListItem;
