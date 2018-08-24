/**
 * Created by zhouli on 18/8/23
 */
const editDao = require('../../dao/user').editDao;

async function EditService(name, password, phone, userId) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await editDao(name, password, phone, userId);
        res = {
            status: 0,
            message: 'SUCCESS'
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

module.exports = EditService;