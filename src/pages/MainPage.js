import React from 'react';
import Text from '../components/atoms/Text';
import Pagination from '../components/organisms/Pagination';

function MainPage() {
  return (
    <div>
      MainPage
      <Text>aaa</Text>
      <Pagination current="11" total="14" className="bg-dark text-light" />
      <br />
      <Pagination current="10" total="14" className="bg-dark text-light" />
      <br />
      <Pagination current="9" total="14" className="bg-dark text-light" />
      <br />
      <Pagination current="8" total="14" className="bg-dark text-light" />
      <br />
      <Pagination current="1" total="14" className="bg-dark text-light" />
      <br />
      <Pagination current="14" total="14" className="bg-dark text-light" />
      <br />
    </div>
  );
}

export default MainPage;
