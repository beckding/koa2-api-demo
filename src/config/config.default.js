/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 16:28:50
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-17 16:37:19
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\config\config.default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.APP_PORT);

module.exports = process.env;
