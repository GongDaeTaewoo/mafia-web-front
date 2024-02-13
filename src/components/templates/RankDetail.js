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
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 2,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 3,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 4,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 5,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 6,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 7,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 8,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 9,
      title: 'title',
      content: 'content',
      total: 100,
      value: 50,
      unit: theme.donutBarUnit.PERCENTAGE,
    },
    {
      imageSrc: image,
      rank: 10,
      title: 'title',
      content: 'content',
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
