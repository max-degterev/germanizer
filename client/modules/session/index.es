import updeep from 'updeep';
// node-safe local storage
import ls from 'local-storage-adapter';

const NAME = 'session';

export const types = {
  SESSION_SET: 'SESSION_SET',
};

export const actions = {
  setSession(payload) {
    return { type: types.SESSION_SET, payload };
  },
};

export const restoreSession = () => ls.get(NAME);
export const persistSession = (payload) => ls.set(NAME, payload);

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.SESSION_SET: {
      if (action.payload === null) return {};

      const nextState = updeep(action.payload, state);
      persistSession(nextState);
      return nextState;
    }
    default: {
      return state;
    }
  }
};
