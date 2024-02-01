import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from '../atoms/ListItem';
import ListView from '../atoms/ListView';
import theme from '../../styles/theme';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function Pagination({ current, total, className, css, paginationItemOnClick }) {
  const cssObject = emotionCss(
    {
      margin: '0 auto',
      color: theme.color.MAFIA_WHITE,
      fontWeight: theme.fontWeight.BOLD,
      backgroundColor: theme.color.MAFIA_BACKGROUND,
    },
    css,
  );

  const selectColorObject = emotionCss({
    color: theme.color.MAFIA_RED,
    fontWeight: theme.fontWeight.BOLDER,
  });

  const disableColorObject = emotionCss({
    color: theme.color.MAFIA_LIGHT_GRAY,
  });

  const getPagination = (currentPage, totalPages, itemsPerPage) => {
    // 현재 페이지가 총 페이지 수보다 크면 마지막 페이지로 설정
    // let currentPage = Math.min(currentPage, totalPages);

    // 페이지 그룹 계산
    // const groupSize = Math.ceil(totalPages / itemsPerPage);
    const groupIndex = Math.floor((currentPage - 1) / itemsPerPage);

    // 그룹에 속한 첫 페이지와 마지막 페이지 계산
    const startPage = groupIndex * itemsPerPage + 1;
    const endPage = Math.min((groupIndex + 1) * itemsPerPage, totalPages);

    // 이전 그룹으로 이동할 링크 추가
    const prevGroupLink = groupIndex > 0 ? startPage - 1 : null;

    // 다음 그룹으로 이동할 링크 추가
    const nextGroupLink =
      (groupIndex + 1) * itemsPerPage < totalPages ? endPage + 1 : null;

    // 페이지 목록 반환
    const pageList = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index,
    );

    return {
      cPage: currentPage,
      tPages: totalPages,
      pGroupLink: prevGroupLink,
      nGroupLink: nextGroupLink,
      pageList,
    };
  };
  const result = getPagination(current, total, 5);

  return (
    <ListView className={`${className} list-unstyled`} css={cssObject}>
      {result.cPage === '1' ? (
        <ListItem className="p-2" css={disableColorObject}>
          <Button>&laquo;</Button>
        </ListItem>
      ) : (
        <ListItem className="p-2">
          <Button>&laquo;</Button>
        </ListItem>
      )}
      {result.pageList.map((item) =>
        String(item) === result.cPage ? (
          <ListItem className="p-2" css={selectColorObject}>
            <Button onClick={paginationItemOnClick}>{item}</Button>
          </ListItem>
        ) : (
          <ListItem className="p-2">
            <Button>{item}</Button>
          </ListItem>
        ),
      )}
      {result.cPage === result.tPages ? (
        <ListItem className="p-2" css={disableColorObject}>
          <Button>&raquo;</Button>
        </ListItem>
      ) : (
        <ListItem className="p-2">
          <Button>&raquo;</Button>
        </ListItem>
      )}
    </ListView>
  );
}

Pagination.defaultProps = {
  current: '13',
  total: '14',
  className: '',
  css: emotionCss({}),
  paginationItemOnClick: {},
};

Pagination.propTypes = {
  current: PropTypes.string,
  total: PropTypes.string,
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  // eslint-disable-next-line react/forbid-prop-types
  paginationItemOnClick: PropTypes.object,
};

export default Pagination;
