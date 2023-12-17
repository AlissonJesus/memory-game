import createGameListener from "./Listeners.js";
import getShuffleEmojis from "./emoji.js";

export default function createGame({ views, values }) {
  const { scrambledEmojis, emojiList: emojis } = getShuffleEmojis();

  const listeners = createGameListener({views, values}, emojis);

  const createBoard = () => {
    const boardItems = scrambledEmojis.reduce((container, { id }) => {
      container.appendChild(createBoardItem(id));
      return container;
    }, document.createDocumentFragment());

    views.board.appendChild(boardItems);
  };

  const createBoardItem = (id) => {
    const element = document.createElement("p");
    element.classList.add("game__board-item");
    element.setAttribute("data-id", id);
    return element;
  };

  const init = () => {
    listeners.init();
    createBoard();
  };

  return {
    init,
  };
}
