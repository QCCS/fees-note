const insertFeeDao = require('../../dao/fee').insertFeeDao;

async function addFeeService(title, des, total, date_at, u_id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await insertFeeDao(title, des, total, date_at, u_id);
        res = {
            status: 1,
            message: 'SUCCESS',
            data: {
                id: data.id
            }
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

module.exports = addFeeService;