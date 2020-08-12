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
    this.ctx.body = 'api hi'
  }
  async getArticleList(){
    let sql = 'SELECT article.id as id ,'+
              'article.title as title ,'+
              'article.introduce as introduce ,'+
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ,"+
              'article.view_count as views ,'+
              'type.typeName as typeName '+
              'FROM article LEFT JOIN type ON article.type_id = type.Id'
    const res = await this.app.mysql.query(sql)
    this.ctx.body = {data:res}
  }
  async getArticleById(){
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
      'article.title as title,'+
      'article.introduce as introduce,'+
      'article.article_content as article_content,'+
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
      'article.view_count as view_count ,'+
      'type.typeName as typeName ,'+
      'type.id as typeId '+
      'FROM article LEFT JOIN type ON article.type_id = type.Id '+
      'WHERE article.id='+id

    const res = await this.app.mysql.query(sql)
    this.ctx.body = {data:res}
  }
}

module.exports = HomeController;
