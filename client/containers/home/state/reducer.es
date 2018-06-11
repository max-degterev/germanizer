import updeep from 'updeep';
import { resolved } from '../../../modules/promise';

import * as types from './types';

const getDefaultState = () => ({
  words: [],
});


export default (state = getDefaultState(), action) => {
  switch (action.type) {
    case resolved(types.WORD_ADD): {
      const words = state.words.concat(action.payload.result);
      return updeep({ words }, state);
    }
    case resolved(types.WORDS_GET): {
      const { result: words } = action.payload;
      return updeep({ words }, state);
    }
    case types.WORD_REMOVE: {
      const { index } = action.meta;
      const words = [...state.words];
      words.splice(index, 1);
      return updeep({ words }, state);
    }
    case types.WORDS_RESET: {
      return updeep(getDefaultState(), state);
    }
    default: {
      return state;
    }
  }
};
