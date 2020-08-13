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

}

module.exports = MainController
