/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-28 16:41:05
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-28 16:41:25
 * @FilePath: \dyywpt-webd:\codes\gitcode\koa2-api-demo\src\router\goods.route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Router = require('koa-router')

// const { goodsValidator, verifyUser, crpytPassword, verifyLogin } = require('../middleware/goods.middleware')
// const { auth } = require('../middleware/auth.middleware')
const { upload, login, changePassword } = require('../controller/goods.controller')

const router = new Router({ prefix: '/goods' })

router.post('/upload', upload)

router.post('/login', goodsValidator, verifyLogin, login)

// 修改密码
router.patch('/', auth, crpytPassword, changePassword)

module.exports = router
