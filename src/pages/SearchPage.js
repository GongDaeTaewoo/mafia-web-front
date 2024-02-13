import React from 'react';
// import Button from '../components/atoms/Button';
import SearchPageTemplate from '../components/templates/SerachPageTemplate';
/** @jsxImportSource @emotion/react */

function SearchPage() {
  const dataList = [
    {
      name: 'aa',
      odds: 'bb',
      title: 'cc',
    },
    {
      name: 'aa',
      odds: 'bb',
      title: 'cc',
    },
    {
      name: 'aa',
      odds: 'bb',
      title: 'cc',
    },
    {
      name: 'aa',
      odds: 'bb',
      title: 'cc',
    },
  ];

  return (
    <SearchPageTemplate
      dataList={dataList}
      className="justify-content-center"
    />
  );
}

export default SearchPage;
