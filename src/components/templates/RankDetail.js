import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import image from '../../assets/images/mafia_icon.svg';
// import DonutListView from '../organisms/DonutListView';
import theme from '../../styles/theme';
import Pagination from '../molecules/Pagination';
import RankListView from '../organisms/RankListView';

/** @jsxImportSource @emotion/react */

function RankDetail({ className, css }) {
  const onItemClick = (current) => {
    // eslint-disable-next-line no-alert
    alert(`${current}번째 클릭 됨`);
  };

  const prevItemClick = (prev) => {
    // eslint-disable-next-line no-alert
    alert(`${prev} 페이지로 이동합니다.`);
  };

  const nextItemClick = (next) => {
    // eslint-disable-next-line no-alert
    alert(`${next} 페이지로 이동합니다.`);
  };
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
    <div className={className} css={cssObject}>
      <RankListView data={data} />
      <Pagination
        current="11"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
    </div>
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
