/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-28 16:43:09
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-28 16:43:56
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\service\goods.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Goods = require('../model/goods.model')
class GoodsService {
  async createGoods(goods_name, password) {
    // todo: 写入数据库
    const res = await Goods.create({
      goods_name,
      password
    })
    console.log(res)
    return res.dataValues
  }
  async getGoodsInfo({ id, goods_name, password, is_admin }) {
    const whereOpt = {}
    id && Object.assign(whereOpt, { id })
    goods_name && Object.assign(whereOpt, { goods_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    const res = await Goods.findOne({
      attributes: ['id', 'goods_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
  async goodsLogin(goods_name, password) {
    // todo: 写入数据库
    const res = await Goods.query({
      goods_name,
      password
    })
    console.log(res)
    return res
  }
  async updateById({ id, goods_name, password, is_admin }) {
    // todo: 写入数据库
    const whereOpt = { id }
    const newGoods = {}
    goods_name && Object.assign(newGoods, { goods_name })
    password && Object.assign(newGoods, { password })
    is_admin && Object.assign(newGoods, { is_admin })
    const res = await Goods.update(newGoods, {
      where: whereOpt
    })
    console.log(res)
    return res[0] > 0 ? true : false
  }
}

module.exports = new GoodsService()
