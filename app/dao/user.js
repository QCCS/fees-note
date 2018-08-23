/**
 * Created by zhouli on 18/8/23
 */
/*
* 用户
* 电话
* 密码
* */
const query = require('../utils/query');

const sql = {
    login: `
    SELECT password, id
    FROM user
    WHERE phone=?
  `,
    register: `
    INSERT INTO user(id,name,password,phone)
      VALUES(?, ?, ?, ?)
  `,
    edit: `
    UPDATE user SET password=?,phone=?
    WHERE id=?
  `
};

async function loginDao(phone, password) {
    return await query(sql.login, [phone, password])
}

async function registerDao(id, name, password, phone) {
    return await query(sql.register, [id, name, password, phone])
}

async function editDao(newPassword, phone, userId) {
    return await query(sql.edit, [newPassword, phone, userId])
}

//注册
exports.regiterDao = registerDao;
//登陆
exports.loginDao = loginDao;
//修改
exports.editDao = editDao;