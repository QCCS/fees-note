const registerDao = require('../../dao/user').regiterDao;

/*
  @code
  1：  注册失败
  2：  添加个人信息失败
 */
async function registerService(name, password, phone) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        let data = await registerDao(name, password, phone);
        res = {
            status: 0,
            message: 'SUCCESS',
            data: {
                id: data.id
            }
        }

    } catch (e) {
        console.error(e);
    }
    return res;
}

module.exports = registerService;