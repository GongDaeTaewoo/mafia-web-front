import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import image from '../../assets/images/mafia_icon.svg';
import theme from '../../styles/theme';
import RankListView from '../organisms/RankListView';

/** @jsxImportSource @emotion/react */

function RankDetail({ className, css }) {
  const data = [
    {
      imageSrc: image,
      rank: 1,
      cards: [
        { id: 1, title: '손흥민', content: 'KILLER' },
        {
          id: 2,
          title: '통합 (1700 / 2100)',
          content: '직업 (90 / 100)',
        },
      ],
      total: 100,
      value: 90,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 2,
      cards: [
        { id: 1, title: '박지성', content: '포커페이스' },
        {
          id: 2,
          title: '통합 (538 / 900)',
          content: '직업 (85 / 100)',
        },
      ],
      total: 100,
      value: 85,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 3,
      cards: [
        { id: 1, title: '황희찬', content: '억울해' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (80 / 100)' },
      ],
      total: 100,
      value: 80,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 4,
      cards: [
        { id: 1, title: '김민재', content: '불사신' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (65 / 100)' },
      ],
      total: 100,
      value: 65,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 5,
      cards: [
        { id: 1, title: '김연아', content: '럭키가이' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (63 / 100)' },
      ],
      total: 100,
      value: 63,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 6,
      cards: [
        { id: 1, title: '홍길동', content: '지석진' },
        {
          id: 2,
          title: '통합 (638 / 1000)',
          content: '직업 (50 / 100)',
        },
      ],
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 7,
      cards: [
        { id: 1, title: '홍길순', content: '정치경찰' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (40 / 100)' },
      ],
      total: 100,
      value: 40,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 8,
      cards: [
        { id: 1, title: '짱구', content: '돌팔이' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (30 / 100)' },
      ],
      total: 100,
      value: 30,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 9,
      cards: [
        { id: 1, title: '짱아', content: '코난' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (20 / 100)' },
      ],
      total: 100,
      value: 20,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 10,
      cards: [
        { id: 1, title: '흰둥이', content: '순경' },
        { id: 2, title: '통합 (638 / 1000)', content: '직업 (15 / 100)' },
      ],
      total: 100,
      value: 15,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
  ];
  const cssObject = emotionCss({}, css);
  return (
    <RankListView
      categories={['마피아', '시민', '경찰', '의사']}
      // divisions={['순위', '프로필', '이름', '전적', '승률']}
      categories={['마피아', '시민', '경찰', '의사']}
      // divisions={['순위', '프로필', '이름', '전적', '승률']}
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
