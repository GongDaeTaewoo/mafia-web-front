import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import Search from '../molecules/Search';
import UserListItem from '../organisms/UserListItem';
import ListView from '../atoms/ListView';
import ListItem from '../atoms/ListItem';

/** @jsxImportSource @emotion/react */

function SearchPageTemplate({ dataList, className }) {
  const SearchPageCSS = css`
    background-color: ${theme.color.MAFIA_BACKGROUND};
    height: 10000px;
  `;
  const SearchCSS = css`
    padding-top: 150px;
  `;
  const ListViewCSS = css`
    background-color: ${theme.color.MAFIA_LIGHT_GRAY};
    height: 30px;
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    margin: 10px auto;
    margin-top: 50px;
    list-style: none;
  `;

  return (
    <div className={className} css={SearchPageCSS}>
      <Search css={SearchCSS} className={className} variant="long" />
      <ListView css={ListViewCSS}>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
      </ListView>
      {dataList.map((data) => (
        <UserListItem data={data} />
      ))}
    </div>
  );
}

SearchPageTemplate.defaultProps = {
  className: '',
};

SearchPageTemplate.propTypes = {
  dataList: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SearchPageTemplate;
