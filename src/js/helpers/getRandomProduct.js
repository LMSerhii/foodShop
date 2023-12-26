const numberElements = 2;

const getRandomProduct = arrey => {
  const listRandomCards = [];

  for (let i = 0; i < numberElements; i++) {
    const randomNumber = Math.floor(Math.random() * arrey.length);
    listRandomCards.push(arrey[randomNumber]);
  }

  return listRandomCards;
};

export { getRandomProduct };
