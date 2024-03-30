import { atom } from 'recoil';

const userinfoState = atom({
  key: 'userinfoState',
  default: { id: undefined, email: undefined },
});

export default userinfoState;
