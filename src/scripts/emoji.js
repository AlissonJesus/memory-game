const emojis = ["😍", "😢", "😎", "💋", "😁", "🤣", "💕", "😒", "🐱‍👤", "🤢"];

import { shuffleItems } from "./utils.js";

const createEmojiObjectsId = (id, emoji) => {
  return {
    id,
    emoji,
    emojiCopyPosition: 0,
    setPositionCopyEmoji(position) {
      this.emojiCopyPosition = position;
    },
  };
};

const createEmojisList = (emojis) => {
  return emojis.map((emoji, indice) => createEmojiObjectsId(indice + 1, emoji));
};

function getShuffleEmojis() {
  const emojiList = createEmojisList(emojis);
  const duplicateEmojis = [...emojiList, ...emojiList];

  const scrambledEmojis = shuffleItems(duplicateEmojis);

  return { scrambledEmojis, emojiList };
}

export default getShuffleEmojis;
