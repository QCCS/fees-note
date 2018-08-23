/**
 * Created by zhouli on 18/8/12
 */
// 定义路由
const Router = require('koa-router');
const router = new Router();
// 费用CURD
const addFee = require('../service/fee/AddFeeService');
const deleteFee = require('../service/fee/DeleteFeeService');
const updateFee = require('../service/fee/UpdateFeeService');
const searchFee = require('../service/fee/SearchFeeService');
const getFeeList = require('../service/fee/GetFeeListService');
const getFeeInfo = require('../service/fee/GetFeeService');

const loginController = require('../controller/loginController');
//把路由直接写控制器里面，实现模块级别路由，不用一个一个配置
const registerRouter = require('../controller/registerController');

router
    .post('/login', loginController)
    // .post('/loginout', loginoutController)
    .post('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(data);
        let time = new Date();
        console.log(time);
        ctx.body = await addFee(data.title, data.des, data.total, time, data.userId);
    })
    .delete('/fee', async (ctx) => {
        let data = ctx.request.body;
        //可以做校验
        let userId = data.userId;
        ctx.body = await deleteFee(data.id);
    })
    .put('/fee', async (ctx) => {
        let data = ctx.request.body;
        ctx.body = await updateFee(data.title, data.des, data.total, data.date_at, ctx.request.userId, data.id);
    })
    .get('/feeList', async (ctx) => {
        ctx.body = await getFeeList();
    })
    .get('/fee', async (ctx) => {
        let data = ctx.request.query;
        console.log(data);
        ctx.body = await searchFee(data.title, data.des);
    })
    .get('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        ctx.body = await getFeeInfo(ctx.params.id);
    });

module.exports = {
    router: router,//统一管理的路由
    registerRouter: registerRouter//注册的路由
};
