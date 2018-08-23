//模块路由
const register = require('../service/user/RegisterService');
const Router = require('koa-router');
const registerRouter = new Router();

async function registerController(ctx) {
    let data = ctx.request.body;
    ctx.body = await register(data.name, data.password, data.phone);
}
registerRouter.post('/register', registerController);
module.exports = registerRouter;

//这样用的时候，就直接 app.use(registerRouter)