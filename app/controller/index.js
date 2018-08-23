/**
 * Created by zhouli on 18/8/23
 */
async function indexController(ctx, next) {
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
}
module.exports = indexController;

