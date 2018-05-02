const dictionary = require('../../../dictionary');
const { parseType } = require('../parsers');

const isValidType = (type) => type && parseType(type).every((key) => Boolean(dictionary[key]));

module.exports = { isValidType };
