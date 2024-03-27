import React from 'react';
import { useParams } from 'react-router-dom';
// import Button from '../components/atoms/Button';
import SearchPageTemplate from '../components/templates/SerachPageTemplate';

/** @jsxImportSource @emotion/react */

function SearchPage() {
  const { page } = useParams();
  const dataList = [
    {
      name: '김태우',
      odds: 99,
      title: '마피아의 신',
    },
    {
      name: '정우용',
      odds: 40,
      title: '정치경찰',
    },
    {
      name: '임주현',
      odds: 88,
      title: '살아있는 동의보감',
    },
    {
      name: '강지훈',
      odds: 10,
      title: '바보',
    },
    {
      name: '김태우2',
      odds: 99,
      title: '마피아의 신',
    },
    {
      name: '정우용2',
      odds: 40,
      title: '정치경찰',
    },
    {
      name: '임주현2',
      odds: 88,
      title: '살아있는 동의보감',
    },
    {
      name: '강지훈2',
      odds: 10,
      title: '바보',
    },
    {
      name: '김태우3',
      odds: 99,
      title: '마피아의 신',
    },
    {
      name: '정우용3',
      odds: 40,
      title: '정치경찰',
    },
    {
      name: '임주현3',
      odds: 88,
      title: '살아있는 동의보감',
    },
    {
      name: '강지훈3',
      odds: 10,
      title: '바보',
    },
    {
      name: '김태우4',
      odds: 99,
      title: '마피아의 신',
    },
    {
      name: '정우용4',
      odds: 40,
      title: '정치경찰',
    },
    {
      name: '임주현4',
      odds: 88,
      title: '살아있는 동의보감',
    },
    {
      name: '강지훈4',
      odds: 10,
      title: '바보',
    },
  ];

  return (
    <SearchPageTemplate
      dataList={dataList}
      className="justify-content-center"
      nowPage={page}
    />
  );
}

export default SearchPage;
