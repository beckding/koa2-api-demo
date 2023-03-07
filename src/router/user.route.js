/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 16:52:02
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-26 16:39:24
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\router\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const Router = require('koa-router')

const { userValidator, verifyUser, crpytPassword, verifyLogin } = require('../middleware/user.middleware')
const { auth } = require('../middleware/auth.middleware')
const { register, login, changePassword } = require('../controller/user.controller')

const router = new Router({ prefix: '/user' })

router.post('/register', userValidator, verifyUser, crpytPassword, register)

router.post('/login', userValidator, verifyLogin, login)

// 修改密码
router.patch('/updatePassword', auth, crpytPassword, changePassword)

module.exports = router
