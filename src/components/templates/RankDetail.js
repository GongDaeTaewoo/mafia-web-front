import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import image from '../../assets/images/mafia_icon.svg';
import theme from '../../styles/theme';
import RankListView from '../organisms/RankListView';
// import RankListView from '../organisms/RankListView';

/** @jsxImportSource @emotion/react */

function RankDetail({ className, css }) {
  const data = [
    {
      imageSrc: image,
      rank: 1,
      cards: [
        { id: 1, title: 'title', content: 'content' },
        { id: 2, title: 'title', content: 'content' },
      ],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 2,
      cards: [{ id: 2, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 3,
      cards: [{ id: 3, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 4,
      cards: [{ id: 4, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 5,
      cards: [{ id: 5, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 6,
      cards: [{ id: 6, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 7,
      cards: [{ id: 7, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 8,
      cards: [{ id: 8, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 9,
      cards: [{ id: 9, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 10,
      cards: [{ id: 10, title: 'title', content: 'content' }],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
  ];
  const cssObject = emotionCss({}, css);
  return (
    <RankListView
      currentPage={2}
      totalPage={13}
      listItems={data}
      css={cssObject}
      className={className}
    />
  );
}

RankDetail.defaultProps = {
  className: '',
  css: emotionCss({}),
};

RankDetail.propTypes = {
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default RankDetail;
