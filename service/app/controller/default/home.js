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
    let result = await this.app.mysql.get("blog_content",{})
    console.log(result)
    this.ctx.body = result
  }
}

module.exports = HomeController;
