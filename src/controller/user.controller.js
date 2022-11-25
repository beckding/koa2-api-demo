/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 17:10:11
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-24 17:32:12
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\controller\user.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { createUser } = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')
class UserController {
  async register(ctx, next) {
    ctx.body = '用户注册'
    const { user_name, password } = ctx.request.body
    try {
      const res = await createUser(user_name, password)
      ctx.body = {
        code: 0,
        msg: 'success',
        data: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (err) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async login(ctx, next) {
    ctx.body = '用户登录'
    const { user_name, password } = ctx.request.body

    const res = await userLogin(user_name, password)
    ctx.body = {
      code: 0,
      msg: 'success',
      data: {
        id: res.id,
        user_name: res.user_name
      }
    }
  }
}
module.exports = new UserController()
