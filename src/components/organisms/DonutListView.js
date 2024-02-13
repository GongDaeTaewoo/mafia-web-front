import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import ContentListItem from './ContentListItem';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

/** @jsxImportSource @emotion/react */

function DonutListView({
  title,
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
    <ListView className={`list-group ${className}`} css={cssObject}>
      {title && (
        <Text
          variant={theme.fontVariant.H5}
          color={theme.color.MAFIA_WHITE}
          className="ps-3 pt-1"
        >
          {title}
        </Text>
      )}
      {listItems.map((listItem) => (
        <Button
          onClick={() => {
            onListItemClick(listItem.id);
          }}
          css={emotionCss({ textAlign: 'start', width: '100%' })}
        >
          <ContentListItem
            imageSrc={listItem.imageSrc}
            title={listItem.title}
            content={listItem.content}
            key={listItem.id}
          >
            <DonutBar
              value={listItem.value}
              total={listItem.total}
              unit={listItem.unit}
              css={emotionCss({ minHeight: '3rem', minWidth: '3rem' })}
            />
          </ContentListItem>
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

DonutListView.defaultProps = {
  title: undefined,
  currentPage: 1,
  totalPage: 1,
  onListItemClick: () => {},
  onPaginationItemClick: () => {},
  className: '',
  css: emotionCss({}),
};

DonutListView.propTypes = {
  title: PropTypes.string,
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
    }),
  ).isRequired,
  onListItemClick: PropTypes.func,
  onPaginationItemClick: PropTypes.func,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default DonutListView;
