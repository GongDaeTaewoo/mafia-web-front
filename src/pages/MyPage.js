import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/organisms/ProfileCard';
import mafiaIcon from '../assets/images/mafia_icon.svg';
import ImageCardListView from '../components/organisms/ImageCardListView';
import theme from '../styles/theme';
import DonutListView from '../components/organisms/DonutListView';
import Break from '../components/atoms/Break';
import ToggleListView from '../components/organisms/ToggleListView';
import heart from '../assets/images/toggle/heart.svg';
import unheart from '../assets/images/toggle/unheart.svg';
import { getGameHistories } from '../axios/apis/game';
import { isNullOrUndefined, jobEnum, reformatDateTime } from '../utils';

const getGameResultMessage = (job, mafiaWon) => {
  if (isNullOrUndefined(job)) {
    return '미정';
  }
  if (job === jobEnum.MAFIA && mafiaWon) {
    return '승리';
  }
  if (job !== jobEnum.MAFIA && !mafiaWon) {
    return '승리';
  }
  return '패배';
};

const loadGameHistories = (userId, setGameHistories, page = 0, size = 5) => {
  getGameHistories(userId, page, size).then((response) => {
    let items = response.data.body.content;
    const pageNo = response.data.body.number;
    const totalPage = response.data.body.totalPages;
    const pageSize = response.data.body.size;

    items = items.map((item) => ({
      id: item.id,
      imageSrc: item.imageUrl || mafiaIcon,
      cards: [
        {
          id: 1,
          title: reformatDateTime(item.createdAt),
          content: `플레이 직업: ${jobEnum.toMessage(item.job)}`,
        },
        {
          id: 2,
          title: '결과',
          content: getGameResultMessage(item.job, item.mafiaWon),
        },
        { id: 3, title: '전체 라운드', content: item.totalRound },
        {
          id: 4,
          title: '최종 생존',
          content: item.survival ? '생존' : '사망',
        },
      ],
    }));
    setGameHistories({ items, pageNo, totalPage, pageSize });
  });
};

function MyPage() {
  const params = useParams();
  const userId = params.id;
  const [gameHistories, setGameHistories] = useState({
    items: [],
    pageNo: 0,
    pageSize: 10,
    totalPage: 1,
  });

  const onGameHistoryPaginationItemClick = (i) => {
    const page = i - 1;
    loadGameHistories(userId, setGameHistories, page);
  };

  useEffect(() => {
    loadGameHistories(userId, setGameHistories);
  }, []);
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
            currentPage={gameHistories.pageNo + 1}
            totalPage={gameHistories.totalPage}
            listItems={gameHistories.items}
            onPaginationItemClick={onGameHistoryPaginationItemClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
