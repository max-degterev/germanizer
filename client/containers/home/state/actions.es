import * as types from './types';

export const getWords = (words) => ({
  type: types.WORDS_GET,
  request: {
    query: {
      type: words.join(','),
    },
    url: '/api/dictionary',
  },
});
