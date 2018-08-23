const login = require('../service/user/LoginService');
async function loginController(ctx) {
    let data = ctx.request.body;
    ctx.body = await login(data.username, data.password);
    if (ctx.body.status === 0) {
        ctx.cookies.set('userId', `${ctx.body.data.userId}`, {
            maxAge: 7 * 24 * 3600 * 1000
        });
    }
}
module.exports = loginController;
