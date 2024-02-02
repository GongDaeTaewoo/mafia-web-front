import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import ListView from '../atoms/ListView';
import ContentListItem from './ContentListItem';
import DonutBar from '../atoms/DonutBar';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function DonutListView({ data, className, css }) {
  const cssObject = emotionCss(css);
  return (
    <ListView className={`list-group ${className}`} css={cssObject}>
      {data.map((item) => (
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
      ))}
    </ListView>
  );
}

DonutListView.defaultProps = {
  className: '',
  css: emotionCss({}),
};

DonutListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
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

export default DonutListView;
