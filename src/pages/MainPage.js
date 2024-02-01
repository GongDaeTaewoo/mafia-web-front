import React from 'react';
import Text from '../components/atoms/Text';
import Pagination from '../components/molecules/Pagination';

function MainPage() {
  const onItemClick = (i) => {
    alert(`${i}번째 클릭 됨`);
  };

  return (
    <div>
      MainPage
      <Text>aaa</Text>
      <Pagination
        current="11"
        total="14"
        className="d-flex justify-content-center"
        paginationItemOnClick={onItemClick}
      />
      {/* <br />
      <Pagination
        current="10"
        total="14"
        className="d-flex justify-content-center"
        listViewCallBack={test}
      />
      <br />
      <Pagination
        current="9"
        total="14"
        className="d-flex justify-content-center"
        listViewCallBack={test}
      />
      <br />
      <Pagination
        current="8"
        total="14"
        className="d-flex justify-content-center"
        listViewCallBack={test}
      />
      <br />
      <Pagination
        current="1"
        total="14"
        className="d-flex justify-content-center"
        listViewCallBack={test}
      />
      <br />
      <Pagination
        current="14"
        total="14"
        className="d-flex justify-content-center"
        listViewCallBack={test}
      />
      <br /> */}
    </div>
  );
}

export default MainPage;
