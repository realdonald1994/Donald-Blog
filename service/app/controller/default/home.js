/**
 * @name: home
 * @author: Zhongxu(Donald)
 * @date: 11/08/2020 19:54
 * @description：home
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api'
  }
}

module.exports = HomeController;
