import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import ContentListItem from './ContentListItem';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

/** @jsxImportSource @emotion/react */

function ImageCardListView({
  title,
  currentPage,
  totalPage,
  listItems,
  editable,
  onEdit,
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
      <div className="ps-3 pt-1">
        {title && (
          <Text
            variant={theme.fontVariant.H5}
            color={theme.color.MAFIA_WHITE}
            css={emotionCss({ display: 'inline-block' })}
          >
            {title}
          </Text>
        )}
        {editable && (
          <Button
            className="ms-2"
            onClick={() => {
              onEdit();
            }}
          >
            <Icon variant={theme.fontSize.XS} className="fas fa-pen" />
          </Button>
        )}
      </div>
      {listItems.map((listItem) => (
        <Button
          key={listItem.id}
          onClick={() => {
            onListItemClick(listItem.id);
          }}
          css={emotionCss({ textAlign: 'start', width: '100%' })}
        >
          <ContentListItem
            imageSrc={listItem.imageSrc}
            cards={listItem.cards}
          />
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

ImageCardListView.defaultProps = {
  title: undefined,
  currentPage: 1,
  totalPage: 1,
  editable: false,
  onEdit: () => {},
  onListItemClick: () => {},
  onPaginationItemClick: () => {},
  className: '',
  css: emotionCss({}),
};

ImageCardListView.propTypes = {
  title: PropTypes.string,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      imageSrc: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
          title: PropTypes.string,
          content: PropTypes.string,
          imageSrc: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  editable: PropTypes.bool,
  onEdit: PropTypes.func,
  onListItemClick: PropTypes.func,
  onPaginationItemClick: PropTypes.func,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ImageCardListView;
