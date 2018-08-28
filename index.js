/**
 * Created by zhouli on 18/8/23
 * 启动服务
 * 使用中间件
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
// const session = require('koa-generic-session');
const config = require('./app/config/config.dev');
const router = require('./app/route/router');
const indexController = require('./app/controller/index');

const routerForAllow = new Router();
const port = process.env.PORT || config.port;
const app = new Koa();

//配置session的中间件
/*cookie的签名
app.keys = ['json119'];
const sessionConfig = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
};
app.use(session(sessionConfig, app));
*/

//日志处理
app.use(logger());
//请求体处理
app.use(bodyParser());
//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});
app.use(indexController)
    .use(router.router.routes())//公共路由
    .use(router.registerRouter.routes())//模块级别路由
    .use(routerForAllow.allowedMethods());
app.listen(port, () => console.log('Listening on port ' + port));
