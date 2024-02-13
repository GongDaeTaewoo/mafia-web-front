import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from '../atoms/ListItem';
import ListView from '../atoms/ListView';
import theme from '../../styles/theme';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function Pagination({ current, total, className, css, paginationItemOnClick }) {
  const cssObject = emotionCss(
    {
      margin: '0 auto',
      color: theme.color.MAFIA_WHITE,
      fontWeight: theme.fontWeight.BOLD,
    },
    css,
  );

  const textCssObject = emotionCss({
    color: theme.color.MAFIA_WHITE,
    fontWeight: theme.fontWeight.NORMAL,
  });

  const selectedTextCssObject = emotionCss({
    color: theme.color.MAFIA_RED,
    fontWeight: theme.fontWeight.BOLD,
  });

  const disabledTextCssObject = emotionCss({
    color: theme.color.MAFIA_LIGHT_GRAY,
    fontWeight: theme.fontWeight.NORMAL,
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

  const onPrevClick =
    result.pGroupLink === undefined
      ? () => {
          // eslint-disable-next-line no-alert
          alert('이전으로 이동할 페이지가 없습니다.');
        }
      : () => {
          paginationItemOnClick(result.pGroupLink);
        };
  const onNextClick =
    result.nGroupLink === undefined
      ? () => {
          // eslint-disable-next-line no-alert
          alert('다음으로 이동할 페이지가 없습니다.');
        }
      : () => {
          paginationItemOnClick(result.nGroupLink);
        };

  return (
    <ListView
      className={`list-unstyled row d-flex justify-content-center align-items-center ${className}`}
      css={cssObject}
    >
      <ListItem
        className="col d-flex justify-content-center align-items-center"
        key="left"
      >
        <Button onClick={onPrevClick}>
          <Text
            css={
              result.pGroupLink === undefined
                ? disabledTextCssObject
                : textCssObject
            }
          >
            &laquo;
          </Text>
        </Button>
      </ListItem>
      {result.pageList.map((item) => (
        <ListItem
          className="col d-flex justify-content-center align-items-center"
          key={item}
        >
          <Button
            variant={theme.buttonVariant.PAGE}
            onClick={() => {
              paginationItemOnClick(item);
            }}
          >
            <Text
              css={
                item === result.cPage ? selectedTextCssObject : textCssObject
              }
            >
              {item}
            </Text>
          </Button>
        </ListItem>
      ))}
      <ListItem
        className="col d-flex justify-content-center align-items-center"
        key="right"
      >
        <Button variant={theme.buttonVariant.PAGE} onClick={onNextClick}>
          <Text
            css={
              result.nGroupLink === undefined
                ? disabledTextCssObject
                : textCssObject
            }
          >
            &raquo;
          </Text>
        </Button>
      </ListItem>
    </ListView>
  );
}

Pagination.defaultProps = {
  current: 14,
  total: 14,
  className: '',
  css: emotionCss({}),
  paginationItemOnClick: () => {},
};

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  paginationItemOnClick: PropTypes.func,
};

export default Pagination;
