/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-25 15:44:29
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:24:40
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\middleware\auth.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { tokenExpiredError, invalidToken } = require('../constant/err.type')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header
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

module.exports = {
  auth
}
