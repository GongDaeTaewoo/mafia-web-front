import { atom } from 'recoil';

const jwtState = atom({
  key: 'jwtState',
  default: '',
});

export default jwtState;
