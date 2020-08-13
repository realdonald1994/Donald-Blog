/**
 * @name: adminauth
 * @author: Zhongxu(Donald)
 * @date: 13/08/2020 12:33
 * @description：adminauth
 */
module.exports = options =>{
  return async function adminauth(ctx,next){
    if(ctx.session.openId){
      await next()
    }else{
      ctx.body={data:'not login'}
    }
  }
}