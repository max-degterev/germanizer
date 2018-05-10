const BaseController = require('express-base-class');

class DefaultController extends BaseController {
  default(req, res) {
    res.render('index');
  }
  attachRoutes() {
    this.get('*', this.default);
  }
}

module.exports = new DefaultController();
