const sortByFirstLetter = (a, b) => a.charAt(0) > b.charAt(0);

const parseType = (type = '') => {
  const types = type.split(',');
  types.sort(sortByFirstLetter);
  return types;
};

module.exports = { parseType };
