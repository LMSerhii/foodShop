import { common } from '../common';

const getRandomProduct = arrey => {
  const listRandomCards = [];
  const additionalList = [];

  while (listRandomCards.length < common.NUMBER_OF_DISCOUNT) {
    const randomNumber = Math.floor(Math.random() * arrey.length);
    if (additionalList.includes(randomNumber)) {
      continue;
    }
    additionalList.push(randomNumber);
    listRandomCards.push(arrey[randomNumber]);
  }

  return listRandomCards;
};

export { getRandomProduct };
