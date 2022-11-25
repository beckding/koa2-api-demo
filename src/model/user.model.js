/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-18 21:28:52
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-18 21:49:31
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\model\user.model.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const User = seq.define('zd_user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员， 0：不是管理员（默认），1：是管理员'
  }
})

// 强制同步数据库（创建数据表，已存在，先删除再创建）
// User.sync({
//   force: true
// })

module.exports = User
