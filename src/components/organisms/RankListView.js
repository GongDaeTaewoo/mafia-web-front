import React from 'react';
import PropTypes, { string } from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import Button from '../atoms/Button';
import RankCardListView from './RankCardListView';
import Text from '../atoms/Text';

/** @jsxImportSource @emotion/react */

function RankListView({
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
    css,
  );

  return (
    <ListView className={`list-group ${className} p-0`} css={cssObject}>
      <div className="d-flex row m-0">
        {categories.map((category) => (
          <Button
            className="col-3 col-sm-2"
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
              color={theme.color.MAFIA_WHITE}
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
      <div
        className="row py-3 m-0"
        css={emotionCss({
          color: theme.color.MAFIA_WHITE,
          backgroundColor: theme.color.MAFIA_ITEM,
          borderBottom: `1px solid ${theme.color.MAFIA_BACKGROUND}`,
        })}
      >
        <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 mx-3 p-0 d-flex justify-content-center">
          순위
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1 mx-4 p-0 d-flex justify-content-center">
          프로필
        </div>
        <div className="col ">
          <div className="row">
            <div className="col-3 col-sm-0 col-md-3 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center p-0">
              이름
            </div>
            <div className="col-3 col-sm-5 col-md-6 col-lg-5 col-xl-6 col-xxl-6 d-flex justify-content-center p-0">
              전적
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 col-xxl-2 d-flex justify-content-center p-0">
              승률
            </div>
          </div>
        </div>
      </div>
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
