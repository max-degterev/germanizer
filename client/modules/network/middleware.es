import omit from 'lodash/omit';
import createRequest from './request';
import { resolved, rejected } from '../promise';


export default (store) => (
  (next) => (
    (action) => {
      if (!action.request) return next(action);
      const { request, type } = action;
      const state = store.getState();

      // prevent unnecessary calls
      if (request.shouldRequest && !request.shouldRequest(state)) return Promise.resolve(null);
      const options = omit(request, 'shouldRequest');
      const promise = createRequest(options);

      promise
        .then((payload) => {
          const meta = { isNetworkActive: false, ...action.meta };
          next({ ...omit(action, 'request'), type: resolved(type), meta, payload });
        })
        .catch((payload) => {
          const meta = { isNetworkActive: false, ...action.meta };
          next({ ...omit(action, 'request'), type: rejected(type), meta, payload });
        });

      next({ ...omit(action, 'request'), meta: { isNetworkActive: true, ...action.meta } });
      return promise;
    }
  )
);
