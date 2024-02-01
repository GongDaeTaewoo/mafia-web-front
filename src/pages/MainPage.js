import React from 'react';
import Text from '../components/atoms/Text';
import Pagination from '../components/molecules/Pagination';

function MainPage() {
  const onItemClick = (current) => {
    alert(`${current}번째 클릭 됨`);
  };

  const prevItemClick = (prev) => {
    alert(`${prev} 페이지로 이동합니다.`);
  };

  const nextItemClick = (next) => {
    alert(`${next} 페이지로 이동합니다.`);
  };

  return (
    <div>
      MainPage
      <Text>aaa</Text>
      <Pagination
        current="11"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current="10"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current="9"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current="8"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current="1"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current="14"
        total="14"
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
    </div>
  );
}

export default MainPage;
