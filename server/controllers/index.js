const controllers = [
  'api',
  'default',
];

const load = (app) => {
  controllers.forEach((name) => { require(`./${name}`).use(app); });
};

module.exports = load;
