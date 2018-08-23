/**
 * Created by zhouli on 18/8/23
 */
const searchFeeDao = require('../../dao/fee').seacrchFeeDao;

async function searchFeeService(title, des) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await searchFeeDao(`%${title}%`, `%${des}%`);
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

module.exports = searchFeeService;