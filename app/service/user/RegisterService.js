/**
 * Created by zhouli on 18/8/23
 */
const registerDao = require('../../dao/user').regiterDao;

async function registerService(id,name, password, phone) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        let data = await registerDao(id,name, password, phone);
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