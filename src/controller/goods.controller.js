/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-28 16:42:02
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2023-03-07 14:03:36
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\controller\goods.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const { fileUploadError } = require('../constant/err.type')
class GoodsController {
  async upload(ctx, next) {
    console.log('files', ctx.request.files.file)
    const { file } = ctx.request.files
    if (file) {
      ctx.body = {
        code: 0,
        msg: '商品图片上传成功',
        data: {
          goods_img: path.basename(file.filepath)
        }
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
}
module.exports = new GoodsController()
