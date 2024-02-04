import React from 'react';
import Text from '../components/atoms/Text';
import theme from '../styles/theme';
import Button from '../components/atoms/Button';

function MainPage() {
  return (
    <div>
      MainPage
      <Text>aaa</Text>
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
        color={theme.color.MAFIA_BLUE}
        backgroundColor={theme.color.MAFIA_GOLD}
      >
        랜덤asd
      </Button>
    </div>
  );
}

export default MainPage;
