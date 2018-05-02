const { debug } = require('winston');
const BaseController = require('express-base-class');

const { random } = require('../modules/utils');
const dictionary = require('../../dictionary');

const handleError = (res, logger, text) => {
  logger(text);
  res.status(400).send(text);
};

class ApiController extends BaseController {
  checkQuery({ query }, res, next) {
    const { type } = query;
    const sendError = (error) => handleError(res, debug, error);
    if (!type || !dictionary[type]) return sendError('`type` query parameter missing');
    if (!type || !dictionary[type]) return sendError('dictionary of this type doesn\'t exist');
    next();
  }

  respond({ query }, res) {
    const { type } = query;
    const list = dictionary[type];
    res.send(random(list));
  }

  attachRoutes() {
    const { checkQuery, respond } = this;
    this.get('/api/dictionary', checkQuery, respond);
  }
}

module.exports = new ApiController();
