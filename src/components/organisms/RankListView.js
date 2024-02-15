import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import Button from '../atoms/Button';
import RankCardListView from './RankCardListView';

/** @jsxImportSource @emotion/react */

function RankListView({
  currentPage,
  totalPage,
  listItems,
  onListItemClick,
  onPaginationItemClick,
  className,
  css,
}) {
  const cssObject = emotionCss(
    { backgroundColor: theme.color.MAFIA_CONTAINER },
    css,
  );

  return (
    <ListView className={`list-group ${className} p-0`} css={cssObject}>
      {listItems.map((listItem) => (
        <Button
          onClick={() => {
            onListItemClick(listItem.id);
          }}
          css={emotionCss({
            textAlign: 'start',
            width: '100%',
            display: 'flex',
            backgroundColor: theme.color.MAFIA_ITEM,
          })}
        >
          <RankCardListView
            imageSrc={listItem.imageSrc}
            cards={listItem.cards}
            key={listItem.id}
            className="border-0 w-100 d-flex"
            rank={listItem.rank}
          >
            <DonutBar
              value={listItem.value}
              total={listItem.total}
              unit={listItem.unit}
              css={emotionCss({ minHeight: '3rem', minWidth: '3rem' })}
            />
          </RankCardListView>
        </Button>
      ))}
      {totalPage !== 1 && (
        <Pagination
          current={currentPage}
          total={totalPage}
          paginationItemOnClick={onPaginationItemClick}
          className="pb-1"
        />
      )}
    </ListView>
  );
}

RankListView.defaultProps = {
  currentPage: 1,
  totalPage: 1,
  onListItemClick: () => {},
  onPaginationItemClick: () => {},
  className: '',
  css: emotionCss({}),
};

RankListView.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.string,
      content: PropTypes.string,
      imageSrc: PropTypes.string,
      value: PropTypes.number,
      total: PropTypes.number,
      unit: PropTypes.oneOf(Object.values(theme.donutBarUnit)),
      rank: PropTypes.number,
    }),
  ).isRequired,
  onListItemClick: PropTypes.func,
  onPaginationItemClick: PropTypes.func,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default RankListView;
