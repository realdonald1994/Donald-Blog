/**
 * @name: default
 * @author: Zhongxu(Donald)
 * @date: 11/08/2020 19:56
 * @description：default
 */

module.exports = app =>{
  const {router,controller} = app
  router.get('/default/index',controller.default.home.index)
  router.get('/default/getArticleList',controller.default.home.getArticleList)
  router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
}