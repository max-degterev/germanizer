import { setSession } from '../../../modules/session';
import * as types from './types';


export const addWord = (key) => (
  (dispatch, getState) => {
    const selected = (getState().session.selected || []).concat([key]);
    dispatch(setSession({ selected }));
    dispatch({
      type: types.WORD_ADD,
      request: {
        query: { type: key },
        url: '/api/dictionary',
      },
    });
  }
);

export const getWords = (keys) => ({
  type: types.WORDS_GET,
  request: {
    query: { type: keys.join(',') },
    url: '/api/dictionary',
  },
});

export const removeWord = (key) => (
  (dispatch, getState) => {
    const { home, session } = getState();
    const index = home.words.indexOf(key);
    const selected = [...(session.selected || [])];

    selected.splice(index, 1);
    dispatch(setSession({ selected }));

    dispatch({
      type: types.WORD_REMOVE,
      meta: { index },
    });
  }
);
