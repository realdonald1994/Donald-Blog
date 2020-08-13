/**
 * @name: apiUrl
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 22:30
 * @description：apiUrl
 */
let ipUrl = 'http://localhost:7001/admin/'

let servicePath = {
  checkLogin:ipUrl+'checkLogin',
  getTypeInfo:ipUrl+'getTypeInfo',
  addArticle:ipUrl+'addArticle',
  updateArticle:ipUrl+'updateArticle',
  getArticleList:ipUrl+'getArticleList',
  delArticle:ipUrl+'delArticle/',
}

export default servicePath