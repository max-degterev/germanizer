import * as types from './types';

export const addWord = (type) => ({
  type: types.WORD_ADD,
  request: {
    query: { type },
    url: '/api/dictionary',
  },
});

export const getWords = (keys) => ({
  type: types.WORDS_GET,
  request: {
    query: { type: keys.join(',') },
    url: '/api/dictionary',
  },
});

export const removeWord = (index) => ({
  type: types.WORD_REMOVE,
  meta: { index },
});
