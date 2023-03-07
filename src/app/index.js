/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 17:00:28
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2023-03-07 14:17:49
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\app\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const Koa = require('koa')
const { koaBody } = require('koa-body')
const KoaStatic = require('koa-static')

const errHandler = require('./errHandler')
const router = require('../router')

const app = new Koa()

app
  .use(
    koaBody({
      multipart: true, //上传功能
      formidable: {
        uploadDir: path.join(__dirname, '../upload'), //不推荐使用相对路径(相对路径相对的process.cwd())
        keepExtensions: true
      }
    })
  )
  .use(router.routes())
  .use(router.allowedMethods())
  .use(KoaStatic(path.join(__dirname, '../upload')))//静态资源路径配置，把上传的文件进行回显
app.on('error', errHandler)
module.exports = app
