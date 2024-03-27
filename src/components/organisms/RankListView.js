import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import Button from '../atoms/Button';
import RankCardListView from './RankCardListView';
import Text from '../atoms/Text';
import ListItem from '../atoms/ListItem';

/** @jsxImportSource @emotion/react */

function RankListView({
  categories,
  categories,
  currentPage,
  totalPage,
  listItems,
  onListItemClick,
  onPaginationItemClick,
  className,
  css,
}) {
  const cssObject = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_CONTAINER,
      borderTopLeftRadius: '25px',
      borderTopRightRadius: '25px',
    },
    {
      backgroundColor: theme.color.MAFIA_CONTAINER,
      borderTopLeftRadius: '25px',
      borderTopRightRadius: '25px',
    },
    css,
  );
  const [activeCategory, setActiveCategory] = useState(null);
  const handleClick = (e) => {
    setActiveCategory(e);
  };
  return (
    <ListView className={`list-group ${className} p-0`} css={cssObject}>
      <div className="d-flex row m-0 nav-item">
        {categories.map((category) => (
          <Button
            key={category}
            className={`col-3 col-sm-2 nav-link ${category === activeCategory ? 'active' : ''}`}
            onClick={() => handleClick(category)}
            data-toggle="tab"
            css={emotionCss({
              ':hover > *': {
                color: theme.color.MAFIA_LIGHT_GRAY,
                fontWeight: theme.fontWeight.BOLD,
              },

              ':hover ::after': {
                width: '100%',
              },
            })}
          >
            <Text
              variant={theme.fontVariant.H5}
              color={
                category === activeCategory
                  ? theme.color.MAFIA_LIGHT_GRAY
                  : theme.color.MAFIA_WHITE
              }
              fontWeight={
                category === activeCategory ? theme.fontWeight.BOLDER : ''
              }
              className="px-4 pt-4 pb-3"
              css={emotionCss({
                borderRadius: '30px',
                position: 'relative',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  width: '0',
                  height: '4px',
                  backgroundColor: theme.color.MAFIA_LIGHT_GRAY,
                  transform: 'translate(-50%)',
                  transition: 'width 0.3s',
                },
              })}
            >
              {category}
            </Text>
          </Button>
        ))}
      </div>

      <ListItem
        className="d-flex m-0 list-group-item w-100"
        css={emotionCss({
          color: theme.color.MAFIA_WHITE,
          backgroundColor: theme.color.MAFIA_ITEM,
          border: '0px',
          borderBottom: `1px solid ${theme.color.MAFIA_BACKGROUND}`,
        })}
      >
        <div className="row p-0 w-100">
          <Text
            variant={theme.fontVariant.H6}
            color={theme.color.MAFIA_WHITE}
            className="mx-3 my-1 col-1 p-0 d-flex align-items-center justify-content-center"
          >
            순위
          </Text>
          <Text
            variant={theme.fontVariant.H6}
            color={theme.color.MAFIA_WHITE}
            className="my-1 col-1 p-0 d-flex align-items-center justify-content-center"
            css={emotionCss({
              margin: '0 8.5px',
              '@media (min-width: 480px)': {
                maxWidth: '6rem',
                margin: '0 15.5px',
              },
              '@media (min-width: 900px)': {
                maxWidth: '8rem',
                margin: '0 19.5px',
              },
            })}
          />
          <Text
            variant={theme.fontVariant.H6}
            color={theme.color.MAFIA_WHITE}
            className="my-1 col p-0 d-flex align-items-center justify-content-center"
          >
            이름
          </Text>
          <Text
            variant={theme.fontVariant.H6}
            color={theme.color.MAFIA_WHITE}
            className="my-1 col p-0 d-flex align-items-center justify-content-center"
          >
            전적
          </Text>
          <Text
            variant={theme.fontVariant.H6}
            color={theme.color.MAFIA_WHITE}
            className="my-1 col-2 p-0 d-flex align-items-center justify-content-center"
          >
            승률
          </Text>
        </div>
      </ListItem>
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
              css={emotionCss({ maxWidth: '5.5rem', minWidth: '2.6rem' })}
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
  categories: undefined,
  categories: undefined,
  currentPage: 1,
  totalPage: 1,
  onListItemClick: () => {},
  onPaginationItemClick: () => {},
  className: '',
  css: emotionCss({}),
};

RankListView.propTypes = {
  categories: PropTypes.arrayOf(string),
  categories: PropTypes.arrayOf(string),
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
