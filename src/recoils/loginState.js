import { atom } from 'recoil';

const loginState = atom({
  key: 'loginState',
  default: { id: undefined, email: undefined },
});

export default loginState;
