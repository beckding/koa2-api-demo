/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 20:42:10
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:50:12
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\service\user.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const User = require('../model/user.model')
class UserService {
  async createUser(user_name, password) {
    // todo: 写入数据库
    const res = await User.create({
      user_name,
      password
    })
    console.log(res)
    return res.dataValues
  }
  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
  async userLogin(user_name, password) {
    // todo: 写入数据库
    const res = await User.query({
      user_name,
      password
    })
    console.log(res)
    return res
  }
  async updateById({ id, user_name, password, is_admin }) {
    // todo: 写入数据库
    const whereOpt = { id }
    const newUser = {}
    user_name && Object.assign(newUser, { user_name })
    password && Object.assign(newUser, { password })
    is_admin && Object.assign(newUser, { is_admin })
    const res = await User.update(newUser, {
      where: whereOpt
    })
    console.log(res)
    return res[0] > 0 ? true : false
  }
}

module.exports = new UserService()
