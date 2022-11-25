/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-24 17:14:53
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-24 17:21:32
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\app\errHandler.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break
    case '10002':
      status = 409
      break
    default:
      status = 500
  }
  ctx.status = status
  ctx.body = err
}
