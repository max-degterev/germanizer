const { debug } = require('winston');
const BaseController = require('express-base-class');

const { random } = require('../modules/utils');
const { isValidType } = require('../modules/validations');
const { parseType } = require('../modules/parsers');
const { formatError } = require('../modules/error');
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

  catchAll(req, res) {
    res.status(404).send(formatError('Page doesn\'t exist'));
  }

  attachRoutes() {
    const { checkQuery, respond, catchAll } = this;
    this.get('/api/dictionary', checkQuery, respond);
    this.get('/api/*', catchAll);
  }
}

module.exports = new ApiController();
