import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import ContentListItem from './ContentListItem';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';
import Rank from '../molecules/Rank';
/** @jsxImportSource @emotion/react */

function RankListView({ data, className, css }) {
  const cssObject = emotionCss(css);
  return (
    <ListView className={`list-group ${className}`} css={cssObject}>
      {data.map((item) => {
        let rankComponent = '';
        switch (item.rank) {
          case 1:
            rankComponent = (
              <Rank variant={theme.rankVariant.FIRST}>{item.rank}</Rank>
            );
            break;
          case 2:
            rankComponent = (
              <Rank variant={theme.rankVariant.SECOND}>{item.rank}</Rank>
            );
            break;
          case 3:
            rankComponent = (
              <Rank variant={theme.rankVariant.SECOND}>{item.rank}</Rank>
            );
            break;
          default:
            rankComponent = (
              <Rank variant={theme.rankVariant.DEFAULT}>{item.rank}</Rank>
            );
        }
        return (
          <div
            className="d-flex"
            css={{ backgroundColor: theme.color.MAFIA_ITEM }}
          >
            {rankComponent}
            <ContentListItem
              imageSrc={item.imageSrc}
              title={item.title}
              content={item.content}
            >
              <DonutBar
                value={item.value}
                total={item.total}
                unit={item.unit}
                css={emotionCss({ minHeight: '3rem', minWidth: '3rem' })}
              />
            </ContentListItem>
          </div>
        );
      })}
    </ListView>
  );
}

RankListView.defaultProps = {
  className: '',
  css: emotionCss({}),
};

RankListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageSrc: PropTypes.string,
      value: PropTypes.number,
      total: PropTypes.number,
      unit: PropTypes.oneOf(Object.values(theme.donutBarUnit)),
    }),
  ).isRequired,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default RankListView;
