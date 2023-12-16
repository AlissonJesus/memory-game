const randomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

export const shuffleItems = (items) => {
  const scrambledItems = [...items];
  for (let i = scrambledItems.length - 1; i > 0; i--) {
    const num = randomNumber(i);
    [scrambledItems[i], scrambledItems[num]] = [
      scrambledItems[num],
      scrambledItems[i],
    ];
  }
  return scrambledItems;
};
