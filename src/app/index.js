/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 17:00:28
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-28 16:52:50
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\app\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const { koaBody } = require('koa-body')

const errHandler = require('./errHandler')
const router = require('../router')

const app = new Koa()
app.use(koaBody()).use(router.routes()).use(router.allowedMethods())
app.on('error', errHandler)
module.exports = app
