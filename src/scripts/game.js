import getShuffleEmojis from "./emojis.js";

export default function createGame({ views, values }) {
  const emojis = getShuffleEmojis();

  const createBoard = () => {
    const boardItems = emojis.reduce((container, emoji) => {
        container.appendChild(createBoardItem(emoji))
        return container
    }, document.createDocumentFragment())

    views.board.appendChild(boardItems)
  };

  const createBoardItem = (emoji) => {
    const element = document.createElement("p");
    element.classList.add("game__board-item");
    element.textContent = emoji;
    return element;
  };

  const init = () => {
    console.log("Gloria")
    createBoard()
  };

  return {
    init,
  };
}
