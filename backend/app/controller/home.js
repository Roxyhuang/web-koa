'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      ctx.set('Access-Control-Allow-Origin', '*');
      ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      ctx.set('Access-Control-Allow-Credentials', 'true');
      const data = yield ctx.service.home.find();
      ctx.body = data;
    }
  }
  return HomeController;
};
