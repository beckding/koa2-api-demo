/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-25 15:44:29
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2023-03-07 14:09:59
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\middleware\auth.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { tokenExpiredError, invalidToken, hasNotAdminPermission } = require('../constant/err.type')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const auth = async (ctx, next) => {
  const { authorization='' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
    // console.log(token)
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        console.error('token已过期', error)
        return ctx.app.emit('error', tokenExpiredError, ctx)

      case 'JsonWebTokenError':
        console.error('无效的token', error)
        return ctx.app.emit('error', invalidToken, ctx)
    }
  }
  await next()
}
const hadAdminPermission = async (ctx, next) => {
  const { is_admin } = ctx.state.user
  if (!is_admin) {
    console.error('该用户没有管理员权限', ctx.state.user)
    return ctx.app.emit('error', hasNotAdminPermission, ctx)
  }
  await next()
}
module.exports = {
  auth,
  hadAdminPermission
}
