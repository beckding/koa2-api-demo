/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-24 09:28:08
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:52:27
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\middleware\user.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const {
  userFormatError,
  userExist,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
} = require('../constant/err.type')

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  // 已存在
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户名已存在', { user_name })
      ctx.app.emit('error', userExist, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body

  const salt = bcrypt.genSaltSync(10)
  // hash 保存的是密文
  const hash = bcrypt.hashSync(password, salt)

  ctx.request.body.password = hash
  await next()
}

const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在（不存在：报错）
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUserInfo({ user_name })

    if (!res) {
      console.log('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }

    // 2. 密码是否匹配（不匹配：报错）
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (error) {
    console.error('error', error)
    ctx.app.emit('error', userLoginError, ctx)
    return
  }

  await next()
}
module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin
}
