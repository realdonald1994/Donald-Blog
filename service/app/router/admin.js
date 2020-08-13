/**
 * @name: admin
 * @author: Zhongxu(Donald)
 * @date: 11/08/2020 19:56
 * @description：admin
 */

module.exports = app =>{
  const {router,controller} = app
  router.get('/admin/index',controller.admin.main.index)
  router.post('/admin/checkLogin',controller.admin.main.checkLogin)
}