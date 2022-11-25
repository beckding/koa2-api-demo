/*
 * @Author: beckding beckdingq@163.com
 * @Date: 2022-11-17 16:13:48
 * @LastEditors: beckding beckdingq@163.com
 * @LastEditTime: 2022-11-17 17:05:04
 * @FilePath: \dyywpt-webd:\codes\local\koa2-api\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { APP_PORT } = require("./config/config.default");

const app = require("./app");

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
