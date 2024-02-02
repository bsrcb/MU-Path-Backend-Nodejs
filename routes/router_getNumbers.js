const fn_getNumbers = require("../controller/get_numbers");
const fn_insertUser_logs = require("../processor/insertUser_logs");

module.exports = function router_getAllHistoryInfo(router) {
  router.get("/get_numbers", async function (ctx, next) {
    console.log(ctx.request.body);
    let user_logs=await fn_insertUser_logs(ctx);
    let historyInfo = await fn_getNumbers(ctx);
    ctx.response.body = historyInfo;
  });
};