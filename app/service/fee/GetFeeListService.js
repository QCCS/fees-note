/**
 * Created by zhouli on 18/8/23
 */
const getFeeListDao = require('../../dao/fee').getFeeListDao;

async function getFeeListService() {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await getFeeListDao();
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

module.exports = getFeeListService;