import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListItem from '../atoms/ListItem';
import ImageView from '../atoms/ImageView';
import theme from '../../styles/theme';
import Rank from './Rank';

/** @jsxImportSource @emotion/react */

function RankListItem({ children, src, className, css, rank }) {
  const cssObject = emotionCss(
    {
      backgroundColor: theme.color.MAFIA_ITEM,
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
  return (
    <ListItem className={`${className} list-group-item`} css={cssObject}>
      <div className="row p-0 w-100">
        <Rank
          variant={getRankVariant(rank)}
          fontSize="4rem"
          className="col-1 p-0 me-auto img-fluid ms-4"
        >
          {rank}
        </Rank>
        <ImageView
          src={src}
          className="col-2 p-0 me-auto img-fluid ms-2"
          css={emotionCss({ maxWidth: '8rem' })}
        />
        <div className="col">{children}</div>
      </div>
    </ListItem>
  );
}

RankListItem.defaultProps = {
  className: '',
  css: emotionCss({}),
  rank: 0,
};

RankListItem.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
  rank: PropTypes.number,
};

export default RankListItem;
