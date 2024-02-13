import React from 'react';
import Text from '../components/atoms/Text';
import theme from '../styles/theme';
import Button from '../components/atoms/Button';
import Pagination from '../components/molecules/Pagination';
import Toggle from '../components/molecules/Toggle';
import heart from '../assets/images/toggle/heart.svg';
import unheart from '../assets/images/toggle/unheart.svg';
import mafiaIcon from '../assets/images/mafia_icon.svg';
import DonutListView from '../components/organisms/DonutListView';
import ToggleListView from '../components/organisms/ToggleListView';
import ImageCardListView from '../components/organisms/ImageCardListView';
import ProfileCard from '../components/organisms/ProfileCard';

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
    <div className="container">
      MainPage
      <ProfileCard
        playerName="홍길동"
        playerTitle="포커페이스"
        imageSrc={mafiaIcon}
        message="안녕하세요"
        editable
      />
      <ImageCardListView
        title="aaaaaaa"
        currentPage={10}
        totalPage={14}
        onListItemClick={(i) => alert(i)}
        listItems={[
          {
            id: 1,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
              { id: 2, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
          },
          {
            id: 2,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
          },
          {
            id: 3,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
          },
        ]}
      />
      <ToggleListView
        title="aaaaaaa"
        currentPage={10}
        totalPage={14}
        onListItemClick={(i) => alert(i)}
        toggledSrc={heart}
        untoggledSrc={unheart}
        listItems={[
          {
            id: 1,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            toggled: false,
          },
          {
            id: 2,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            toggled: true,
          },
          {
            id: 3,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            toggled: false,
          },
        ]}
      />
      <DonutListView
        title="aaaaaaa"
        currentPage={10}
        totalPage={14}
        onListItemClick={(i) => alert(i)}
        listItems={[
          {
            id: 1,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            value: 0.8,
            total: 1,
            unit: theme.donutBarUnit.PERCENTAGE,
          },
          {
            id: 2,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            value: 0.8,
            total: 1,
            unit: theme.donutBarUnit.PERCENTAGE,
          },
          {
            id: 3,
            imageSrc: mafiaIcon,
            cards: [
              { id: 1, title: 'aaa', content: 'aaa', imageSrc: mafiaIcon },
            ],
            value: 0.8,
            total: 1,
            unit: theme.donutBarUnit.PERCENTAGE,
          },
        ]}
      />
      <Button>button</Button>
      <Button variant={theme.buttonVariant.NORMAL} />
      <Toggle toggledSrc={heart} untoggledSrc={unheart} />
      <Text>aaa</Text>
      <Pagination
        current={11}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current={10}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current={9}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current={8}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current={1}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Pagination
        current={14}
        total={14}
        className="d-flex justify-content-center"
        prevItemClick={prevItemClick}
        paginationItemOnClick={onItemClick}
        nextItemClick={nextItemClick}
      />
      <br />
      <Button
        variant={theme.buttonVariant.NORMAL}
        fontSize={theme.fontSize.XS}
        onClick={() => console.log('테스트')}
      />
      <Button
        variant={theme.buttonVariant.REGIS}
        fontSize={theme.fontSize.SM}
      />
      <Button
        variant={theme.buttonVariant.IMG}
        fontSize={theme.fontSize.SM}
        onClick={() => console.log('테스트')}
      />
      <Button
        color={theme.color.MAFIA_BLUE}
        backgroundColor={theme.color.MAFIA_GOLD}
      >
        랜덤asd
      </Button>
    </div>
  );
}

export default MainPage;
