import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import Search from '../molecules/Search';
import UserListItem from '../organisms/UserListItem';
import ListView from '../atoms/ListView';
import ListItem from '../atoms/ListItem';
import Pagination from '../molecules/Pagination';

/** @jsxImportSource @emotion/react */

function SearchPageTemplate({ dataList, className, nowPage }) {
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

  const onItemClick = (num) => {
    window.location.href = num;
  };
  // 한페이지의 유저갯수
  const numOfItem = 5;
  const getTotalPage = () => Math.floor((dataList.length - 1) / numOfItem) + 1;
  // 한페이지에 보여주는 유저 인덱스
  const nowPageStart = (nowPage - 1) * numOfItem;
  const nowPageEnd = (nowPage - 1) * numOfItem + numOfItem;

  return (
    <div className={className} css={SearchPageCSS}>
      <Search css={SearchCSS} className={className} variant="long" />
      <ListView css={ListViewCSS}>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
        <ListItem> </ListItem>
      </ListView>
      {dataList.slice(nowPageStart, nowPageEnd).map((data) => (
        <UserListItem data={data} />
      ))}
      <Pagination
        current={nowPage}
        total={getTotalPage()}
        className="d-flex justify-content-center"
        paginationItemOnClick={onItemClick}
      />
    </div>
  );
}

SearchPageTemplate.defaultProps = {
  className: '',
  nowPage: 1,
};

SearchPageTemplate.propTypes = {
  dataList: PropTypes.node.isRequired,
  nowPage: PropTypes.number,
  className: PropTypes.string,
};

export default SearchPageTemplate;
