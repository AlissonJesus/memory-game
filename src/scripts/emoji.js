const emojis = ["😍", "😢", "😎", "💋", "😁", "🤣", "💕", "😒", "🐱‍👤", "🤢"];

import { shuffleItems  } from "./utils.js";

const createEmojiObjectsId = (id, emoji) => ({ id, emoji });

const createEmojisList = (emojis) => {
  return emojis.map((emoji, indice) => createEmojiObjectsId(indice + 1, emoji));
};

function getShuffleEmojis() {
  const emojiList = createEmojisList(emojis);
  const duplicateEmojis = [...emojiList, ...emojiList];
  const scrambledEmojis = shuffleItems(duplicateEmojis);
  console.log(scrambledEmojis);

  return scrambledEmojis;
}

export default getShuffleEmojis;
