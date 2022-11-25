/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 20:57:22
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-18 21:24:09
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\db\seq.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { Sequelize } = require('sequelize')

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default')
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
})

// seq
//   .authenticate()
//   .then(() => {
//     console.log('数据库连接成功')
//   })
//   .catch(err => {
//     console.log('数据库连接失败', err)
//   })

module.exports = seq
