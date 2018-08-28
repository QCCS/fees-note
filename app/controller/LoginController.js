/**
 * Created by zhouli on 18/8/23
 */
const login = require('../service/user/LoginService');
async function loginController(ctx) {
    let data = ctx.request.body;
    console.log(data);
    let res = await login(data.phone, data.password);
    console.log(res);
    ctx.body = res;
    if (ctx.body.status === 0) {
        // koa-session
        // ctx.session.userinfo = ctx.body.data.userId;
        // console.log(ctx.session.userinfo);
        // 退出时 ctx.session = null
        ctx.cookies.set('userId', `${ctx.body.data.userId}`, {
            maxAge: 7 * 24 * 3600 * 1000
        });
    }
}
module.exports = loginController;
