/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-24 09:27:40
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:23:44
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\constant\err.type.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  userFormatError: {
    code: '10001',
    msg: '用户名或密码为空',
    data: null
  },
  userExist: {
    code: '10002',
    msg: '用户已存在',
    data: ''
  },
  userRegisterError: {
    code: '10003',
    msg: '用户注册错误',
    data: ''
  },
  userDoesNotExist: {
    code: '10004',
    msg: '用户不存在',
    data: ''
  },
  userLoginError: {
    code: '10005',
    msg: '用户登录失败',
    data: ''
  },
  invalidPassword: {
    code: '10006',
    msg: '密码不匹配',
    data: ''
  },
  tokenExpiredError: {
    code: '10101',
    msg: 'token已过期',
    data: ''
  },
  invalidToken: {
    code: '10102',
    msg: '无效的token',
    data: ''
  }
}
