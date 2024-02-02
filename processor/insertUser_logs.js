const fs = require('fs');
const path = require('path');
const fn_query = require("./qure");
const moment = require('moment-timezone');

let fn_insertUser_logs = async function(ctx){
    let ip = ctx.headers['x-forwarded-for'] || ctx.socket.remoteAddress;
  if (ip === '::1') {
    ip = '127.0.0.1';
  }
  const timestamp = new Date();
  let datetime = moment(timestamp, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  let formattedDate = datetime.format('YYYY-MM-DD HH:mm:ss');
  console.log(`IP: ${ip}, Timestamp: ${formattedDate}`);
    let user_logs = await fn_query(
        `INSERT INTO user_logs (ip_address, visit_timestamp) VALUES ("${ip}","${formattedDate}");`
    )

    return 'success'

}

module.exports = fn_insertUser_logs;