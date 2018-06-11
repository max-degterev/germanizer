const dictionary = require('../../../dictionary');
const { parseType } = require('../parsers');

const MAX_ITEMS = 10;

const isValidType = (type) => {
  if (!type) return false;
  const list = parseType(type);
  return list.length <= MAX_ITEMS && list.every((key) => Boolean(dictionary[key]));
};

module.exports = { isValidType };
