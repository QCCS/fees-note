/*
* 启动服务
* 使用中间件
* */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');

const config = require('./app/config/config.dev.js');
const router = require('./app/route/router');

const routerForAllow = new Router();
const port = process.env.PORT || config.port;
const app = new Koa();

//日志处理
app.use(logger());
//请求体处理
app.use(bodyParser());
//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});

app
    .use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST,OPTIONS');
        ctx.set('Access-Control-Max-Age', 3600 * 24);
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Access-Control-Allow-Headers',
            'Access-Control-Allow-Headers,' +
            'Origin, ' +
            'Accept,' +
            'X-Requested-With,' +
            'Content-Type,' +
            'Access-Control-Request-Method,' +
            'Access-Control-Request-Headers'
        );
        ctx.set('Cache-Control', 'no-cache');
        await next();
    })
    .use(async (ctx, next) => {
        if (urlIsPublic(ctx.request.url, ctx.request.method)) {
            await next();
        } else {
            let userId;
            try {
                userId = ctx.request.header.cookie.split(';').find((item) => item.indexOf('userId') !== -1).split('=')[1]
            } catch (e) {
                userId = 0;
            }
            if (userId) {
                ctx.request.userId = userId;
                await next()
            } else {
                ctx.status = 401;
            }
        }

        //判断是否是开放接口
        function urlIsPublic(url, method) {
            if (method === 'OPTIONS') {
                return true;
            }
            if (method !== 'GET') {
                return (url === '/login' || url === '/register');
            } else {
                return url.indexOf('book') === -1 && url.indexOf('user') === -1;
            }
        };
    });


app
    .use(router.router.routes())//公共路由
    .use(router.registerRouter.routes())//模块级别路由
    .use(routerForAllow.allowedMethods());
app.listen(port, () => console.log('Listening on port ' + port));
