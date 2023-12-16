const randomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1))
  }

  const shuffleItems = (items) => {
    const scrambledItems = [...items]
    for (let i = scrambledItems.length - 1; i > 0; i--) {
        const num = randomNumber(i);
        [scrambledItems[i], scrambledItems[num]] = [scrambledItems[num], scrambledItems[i]]
    }
    return scrambledItems
  }

  

  function getShuffleEmojis() {
    const emojis = ["😍","😢","😎","💋","😁","🤣","😍","😒"];
    const duplicateEmojis = [...emojis, ...emojis]
    const scrambledEmojis = shuffleItems(duplicateEmojis)
    return scrambledEmojis
  }

export default getShuffleEmojis