export const getURLSafeWord = (word, type) => {
  let cleanWord = word.split(',')[0];

  if (['nouns', 'nouns_wiktionary'].includes(type)) {
    cleanWord = cleanWord.replace(/(der|die|das)\s/, '').replace('(Pl.)', '');
  }

  return encodeURIComponent(cleanWord);
};
