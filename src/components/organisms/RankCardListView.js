import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import CardBody from '../molecules/CardBody';
import ListItem from '../atoms/ListItem';
import Rank from '../molecules/Rank';
import ImageView from '../atoms/ImageView';

/** @jsxImportSource @emotion/react */

function RankCardListView({ children, imageSrc, cards, className, css, rank }) {
  const cssObject = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_ITEM,
      borderColor: theme.color.MAFIA_CONTAINER,
      ':hover': { backgroundColor: theme.color.MAFIA_LIGHT_GRAY },
    },
    css,
  );

  const getRankVariant = (variant) => {
    switch (variant) {
      case 1:
        return theme.rankVariant.FIRST;
      case 2:
        return theme.rankVariant.SECOND;
      case 3:
        return theme.rankVariant.THIRD;
      default:
        return theme.rankVariant.DEFAULT;
    }
  };

  const content = (
    <div className="row h-100 p-0 m-0 d-flex align-items-center">
      {cards.map((card) => (
        <div className="col" key={card.id}>
          <CardBody
            title={card.title}
            content={card.content}
            imageSrc={card.imageSrc}
            fontCss={emotionCss({
              fontSize: '12px',
              '@media (min-width: 768px)': {
                fontSize: '15px',
              },
            })}
          />
        </div>
      ))}
      {children && (
        <div className="row col ms-auto" css={emotionCss({ maxWidth: '8rem' })}>
          {children}
        </div>
      )}
    </div>
  );
  return (
    <ListItem className={`${className} list-group-item`} css={cssObject}>
      <div className="row p-0 w-100">
        <Rank
          variant={getRankVariant(rank)}
          fontSize="4rem"
          className="col-1 p-0 img-fluid mx-3"
        >
          {rank}
        </Rank>
        <ImageView
          src={imageSrc}
          className="col-3 p-0 img-fluid mx-4"
          css={emotionCss({
            maxWidth: '4rem',
            minWidth: '2rem',
            '@media (min-width: 480px)': {
              maxWidth: '6rem',
            },
            '@media (min-width: 900px)': {
              maxWidth: '8rem',
            },
          })}
        />
        <div className="col">{content}</div>
      </div>
    </ListItem>
  );
}

RankCardListView.defaultProps = {
  children: undefined,
  imageSrc: undefined,
  cards: [],
  className: '',
  css: emotionCss({}),
  rank: 0,
};

RankCardListView.propTypes = {
  children: PropTypes.node,
  imageSrc: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.string,
      content: PropTypes.string,
      imageSrc: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  rank: PropTypes.number,
};

export default RankCardListView;
