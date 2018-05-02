const { debug } = require('winston');
const BaseController = require('express-base-class');

const { random } = require('../modules/utils');
const { isValidType } = require('../modules/validations');
const { parseType } = require('../modules/parsers');
const dictionary = require('../../dictionary');

const handleError = (res, logger, text) => {
  logger(text);
  res.status(400).send(text);
};

class ApiController extends BaseController {
  checkQuery({ query }, res, next) {
    const { type } = query;
    const sendError = (error) => handleError(res, debug, error);
    if (!isValidType(type)) return sendError('`type` query parameter invalid or missing');
    next();
  }

  respond({ query }, res) {
    const response = parseType(query.type).reduce((acc, key) => {
      acc[key] = random(dictionary[key]);
      return acc;
    }, {});
    res.send(response);
  }

  attachRoutes() {
    const { checkQuery, respond } = this;
    this.get('/api/dictionary', checkQuery, respond);
  }
}

module.exports = new ApiController();
