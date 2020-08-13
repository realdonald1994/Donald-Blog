/**
 * @name: main
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 21:12
 * @description：main
 */
'use strict'

const Controller = require('egg').Controller

class MainController extends Controller{
  async index(){
    this.ctx.body='hi api'
  }

  async checkLogin(){
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql =`SELECT userName FROM admin_user WHERE userName = '${userName}'  AND password = '${password}'`
    const result = await this.app.mysql.query(sql)
    if(result.length>0){
      let openId = new Date().getTime()
      this.ctx.session.openId ={'openId':openId}
      this.ctx.body = {data:'success',openId:openId}
    }else{
      this.ctx.body = {data:'failed'}
    }
  }


  async getTypeInfo(){
    const result = await this.app.mysql.select('type')
    this.ctx.body={data:result}
  }

  async addArticle(){
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article',tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insetId = result.insertId

    this.ctx.body = {
      isSuccess:insertSuccess,
      insertId:insetId
    }
  }

  async updateArticle(){
    let tempArticle = this.ctx.request.body
    const result  = await this.app.mysql.update('article',tempArticle)
    const updateSuccess = result.affectedRows ===1
    this.ctx.body = {
      isSuccess:updateSuccess
    }
  }

  async getArticleList(){
    let sql = 'SELECT article.id as id ,'+
      'article.title as title ,'+
      'article.introduce as introduce ,'+
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ,"+
      'article.view_count as view_count ,'+
      'type.typeName as typeName '+
      'FROM article LEFT JOIN type ON article.type_id = type.Id '+
      'order by article.id DESC'

    const res = await this.app.mysql.query(sql)
    this.ctx.body ={data:res}
  }

  async delArticle(){
    let id = this.ctx.params.id
    const res = await this.app.mysql.delete('article',{id:id})
    this.ctx.body = {data:res}
  }

}

module.exports = MainController
