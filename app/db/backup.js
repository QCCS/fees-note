/**
 * Created by zhouli on 18/8/24
 * 备份数据
 */

const cmd = require('node-cmd');
// cmd.run('ls');

const config = require('../config/config.dev.js');
mysqlConf = config.mysql;
let nowDate = new Date();
let suffix = "-" + nowDate.getFullYear() + (nowDate.getMonth() + 1) + nowDate.getDate() + "-" +
    nowDate.getHours() +":"+ nowDate.getMinutes() +":"+ nowDate.getSeconds();
let backCmd = "mysqldump -u" + mysqlConf.user + " -p" +
    mysqlConf.password + " -B " +
    mysqlConf.database + " > " +
    "app/db/" + mysqlConf.database + suffix + ".sql";
console.log("备份数据：");
cmd.get(backCmd,
    function (err, data, stderr) {
        console.log(stderr);
        if (!err) {
            console.log("备份完成")
        } else {
            console.log('error', err)
        }
    }
);

