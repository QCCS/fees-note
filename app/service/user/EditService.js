const editDao = require('../../dao/user').editDao;

async function EditService(phone, password) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await editDao(phone, password);
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