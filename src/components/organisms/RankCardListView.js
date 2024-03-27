import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import CardBody from '../molecules/CardBody';
import ListItem from '../atoms/ListItem';
import RankListItem from '../molecules/RankListItem';

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
  const content = (
    <div className="row h-100 p-0 m-0">
      {cards.map((card) => (
        <div className="col" key={card.id}>
          <CardBody
            title={card.title}
            content={card.content}
            imageSrc={card.imageSrc}
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
  return imageSrc ? (
    <RankListItem
      src={imageSrc}
      className={className}
      css={cssObject}
      rank={rank}
    >
      {content}
    </RankListItem>
  ) : (
    <ListItem className={`${className} list-group-item`} css={cssObject}>
      {content}
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
