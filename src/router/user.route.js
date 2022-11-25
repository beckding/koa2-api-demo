/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 16:52:02
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-24 17:06:12
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\router\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const Router = require('koa-router')

const { userValidator, verifyUser } = require('../middleware/user.middleware')
const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/user' })

router.post('/register', userValidator, verifyUser, register)

router.post('/login', login)

module.exports = router
