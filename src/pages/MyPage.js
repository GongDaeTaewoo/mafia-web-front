import React from 'react';
import ProfileCard from '../components/organisms/ProfileCard';
import mafiaIcon from '../assets/images/mafia_icon.svg';
import ImageCardListView from '../components/organisms/ImageCardListView';
import theme from '../styles/theme';
import DonutListView from '../components/organisms/DonutListView';
import Break from '../components/atoms/Break';
import ToggleListView from '../components/organisms/ToggleListView';
import heart from '../assets/images/toggle/heart.svg';
import unheart from '../assets/images/toggle/unheart.svg';

function MyPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col m-3">
          <ProfileCard
            playerName="홍길동"
            playerTitle="포커페이스"
            imageSrc={mafiaIcon}
            message="안녕하세요"
            editable
          />
        </div>
        <Break />
        <DonutListView
          className="col m-3"
          title="직업 승률"
          listItems={[
            {
              id: 1,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '시민', content: '마피아 적중률 60%' }],
              value: 8,
              total: 12,
              unit: theme.donutBarUnit.FRACTION,
            },
            {
              id: 2,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '마피아', content: '살해 성공률 60%' }],
              value: 10,
              total: 20,
              unit: theme.donutBarUnit.FRACTION,
            },
            {
              id: 3,
              imageSrc: mafiaIcon,
              cards: [
                {
                  id: 1,
                  title: '의사',
                  content: '마피아 적중률 60%\n치료 성공률 60%',
                },
              ],
              value: 22,
              total: 25,
              unit: theme.donutBarUnit.FRACTION,
            },
            {
              id: 4,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '경찰', content: '마피아 적중률 60%' }],
              value: 2,
              total: 8,
              unit: theme.donutBarUnit.FRACTION,
            },
          ]}
        />
        <Break />
        <ImageCardListView
          className="col m-3"
          title="방명록"
          currentPage={10}
          totalPage={14}
          editable
          listItems={[
            {
              id: 1,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '김길동', content: '안녕' }],
            },
            {
              id: 2,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '이길동', content: '안녕하세요' }],
            },
            {
              id: 3,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '박길동', content: '안녕' }],
            },
            {
              id: 4,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '박길동', content: '안녕' }],
            },
            {
              id: 5,
              imageSrc: mafiaIcon,
              cards: [{ id: 1, title: '박길동', content: '안녕' }],
            },
          ]}
        />
      </div>
      <div className="row">
        <div className="col col-lg-4">
          <ToggleListView
            className="row mb-3"
            title="팔로우"
            currentPage={10}
            totalPage={14}
            toggledSrc={heart}
            untoggledSrc={unheart}
            listItems={[
              {
                id: 1,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: false,
              },
              {
                id: 2,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: true,
              },
              {
                id: 3,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: false,
              },
            ]}
          />
          <ToggleListView
            className="row mb-3"
            title="팔로워"
            currentPage={10}
            totalPage={14}
            toggledSrc={heart}
            untoggledSrc={unheart}
            listItems={[
              {
                id: 1,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: false,
              },
              {
                id: 2,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: true,
              },
              {
                id: 3,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '김길동', content: '자기소개' }],
                toggled: false,
              },
            ]}
          />
          <ImageCardListView
            className="row mb-3"
            title="업적"
            currentPage={10}
            totalPage={14}
            editable
            listItems={[
              {
                id: 1,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '업적명', content: '취득 조건' }],
              },
              {
                id: 2,
                imageSrc: mafiaIcon,
                cards: [{ id: 1, title: '업적명', content: '취득 조건' }],
              },
            ]}
          />
        </div>
        <Break />
        <div className="col col-lg-8">
          <ImageCardListView
            className="col"
            title="게임 이력"
            currentPage={10}
            totalPage={14}
            listItems={[
              {
                id: 1,
                imageSrc: mafiaIcon,
                cards: [
                  { id: 1, title: '직업', content: '마피아' },
                  { id: 2, title: '결과', content: '승리' },
                  { id: 3, title: '전체 라운드', content: '12 round' },
                  { id: 4, title: '생존 라운드', content: '12 round' },
                ],
              },
              {
                id: 2,
                imageSrc: mafiaIcon,
                cards: [
                  { id: 1, title: '직업', content: '마피아' },
                  { id: 2, title: '결과', content: '승리' },
                  { id: 3, title: '전체 라운드', content: '12 round' },
                  { id: 4, title: '생존 라운드', content: '12 round' },
                ],
              },
              {
                id: 3,
                imageSrc: mafiaIcon,
                cards: [
                  { id: 1, title: '직업', content: '마피아' },
                  { id: 2, title: '결과', content: '승리' },
                  { id: 3, title: '전체 라운드', content: '12 round' },
                  { id: 4, title: '생존 라운드', content: '12 round' },
                ],
              },
              {
                id: 4,
                imageSrc: mafiaIcon,
                cards: [
                  { id: 1, title: '직업', content: '마피아' },
                  { id: 2, title: '결과', content: '승리' },
                  { id: 3, title: '전체 라운드', content: '12 round' },
                  { id: 4, title: '생존 라운드', content: '12 round' },
                ],
              },
              {
                id: 5,
                imageSrc: mafiaIcon,
                cards: [
                  { id: 1, title: '직업', content: '마피아' },
                  { id: 2, title: '결과', content: '승리' },
                  { id: 3, title: '전체 라운드', content: '12 round' },
                  { id: 4, title: '생존 라운드', content: '12 round' },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
