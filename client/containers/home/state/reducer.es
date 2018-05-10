import updeep from 'updeep';
import { resolved } from '../../../modules/promise';

import * as types from './types';

const getDefaultState = () => ({
  words: [],
});


export default (state = getDefaultState(), action) => {
  switch (action.type) {
    case resolved(types.WORDS_GET): {
      const { result: words } = action.payload;
      return updeep({ words }, state);
    }
    default: {
      return state;
    }
  }
};
