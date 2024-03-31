export const isNullOrUndefined = (value) =>
  value === null || value === undefined;

export const reformatDate = (text) => {
  const date = new Date(text);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

export const reformatTime = (text) => {
  const date = new Date(text);
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const reformatDateTime = (text) =>
  `${reformatDate(text)} ${reformatTime(text)}`;

export const jobEnum = {
  CITIZEN: 'CITIZEN',
  MAFIA: 'MAFIA',
  DOCTOR: 'DOCTOR',
  POLICE: 'POLICE',
};

const toMessage = {
  CITIZEN: '시민',
  MAFIA: '마피아',
  DOCTOR: '의사',
  POLICE: '경찰',
};

jobEnum.toMessage = (value) => toMessage[value];
