/**
 * Created by zhouli on 18/8/23
 */
const jwt = require('jsonwebtoken');
const login = require('../service/user/LoginService');
const config = require('../config/config.dev');
async function loginController(ctx) {
    let data = ctx.request.body;
    let res = await login(data.phone, data.password);
    if (res.status === 0) {
        // 查询成功
        // koa-session
        // ctx.session.userinfo = ctx.body.data.userId;
        // console.log(ctx.session.userinfo);
        // 退出时 ctx.session = null
        // 详情见 https://github.com/QCCS/koa-project.git
        let userToken = res.data;
        let access_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '1h'}) ;
        let refresh_token = jwt.sign(userToken, config.secret.sign, {expiresIn: '168h'}) ;
        res.data.access_token = access_token;
        res.data.refresh_token = refresh_token;
        //把这个token，加到登陆接口的响应体里面去
        ctx.body = res;
    }
}
module.exports = loginController;
