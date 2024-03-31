import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import SearchPageTemplate from '../components/templates/SerachPageTemplate';
import getProfilesByPage from '../axios/apis/profile';
/** @jsxImportSource @emotion/react */

const loadProfileByUserId = (page, setProfile) => {
  getProfilesByPage(page).then((response) => {
    const profiles = response.data.body;
    setProfile(profiles);
  });
};

function SearchPage() {
  const params = useParams();
  const Page = params.page;
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    loadProfileByUserId(Page, setProfiles);
  }, []);

  const DataList = [];
  profiles.forEach((profile) => {
    DataList.push({
      name: profile.userName,
      winningRate: profile.winningRate,
      title: '마피아의 신',
    });
  });

  return (
    <SearchPageTemplate
      dataList={DataList}
      className="justify-content-center"
      nowPage={Number(Page)}
    />
  );
}

export default SearchPage;
