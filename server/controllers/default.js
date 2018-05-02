const BaseController = require('express-base-class');

const { formatError } = require('../modules/error');

class DefaultController extends BaseController {
  default(req, res) {
    res.status(404).send(formatError('Page doesn\'t exist'));
  }
  attachRoutes() {
    this.get('*', this.default);
  }
}

module.exports = new DefaultController();
