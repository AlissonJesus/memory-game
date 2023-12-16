import getShuffleEmojis from "./emoji.js";

export default function createGame({ views, values }) {
  const emojis = getShuffleEmojis();

  const createBoard = () => {
    const boardItems = emojis.reduce((container, emoji) => {
      container.appendChild(createBoardItem(emoji));
      return container;
    }, document.createDocumentFragment());

    views.board.appendChild(boardItems);
  };

  const createBoardItem = ({ emoji, id }) => {
    const element = document.createElement("p");
    element.classList.add("game__board-item");
    element.setAttribute("data-id", id);
    element.textContent = emoji;
    return element;
  };

  const resetGame = () => {
  }

  const init = () => {
    createBoard();
  };

  return {
    init,
  };
}
