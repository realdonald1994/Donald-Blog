/**
 * @name: default
 * @author: Zhongxu(Donald)
 * @date: 11/08/2020 19:56
 * @description：default
 */

module.exports = app =>{
  const {router,controller} = app
  router.get('/default/index',controller.default.home.index)
}