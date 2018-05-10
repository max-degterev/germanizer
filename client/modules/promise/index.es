import omit from 'lodash/omit';

export const RESOLVED = 'RESOLVED';
export const REJECTED = 'REJECTED';

export const resolved = (type) => `${type}_${RESOLVED}`;
export const rejected = (type) => `${type}_${REJECTED}`;

export const middleware = () => (
  (next) => (
    (action) => {
      if (!action.promise) return next(action);

      const { promise, type } = action;
      const cleanAction = omit(action, 'promise');

      next({ ...cleanAction });

      promise
        .then((payload) => next({ ...cleanAction, type: resolved(type), payload }))
        .catch((payload) => next({ ...cleanAction, type: rejected(type), payload }));

      return promise;
    }
  )
);
