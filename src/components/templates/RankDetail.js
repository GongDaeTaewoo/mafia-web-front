import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import image from '../../assets/images/mafia_icon.svg';
import theme from '../../styles/theme';
import RankListView from '../organisms/RankListView';
// import shape from '../../assets/images/certificate.svg';
// import RankListView from '../organisms/RankListView';

/** @jsxImportSource @emotion/react */

function RankDetail({ className, css }) {
  const data = [
    {
      imageSrc: image,
      rank: 1,
      cards: [
        { id: 1, title: '손흥민' },
        { id: 2, title: '100전 90 승 10패' },
      ],
      total: 100,
      value: 90,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 2,
      cards: [
        { id: 2, title: '박지성' },
        { id: 2, title: '100전 85승 15패' },
      ],
      total: 100,
      value: 85,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 3,
      cards: [
        { id: 3, title: '황희찬' },
        { id: 2, title: '100전 80승 20패' },
      ],
      total: 100,
      value: 80,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 4,
      cards: [
        { id: 4, title: '김민재' },
        { id: 2, title: '100전 65승 35패' },
      ],
      total: 100,
      value: 65,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 5,
      cards: [
        { id: 5, title: '김연아' },
        { id: 2, title: '100전 63승 37패' },
      ],
      total: 100,
      value: 63,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 6,
      cards: [
        { id: 6, title: '홍길동' },
        { id: 2, title: '100전 50승 50패' },
      ],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 7,
      cards: [
        { id: 7, title: '홍길순' },
        { id: 2, title: '100전 40승 60패' },
      ],
      total: 100,
      value: 40,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 8,
      cards: [
        { id: 8, title: '짱구' },
        { id: 2, title: '100전 30승 70패' },
      ],
      total: 100,
      value: 30,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 9,
      cards: [
        { id: 9, title: '짱아' },
        { id: 2, title: '100전 20승 80패' },
      ],
      total: 100,
      value: 20,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 10,
      cards: [
        { id: 10, title: '흰둥이' },
        { id: 2, title: '100전 15승 85패' },
      ],
      total: 100,
      value: 15,
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
