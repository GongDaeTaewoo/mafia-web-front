import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import theme from '../../styles/theme';
import CardBody from '../molecules/CardBody';
import ListItem from '../atoms/ListItem';
import ImageListItem from '../molecules/ImageListItem';

/** @jsxImportSource @emotion/react */

function ContentListItem({ children, imageSrc, cards, className, css }) {
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
    <ImageListItem src={imageSrc} className={className} css={cssObject}>
      {content}
    </ImageListItem>
  ) : (
    <ListItem className={`${className} list-group-item`} css={cssObject}>
      {content}
    </ListItem>
  );
}

ContentListItem.defaultProps = {
  children: undefined,
  imageSrc: undefined,
  cards: [],
  className: '',
  css: emotionCss({}),
};

ContentListItem.propTypes = {
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
};

export default ContentListItem;
