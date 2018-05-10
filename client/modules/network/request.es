import superagent from 'superagent';

export default (options = {}) => {
  if (!options.type) options.type = 'get';

  const request = superagent(options.type, options.url);

  request.set({ Accept: 'application/json' });
  if (['post', 'put'].includes(options.type)) request.set('Content-Type', 'application/json');

  if (options.query) request.query(options.query);
  if (options.payload) request.send(options.payload);

  const executor = (resolve, reject) => {
    request.end((error, response) => {
      const body = (response && response.body) ? response.body : {};
      body.statusCode = response && response.status ? parseInt(response.status, 10) : 500;

      const result = error ? reject : resolve;
      result(body);
    });
  };

  const promise = new Promise(executor);

  return { request, promise };
};
