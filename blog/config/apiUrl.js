/**
 * @name: apiUrl
 * @author: Zhongxu(Donald)
 * @date: 12/08/2020 11:49
 * @description：apiUrl
 */

let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList:ipUrl+'getArticleList',
  getArticleById:ipUrl+'getArticleById/',
  getTypeInfo:ipUrl+'getTypeInfo',
  getListById:ipUrl+'getListById/',
}

export default servicePath