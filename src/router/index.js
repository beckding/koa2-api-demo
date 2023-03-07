/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-28 16:46:40
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2023-03-06 13:55:24
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const Router = require('koa-router')

const router = new Router()

fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router
