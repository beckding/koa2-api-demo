/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 17:10:11
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:51:24
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\controller\user.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require('jsonwebtoken')
const { createUser, getUserInfo, updateById } = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')
const { JWT_SECRET } = require('../config/config.default')
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
    // 1.获取用户信息（在token的payload中，记录id,user_name,is_admin）
    try {
      // 从返回结果中剔除password，剩余属性放到res对象中
      const { password, ...res } = await getUserInfo({ user_name })
      ctx.body = {
        code: 0,
        msg: '登录成功',
        data: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
        }
      }
    } catch (error) {
      console.error('用户登录失败', error)
    }
  }

  async changePassword(ctx, next) {
    // 1回获取数据
    const id = ctx.state.user.id
    const password = ctx.request.body.password
    console.log(id, password)
    // 2操作数据
    if (await updateById({ id, password })) {
      ctx.body = {
        code: 0,
        msg: '修改成功',
        data: ''
      }
    } else {
      ctx.body = {
        code: '10007',
        msg: '修改失败',
        data: ''
      }
    }
    // 3返回结果
  }
}
module.exports = new UserController()
