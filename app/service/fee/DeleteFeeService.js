/**
 * Created by zhouli on 18/8/23
 */
const deleteFeeDao = require('../../dao/fee').deleteFeeDao;

async function deleteFeeService(id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await deleteFeeDao(id);
        res = {
            status: 1,
            message: 'SUCCESS'
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

module.exports = deleteFeeService;