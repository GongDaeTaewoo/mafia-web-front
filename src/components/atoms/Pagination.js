/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from './ListItem';
import ListView from './ListView';

/** @jsxImportSource @emotion/react */

function Pagination({ current, total, className, css }) {
  const cssObject = emotionCss({}, css);
  function test(currentPage, totalPages, itemsPerPage) {
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
  }
  const result = test(current, total, 5);
  console.log(result);
  return (
    <ListView className={className} css={cssObject}>
      {result.cPage === '1' ? (
        <ListItem className="bg-secondary">&laquo;</ListItem>
      ) : (
        <ListItem>&laquo;</ListItem>
      )}
      {result.pageList.map((e) =>
        e == result.cPage ? (
          <ListItem className="bg-light text-dark">{e}</ListItem>
        ) : (
          <ListItem>{e}</ListItem>
        ),
      )}
      {result.cPage === result.tPages ? (
        <ListItem className="bg-secondary">&raquo;</ListItem>
      ) : (
        <ListItem>&raquo;</ListItem>
      )}
    </ListView>
  );
}

Pagination.defaultProps = {
  current: '13',
  total: '14',
  className: '',
  css: emotionCss({}),
};

Pagination.propTypes = {
  current: PropTypes.string,
  total: PropTypes.string,
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default Pagination;
