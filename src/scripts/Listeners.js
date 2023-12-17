const createGameListener = ({ views, values }, emojis) => {
  const board = views.board;

  const onClickBoard = () => {
    board.addEventListener(
      "click",
      onClickBoardEvent({ views, values }, emojis)
    );
  };

  const resetGame = () => {
    views.reset.addEventListener("click", () => {
      window.location.reload();
    });
  };

  const init = () => {
    resetGame();
    onClickBoard();
  };

  return {
    init,
  };
};


const onClickBoardEvent = (stateGame, emojis) => {
  const event = ({ target: item }) => {
    const views = stateGame.views;
    const values = stateGame.values;

    const isInvisibleItem = item.textContent !== "";
    if (isInvisibleItem) return;

    const itemId = item.dataset.id;
    const emoji = findEmojiById(itemId, emojis);
    displayContentItem(item, emoji);

    if (values.isFirstRound) {
      values.isFirstRound = false;
      values.previousItem = item;
      return;
    }

    const previusItemId = values.previousItem.dataset.id;

    const areEmojisNotEquals = previusItemId !== itemId;
    if (areEmojisNotEquals) {
      views.board.removeEventListener(
        "click", event
      );

      setTimeout(() => {
        clearEmojisDisplayById([values.previousItem, item]);
        views.board.addEventListener(
          "click",
          onClickBoardEvent(stateGame, emojis)
        );
      }, 1000);
    }
    values.isFirstRound = true;
  };

  return event
}
  

const clearEmojisDisplayById = (items) => {
  items.forEach((item) => {
    displayContentItem(item, "");
  });
};

const findEmojiById = (id, emojis) => {
  const { emoji } = emojis.find((emoji) => emoji.id == id);
  return emoji;
};

const displayContentItem = (item, text) => {
  item.textContent = text;
};

export default createGameListener;
