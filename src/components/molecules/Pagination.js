import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from '../atoms/ListItem';
import ListView from '../atoms/ListView';
import theme from '../../styles/theme';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function Pagination({
  current,
  total,
  className,
  css,
  prevItemClick,
  paginationItemOnClick,
  nextItemClick,
}) {
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
    const prevGroupLink = groupIndex > 0 ? startPage - 1 : undefined;

    // 다음 그룹으로 이동할 링크 추가
    const nextGroupLink =
      (groupIndex + 1) * itemsPerPage < totalPages ? endPage + 1 : undefined;

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
      <ListItem css={disableColorObject} key="left">
        <Button
          variant={theme.buttonVariant.PAGE}
          onClick={
            result.pGroupLink === undefined
              ? () => {
                  alert('이전으로 이동할 페이지가 없습니다.');
                }
              : () => {
                  prevItemClick(result.pGroupLink);
                }
          }
          color={
            result.cPage === '1'
              ? theme.color.MAFIA_LIGHT_GRAY
              : theme.color.MAFIA_WHITE
          }
          backgroundColor={theme.color.MAFIA_BACKGROUND}
        >
          &laquo;
        </Button>
      </ListItem>
      {result.pageList.map((item) =>
        String(item) === result.cPage ? (
          <ListItem key={item} css={selectColorObject}>
            <Button
              variant={theme.buttonVariant.PAGE}
              onClick={() => {
                paginationItemOnClick(item);
              }}
              backgroundColor={theme.color.MAFIA_BACKGROUND}
              fontWeight={theme.fontWeight.BOLDER}
            >
              {item}
            </Button>
          </ListItem>
        ) : (
          <ListItem key={item}>
            <Button
              variant={theme.buttonVariant.PAGE}
              onClick={() => {
                paginationItemOnClick(item);
              }}
              color={theme.color.MAFIA_WHITE}
              backgroundColor={theme.color.MAFIA_BACKGROUND}
            >
              {item}
            </Button>
          </ListItem>
        ),
      )}
      <ListItem css={disableColorObject} key="right">
        <Button
          variant={theme.buttonVariant.PAGE}
          onClick={
            result.nGroupLink !== undefined
              ? () => {
                  nextItemClick(String(result.nGroupLink));
                }
              : () => {
                  alert('다음으로 이동할 페이지가 없습니다.');
                }
          }
          color={
            result.cPage === result.tPages
              ? theme.color.MAFIA_LIGHT_GRAY
              : theme.color.MAFIA_WHITE
          }
          backgroundColor={theme.color.MAFIA_BACKGROUND}
        >
          &raquo;
        </Button>
      </ListItem>
    </ListView>
  );
}

Pagination.defaultProps = {
  current: '14',
  total: '14',
  className: '',
  css: emotionCss({}),
  prevItemClick: () => {},
  paginationItemOnClick: () => {},
  nextItemClick: () => {},
};

Pagination.propTypes = {
  current: PropTypes.string,
  total: PropTypes.string,
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  prevItemClick: PropTypes.func,
  paginationItemOnClick: PropTypes.func,
  nextItemClick: PropTypes.func,
};

export default Pagination;
